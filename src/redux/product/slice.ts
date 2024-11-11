import { createSlice } from '@reduxjs/toolkit';
import { ProductSliceState, Status } from '../types';
import {
	getProduct,
	getUserRating,
	setUserRating,
	updateUserRating,
} from './asyncActions';

const initialState: ProductSliceState = {
	product: null,
	userRating: null,
	statusProduct: Status.IDLE,
	statusUserRating: Status.IDLE,
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getProduct.pending, (state, action) => {
			state.statusProduct = Status.LOADING;
			state.product = null;
		});
		builder.addCase(getProduct.fulfilled, (state, action) => {
			state.product = action.payload;
			state.userRating = null;
			state.statusProduct = Status.SUCCESS;
		});
		builder.addCase(getProduct.rejected, (state, action) => {
			state.statusProduct = Status.ERROR;
			state.product = null;
		});

		builder.addCase(getUserRating.pending, (state, action) => {
			state.statusUserRating = Status.LOADING;
		});
		builder.addCase(getUserRating.fulfilled, (state, action) => {
			state.userRating = action.payload;
			state.statusUserRating = Status.SUCCESS;
		});
		builder.addCase(getUserRating.rejected, (state, action) => {
			state.statusUserRating = Status.ERROR;
		});

		builder.addCase(setUserRating.pending, (state, action) => {
			state.statusUserRating = Status.LOADING;
		});
		builder.addCase(setUserRating.fulfilled, (state, action) => {
			state.product!.rating = action.payload.newRating;
			state.product!.ratingCount = action.payload.newRatingCount;
			state.userRating = action.payload.userRating;
			state.statusUserRating = Status.SUCCESS;
		});
		builder.addCase(setUserRating.rejected, (state, action) => {
			state.statusUserRating = Status.ERROR;
		});

		builder.addCase(updateUserRating.pending, (state, action) => {
			state.statusUserRating = Status.LOADING;
		});
		builder.addCase(updateUserRating.fulfilled, (state, action) => {
			state.userRating = action.payload.newUserRating;
			state.product!.rating = action.payload.newRating;
			state.statusUserRating = Status.SUCCESS;
		});
		builder.addCase(updateUserRating.rejected, (state, action) => {
			state.statusUserRating = Status.ERROR;
		});
	},
});

export default productSlice.reducer;
