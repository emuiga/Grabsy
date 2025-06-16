'use client';

import Link from 'next/link';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const colorSwatches = ['#e5e7eb', '#d1d5db', '#a3a3a3', '#6b7280'];

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col">
      <div className="relative mx-4 -mt-4 mb-0 rounded-xl border border-gray-200 shadow-md bg-white overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gray-100 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200">
            {product.availabilityStatus}
          </span>
        </div>
        <button className="absolute top-4 right-4 z-10 p-1 rounded-full bg-white/90 hover:bg-gray-100 border border-gray-200">
          <img src="/wishlist.png" alt="Wishlist" className="w-5 h-5" />
        </button>
        <Link href={`/products/${product.id}`} className="block">
          <div className="relative aspect-square overflow-hidden flex items-center justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-contain w-full h-full p-4"
            />
          </div>
        </Link>
      </div>
      <div className="px-4 pt-3 pb-4 flex-1 flex flex-col gap-2">
        <div className="flex flex-wrap gap-2 mb-1">
          <span className="bg-gray-100 text-xs text-gray-500 px-2 py-1 rounded-full border border-gray-200">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
          {product.discountPercentage > 0 && (
            <span className="bg-green-100 text-xs text-green-600 px-2 py-1 rounded-full border border-green-200">
              {product.discountPercentage}% OFF
            </span>
          )}
        </div>
        <div className="font-semibold text-lg mb-1 line-clamp-1">{product.title}</div>
        <div className="text-xs text-gray-500 mb-2">{product.brand}</div>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="font-bold text-base">${product.price}</span>
            <span className="text-xs text-gray-500">Stock: {product.stock}</span>
          </div>
          <button className="bg-black text-white text-xs px-3 py-1 rounded-full hover:bg-gray-800 transition-colors">Add to cart</button>
        </div>
      </div>
    </div>
  );
} 