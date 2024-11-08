import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	changeQuantityProduct as apiChangeQuantityProduct,
	deleteProductFromCart as apiDeleteProductFromCart,
	getCart as apiGetCart,
} from '../../services/apiCart';

export const getCart = createAsyncThunk(
	'cart/getCart',

	async (userId: string, thunkAPI) => {
		try {
			const data = await apiGetCart(userId);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const deleteProductFromCart = createAsyncThunk(
	'cart/deleteItemFromCart',

	async (
		{
			cartId,
			totalPrice,
			productId,
			productPrice,
			quantity,
		}: {
			cartId: number;
			totalPrice: number;
			productId: number;
			productPrice: number;
			quantity: number;
		},
		thunkAPI,
	) => {
		try {
			const returnedPrice = await apiDeleteProductFromCart(
				cartId,
				totalPrice,
				productId,
				productPrice,
				quantity,
			);
			return { productId, returnedPrice };
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const changeQuantityProduct = createAsyncThunk(
	'cart/changeQuantityProduct',

	async (
		{
			cartId,
			totalPrice,
			productId,
			productPrice,
			quantity,
		}: {
			cartId: number;
			totalPrice: number;
			productId: number;
			productPrice: number;
			quantity: number;
		},
		thunkAPI,
	) => {
		try {
			const { returnedPrice, returnedQuantity } =
				await apiChangeQuantityProduct(
					cartId,
					totalPrice,
					productId,
					productPrice,
					quantity,
				);
			return { productId, returnedPrice, returnedQuantity };
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);
