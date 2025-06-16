import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={300}
            height={300}
            className="object-cover w-full h-48"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {product.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {product.brand}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              ${product.price}
            </p>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                {product.rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 