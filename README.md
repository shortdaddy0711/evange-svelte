# Evange

A slide presentation web app built with SvelteKit, presenting "God's Wonderful Plan" as an interactive, multi-language slideshow.

## Features

- 16-slide presentation with smooth carousel navigation
- Internationalization (i18n) support — English 🇺🇸 and Korean 🇰🇷
- Dynamic routing per slide (`/slide/[id]`)
- Deployed on Vercel with analytics

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [SvelteKit](https://kit.svelte.dev/) 2.x |
| UI | [Svelte](https://svelte.dev/) 5.x |
| Build Tool | [Vite](https://vitejs.dev/) 6.x |
| Language | TypeScript |
| Carousel | [Embla Carousel](https://www.embla-carousel.com/) |
| Hosting | [Vercel](https://vercel.com/) |
| Analytics | Vercel Analytics |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens a local dev server at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
evange-svelte/
├── src/
│   ├── lib/
│   │   ├── slides.ts             # Slide definitions and data
│   │   ├── i18n.ts               # Internationalization setup
│   │   └── components/
│   │       ├── SlideContent.svelte
│   │       └── SlideViewer.svelte
│   ├── messages/
│   │   ├── en.json               # English translations
│   │   └── ko.json               # Korean translations
│   └── routes/
│       ├── +layout.svelte        # Root layout
│       ├── +page.ts              # Home page loader
│       └── slide/[id]/           # Dynamic slide routes
│           ├── +page.svelte
│           └── +page.ts
├── static/
│   └── images/                   # Slide images (page1.png – page15.png)
├── svelte.config.js
├── vite.config.js
└── tsconfig.json
```

## Deployment

This project is configured for deployment on **Vercel** via `@sveltejs/adapter-vercel`. Pushing to the main branch will trigger an automatic deployment.
