# Changelog: EmpathoAI Infrastructure & SEO Migration

This document serves as a persistent record of the structural, architectural, and SEO changes implemented to meet Meta App publication requirements and resolve Google Search Console (GSC) indexing issues.

## [2026-02-20] - SEO & Legal URL Alignment

### Added
- **`src/components/SEO.tsx`**: New component for dynamic injection of `<link rel="canonical">` and document titles based on current routes.
- **`server.js`**: Production Express server to handle SPA fallback routing (`*` to `index.html`) and static file serving from `dist/`.
- **`.npmrc`**: Configured `legacy-peer-deps=true` to automatically resolve dependency conflicts between React 19 and Framer Motion during deployment.

### Changed
- **Legal Routes**: Transitioned from state-based overlays to direct URLs:
    - `/privacy-policy` (Renamed from `-protocol`)
    - `/terms-of-service`
    - `/cookie-policy`
- **`src/App.tsx`**:
    - Replaced visibility states (`isPolicyOpen`, etc.) with `react-router-dom` location checks.
    - Implemented a **Redirection Layer** to route legacy GSC URLs (`/contact`, `/services`, etc.) to the landing page root.
    - Integrated `<SEO />` component.
- **`package.json`**:
    - Added `engines` field (`node >= 20.0.0`).
    - Optimized `lint` script to `tsc --noEmit`.
    - Set `start` to `node server.js` for production serving.
    - Updated `build` to generate static SEO assets (`sitemap.xml`, `robots.txt`) post-Vite build.
- **`scripts/generate-seo.js`**: Updated `baseUrl` to `https://empathoai.com` and included the new legal slugs in the sitemap.

### Fixed
- **Meta Validation**: Legal pages are now directly crawlable by Meta's validation bots at direct URLs.
- **GSC Indexing**:
    - Resolved "Duplicate without user-selected canonical" by forcing non-WWW and setting canonical tags.
    - Fixed "Page with redirect" and "Alternate page with proper canonical tag" via the `App.tsx` redirection layer.
- **SPA 404s**: Corrected the issue where sub-routes (like policies) returned a 404 upon browser refresh on Hostinger.

### Removed
- **`.github/workflows/deploy.yml`**: Deleted the redundant GitHub Action to rely solely on Hostinger's native Git synchronization, avoiding FTP failures.

---
*Reference for future AI agents or developers: All routing is handled client-side via `react-router-dom` but supported server-side via `server.js` fallback.*
