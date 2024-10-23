import { Star } from 'lucide-react';
import React from 'react';

interface Props {
	name: string;
	description: string;
	img: string;
	rating: number;
	price: number;
}
export const ProductItem: React.FC<Props> = ({
	name,
	description,
	img,
	rating,
	price,
}) => {
	return (
		<div className="product-item">
			<img src={img} alt={`of ${name}`} />
			<div className="info">
				<div className="name">{name}</div>
				<div className="description">{description}</div>
			</div>

			<div className="price-rating">
				<div className="rating">
					<Star className="icon" />
					<div>{rating}</div>
				</div>
				<button className="primary-button">В корзину</button>
				<span>
					<b>{price}</b> ₽
				</span>
			</div>
		</div>
	);
};
