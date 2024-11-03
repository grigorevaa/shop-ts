import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';

interface Props {
	children: JSX.Element;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
	const { user } = useAppSelector(state => state.auth);

	if (!user) {
		return <Navigate to="/not-auth" replace />;
	}

	return children;
};
