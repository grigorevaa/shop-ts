import { Star } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { changeQuantityProduct } from '../../redux/cart/asyncActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Product } from '../../redux/types';

interface Props {
  product: Product;
}
export const ProductItem: React.FC<Props> = ({
  product: { id, name, description, img, rating, price },
}) => {
  const { cartId, totalPrice, status } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const onClickAddToCart = async () => {
    if (!cartId) {
      toast.error('Войдите в аккаунт, чтобы добавить товар в корзину');
      return;
    }

    dispatch(
      changeQuantityProduct({
        cartId,
        totalPrice,
        productId: id,
        productPrice: price,
        quantity: 1,
      }),
    );

    toast.success('Товар добавлен в корзину');
  };

  return (
    <div className="product-item">
      <Link to={`/product/${id}`}>
        <img className="product-item__img" src={img} alt={`of ${name}`} />
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
        <button
          className="primary-button"
          onClick={onClickAddToCart}
          disabled={status === 'loading'}
        >
          В корзину
        </button>
        <span>
          <b>{price}</b> ₽
        </span>
      </div>
    </div>
  );
};
