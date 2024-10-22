import React, { useState } from 'react';

type TCategory = {
	id: number;
	name: string;
};

interface Props {
	categories: TCategory[];
	activeCategory: number;
	onSetActiveCategory: (id: number) => void;
}
export const Categories: React.FC<Props> = ({
	categories,
	activeCategory,
	onSetActiveCategory,
}) => {
	return (
		<div className="categories">
			<ul>
				{categories.map(category => (
					<a
						href={`#${category.name}`}
						onClick={() => onSetActiveCategory(category.id)}
						className={`${activeCategory === category.id ? 'active' : ''}`}
						key={category.id}>
						{category.name}
					</a>
				))}
			</ul>
		</div>
	);
};
