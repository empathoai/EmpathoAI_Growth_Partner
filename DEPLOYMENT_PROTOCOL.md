
# EMPATHOAI // NEXT.JS DEPLOYMENT PROTOCOL

Este documento detalla el despliegue de la infraestructura de Next.js 15 utilizando el modo `standalone` para máxima compatibilidad con el Selector de Node.js de Hostinger.

## 1. CONFIGURACIÓN EN HOSTINGER

1. **Selector de Node.js:** 
   - Vaya a su hPanel -> **Sitio Web -> Configuración de Node.js**.
   - Versión de Node.js: **20.x** (mínimo recomendado para Next.js 15).
   - Aplicación Root: `/` o la carpeta donde subas los archivos.
   - URL de la aplicación: Tu dominio principal.
   - Archivo de inicio: `server.js`.

2. **FTP:** 
   - Asegúrate de que los Secretos de GitHub estén configurados (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`).

## 2. ESTRUCTURA DE ARCHIVOS EN PRODUCCIÓN

El workflow de GitHub se encarga de organizar la carpeta `public_html` así:
- `server.js` (El cargador que creamos)
- `.next/standalone/...` (El núcleo de la app)
- `.next/static/...` (CSS y JS del lado del cliente)
- `public/...` (Imágenes y assets)

## 3. SCRIPTS EN PACKAGE.JSON

Asegúrese de que su `package.json` local tenga:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "NODE_ENV=production node server.js"
}
```

## 4. RESOLUCIÓN DE PROBLEMAS

- **Error 500:** Revise el archivo `error_log`. Generalmente es una versión de Node.js incompatible o falta el archivo `.next/standalone`.
- **Estilos faltantes:** Verifique que la carpeta `.next/static` se haya subido correctamente a la ruta raíz del servidor.

---
*EmpathoAI Institutional Deployment System // Next.js v15*
