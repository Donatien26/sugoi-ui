export const isReader = (
	readerRegexName: string,
	tokenParsed: any | undefined,
) => {
	// const regex = new RegExp(readerRegexName);
	// let t = tokenParsed?.realm_access?.roles.filter((role) =>
	// 	role.match(regex),
	// ).length;
	// return t ? t > 0 : false;
	return true;
};

export const isAdministrator = (
	adminName: string,
	tokenParsed: any | undefined,
) => {
	// let t = tokenParsed?.realm_access?.roles.filter((role) =>
	// 	role.includes(adminName),
	// ).length;
	// return t ? t > 0 : false;
	return true;
};

export const isWriter = (
	writerRegexName: string,
	tokenParsed: any | undefined,
) => {
	// const regex = new RegExp(writerRegexName);
	// let t = tokenParsed?.realm_access?.roles.filter((role) =>
	// 	role.match(regex),
	// ).length;
	// return t ? t > 0 : false;
	return true;
};

export const getRoles = (tokenParsed: any | undefined) => {
	return null;
};
