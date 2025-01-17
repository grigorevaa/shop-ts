import { useEffect, useState } from 'react';
import { getCategories } from '../../redux/categories/asyncActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { sortCategories } from '../../utils/sortCategories';
import { Categories } from '../Categories';
import { CategoryProducts } from '../CategoryProducts';
import { Sort } from '../Sort';
import { CategoriesSkeleton } from '../skeletons/CategoriesSkeleton';
import { CategoryWithItemsSkeleton } from '../skeletons/CategoriesWithItemsSkeleton';

const sortOptions = [
	{ value: 'rating-desc', name: 'рейтинг (убыв.)' },
	{ value: 'rating-asc', name: 'рейтинг (возр.)' },
	{ value: 'price-desc', name: 'цена (убыв.)' },
	{ value: 'price-asc', name: 'цена (возр.)' },
	{ value: 'alphabet', name: 'алфавит' },
];

export const HomePage: React.FC = () => {
	const [activeOptionSort, setActiveOptionSort] = useState(0);
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

	const sortedCategories = sortCategories(
		categories,
		sortOptions[activeOptionSort].value,
	);

	return (
		<div className="home-page">
			<div className="home-page__content-top">
				<div className="container">
					{status === 'loading' ? (
						<CategoriesSkeleton />
					) : (
						// <Skeleton type="categories" />
						<Categories
							activeCategory={activeCategory}
							categories={sortedCategories}
						/>
					)}
					<Sort
						sortOptions={sortOptions}
						activeOptionSort={activeOptionSort}
						setActiveOptionSort={setActiveOptionSort}
					/>
				</div>
			</div>

			<div className="home-page__content-bottom">
				<div className="container">
					{status === 'loading' ? (
						<CategoryWithItemsSkeleton />
					) : (
						sortedCategories.map(category => (
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
