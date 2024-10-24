import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSearchedProducts } from '../../services/apiProducts';

export const fetchSearchList = createAsyncThunk(
	'search/fetchSearchList',

	async (searchStr: string) => {
		const data = await getSearchedProducts(searchStr);
		return data;
	},
);
