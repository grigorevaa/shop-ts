import { useEffect } from 'react';
import { changeQuantityProduct, getCart } from '../../redux/cart/asyncActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getCartItems } from '../../services/apiCart';
import { CartItem } from '../CartItem';
import { CartSidebar } from '../CartSidebar';

interface Props {
	className?: string;
}

export const CartPage: React.FC<Props> = () => {
	const { user } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const { cartId, totalPrice, items, status } = useAppSelector(
		state => state.cart,
	);

	useEffect(() => {
		const fetchCart = async () => {
			try {
				if (user) await dispatch(getCart(user.id)).unwrap();
			} catch (error) {
				console.log(error);
			}
		};

		fetchCart();
	}, [user]);

	return (
		<div className="cart-page">
			<div className="container">
				<div className="cart-page__items">
					<h1 className="cart-page__title">Корзина</h1>
					{status === 'success' &&
						items.map((item, index) => (
							<CartItem
								item={item}
								key={index}
								cartId={cartId!}
								totalPrice={totalPrice}
							/>
						))}
				</div>

				<CartSidebar />
			</div>
		</div>
	);
};
