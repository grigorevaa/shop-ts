export const CartItemSkeleton: React.FC = () => {
	return (
		<div className="c-i-skeleton">
			<div className="c-i-skeleton__image skeleton" />
			<div className="c-i-skeleton__info skeleton" />
			<div className="c-i-skeleton__btns skeleton" />
		</div>
	);
};
