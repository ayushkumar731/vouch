import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { authSlice } from './Services/auth';

const rootReducer = combineReducers ({
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
