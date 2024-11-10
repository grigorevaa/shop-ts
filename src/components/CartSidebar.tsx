import { ArrowRight } from 'lucide-react';
import { Status } from '../redux/types';
import { CartSidebarItem } from './CartSidebarItem';

const TAX_RATE = 0.05;
const DELIVERY_PRICE = 200;

interface Props {
	cartPrice: number;
	status: Status;
}

export const CartSidebar: React.FC<Props> = ({ cartPrice, status }) => {
	const summary = cartPrice + cartPrice * TAX_RATE + DELIVERY_PRICE;

	return (
		<div className="cart-sidebar">
			<div className="cart-sidebar__title">Итого:</div>
			<div className="cart-sidebar__price">{summary} ₽</div>
			<CartSidebarItem title="Стоимость корзины:" price={cartPrice} />
			<CartSidebarItem title="Налоги:" price={cartPrice * TAX_RATE} />
			<CartSidebarItem title="Доставка:" price={DELIVERY_PRICE} />
			<button className="primary-button">
				Перейти к оплате{' '}
				<span className="cart-sidebar__icon">
					<ArrowRight />
				</span>
			</button>
		</div>
	);
};
