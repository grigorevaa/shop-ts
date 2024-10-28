import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../redux/types';

interface Props {
	product: Product;
}
export const ProductItem: React.FC<Props> = ({
	product: { id, name, description, img, rating, price },
}) => {
	return (
		<div className="product-item">
			<Link to={`/product/${id}`}>
				<img src={img} alt={`of ${name}`} />
				<div className="info">
					<div className="name">{name}</div>
					<div className="description">{description}</div>
				</div>
			</Link>

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
