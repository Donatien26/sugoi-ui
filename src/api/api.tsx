import { getFakeRealms, getFakeUsers } from './fake/fake';
import { getRemoteRealms, getRemoteUsers } from './remote/remote';

export const getRealms = () => {
	if (process.env.REACT_APP_FAKE_API) {
		return getFakeRealms();
	} else {
		return getRemoteRealms();
	}
};

export const getUsers = (domain: string) => {
	if (process.env.REACT_APP_FAKE_API) {
		return getFakeUsers(domain);
	} else {
		return getRemoteUsers(domain);
	}
};
