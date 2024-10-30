import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	login as apiLogin,
	signup as apiSignup,
} from '../../services/apiUsers';

export const login = createAsyncThunk(
	'users/login',

	async (
		{ email, password }: { email: string; password: string },
		thunkAPI,
	) => {
		try {
			const data = await apiLogin(email, password);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const signup = createAsyncThunk(
	'users/signup',
	async (
		{
			email,
			password,
			firstName,
			lastName,
		}: {
			email: string;
			password: string;
			firstName: string;
			lastName: string;
		},
		thunkAPI,
	) => {
		try {
			const data = await apiSignup(email, password, firstName, lastName);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);
