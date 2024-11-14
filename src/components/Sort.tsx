import React, { useEffect, useRef, useState } from 'react';

type sortOption = {
	value: string;
	name: string;
};

interface Props {
	sortOptions: sortOption[];
	activeOptionSort: number;
	setActiveOptionSort: (index: number) => void;
}

export const Sort: React.FC<Props> = ({
	sortOptions,
	activeOptionSort,
	setActiveOptionSort,
}) => {
	// const [active, setActive] = useState(0);
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const onClickActive = (index: number) => {
		setActiveOptionSort(index);
	};

	const onClickOpen = () => {
		setOpen(!open);
	};

	useEffect(() => {
		const checkIfClickedOutside = (event: MouseEvent) => {
			if (
				open &&
				ref.current &&
				!ref.current.contains(event.target as HTMLElement)
			) {
				setOpen(false);
			}
		};

		document.addEventListener('mousedown', checkIfClickedOutside);
		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [open]);

	return (
		<div className="sort">
			<div className="sort__title" onClick={onClickOpen}>
				<span>Сортировка: </span>
				<span className="sort__value">
					{sortOptions[activeOptionSort].name}
				</span>
			</div>

			{open && (
				<div className="sort__popup" ref={ref}>
					<ul className="sort__list">
						{sortOptions.map((obj, index) => (
							<li
								key={obj.value}
								onClick={() => {
									onClickActive(index);
									onClickOpen();
								}}
								className={`sort__list-item${
									activeOptionSort === index ? '-active' : ''
								}`}>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
