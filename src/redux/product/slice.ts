import { createSlice } from '@reduxjs/toolkit';
import { ProductSliceState, Status } from '../types';
import { getProduct } from './asyncActions';

const initialState: ProductSliceState = {
	product: null,
	status: Status.IDLE,
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getProduct.pending, (state, action) => {
			state.status = Status.LOADING;
			state.product = null;
		});
		builder.addCase(getProduct.fulfilled, (state, action) => {
			state.product = action.payload;
			state.status = Status.SUCCESS;
		});
		builder.addCase(getProduct.rejected, (state, action) => {
			state.status = Status.ERROR;
			state.product = null;
		});
	},
});

export default productSlice.reducer;
