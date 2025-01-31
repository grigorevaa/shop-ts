import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { Product } from '../../redux/types';
import { ProductItem } from './ProductItem';

interface Props {
  category: { id: number; name: string };
  items: Product[];
  onSetActiveCategory: (id: number) => void;
}

export const CategoryProducts: React.FC<Props> = ({
  category,
  items,
  onSetActiveCategory,
}) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      onSetActiveCategory(category.id);
    }
  }, [onSetActiveCategory, intersection?.isIntersecting, category]);

  return (
    <section
      className="category-products"
      ref={intersectionRef}
      id={category.name}
    >
      <h1 className="category-products__title">{category.name}</h1>
      <div className="category-products__products">
        {items.map((item) => (
          <ProductItem product={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
