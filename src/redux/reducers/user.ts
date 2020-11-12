import { isAdministrator, isReader, isWriter } from './../../utils/roles';

const initialRoleState = {
	isAdmin: false,
	isReader: false,
	isWriter: false,
};
const userReducer = (state = initialRoleState, action: any) => {
	if (action.type === 'appConfig/tokenChanged') {
		return {
			...state,
			isAdmin: isAdministrator(
				action.payload.config.adminName,
				action.payload.token,
			),
			isReader: isReader(
				action.payload.config.readerRegexName,
				action.payload.token,
			),
			isWriter: isWriter(
				action.payload.config.writerRegexName,
				action.payload.token,
			),
		};
	}
	return state;
};

export default userReducer;
