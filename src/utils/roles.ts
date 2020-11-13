export const isReader = (
	readerRegexName: string,
	tokenParsed: any | undefined,
) => {
	const regex = new RegExp(readerRegexName);
	let t = tokenParsed?.realm_access?.roles.filter((role: string) =>
		role.match(regex),
	).length;
	return t ? t > 0 : false;
};

export const isAdministrator = (
	adminName: string,
	tokenParsed: any | undefined,
) => {
	let t = tokenParsed?.realm_access?.roles.filter((role: string) =>
		role.includes(adminName),
	).length;
	return t ? t > 0 : false;
};

export const isWriter = (
	writerRegexName: string,
	tokenParsed: any | undefined,
) => {
	const regex = new RegExp(writerRegexName);
	let t = tokenParsed?.realm_access?.roles.filter((role: string) =>
		role.match(regex),
	).length;
	return t ? t > 0 : false;
};

export const getRoles = (tokenParsed: any | undefined) => {
	return null;
};
