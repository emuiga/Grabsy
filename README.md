# E-Commerce Product Catalog

A modern e-commerce product catalog built with Next.js 14, featuring server-side rendering, responsive design, and a clean user interface.

## Features

- 🚀 Next.js 14 with App Router
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 🔍 Server-side rendering for better SEO
- 📱 Fully responsive design
- 🔄 Real-time product filtering and search
- ⭐ Product reviews and ratings
- 🛒 Shopping cart functionality
- 🔐 Authentication system
- 📦 Product details with image gallery
- 🎯 TypeScript for type safety

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **State Management:** React Context
- **API Integration:** DummyJSON API
- **Type Safety:** TypeScript
- **Authentication:** NextAuth.js
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-catalog.git
   cd ecommerce-catalog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_API_URL=https://dummyjson.com/products
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # App router pages
│   ├── (auth)/         # Authentication routes
│   ├── products/       # Product pages
│   └── api/            # API routes
├── components/         # Shared components
│   ├── ui/            # UI components
│   └── shared/        # Common components
├── features/          # Feature-based modules
│   ├── auth/         # Authentication
│   └── products/     # Products
├── lib/              # Utility functions
└── contexts/         # React contexts
```

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy!

## Environment Variables

Required environment variables:
- `NEXT_PUBLIC_API_URL`: Base URL for the product API

## API Integration

The project uses the DummyJSON API for product data:
- Base URL: https://dummyjson.com/products
- Endpoints:
  - `/products`: Get all products
  - `/products/:id`: Get product details
  - `/products/categories`: Get product categories

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
