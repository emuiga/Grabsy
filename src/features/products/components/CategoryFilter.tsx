'use client';

import { ChevronDown } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onChange }: CategoryFilterProps) {
  return (
    <div className="relative flex-1 min-w-[180px]">
      <select
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-gray-300 rounded-full focus:outline-none px-4 py-2 pr-10 appearance-none cursor-pointer text-muted-foreground hover:text-foreground transition-colors shadow-sm"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category} className="bg-white text-foreground">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
    </div>
  );
} 