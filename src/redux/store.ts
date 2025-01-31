import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import authReducer from './auth/slice';
import cartReducer from './cart/slice';
import categoriesReducer from './categories/slice';
import productReducer from './product/slice';
import searchReducer from './search/slice';

export const store = configureStore({
	reducer: {
		search: searchReducer,
		product: productReducer,
		categories: categoriesReducer,
		auth: authReducer,
		cart: cartReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
