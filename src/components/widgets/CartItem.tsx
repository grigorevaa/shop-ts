import React, { useState } from 'react';
import {
  changeQuantityProduct,
  deleteProductFromCart,
} from '../../redux/cart/asyncActions';
import { useAppDispatch } from '../../redux/store';
import { CartItem as TCartItem } from '../../redux/types';
import { CountBar } from '../shared';
interface Props {
  className?: string;
  cartId: number;
  item: TCartItem;
  totalPrice: number;
}

export const CartItem: React.FC<Props> = ({ item, cartId, totalPrice }) => {
  const dispatch = useAppDispatch();
  const onClickDelete = () => {
    dispatch(
      deleteProductFromCart({
        cartId,
        totalPrice,
        productId: item.products!.id,
        productPrice: item.products!.price,
        quantity: item.quantity,
      }),
    );
  };

  const [quantity, setQuantity] = useState(item.quantity);

  const changeQuantity = (type: 'plus' | 'minus') => {
    dispatch(
      changeQuantityProduct({
        cartId,
        productId: item.products!.id,
        productPrice: item.products!.price,
        totalPrice,
        quantity: type === 'plus' ? 1 : -1,
      }),
    );
  };

  return (
    <div className="cart-item">
      <img
        className="cart-item__image"
        src={item.products?.img}
        alt={item.products?.name}
      />
      <div className="cart-item__name">{item.products?.name}</div>
      <div className="cart-item__total">
        {item.products!.price * item.quantity} ₽
      </div>
      <div className="cart-item__quantity">
        <CountBar
          value={quantity}
          onChangeInput={setQuantity}
          onChangeCart={changeQuantity}
          disabledInput={true}
        />
      </div>
      <button className="secondary-button" onClick={onClickDelete}>
        Удалить
      </button>
    </div>
  );
};
