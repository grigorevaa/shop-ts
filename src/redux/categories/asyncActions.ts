import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from './../../services/apiCategories';

export const fetchCategories = createAsyncThunk(
	'categories/fetchCategories',

	async () => {
		const data = await getCategories();
		return data;
	},
);
