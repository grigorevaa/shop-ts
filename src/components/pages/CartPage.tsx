import React, { useEffect } from 'react';
import { getCart } from '../../redux/cart/asyncActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { CartItemSkeleton } from '../skeletons/CartItemSkeleton';
import { CartItem } from '../widgets/CartItem';
import { CartSidebar } from '../widgets/CartSidebar';
import { EmptyCart } from '../widgets/EmptyCart';
interface Props {
  className?: string;
}

export const CartPage: React.FC<Props> = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { cartId, totalPrice, items, status } = useAppSelector(
    (state) => state.cart,
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
          {items.length === 0 && status === 'success' && <EmptyCart />}

          {status !== 'success'
            ? [...Array(3)].map((_, index) => <CartItemSkeleton key={index} />)
            : items.map((item, index) => (
                <CartItem
                  item={item}
                  key={index}
                  cartId={cartId!}
                  totalPrice={totalPrice}
                />
              ))}
        </div>
        <CartSidebar cartPrice={totalPrice} status={status} />
      </div>
    </div>
  );
};
