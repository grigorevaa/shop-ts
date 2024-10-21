import React, { useState } from 'react';

const сategories = [
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
export const Categories: React.FC = () => {
	const [active, setActive] = useState(0);

	const onClickActive = (id: number) => {
		setActive(id);
	};

	return (
		<div className="categories">
			<ul>
				{сategories.map(category => (
					<li
						onClick={() => {
							onClickActive(category.id);
						}}
						className={`${active === category.id ? 'active' : ''}`}
						key={category.id}>
						{category.name}
					</li>
				))}
			</ul>
		</div>
	);
};
