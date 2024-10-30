import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProduct } from '../../services/apiProducts';

export const fetchProduct = createAsyncThunk(
	'product/fetchProduct',

	async (id: number, thunkAPI) => {
		try {
			const data = await getProduct(id);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);
