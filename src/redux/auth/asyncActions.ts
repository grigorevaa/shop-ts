import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	getUser as apiGetUser,
	login as apiLogin,
	logout as apiLogout,
	signup as apiSignup,
	updateUser as apiUpdateUser,
} from '../../services/apiUsers';

export const login = createAsyncThunk(
	'auth/login',

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
	'auth/signup',
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

export const logout = createAsyncThunk('auth/logout', async (arg, thunkAPI) => {
	try {
		await apiLogout();
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const getUser = createAsyncThunk(
	'auth/getUser',
	async (arg, thunkAPI) => {
		try {
			const data = await apiGetUser();
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const updateUser = createAsyncThunk(
	'auth/updateUser',
	async (
		{
			firstName,
			lastName,
			password,
		}: {
			firstName: string;
			lastName: string;
			password?: string;
		},
		thunkAPI,
	) => {
		try {
			const data = await apiUpdateUser(firstName, lastName, password);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);
