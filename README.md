# Jewel Box Games

A website for Jewel Box Games - bringing Survivor-inspired challenges and murder mystery events to your home.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Setup

### Contact Form
The contact form uses [Formspree](https://formspree.io) to send emails. Update the endpoint in `src/components/ContactForm.tsx`:

```typescript
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
```

## Tech Stack

- Next.js 16
- React
- Tailwind CSS
- Framer Motion

## Deployment

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider (Vercel, Netlify, etc.)
