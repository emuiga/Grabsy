import { getProducts } from '../api/products';
import { ProductsList } from '../components/ProductsList';
import { ErrorState } from '@/components/shared/ErrorState';

// Server Component - No 'use client' needed since we're doing server-side data fetching
// Purpose of this is to improve performance and SEO by rendering content on the server
export default async function ProductsPage() {
  try {
    // Fetch products directly on the server
    // This is more efficient than client-side fetching as it:
    // 1. Reduces client-side JavaScript
    // 2. Improves initial page load
    // 3. Better for SEO as content is available in initial HTML
    const products = await getProducts();

    return (
      // Container with responsive padding and max-width
      <div className="container mx-auto px-4 py-8">
        {/* Simple header section with consistent spacing and centered alignment */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Product Catalog</h1>
        </div>
        
        {/* ProductsList is a client component that handles:
            - Client-side filtering
            - Pagination
            - Search functionality
            - Interactive features
            This separation allows us to keep the page server-rendered while
            maintaining interactive features */}
        <ProductsList initialProducts={products.products} />
      </div>
    );
  } catch (error) {
    // Error boundary - Shows user-friendly error message if data fetching fails
    // This provides a better user experience than showing a blank page or error stack
    return (
      <ErrorState
        title="Error Loading Products"
        message="There was a problem loading the products. Please try again later."
      />
    );
  }
} 