# CCDFWE – Community and Cultural Development Foundation for Women's Empowerment

Official public website for CCDFWE, built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages via GitHub Actions

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Export

```bash
npm run build
```

Static output is generated in the `out/` directory.

## Project Structure

```
app/               # Next.js App Router pages
  about/           # About Us page
  activities/      # Activities page
  contact/         # Contact page
  donate/          # Donate page
  gallery/         # Gallery page
  join-us/         # Join Us page
  login/           # Login (coming soon)
  members/         # Members area (coming soon)
components/
  layout/          # Header, Footer, MobileNav
  ui/              # Reusable UI components
content/           # All site content as TypeScript files
public/images/     # Static images (replace placeholders with real photos)
.github/workflows/ # GitHub Actions CI/CD
```

## Updating Content

All site content lives in the `content/` directory:

- `content/site.ts` – Site name, contact info, social links
- `content/home.ts` – Home page content
- `content/about.ts` – About page, mission, vision, team members
- `content/activities.ts` – Activities/programs
- `content/gallery.ts` – Gallery images
- `content/join-us.ts` – Join Us page
- `content/donate.ts` – Donation page
- `content/contact.ts` – Contact details and form config

## Adding Real Images

Replace the placeholder `.jpg` files in `public/images/` with real photos. Keep the same filenames.

## Contact Form Setup

The contact form uses a mailto fallback by default. To enable Formspree:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the form ID
3. Set `formspreeId` in `content/contact.ts`

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via GitHub Actions. Ensure GitHub Pages is enabled in your repository settings with the source set to **GitHub Actions**.

## License

© CCDFWE. All rights reserved.
