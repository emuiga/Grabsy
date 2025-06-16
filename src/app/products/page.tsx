import { Suspense } from 'react';
import { ProductsList } from '@/features/products/components/ProductsList';
import { ErrorState } from '@/components/shared/ErrorState';
import { getProducts } from '@/features/products/api/products';
import { Spinner } from '@/components/shared/Spinner';

export default async function ProductsPage() {
  try {
    const products = await getProducts();

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Product Catalog</h1>
        </div>
        
        <Suspense fallback={<Spinner />}>
          <ProductsList initialProducts={products.products} />
        </Suspense>
      </div>
    );
  } catch (error) {
    return (
      <ErrorState
        title="Error Loading Products"
        message="There was a problem loading the products. Please try again later."
      />
    );
  }
} 