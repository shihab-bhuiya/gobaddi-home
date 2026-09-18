# Gobaddi Home

Gobaddi Home is a modern marketing and landing page for a smart livestock platform. The website is built with Next.js and focuses on presenting the product, mission, and contact information in a clean, professional, and mobile-friendly design.

This project is not a full backend application yet. It is mainly a frontend landing page that explains what Gobaddi does and helps users learn about the product and get in touch.

---

## Project Purpose

The app introduces a platform for:

- smart livestock management
- AI-powered animal care insights
- farmer support and veterinary communication
- digital agriculture solutions

The landing page is designed to make the brand look strong, trustworthy, and future-focused.

---

## Tech Stack

This project uses:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide Icons
- React Icons
- shadcn-style utility setup

The app is structured as a Next.js App Router project.

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development mode

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

### 3. Build for production

```bash
npm run build
```

### 4. Run production server

```bash
npm run start
```

### 5. Lint the project

```bash
npm run lint
```

---

## Project Structure Overview

Below is the project structure from top to bottom so you can understand how the app is organized.

```text
gobaddi-home/
├── public/                     # Static files, images, SVGs, and branding assets
├── src/                       # Main source code for the app
│   ├── app/                   # App Router pages and global layout
│   │   ├── globals.css        # Global styles and Tailwind theme variables
│   │   ├── layout.tsx         # Root layout and metadata
│   │   └── page.tsx           # Home page entry
│   ├── components/            # Reusable UI sections for the landing page
│   │   ├── Home/              # Page sections for the homepage
│   │   │   ├── Hero.tsx
│   │   │   ├── NavBar.tsx
│   │   │   ├── SmartLivestockHero.tsx
│   │   │   ├── WhoWeAre.tsx
│   │   │   ├── ComingSoon.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── HeroSection/
│   │   └── ui/                # Reusable button and generic UI parts
│   └── lib/                   # Utility functions
├── package.json               # Scripts and project dependencies
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── postcss.config.mjs         # PostCSS configuration for Tailwind
├── eslint.config.mjs          # ESLint configuration
├── components.json            # Shadcn-style component config
├── README.md                  # Project documentation
└── public/                    # Also includes assets used across the homepage
```

---

## Root Files and Their Role

### package.json
This is the main configuration file for the project.

It includes:

- scripts such as `dev`, `build`, `start`, and `lint`
- dependencies used in the app
- framework versions and package metadata

### next.config.ts
This file contains Next.js project settings.

### tsconfig.json
This defines TypeScript rules and project compiler settings.

### eslint.config.mjs
This configures linting rules so the code stays clean and consistent.

### components.json
This is useful if the project is using shadcn-style component patterns and shared UI conventions.

---

## src/app Folder

This is the core of the app structure in Next.js App Router.

### src/app/page.tsx
This is the homepage.

It imports all the major homepage sections and renders them in order:

- Navbar
- Hero section
- Smart livestock section
- Who we are section
- Coming soon section
- Contact section

In simple terms, this file acts like the homepage assembly file.

### src/app/layout.tsx
This is the root layout for the entire app.

It does a few important things:

- loads font styles
- sets global metadata for SEO
- defines the default page title and description
- wraps all pages in the main HTML structure

This is where the project sets the branding and page metadata, such as title, description, Open Graph data, and social sharing content.

### src/app/globals.css
This is the global stylesheet.

It includes:

- Tailwind base setup
- theme variables
- custom colors
- shared border styling
- base application appearance

This is the place where many shared visual settings live.

---

## src/components Folder

This folder contains all reusable sections and UI elements used on the landing page.

### src/components/Home
This folder contains the homepage sections.

#### NavBar.tsx
This is the top navigation bar.

It includes:

- logo area
- desktop menu links
- mobile responsive menu
- contact button

#### Hero.tsx
This section is the big front-facing hero area.

It contains the main visual banner and key marketing message for Gobaddi.

#### SmartLivestockHero.tsx
This section explains the idea of smart livestock technology in a visual and marketing-focused way.

#### WhoWeAre.tsx
This is the About Us section.

It highlights:

- who the company is
- what problem it solves
- the connection between farmers and digital agriculture

#### ComingSoon.tsx
This section is used to promote upcoming releases or future launch details.

#### ContactSection.tsx
This is the contact block.

It includes:

- email
- phone number
- office location
- form fields for user message submission

This section allows visitors to connect with the team.

#### HeroSection/
This folder contains more detailed subcomponents for the hero area, such as visual cards, headings, and promotional artwork. It keeps the hero section modular and easier to manage.

### src/components/ui
This folder holds generic UI building blocks.

For example:

- buttons
- shared design patterns
- reusable visual elements

These are used to keep the project consistent and reduce duplicated styling.

---

## src/lib Folder

The lib folder is used for shared helper code.

### src/lib/utils.ts
This file currently exports a utility function named `cn`, which is often used to combine Tailwind classes in a clean way.

This is a common pattern in modern React and Next.js apps for managing class names more easily.

---

## public Folder

The public folder holds static assets used throughout the application.

This includes:

- brand images
- hero visuals
- logos
- SVG backgrounds
- cards and illustrations
- product images

Because these files are placed in public, they can be accessed directly by the app without needing any special import setup.

Examples from the project include assets like:

- hero images
- card illustrations
- brand graphics
- background SVGs
- logo images

---

## How the Homepage Is Built

The homepage is assembled in this order:

1. NavBar
2. Hero section
3. Smart livestock section
4. About section
5. Coming soon section
6. Contact section

This means the Home page is effectively a landing page made of multiple building blocks. Each section is independent, which makes it easier to update or redesign a single part without affecting the whole page.

---

## Design Notes

The project uses a warm, modern visual style with:

- soft beige and cream backgrounds
- orange accent colors for highlights and buttons
- strong typography for product storytelling
- responsive layout for mobile and desktop

This gives the site a premium agriculture-tech brand feel.

---

## Typical Workflow

When working on this project, the usual flow is:

1. Update a section inside `src/components/Home`
2. Adjust styles in `src/app/globals.css` if needed
3. Add new assets to `public/` if a design uses images or SVGs
4. Rebuild or run the app locally to preview changes

---

## Summary

This project is a Next.js landing page for Gobaddi, a smart livestock platform. The structure is simple and clean:

- `src/app` controls the app pages and metadata
- `src/components/Home` contains the homepage sections
- `public` stores visual assets
- `globals.css` handles the global design system

If you understand this structure, you can easily navigate the project and add or edit sections without confusion.

---

## Quick Start Command

```bash
npm install
npm run dev
```

Then visit:

```bash
http://localhost:3000
```

---

## Final Note

This app is a frontend-focused brand website for an agriculture technology idea. It is designed to communicate the product clearly and attractively, while staying easy to extend as the product grows.
