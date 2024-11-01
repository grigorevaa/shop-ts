import { ShoppingCart, User } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../redux/auth/asyncActions';
import { getUser } from '../redux/auth/slice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { useGetUserQuery } from '../services/authService';
import { Modal } from './Modal';
import { Login } from './forms/Login';
import { Registration } from './forms/Registration';

export const ProfileAndCart: React.FC = () => {
	const { user } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();

	const { data, isFetching } = useGetUserQuery('userDetails', {
		pollingInterval: 900000,
	});

	useEffect(() => {
		if (data) dispatch(getUser(data));
	}, [data, dispatch]);

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
			{isFetching ? (
				`Fetching your profile...`
			) : user !== null ? (
				<Link to="/profile">
					<button className="primary-button">
						<div className="icon">
							<User size={20} />
						</div>
						{user.user_metadata.firstName}
					</button>
				</Link>
			) : (
				<button
					className="secondary-button"
					onClick={() => setShowModal(!showModal)}>
					<div className="icon">
						<User size={20} />
					</div>
					Войти
				</button>
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
			{/* <Link to="/cart"> */}
			<button
				className="primary-button"
				onClick={() => {
					dispatch(logout());
				}}>
				<div className="icon">
					<ShoppingCart size={20} />
				</div>
				Корзина
			</button>
			{/* </Link> */}
		</div>
	);
};
