import { createAsyncThunk } from '@reduxjs/toolkit';
import { getConfigFile } from '../../configuration/utils';

const initialConfigState = {
	theme: window.localStorage.getItem('darkMode') ? 'dark' : 'light',
	config: {
		api: '',
		adminName: '',
		writerRegexName: '',
		readerRegexName: '',
	},
	realms: [],
};

const AppReducer = (state = initialConfigState, action: any) => {
	let nextState;
	switch (action.type) {
		case 'appConfig':
			nextState = { ...state, ...action };
			return nextState;
		case 'changeTheme':
			nextState = {
				...state,
				theme: action.payload.nameTheme,
			};
			return nextState;
		case 'saveRealms': {
			nextState = {
				...state,
				realms: action.payload.realms,
			};
			return nextState;
		}
		case 'appConfig/fetchConfig/fulfilled':
			return {
				...state,
				config: action.payload,
			};
		default:
			return state;
	}
};

export const fetchConfig = createAsyncThunk(
	'appConfig/fetchConfig',
	async () => {
		return await getConfigFile();
	},
);

export default AppReducer;
