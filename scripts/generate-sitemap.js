import fs from 'fs';
import path from 'path';

const domain = 'https://transylvaniatourguide.com';
const routes = [
    '/',
    '/about',
    '/tour/transylvania',
    '/tour/bucovina',
    '/tour/maramures',
    '/tour/maramures-bucovina',
    '/tour/cycling-maramures',
    '/tour/bespoke',
    '/privacy-policy',
    '/terms-and-conditions',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
        .map((route) => {
            return `
  <url>
    <loc>${domain}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
        })
        .join('')}
</urlset>`;

const publicDir = path.resolve('public'); // Or 'dist' if running after build, but public is better for static serving dev
// Actually, for Vite, putting it in public means it gets copied to dist.
// But if we want it to be generated at build time, we should run this script as part of build.
// For now, let's write to public/sitemap.xml so it's there.

const sitemapPath = path.join(publicDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log(`Sitemap generated at ${sitemapPath}`);
