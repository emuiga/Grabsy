'use client';

import { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';
import { useRouter, useSearchParams } from 'next/navigation';

interface ProductsListProps {
  initialProducts: Product[];
}


export function ProductsList({ initialProducts }: ProductsListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);



  // Handle page change
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <ProductFilters products={initialProducts} onFilter={setFilteredProducts} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No products found matching your criteria.
          </p>
        </div>
      )}
      
      
          
          

                
                
      
    </>
  );
}
