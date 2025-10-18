# Sanshina — Full Dasenic clone (Nuxt 3.13.0) — Ready for GitHub Pages

This project reproduces the Dasenic homepage content and layout (rebranded to Sanshina).
It is configured to use Nuxt 3.13.0 and Node 18 for stable GitHub Actions builds.

How to use:
1. Unzip and open the project folder.
2. (Optional) Test locally with Node 18 installed:
   npm install
   npx nuxt generate
3. Push to GitHub main branch. The GitHub Action will build and deploy to gh-pages.
4. Site will be available at: https://<your-username>.github.io/sanshina-website/

Notes:
- Replace files in public/ with real images if desired (hero.jpg, logos/*.svg).
- Edit public/products.json to add your full product catalog.
