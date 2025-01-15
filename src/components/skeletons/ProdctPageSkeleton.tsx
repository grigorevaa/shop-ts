export const ProductPageSkeleton: React.FC = () => {
	return (
		<div className="p-p-skeleton">
			<div className="container">
				<div className="p-p-skeleton__image skeleton" />
				<div className="p-p-skeleton__info">
					<div className="p-p-skeleton__title skeleton" />
					<div className="p-p-skeleton__rating skeleton" />
					<div className="p-p-skeleton__description skeleton" />
					<div className="p-p-skeleton__price skeleton" />
					<div className="p-p-skeleton__cart-block skeleton" />
				</div>
			</div>
		</div>
	);
};
