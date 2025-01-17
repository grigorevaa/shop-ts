import React from 'react';
import { ProductItemSkeleton } from './ProductItemSkeleton';
export const CategoryWithItemsSkeleton: React.FC = () => {
  return (
    <div className="c-w-i-skeleton">
      <div className="c-w-i-skeleton__title skeleton" />
      <div className="c-w-i-skeleton__items">
        {[...Array(8)].map((_, index) => (
          <ProductItemSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};
