import { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { Product } from '../types/helpers.types';
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
		<div className="category-products" ref={intersectionRef} id={category.name}>
			<h1 className="title">{category.name}</h1>
			<div className="products">
				{items.map((item, id) => (
					<ProductItem
						key={id}
						name={item.name}
						description={item.description}
						img={item.img}
						rating={item.rating}
						price={item.price}
					/>
				))}
			</div>
		</div>
	);
};
