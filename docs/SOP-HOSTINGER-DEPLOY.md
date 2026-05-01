# SOP: Deploying EmpathoAI (Vite/React) on Hostinger Node.js Apps

This guide outlines the standard procedure for deploying and maintaining the EmpathoAI Growth Partner website on Hostinger via GitHub Import.

## 1. Repository Requirements
- **Root Files**: `package.json`, `server.js`, and `.npmrc` must remain in the root directory.
- **Node Version**: The project requires **Node.js >= 20.0.0** (specified in `package.json` engines).
- **Dependencies**: Conflicts between React 19 and legacy packages are handled automatically by the `.npmrc` file (`legacy-peer-deps=true`).

## 2. Configuration & Scripts
The following scripts in `package.json` are optimized for the Hostinger build-and-run lifecycle:

- **Build Command**: `npm run build`
  - *Action*: Runs `vite build` followed by `node scripts/generate-seo.js` to ensure fresh sitemaps and robots.txt.
- **Start Command**: `npm run start`
  - *Action*: Runs `node server.js` to serve the static bundle with SPA routing support.
- **Lint Command**: `npm run lint` (`tsc --noEmit`)
  - *Action*: Type-checking without redundant builds.

## 3. Server Architecture (`server.js`)
To prevent **404 errors on browser refresh**, the production environment uses an Express-based fallback:
- **Static Assets**: Served from the `dist/` directory.
- **Fallback**: All non-file requests (`*`) are routed to `dist/index.html`.
- **Network**: Listens on `0.0.0.0` using the environment-provided `process.env.PORT`.

## 4. Hostinger Implementation Steps
1. **Import**: Use the "Import Git Repository" method in the Hostinger Node.js App panel.
2. **Branch**: Select `main`.
3. **Configuration**:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run start`
4. **Environment Variables**: Use the Hostinger panel to set any `VITE_` or private keys.

## 5. Post-Deployment Checklist
- [ ] **Home Page**: Verify the main lander loads at `https://empathoai.com`.
- [ ] **SPA Routes**: Navigate to `/privacy-policy` and refresh the browser. It should load correctly (No 404).
- [ ] **SEO Content**: Verify `https://empathoai.com/sitemap.xml` is accessible.
- [ ] **Canonical Tags**: Check page source to ensure `<link rel="canonical" href="https://empathoai.com/...">` exists.

## 6. Troubleshooting
- **404 on Refresh**: Ensure `server.js` is set as the entry point and the start command is `npm run start`.
- **Build Failure**: Verify the Node.js version in Hostinger is set to 20 or higher.
- **Peer Dependency Errors**: Ensure `.npmrc` is present in the repository.
