# Modern Product Dashboard

A responsive, modern product dashboard built with Next.js, TypeScript, Tailwind CSS, and React Query.

## Features

- 🎨 Modern and responsive UI with Tailwind CSS
- 🔍 Product search and category filtering
- 📱 Mobile-friendly design
- ⚡ Fast data fetching with React Query
- 🎯 TypeScript for type safety
- 🌙 Dark mode support

## Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- React Query (TanStack Query)
- DummyJSON API

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd product-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  ├── app/                    # Next.js app directory
  │   ├── products/          # Product pages
  │   │   ├── [id]/         # Product details page
  │   │   └── page.tsx      # Product listing page
  │   └── layout.tsx        # Root layout
  ├── components/            # React components
  │   ├── ui/               # UI components
  │   │   ├── ProductCard.tsx
  │   │   ├── ProductGrid.tsx
  │   │   ├── SearchBar.tsx
  │   │   └── CategoryFilter.tsx
  │   └── layout/           # Layout components
  ├── lib/                  # Utility functions
  │   ├── api.ts           # API functions
  │   └── types.ts         # TypeScript types
  └── hooks/               # Custom React hooks
      └── useProducts.ts   # Product data hooks
```

## Architecture Decisions

1. **Component Structure**
   - Reusable UI components in `components/ui`
   - Layout components in `components/layout`
   - Clear separation of concerns

2. **Data Fetching**
   - React Query for efficient data fetching and caching
   - Custom hooks for data management
   - Error handling and loading states

3. **Styling**
   - Tailwind CSS for utility-first styling
   - Responsive design with mobile-first approach
   - Dark mode support

4. **Type Safety**
   - TypeScript interfaces for API responses
   - Type-safe components and functions
   - Better developer experience and code quality

## API Integration

The project uses the DummyJSON API:
- Base URL: https://dummyjson.com/products
- Endpoints:
  - GET /products - List all products
  - GET /products/:id - Get product details

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
