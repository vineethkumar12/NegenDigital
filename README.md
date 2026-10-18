# Negen Digital website

React 18 + Vite + Tailwind CSS 3 + AOS (scroll animations) + React Router + Lucide icons.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

## Structure

```
src/
  assets/        images + index.js (single place to swap images)
  components/    Navbar, Footer, Logo, CtaBand, ContactForm, ScrollManager
  data/content.js  all page copy (capabilities, services, roles, email)
  pages/         Home (/), Services (/services), About (/about)
tailwind.config.js  brand colour tokens (navy, electric, brand, teal, mint ...)
vercel.json         SPA rewrite so deep links work on Vercel
```

## Common edits

- **Real photos**: put files in `src/assets/` and change the imports in `src/assets/index.js`
  (e.g. `import heroImg from './hero.jpg'`). All pages update automatically.
- **Logo**: replace the placeholder in `src/components/Logo.jsx` with `<img src="/logo.svg" alt="Negen Digital" />`
  (file in `public/`). Then refine the colour tokens in `tailwind.config.js` against the real logo.
- **Copy / email / roles**: edit `src/data/content.js`.
- **Contact form**: currently opens the visitor's email client (`mailto:`). To send directly, replace the
  submit handler in `src/components/ContactForm.jsx` with a call to a form service or serverless endpoint.
- **LinkedIn / Privacy / Terms links**: placeholders in `src/components/Footer.jsx`.

## Deploy (Vercel)

Import the repo in Vercel (framework preset: Vite). Build command `npm run build`, output `dist`.
`vercel.json` already rewrites all routes to `index.html`. Add the custom domain in Project Settings → Domains.

## Animations

AOS is initialised in `src/main.jsx` and is disabled automatically for users who prefer reduced motion.
Add `data-aos="fade-up"` (optionally `data-aos-delay="100"`) to any element. Put it on a wrapper, not on
elements that already have Tailwind `transition` hover classes.
