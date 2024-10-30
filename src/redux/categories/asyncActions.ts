import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from './../../services/apiCategories';

export const fetchCategories = createAsyncThunk(
	'categories/fetchCategories',

	async (arg, thunkAPI) => {
		try {
			const data = await getCategories();
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);
