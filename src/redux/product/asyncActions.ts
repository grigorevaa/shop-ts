import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	getProduct as apiGetProduct,
	getUserRating as apiGetUserRating,
	setUserRating as apiSetUserRating,
	updateUserRating as apiUpdateUserRating,
} from '../../services/apiProducts';

export const getProduct = createAsyncThunk(
	'product/getProduct',

	async (id: number, thunkAPI) => {
		try {
			const data = await apiGetProduct(id);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const getUserRating = createAsyncThunk(
	'product/getUserRating',

	async (
		{ productId, userId }: { productId: number; userId: string },
		thunkAPI,
	) => {
		try {
			const data = await apiGetUserRating(productId, userId);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const setUserRating = createAsyncThunk(
	'product/setUserRating',
	async (
		{
			productId,
			userId,
			currentRating,
			ratingCount,
			userRating,
		}: {
			productId: number;
			userId: string;
			currentRating: number;
			ratingCount: number;
			userRating: number;
		},
		thunkAPI,
	) => {
		try {
			const data = await apiSetUserRating(
				productId,
				userId,
				currentRating,
				ratingCount,
				userRating,
			);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const updateUserRating = createAsyncThunk(
	'product/updateUserRating',
	async (
		{
			productId,
			userId,
			currentRating,
			currentUserRating,
			ratingCount,
			newUserRating,
		}: {
			productId: number;
			userId: string;
			currentRating: number;
			currentUserRating: number;
			ratingCount: number;
			newUserRating: number;
		},
		thunkAPI,
	) => {
		try {
			const data = await apiUpdateUserRating(
				productId,
				userId,
				currentRating,
				currentUserRating,
				ratingCount,
				newUserRating,
			);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);
