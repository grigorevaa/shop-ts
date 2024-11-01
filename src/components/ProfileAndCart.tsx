import { Loader, ShoppingCart, User } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser, logout } from '../redux/auth/asyncActions';
// import { getUser } from '../redux/auth/slice';
import { useAppDispatch, useAppSelector } from '../redux/store';
// import { useGetUserQuery } from '../services/authService';
import { CircularProgress } from '@mui/material';
import { Modal } from './Modal';
import { Login } from './forms/Login';
import { Registration } from './forms/Registration';

export const ProfileAndCart: React.FC = () => {
	const { user, status } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();

	const [showModal, setShowModal] = React.useState(!true);
	const [type, setType] = useState<'login' | 'registration'>('login');

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	const onCloseModal = () => {
		setShowModal(!showModal);
	};

	const onChangeType = () => {
		setType(type === 'login' ? 'registration' : 'login');
	};

	return (
		<div className="profile-and-cart">
			{status === 'loading' ? (
				<button className="loading-button" disabled>
					<div className="icon">
						<CircularProgress size={18} color="inherit" />
					</div>
				</button>
			) : user ? (
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
