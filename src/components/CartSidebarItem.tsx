interface Props {
	title: string;
	price: number;
}

export const CartSidebarItem: React.FC<Props> = ({ title, price }) => {
	return (
		<div className="cart-sidebar-item">
			<span className="cart-sidebar-item__title">
				{title}
				<div className="cart-sidebar-item__dots" />
			</span>
			<span className="cart-sidebar-item__price">{price} ₽</span>
		</div>
	);
};
