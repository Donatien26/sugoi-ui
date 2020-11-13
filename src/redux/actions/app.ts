import { Realm } from '../../model/interface';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getConfigFile } from '../../configuration/utils';

export const setAppConfig = (config: any) => ({
	type: 'appConfig',
	payload: { ...config },
});

export const changeTheme = (nameTheme: string) => ({
	type: 'changeTheme',
	payload: { nameTheme },
});

export const saveRealms = (realms: Realm[]) => ({
	type: 'saveRealms',
	payload: { realms },
});

export const fetchConfig = createAsyncThunk(
	'appConfig/fetchConfig',
	async () => {
		return await getConfigFile();
	},
);
