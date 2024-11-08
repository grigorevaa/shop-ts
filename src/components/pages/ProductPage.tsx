import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { changeQuantityProduct } from '../../redux/cart/asyncActions';
import { getProduct } from '../../redux/product/asyncActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { CountBar } from '../CountBar';
import { Skeleton } from '../Skeleton';

export const ProductPage: React.FC = () => {
	const [quantity, setQuantity] = useState(1);
	const { id } = useParams();
	const { product, status } = useAppSelector(state => state.product);
	const { cartId, totalPrice } = useAppSelector(state => state.cart);
	const dispatch = useAppDispatch();

	const fetchProduct = async (id: number) => {
		try {
			await dispatch(getProduct(id)).unwrap();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProduct(Number(id));
	}, [id]);

	const onClickAddToCart = async () => {
		if (!cartId) {
			toast.error('Войдите в аккаунт, чтобы добавить товар в корзину');
			return;
		}
		if (!product) return;

		dispatch(
			changeQuantityProduct({
				cartId,
				totalPrice,
				productId: product.id,
				productPrice: product.price,
				quantity,
			}),
		);
		// changeQuantityProduct(cartId, product.id, quantity);
		toast.success('Товар добавлен в корзину');
	};

	if (status === 'loading') {
		return (
			<div className="container">
				<div className="skeleton-container">
					<Skeleton type="product-page" />
				</div>
			</div>
		);
	}

	return (
		<div className="product-page">
			<div className="container">
				<div className="product-page__content-top">
					{product && (
						<>
							<img src={product.img} alt={product.name} />
							<div>
								<h2>{product.name}</h2>
								<div className="product-page__rating">
									<Star size={20} className="icon" />
									<span className="">{product.rating}</span>
								</div>
								<p className="product-page__description">
									{product.description}
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aspernatur cupiditate maiores culpa? Quisquam minima rem velit
									aspernatur doloribus et culpa alias, odio id porro? Ipsa
									debitis voluptatum non nihil ut!
								</p>

								<div className="product-page__price">
									<b>{product.price} ₽/шт.</b>
								</div>

								<div className="product-page__add-to-cart">
									<CountBar value={quantity} onChangeInput={setQuantity} />
									<button className="primary-button" onClick={onClickAddToCart}>
										В корзину
									</button>
								</div>
							</div>
						</>
					)}
				</div>

				{/* <div className="product-page__content-bottom">
					<h2>Отзывы</h2>
				</div> */}
			</div>
		</div>
	);
};
