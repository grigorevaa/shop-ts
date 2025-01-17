import React from 'react';

export const ProductItemSkeleton: React.FC = () => {
  return (
    <div className="p-i-skeleton">
      <div className="p-i-skeleton__img skeleton" />
      <div className="p-i-skeleton__info skeleton" />
      <div className="p-i-skeleton__cart-block skeleton" />
    </div>
  );
};
