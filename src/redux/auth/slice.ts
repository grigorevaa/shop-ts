import { createSlice } from '@reduxjs/toolkit';
import { Status, UsersSliceState } from '../types';
import { getUser, login, logout, signup } from './asyncActions';

// const user = JSON.parse(
// 	localStorage.getItem('sb-dhovfbhtqffidekpspgt-auth-token') || '{}',
// ).user;
// console.log(user);

const initialState: UsersSliceState = {
	// user: user ? user : null,
	user: null,
	status: Status.IDLE,
};

const authSlice = createSlice({
	name: 'auth',
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
		builder.addCase(logout.pending, (state, action) => {
			state.status = Status.LOADING;
		});

		builder.addCase(logout.fulfilled, (state, action) => {
			state.user = null;
			state.status = Status.SUCCESS;
		});

		builder.addCase(logout.rejected, (state, action) => {
			state.status = Status.ERROR;
		});
		builder.addCase(getUser.pending, (state, action) => {
			state.status = Status.LOADING;
		});

		builder.addCase(getUser.fulfilled, (state, action) => {
			state.user = action.payload;
			state.status = Status.SUCCESS;
		});

		builder.addCase(getUser.rejected, (state, action) => {
			state.user = null;
			state.status = Status.ERROR;
		});
	},
});

export default authSlice.reducer;
