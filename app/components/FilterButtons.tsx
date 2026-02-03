'use client';

import { Filter } from 'lucide-react';

interface FilterButtonsProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

export default function FilterButtons({ categories, activeFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <div className="flex items-center gap-2 text-gray-700 font-semibold">
        <Filter size={20} />
        <span>Filter by:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onFilterChange('All')}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
            activeFilter === 'All'
              ? 'bg-gradient-to-r from-blue-900 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
              activeFilter === category
                ? 'bg-gradient-to-r from-blue-900 to-orange-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
