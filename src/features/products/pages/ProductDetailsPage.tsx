import { getProduct } from '../api/products';
import { ProductDetailsClient } from '../components/ProductDetailsClient';
import { ErrorState } from '@/components/shared/ErrorState';

interface ProductDetailsPageProps {
  params: {
    id: string;
  };
}

// Server Component - Handles initial product data fetching on the server
// This ensures the product details are available in the initial HTML for SEO
// and provides a better user experience with immediate content display
export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  try {
    // Fetch product data on the server
    // This is more efficient than client-side fetching because:
    // 1. Data is available immediately on page load
    // 2. Reduces client-side JavaScript
    // 3. Better for SEO as content is in initial HTML
    const product = await getProduct(parseInt(params.id));

    return (
      // Container with responsive padding and max-width
      <div className="container mx-auto px-4 py-8">
        {/* ProductDetailsClient is a client component that handles:
            - Add to cart functionality
            - Image gallery interactions
            - Quantity selection
            - Interactive features
            This separation allows us to keep the page server-rendered while
            maintaining interactive features */}
        <ProductDetailsClient product={product} />
      </div>
    );
  } catch (error) {
    // Error boundary - Shows user-friendly error message if data fetching fails
    // This provides a better user experience than showing a blank page or error stack
    return (
      <ErrorState
        title="Error Loading Product"
        message="There was a problem loading the product details. Please try again later."
      />
    );
  }
} 