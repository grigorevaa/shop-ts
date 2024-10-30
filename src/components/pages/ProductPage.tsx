import { Star } from 'lucide-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../redux/product/asyncActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Skeleton } from '../Skeleton';

interface Props {}

export const ProductPage: React.FC<Props> = () => {
	const { id } = useParams();
	const { product, status } = useAppSelector(state => state.product);
	const dispatch = useAppDispatch();

	const getProduct = async (id: number) => {
		try {
			await dispatch(fetchProduct(id)).unwrap();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProduct(Number(id));
	}, [id]);

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
									{/* <div>counter</div> */}
									<button className="primary-button">В корзину</button>
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
