import { Link } from 'react-router-dom';
import emptyCart from '../assets/img/empty-cart.png';

export const EmptyCart: React.FC = () => {
	return (
		<div className="empty-cart">
			<h2 className="empty-cart__title">Ваша корзина пуста</h2>
			<img className="empty-cart__img" src={emptyCart} alt="empty cart" />
			<p className="empty-cart__text">Добавьте хотя бы один товар в корзину</p>
			<Link to="/">
				<button className="primary-button">Перейти к товарам</button>
			</Link>
		</div>
	);
};
