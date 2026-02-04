const fs = require('fs');
const path = require('path');

// Read the job portals data
let data = fs.readFileSync('./data/jobPortals.ts', 'utf8');

// Parse the jobPortals array (simple replacement)
let jobPortalsStart = data.indexOf('export const jobPortals: JobPortal[] = [');
let jobPortalsEnd = data.indexOf('];', jobPortalsStart) + 2;
let jobPortalsContent = data.substring(jobPortalsStart, jobPortalsEnd);

// Get list of downloaded logos
const logosDir = path.join(__dirname, 'public', 'logos');
let downloadedLogos = [];
if (fs.existsSync(logosDir)) {
    downloadedLogos = fs.readdirSync(logosDir);
}

// Function to get logo path for a URL
function getLogoPath(url) {
    try {
        const domain = new URL(url).hostname.replace('www.', '');
        const pngPath = `${domain}.png`;
        const icoPath = `${domain}-favicon.ico`;
        if (downloadedLogos.includes(pngPath)) {
            return `/logos/${pngPath}`;
        } else if (downloadedLogos.includes(icoPath)) {
            return `/logos/${icoPath}`;
        }
    } catch (e) {
        // Invalid URL
    }
    return null;
}

// Update the interface to include logo
data = data.replace(
    'export interface JobPortal {',
    'export interface JobPortal {\n  logo?: string; // Logo image path'
);

// Update each portal object to include logo
const portalRegex = /{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*url:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*icon:\s*"([^"]+)",\s*rating:\s*([\d.]+),\s*specialization:\s*([^,]*),\s*builtFor:\s*"([^"]+)"\s*}/g;

data = data.replace(portalRegex, (match, id, name, description, url, category, icon, rating, specialization, builtFor) => {
            const logo = getLogoPath(url);
            const logoField = logo ? `,\n    logo: "${logo}"` : '';
            return `  {
    id: ${id},
    name: "${name}",
    description: "${description}",
    url: "${url}",
    category: "${category}",
    icon: "${icon}",
    rating: ${rating}${specialization ? `,\n    specialization: ${specialization}` : ''},
    builtFor: "${builtFor}"${logoField}
  }`;
});

// Write back the updated data
fs.writeFileSync('./data/jobPortals.ts', data);
console.log('Updated jobPortals.ts with logo fields');