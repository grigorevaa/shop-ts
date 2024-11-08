import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';

interface Props {
	children: JSX.Element;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
	const { user, status } = useAppSelector(state => state.auth);

	if (!user && status === 'success') {
		return <Navigate to="/not-auth" replace />;
	}

	return children;
};
