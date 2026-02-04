import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MilegaJob – India's Best Job Portal Directory | Find Jobs in India",
  description: "Discover and explore India's leading job portals in one place. Find freshers jobs, experienced roles, government jobs, and remote opportunities across India.",
  keywords: "jobs in India, job portals India, freshers jobs, government jobs, remote jobs India, Naukri, LinkedIn India, job search India, career opportunities India",
  authors: [{ name: "MilegaJob Team" }],
  creator: "MilegaJob",
  publisher: "MilegaJob",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://milegajob.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MilegaJob – India's Best Job Portal Directory",
    description: "Find jobs in India across 100+ job portals. Freshers, experienced, government, and remote jobs in one place.",
    url: 'https://milegajob.com',
    siteName: 'MilegaJob',
    images: [
      {
        url: '/logo1.png',
        width: 1200,
        height: 630,
        alt: 'MilegaJob - India Job Portal Directory',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MilegaJob – India's Best Job Portal Directory",
    description: "Find jobs in India across 100+ job portals. Freshers, experienced, government, and remote jobs in one place.",
    images: ['/logo1.png'],
    creator: '@milegajob',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Geo-specific meta tags for India targeting */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="India" />
      <meta name="ICBM" content="20.5937, 78.9629" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />

      {/* Additional SEO meta tags */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DDXSPMDJFS"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DDXSPMDJFS');
        `}
      </Script>

      {/* Structured Data for SEO and GEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MilegaJob",
              "url": "https://milegajob.com",
              "logo": "https://milegajob.com/logo1.png",
              "description": "India's comprehensive job portal directory helping job seekers find opportunities across 100+ platforms",
              "foundingDate": "2024",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://milegajob.com/support"
              },
              "sameAs": [
                "https://twitter.com/milegajob",
                "https://linkedin.com/company/milegajob"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "serviceType": "Job Search Platform"
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://milegajob.com/#organization",
              "name": "MilegaJob",
              "url": "https://milegajob.com",
              "logo": "https://milegajob.com/logo1.png",
              "image": "https://milegajob.com/logo1.png",
              "description": "Find jobs in India across freshers, experienced, government, and remote categories",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "India"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "20.5937",
                "longitude": "78.9629"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "serviceType": [
                "Job Portal Directory",
                "Career Services",
                "Job Search Assistance"
              ],
              "priceRange": "Free"
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MilegaJob",
              "url": "https://milegajob.com",
              "description": "India's leading job portal directory with 100+ platforms",
              "publisher": {
                "@type": "Organization",
                "name": "MilegaJob"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://milegajob.com/explore?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          ])
        }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
