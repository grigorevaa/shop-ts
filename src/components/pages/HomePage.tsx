import { useEffect, useState } from 'react';
import { getCategories } from '../../services/apiCategories';
import { CategoryWithProducts } from '../../types/helpers.types';
import { Categories } from '../Categories';
import { CategoryProducts } from '../CategoryProducts';
import { Sort } from '../Sort';

export const HomePage: React.FC = () => {
	const [categories, setCategories] = useState<CategoryWithProducts[]>([]);
	const [activeCategory, setActiveCategory] = useState(0);

	useEffect(() => {
		async function fetchProducts() {
			const data = await getCategories();
			setCategories(data);
		}
		fetchProducts();
	}, []);

	return (
		<div className="home">
			<div className="content-top">
				<div className="container">
					<Categories activeCategory={activeCategory} categories={categories} />
					<Sort />
				</div>
			</div>

			<div className="content-bottom">
				<div className="container">
					{categories.map(category => (
						<CategoryProducts
							category={category}
							items={category.products}
							key={category.id}
							onSetActiveCategory={setActiveCategory}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
