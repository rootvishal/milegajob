const fs = require('fs');
const https = require('https');
const path = require('path');

// Read the job portals data
const jobPortalsData = fs.readFileSync('./data/jobPortals.ts', 'utf8');

// Extract URLs from the data (simple regex to find url: "https://...")
const urlRegex = /url:\s*"([^"]+)"/g;
let match;
const urls = [];
while ((match = urlRegex.exec(jobPortalsData)) !== null) {
    urls.push(match[1]);
}

console.log(`Found ${urls.length} URLs`);

// Function to download a file
function downloadFile(url, filepath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        const request = https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${filepath}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {}); // Delete the file on error
            reject(err);
        });
    });
}

// Create logos directory if it doesn't exist
const logosDir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(logosDir)) {
    fs.mkdirSync(logosDir, { recursive: true });
}

// Download logos for each URL
async function downloadLogos() {
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const domain = new URL(url).hostname.replace('www.', '');
        const logoUrl = `https://logo.clearbit.com/${domain}`;
        const filepath = path.join(logosDir, `${domain}.png`);

        console.log(`Processing ${i + 1}/${urls.length}: ${domain}`);

        try {
            await downloadFile(logoUrl, filepath);
        } catch (error) {
            console.error(`Error downloading logo for ${domain}: ${error.message}`);
            // Try favicon as fallback
            const faviconUrl = `https://${domain}/favicon.ico`;
            const faviconPath = path.join(logosDir, `${domain}-favicon.ico`);
            try {
                await downloadFile(faviconUrl, faviconPath);
                console.log(`Downloaded favicon for ${domain}`);
            } catch (faviconError) {
                console.error(`Error downloading favicon for ${domain}: ${faviconError.message}`);
                // Try alternative favicon locations
                const altFaviconUrls = [
                    `https://${domain}/favicon.png`,
                    `https://${domain}/apple-touch-icon.png`,
                    `https://${domain}/apple-touch-icon-precomposed.png`
                ];

                for (const altUrl of altFaviconUrls) {
                    try {
                        const altPath = path.join(logosDir, `${domain}-alt-${path.basename(altUrl)}`);
                        await downloadFile(altUrl, altPath);
                        console.log(`Downloaded alternative icon for ${domain}`);
                        break;
                    } catch (altError) {
                        // Continue to next alternative
                    }
                }
            }
        }

        // Add delay to avoid rate limiting
        if (i < urls.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
        }
    }
}

downloadLogos().then(() => {
    console.log('Logo download process completed');
}).catch((error) => {
    console.error('Error in download process:', error);
});