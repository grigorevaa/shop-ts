import { useEffect, useState } from 'react';
import { getCategories } from '../../servises/apiCategories';
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
			console.log(data);
			setCategories(data);
		}
		fetchProducts();
	}, []);

	const onSetActiveCategory = (id: number) => {
		setActiveCategory(id);
	};

	return (
		<div className="home">
			<div className="content-top">
				<div className="container">
					<Categories
						activeCategory={activeCategory}
						categories={categories}
						onSetActiveCategory={onSetActiveCategory}
					/>
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
							onSetActiveCategory={onSetActiveCategory}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
