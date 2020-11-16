import { AxiosInstance } from 'axios';
import getClient from '../../configuration/axios-configuration';

export const getRemoteRealms = () =>
	getClient().then((client: AxiosInstance) =>
		client.get('/config/realms').then((r: any) => r.data),
	);

export const getRemoteUsers = (domain: string) =>
	getClient().then((client: AxiosInstance) =>
		client
			.get('/' + domain + '/users', { params: { size: 500 } })
			.then((r: any) => r.data.results),
	);

export const getRemoteUser = (id: string, domain: string) =>
	getClient().then((client: AxiosInstance) =>
		client.get('/' + domain + '/user/' + id).then((r: any) => r.data),
	);
