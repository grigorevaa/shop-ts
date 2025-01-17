export const CategoriesSkeleton: React.FC = () => {
	return (
		<div className="categories-skeleton">
			{[...Array(3)].map((_, index) => (
				<div className="categories-skeleton__item skeleton" key={index} />
			))}
		</div>
	);
};
