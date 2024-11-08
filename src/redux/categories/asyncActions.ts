import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories as apiGetCategories } from './../../services/apiCategories';

export const getCategories = createAsyncThunk(
	'categories/getCategories',

	async (arg, thunkAPI) => {
		try {
			const data = await apiGetCategories();
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);
