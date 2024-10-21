import { ShoppingCart, User } from 'lucide-react';
import React from 'react';

export const ProfileAndCart: React.FC = () => {
	return (
		<div className="profile-and-cart">
			<button className="secondary-button">
				<div className="icon">
					<User size={20} />
				</div>
				Войти
			</button>
			<button className="primary-button">
				<div className="icon">
					<ShoppingCart size={20} />
				</div>
				Корзина
			</button>
		</div>
	);
};
