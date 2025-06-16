'use client';

import { useState, useMemo } from 'react';
import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';
import { Product } from '../types';

interface ProductFiltersProps {
  products: Product[];
  onFilter: (filteredProducts: Product[]) => void;
}

export function ProductFilters({ products, onFilter }: ProductFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(() => {
    const cats = products.map((p) => p.category);
    return Array.from(new Set(cats));
  }, [products]);

  useMemo(() => {
    let filtered = products;
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }
    onFilter(filtered);
  }, [searchQuery, selectedCategory, products, onFilter]);

  return (
    <div className="flex justify-center mb-8">
      <div className="flex bg-gray-100 border border-gray-200 rounded-full overflow-hidden shadow-sm">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <div className="w-px bg-gray-300 mx-2 my-2" />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>
    </div>
  );
} 