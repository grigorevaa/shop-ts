import React, { useState } from 'react';

const sortOptions = [
	{ value: 'asc-rate', name: 'рейтинг (возр.)' },
	{ value: 'desc-rate', name: 'рейтинг (убыв.)' },
	{ value: 'price-asc', name: 'цена (возр.)' },
	{ value: 'price-desc', name: 'цена (убыв.)' },
	{ value: 'alphabet', name: 'алфавит' },
];

export const Sort: React.FC = () => {
	const [active, setActive] = useState(0);
	const [open, setOpen] = useState(false);

	const onClickActive = (index: number) => {
		setActive(index);
	};

	const onClickOpen = () => {
		setOpen(!open);
	};

	return (
		<div className="sort">
			<div className="sort__title" onClick={onClickOpen}>
				<span>Сортировка: </span>
				<span className="sort__value">{sortOptions[active].name}</span>
			</div>

			{open && (
				<div className="sort__popup">
					<ul>
						{sortOptions.map((obj, index) => (
							<li
								key={obj.value}
								onClick={() => {
									onClickActive(index);
									onClickOpen();
								}}
								className={`${active === index ? 'active' : ''}`}>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
