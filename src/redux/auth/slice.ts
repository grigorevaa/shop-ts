import { createSlice } from '@reduxjs/toolkit';
import { AuthSliceState, Status } from '../types';
import { getUser, login, logout, signup, updateUser } from './asyncActions';

// const user = JSON.parse(localStorage.getItem('user') as string);

const initialState: AuthSliceState = {
  user: null,
  status: Status.IDLE,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.user = null;
      state.status = Status.LOADING;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.status = Status.SUCCESS;
    });

    builder.addCase(login.rejected, (state) => {
      state.user = null;
      state.status = Status.ERROR;
    });
    builder.addCase(signup.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(signup.fulfilled, (state) => {
      state.status = Status.SUCCESS;
    });

    builder.addCase(signup.rejected, (state) => {
      state.status = Status.ERROR;
    });
    builder.addCase(logout.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.status = Status.SUCCESS;
    });
    builder.addCase(logout.rejected, (state) => {
      state.status = Status.ERROR;
    });

    builder.addCase(getUser.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.user = null;
      state.status = Status.ERROR;
    });

    builder.addCase(updateUser.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.status = Status.SUCCESS;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.user = null;
      state.status = Status.ERROR;
    });
  },
});

export default authSlice.reducer;
