import React from 'react';

type TCategory = {
	id: number;
	name: string;
};

interface Props {
	categories: TCategory[];
	activeCategory: number;
}
export const Categories: React.FC<Props> = ({ categories, activeCategory }) => {
	return (
		<div className="categories">
			<ul>
				{categories.map(category => (
					<a
						href={`/#${category.name}`}
						className={`${activeCategory === category.id ? 'active' : ''}`}
						key={category.id}>
						{category.name}
					</a>
				))}
			</ul>
		</div>
	);
};
