import { ArrowRight } from 'lucide-react';
import { Status } from '../redux/types';
import { CartSidebarItem } from './CartSidebarItem';
import { Skeleton } from './Skeleton';

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
			<div className="cart-sidebar__price">
				{status !== 'success' ? (
					<Skeleton type="cart-sidebar-total" />
				) : (
					`${summary} ₽`
				)}
			</div>
			<CartSidebarItem
				title="Стоимость корзины:"
				value={
					status !== 'success' ? (
						<Skeleton type="cart-sidebar-item" />
					) : (
						`${cartPrice} ₽`
					)
				}
			/>
			<CartSidebarItem
				title="Налоги:"
				value={
					status !== 'success' ? (
						<Skeleton type="cart-sidebar-item" />
					) : (
						`${cartPrice * TAX_RATE} ₽`
					)
				}
			/>
			<CartSidebarItem title="Доставка:" value={`${DELIVERY_PRICE} ₽`} />
			{cartPrice !== 0 && (
				<button className="primary-button" disabled={status !== 'success'}>
					Перейти к оплате
					<span className="cart-sidebar__icon">
						<ArrowRight />
					</span>
				</button>
			)}
		</div>
	);
};
