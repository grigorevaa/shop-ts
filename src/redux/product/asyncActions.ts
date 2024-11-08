import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProduct as apiGetProduct } from '../../services/apiProducts';

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
