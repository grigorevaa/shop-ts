import { Rating } from '@mui/material';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { changeQuantityProduct } from '../../redux/cart/asyncActions';
import {
	getProduct,
	getUserRating,
	setUserRating,
	updateUserRating,
} from '../../redux/product/asyncActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getNoun } from '../../utils/getNoun';
import { CountBar } from '../CountBar';
import { Skeleton } from '../Skeleton';
import { BlocksSkeletons } from '../skeletons/BlocksSkeletons';
import { ProductPageSkeleton } from '../skeletons/ProdctPageSkeleton';

export const ProductPage: React.FC = () => {
	const { user } = useAppSelector(state => state.auth);
	const { product, statusProduct, statusUserRating, userRating } =
		useAppSelector(state => state.product);
	const {
		cartId,
		totalPrice,
		status: cartStatus,
	} = useAppSelector(state => state.cart);

	const [quantity, setQuantity] = useState(1);
	const { id } = useParams();
	const dispatch = useAppDispatch();

	const [rating, setRating] = useState<number | null>(userRating);

	const wordForCount = product
		? getNoun(product.ratingCount, 'оценка', 'оценки', 'оценок')
		: null;

	const ratingString = product
		? `${product.rating.toFixed(1)} (${product.ratingCount} ${wordForCount})`
		: null;

	const fetchProduct = async (id: number) => {
		try {
			await dispatch(getProduct(id)).unwrap();
		} catch (error) {
			console.log(error);
		}
	};

	const setUserRatingHandler = async (value: number | null) => {
		try {
			if (user && product) {
				await dispatch(
					setUserRating({
						productId: Number(id),
						userId: user.id,
						currentRating: product.rating,
						ratingCount: product.ratingCount,
						userRating: value!,
					}),
				).unwrap();

				toast.success('Рейтинг установлен');
			}
		} catch (error) {
			console.log(error);
			toast.error('Произошла ошибка при установке рейтинга');
		}
	};

	const updateUserRatingHandler = async (value: number | null) => {
		try {
			if (user && product && userRating) {
				await dispatch(
					updateUserRating({
						productId: Number(id),
						userId: user.id,
						currentRating: product.rating,
						currentUserRating: userRating,
						ratingCount: product.ratingCount,
						newUserRating: value!,
					}),
				).unwrap();

				toast.success('Рейтинг изменен');
			}
		} catch (error) {
			console.log(error);
			toast.error('Произошла ошибка при изменении рейтинга');
		}
	};

	const fetchUserRating = async (productId: number, userId: string) => {
		try {
			await dispatch(getUserRating({ productId, userId })).unwrap();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProduct(Number(id));
	}, [id]);

	useEffect(() => {
		if (user) fetchUserRating(Number(id), user.id);
		setRating(userRating);
	}, [user, userRating]);

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

		toast.success('Товар добавлен в корзину');
	};

	// if (statusProduct === 'success') {
	if (statusProduct === 'loading') {
		return <ProductPageSkeleton />;
	}

	return (
		<div className="product-page">
			<div className="container">
				<div className="product-page__content-top">
					{product && (
						<>
							<img
								className="product-page__image"
								src={product.img}
								alt={product.name}
							/>
							<div className="product-page__info">
								<h2 className="product-page__title">{product.name}</h2>
								<div className="product-page__rating">
									<Star size={20} className="icon" />
									<span className="rating">
										{statusUserRating === 'loading' ? (
											<BlocksSkeletons type="product-rating" />
										) : (
											ratingString
										)}
									</span>
								</div>
								<p className="product-page__description">
									{product.description}
								</p>

								<div className="product-page__price">
									<b>{product.price} ₽/шт.</b>
								</div>

								<div className="product-page__add-to-cart">
									<CountBar value={quantity} onChangeInput={setQuantity} />
									<button
										className="primary-button"
										onClick={onClickAddToCart}
										disabled={cartStatus === 'loading'}>
										В корзину
									</button>
								</div>

								{user && (
									<div className="product-page__user-review">
										{statusUserRating === 'loading' ? (
											<BlocksSkeletons type="user-rating" />
										) : (
											<>
												<p className="product-page__user-review-stars">
													{userRating
														? 'Ваша оценка/изменить оценку:'
														: 'Оцените продукт:'}
												</p>
												<Rating
													className="product-page__user-rating"
													value={rating}
													onChange={(event, newValue) => {
														setRating(newValue);
														if (userRating) {
															updateUserRatingHandler(newValue);
														} else {
															setUserRatingHandler(newValue);
														}
													}}
												/>
											</>
										)}
									</div>
								)}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
