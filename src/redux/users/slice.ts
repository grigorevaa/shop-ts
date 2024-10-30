import { createSlice } from '@reduxjs/toolkit';
import { Status, UsersSliceState } from '../types';
import { login, signup } from './asyncActions';

const initialState: UsersSliceState = {
	user: null,
	status: Status.IDLE,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(login.pending, (state, action) => {
			state.user = null;
			state.status = Status.LOADING;
		});

		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload.user;
			state.status = Status.SUCCESS;
		});

		builder.addCase(login.rejected, (state, action) => {
			state.user = null;
			state.status = Status.ERROR;
		});
		builder.addCase(signup.pending, (state, action) => {
			state.status = Status.LOADING;
		});

		builder.addCase(signup.fulfilled, (state, action) => {
			state.status = Status.SUCCESS;
		});

		builder.addCase(signup.rejected, (state, action) => {
			state.status = Status.ERROR;
		});
	},
});

export default usersSlice.reducer;
