import fs from 'fs';
import path from 'path';

const baseUrl = 'https://www.empathoai.com';
const distDir = path.resolve(process.cwd(), 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// 1. Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/#audit</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('✅ sitemap.xml generated in dist/');

// 2. Generate robots.txt
const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# Sitemap Anchor
Sitemap: ${baseUrl}/sitemap.xml`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
console.log('✅ robots.txt generated in dist/');
