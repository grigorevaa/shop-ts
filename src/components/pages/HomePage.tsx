import { useEffect, useState } from 'react';
import { getCategories } from '../../redux/categories/asyncActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Categories } from '../Categories';
import { CategoryProducts } from '../CategoryProducts';
import { Skeleton } from '../Skeleton';
import { Sort } from '../Sort';

export const HomePage: React.FC = () => {
	// const [categories, setCategories] = useState<CategoryWithProducts[]>([]);
	const dispatch = useAppDispatch();
	const { categories, status } = useAppSelector(state => state.categories);
	const [activeCategory, setActiveCategory] = useState(0);

	const fetchCategories = async () => {
		try {
			await dispatch(getCategories()).unwrap();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	return (
		<div className="home-page">
			<div className="home-page__content-top">
				<div className="container">
					{status === 'loading' ? (
						<Skeleton type="categories" />
					) : (
						<Categories
							activeCategory={activeCategory}
							categories={categories}
						/>
					)}
					<Sort />
				</div>
			</div>

			<div className="home-page__content-bottom">
				<div className="container">
					{status === 'loading' ? (
						<Skeleton type="category-with-products" />
					) : (
						categories.map(category => (
							<CategoryProducts
								category={category}
								items={category.products}
								key={category.id}
								onSetActiveCategory={setActiveCategory}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
};
