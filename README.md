# Vamshi Farms - E-Commerce Web Demo

A modern, app-like e-commerce web demo for Vamshi Farms, an Indian organic-food brand focusing on premium natural products (honey, ghee, and other organic farm-produced food items). Built with Next.js 14 and Tailwind CSS.

## Features

- 🏠 **Homepage** with hero banner, Featured Products section, and Why Vamshi Farms section
- 🛍️ **Product Listing Page** with search and category filters
- 📦 **Product Detail Page** with benefits, nutrition info, and usage suggestions
- 🛒 **Shopping Cart** with quantity selectors and checkout
- 🎨 **Clean, Natural Design** with earth-tone aesthetic

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Local Storage** - Client-side cart persistence

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
vamshi-farms/
├── app/
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx      # Product detail page
│   ├── products/
│   │   └── page.tsx           # Product listing page
│   ├── cart/
│   │   └── page.tsx           # Shopping cart page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Homepage
│   └── globals.css            # Global styles
├── components/
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── NavBar.tsx
│   └── ProductCard.tsx
├── data/
│   ├── cart.ts                # Cart state management
│   └── products.ts            # Product dummy data
└── package.json
```

## Brand Colors

- **Primary Green**: #2E7D32
- **Dark Grey**: #424242
- **Light Beige**: #FAF8F3
- **White**: #FFFFFF

## Products

The demo includes 6 dummy products:
- Raw Forest Honey 500 g
- Desi Cow Ghee 1 kg
- Organic Honey 1 kg
- Herbal Honey 500 g
- Natural Jaggery 1 kg
- Spice Mix – Naturally Roasted

## Development

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

## License

This is a demo project for Vamshi Farms.
