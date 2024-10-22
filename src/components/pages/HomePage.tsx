import { useState } from 'react';
import { Categories } from '../Categories';
import { CategoryProducts } from '../CategoryProducts';
import { Sort } from '../Sort';

const categories = [
	{ id: 0, name: 'Пирожные' },
	{ id: 1, name: 'Торты' },
	{ id: 2, name: 'Кексы' },
	{ id: 3, name: 'Печенье' },
	{ id: 4, name: 'Мороженое' },
	{ id: 5, name: 'Шоколад' },
	{ id: 6, name: 'Зефир' },
	{ id: 7, name: 'Карамель' },
	{ id: 8, name: 'Маршмеллоу' },
	{ id: 9, name: 'Фруктовый десерт' },
];

const items = [
	{
		id: 0,
		name: 'Пирожные',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi facilis quis reprehenderit atque fuga cupiditate! Officia est tempore nihil sapiente labore recusandae deserunt consectetur, dignissimos possimus eaque repellendus, perferendis voluptas!',
		img: 'https://cheese-cake.ru/DesertImg/tartaletka-fistashkovaya-new-4-sht.jpg',
		price: 300,
		rating: 4,
	},
];
export const HomePage: React.FC = () => {
	const [moved, setMoved] = useState(true);
	const [activeCategory, setActiveCategory] = useState(0);

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
							items={items}
							key={category.id}
							onSetActiveCategory={onSetActiveCategory}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
