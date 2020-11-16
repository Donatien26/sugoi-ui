import { isAdministrator, isReader, isWriter } from './../../utils/roles';

const initialRoleState = {
	isAdmin: false,
	isReader: false,
	isWriter: false,
	readerDomains: [],
	writerDomains: [],
};
const userReducer = (state = initialRoleState, action: any) => {
	if (action.type === 'appConfig/tokenChanged') {
		const reader = isReader(
			action.payload.config.readerRegexName,
			action.payload.token,
		);
		const writer = isWriter(
			action.payload.config.writerRegexName,
			action.payload.token,
		);
		return {
			...state,
			isAdmin: isAdministrator(
				action.payload.config.adminName,
				action.payload.token,
			),
			isReader: reader[0],
			readerDomains: reader[1],
			isWriter: writer[0],
			writerDomains: writer[1],
		};
	}
	return state;
};

export default userReducer;
