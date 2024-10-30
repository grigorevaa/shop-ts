import { createSlice } from '@reduxjs/toolkit';
import { ProductSliceState, Status } from '../types';
import { fetchProduct } from './asyncActions';

const initialState: ProductSliceState = {
	product: null,
	status: Status.IDLE,
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchProduct.pending, (state, action) => {
			state.status = Status.LOADING;
			state.product = null;
		});
		builder.addCase(fetchProduct.fulfilled, (state, action) => {
			state.product = action.payload;
			state.status = Status.SUCCESS;
		});
		builder.addCase(fetchProduct.rejected, (state, action) => {
			state.status = Status.ERROR;
			state.product = null;
		});
	},
});

export default productSlice.reducer;
