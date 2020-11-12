import { combineReducers } from 'redux';
import AppReducer from '../redux/reducers/app';
import UserReducer from '../redux/reducers/user';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	app: AppReducer,
	role: UserReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
