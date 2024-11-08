import { createSlice } from '@reduxjs/toolkit';
import { CategoriesSliceState, Status } from '../types';
import { getCategories } from './asyncActions';

const initialState: CategoriesSliceState = {
	categories: [],
	status: Status.IDLE,
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getCategories.pending, (state, action) => {
			state.status = Status.LOADING;
			state.categories = [];
		});
		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.categories = action.payload;
			state.status = Status.SUCCESS;
		});
		builder.addCase(getCategories.rejected, (state, action) => {
			state.status = Status.ERROR;
			state.categories = [];
		});
	},
});

export default categoriesSlice.reducer;
