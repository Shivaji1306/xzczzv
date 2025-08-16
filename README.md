# LushLeaf — Artisanal Tea Website

A modern, responsive, and interactive demo website for LushLeaf — an artisanal tea brand focused on rituals, sustainable sourcing, and small-batch teas.

Project structure

my-project/
├── public/
│   ├── index.html          # Main landing page with hero, products, quiz, testimonials, FAQ
│   ├── about.html          # About page (team, sourcing, story)
│   └── contact.html        # Contact form and contact details
├── server/
│   └── index.js            # Minimal Express server to serve the public folder
├── package.json            # Node scripts and dependencies
├── render.yaml             # Render deployment config
└── README.md               # This file

Key features

- Built with Tailwind CSS classes used directly in HTML (Tailwind Play CDN included).
- Modern visual design: glassmorphism, gradient backgrounds, shadow depth, and responsive layout.
- Dark / Light mode toggle with localStorage persistence.
- Full-width, fluid layout (w-full / max-w-none used for main wrappers) so content fills viewport width.
- Interactive components:
  - Product slider with next/prev controls
  - Quick-view modal for products
  - Scroll reveal animations (IntersectionObserver)
  - Parallax hero image
  - FAQ accordion
  - Newsletter subscribe form with validation and micro-interaction
  - Contact form with validation
  - Mini quiz (gamified) with progress bar that recommends a ritual bundle
- Accessibility touches: aria attributes, keyboard close for modal, focus styles for inputs where applicable.
- SEO meta tags and OG tags included in the landing page.
- Lazy loading for product images and skeleton-like behavior for subscribe/contact flows.

Fonts

The HTML files reference Google Fonts. At the top of each HTML file you'll find comments indicating the fonts in the format required by the project generator (e.g., {{font: Poppins}} ).

Images

- Any image placeholders use the special placeholder format: https://pixabay.com/get/gcbb8ae7569ac92fe3e49e66fa53fb69b0d0b3ffb9c5a71e49038635eddadb30b4ad1f2630269f3004e533d4399dbd0eda727e5521c1098ba9549786735c00c3e_640.jpg. The Render system or tooling should resolve these to high-quality images (Unsplash / Pexels / Pixabay) based on the description.
- If you have your own images, replace the placeholder string in the <img> src attributes with a data URI or a path to your assets.

Local development

1. Requirements
   - Node.js >= 14

2. Install dependencies

   npm install

3. Start the server

   npm start

4. Open http://localhost:3000 in your browser

Deployment

This project includes a simple render.yaml for deployment to Render. It serves static files from the public/ folder using Express.

- Render settings:
  - Service type: web
  - Environment: Node
  - Start command: npm start

Customization notes

- Tailwind configuration is loaded via CDN for simplicity. For production or heavier customization, integrate Tailwind via a build step.
- Replace https://images.unsplash.com/photo-1745215745078-6ef0e0102d65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHwxMHx8Li4ufGVufDB8MHx8fDE3NTUzNDIxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080 placeholders with real images or base64 data URIs if you have specific photography.
- Extend the Express server (server/index.js) to add real form handling or an API endpoint for orders.

Accessibility & Performance

- Uses semantic HTML where possible and ARIA attributes for interactive elements.
- Uses IntersectionObserver for reveal animations to avoid unnecessary repaints.
- Images are lazy loaded; consider further optimizations (responsive srcset) for production.

Support

If you need help customizing the site, adding e-commerce, or connecting a CMS, open an issue or reach out to the maintainer.

License

MIT
