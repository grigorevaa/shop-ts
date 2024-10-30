import { ShoppingCart, User } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/store';
import { Modal } from './Modal';
import { Login } from './forms/Login';
import { Registration } from './forms/Registration';

export const ProfileAndCart: React.FC = () => {
	const { user } = useAppSelector(state => state.users);
	const [showModal, setShowModal] = React.useState(!true);
	const [type, setType] = useState<'login' | 'registration'>('login');

	const onCloseModal = () => {
		setShowModal(!showModal);
	};

	const onChangeType = () => {
		setType(type === 'login' ? 'registration' : 'login');
	};

	return (
		<div className="profile-and-cart">
			{!user ? (
				<button
					className="secondary-button"
					onClick={() => setShowModal(!showModal)}>
					<div className="icon">
						<User size={20} />
					</div>
					Войти
				</button>
			) : (
				<Link to="/profile">
					<button className="primary-button">
						<div className="icon">
							<User size={20} />
						</div>
						{user.user_metadata.full_name}
					</button>
				</Link>
			)}
			{showModal && (
				<Modal
					onCloseModal={onCloseModal}
					type={type}
					onChangeType={onChangeType}>
					{type === 'login' ? (
						<Login onCloseModal={onCloseModal} />
					) : (
						<Registration
							onCloseModal={onCloseModal}
							onChangeType={onChangeType}
						/>
					)}
				</Modal>
			)}
			<Link to="/cart">
				<button className="primary-button">
					<div className="icon">
						<ShoppingCart size={20} />
					</div>
					Корзина
				</button>
			</Link>
		</div>
	);
};
