import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../Utils/axios';

export const signInUser = createAsyncThunk('AUTH/USER_SIGNIN', async (data, thunkAPI) => {
  const response = await axios.post('https://reqres.in/api/login', data, thunkAPI);
  return response.data;
});

const initialState = {
  isLoading: false,
  errors: null,
  isSignInSuccess: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: {
    [signInUser.pending]: (state) => {
      state.isLoading = true;
      state.errors = null;
      state.isSignInSuccess = false;
    },
    [signInUser.fulfilled]: (state) => {
      state.isLoading = false;
      state.isSignInSuccess = true;
    },
    [signInUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSignInSuccess = false;
      state.errors = action.payload.error;
    },
  },
});
