interface Props {
	title: string;
	value: React.ReactNode;
}

export const CartSidebarItem: React.FC<Props> = ({ title, value }) => {
	return (
		<div className="cart-sidebar-item">
			<span className="cart-sidebar-item__title">
				{title}
				<div className="cart-sidebar-item__dots" />
			</span>
			<span className="cart-sidebar-item__price">{value}</span>
		</div>
	);
};
