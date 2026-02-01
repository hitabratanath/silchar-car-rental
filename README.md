# Silchar Car Rental Website

A fast, SEO-friendly static website built with Next.js 15 for a car rental service in Silchar, Assam.

## Features

- **Static Export**: Fully static website for maximum performance
- **SEO Optimized**: Comprehensive metadata, sitemap, and robots.txt
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Fast Loading**: Optimized for Core Web Vitals
- **Booking Form**: Interactive form for customers to request rides
- **Service Features**: Showcase of 8 key service features
- **TypeScript**: Full type safety throughout the codebase

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.17 or higher
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`
- **npm**: Comes with Node.js
  - Verify installation: `npm --version`

## Installation

1. Navigate to the project directory:
   ```bash
   cd silchar-car-rental
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Building for Production

Create an optimized production build:

```bash
npm run build
```

This will generate a static export in the `out` directory.

## Preview Production Build

After building, you can preview the production build locally:

```bash
npm run start
```

Or use any static file server to serve the `out` directory:

```bash
npx serve out
```

## Project Structure

```
silchar-car-rental/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Sitemap for SEO
│   └── robots.ts            # Robots.txt for SEO
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features grid
│   ├── BookingForm.tsx      # Booking form (client component)
│   └── Footer.tsx           # Footer section
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## Customization

### Update SEO Information

Edit `app/layout.tsx` to update:
- Website title and description
- Keywords
- Google verification code (add your actual code)

Edit `app/sitemap.ts` and `app/robots.ts` to update:
- Your actual website URL

### Update Contact Information

Edit `components/Footer.tsx` to update:
- Phone number
- Email address
- Physical address

### Modify Features

Edit `components/Features.tsx` to customize the service features.

### Customize Colors

Edit `tailwind.config.ts` and component files to change the color scheme.

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy
   ```

### Deploy to any static hosting

Since this is a static export, you can deploy the `out` directory to any static hosting service:
- GitHub Pages
- AWS S3
- Cloudflare Pages
- Firebase Hosting
- Any web server

## Form Handling

The booking form currently displays a success message on submission. To integrate with a backend:

1. **Option 1: Email Service** (e.g., EmailJS, SendGrid)
   - Add the service SDK to `package.json`
   - Update `components/BookingForm.tsx` to send emails

2. **Option 2: API Endpoint**
   - Create an API route or use an external service
   - Update the `handleSubmit` function in `components/BookingForm.tsx`

3. **Option 3: Form Services** (e.g., Formspree, Google Forms)
   - Update the form action to point to the service

## Performance

This website is optimized for performance:
- Static generation for instant page loads
- Minimal JavaScript bundle
- Tailwind CSS purging for small CSS files
- No external dependencies for styling

## SEO Features

- Server-side metadata generation
- Semantic HTML structure
- Open Graph tags for social sharing
- Twitter Card support
- Sitemap generation
- Robots.txt configuration
- Keyword optimization for local search

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Silchar Car Rental service.

## Support

For any issues or questions, please contact the development team.
