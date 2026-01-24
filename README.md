
# Nexcent Landing Page

A modern, fully responsive landing page built with **Next.js 16** (App Router), **Tailwind CSS**, and **shadcn/ui**. This is a pixel-perfect recreation of the popular Nexcent template, featuring smooth mobile navigation, clean typography, and reusable components.

## Live Demo
https://agency-website-ruby-seven.vercel.app/

## Features
- Fully responsive across mobile, tablet, and desktop
- Mobile sidebar menu using shadcn/ui `Sheet`
- Reusable shadcn/ui components (`Button`, `Card`, `Sheet`, `Input`)
- Lucide icons throughout
- Server components where possible for optimal performance
- Clean, modern design with green accents
- Sections include:
  - Navbar with logo and mobile menu
  - Hero with illustration and CTA
  - Client logos
  - Community management cards
  - Achievements stats
  - Customer testimonial
  - Blog teaser cards
  - Dark footer with newsletter form and social links

## Tech Stack
- **Next.js 16** (App Router)
- **Tailwind CSS**
- **shadcn/ui** (Button, Sheet, Card, Input)
- **lucide-react** (icons)
- **TypeScript** (recommended, but components are written in TSX)

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/shayanbalochofficial/AgencyWebsite
   cd agency-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install lucide-react**
   ```bash
   npm install lucide-react
   ```

4. **Initialize and add shadcn/ui components**
   ```bash
   npx shadcn@latest init
   npx shadcn@latest add button sheet card input
   ```

5. **Add your images**
   - Place `Icon.png` in `public/`
   - Place hero illustration as `hero.svg` in `public/`
   - Place `tesla.svg`, `pixelgrade-illustration.svg`, `footer-design.svg` in `public/`
   - Place client logos as `logo-0.svg` to `logo-6.svg` (or more) in `public/ourclients/`

6. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it.

## Deployment
Easiest way: Deploy on Vercel
```bash
vercel
```

## Customization
- Change green color: Update `bg-green-500` / `hover:bg-green-600` and `text-green-600` classes globally or in `tailwind.config.js`
- Update links in Navbar/Footer
- Replace placeholder images in `public/`
- Add real content to sections

## Credits
- Built with love using shadcn/ui and Next.js

---

Feel free to fork, star ⭐, or contribute!  
Made by Muhammad Shayan
