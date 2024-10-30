import { createSlice } from '@reduxjs/toolkit';
import { SearchSliceState, Status } from '../types';
import { fetchSearchList } from './asyncActions';

const initialState: SearchSliceState = {
	items: [],
	status: Status.IDLE,
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchSearchList.pending, (state, action) => {
			state.status = Status.LOADING;
			state.items = [];
		});

		builder.addCase(fetchSearchList.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = Status.SUCCESS;
		});

		builder.addCase(fetchSearchList.rejected, (state, action) => {
			state.status = Status.ERROR;
			state.items = [];
		});
	},
});

export default searchSlice.reducer;
