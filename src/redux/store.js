import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactSlice';
// import { contactsReducer } from './contactSlice';
// import {
// 	persistStore,
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// } from 'redux-persist';

export const store = configureStore({
	reducer: {

		[contactsApi.reducerPath]: contactsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(contactsApi.middleware),
});