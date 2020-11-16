export const isReader = (
	readerRegexName: string,
	tokenParsed: any | undefined,
) => {
	const regex = new RegExp(readerRegexName);
	let readerDomain = tokenParsed?.realm_access?.roles
		.filter((role: string) => role.match(regex))
		.map((role: string) => {
			const found = role.match(regex);
			return found ? found[1] : null;
		});
	return [
		readerDomain.length ? readerDomain.length > 0 : false,
		readerDomain,
	];
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
	const writeDomain = tokenParsed?.realm_access?.roles
		.filter((role: string) => role.match(regex))
		.map((role: string) => {
			const found = role.match(regex);
			return found ? found[1] : null;
		});
	return [writeDomain.length ? writeDomain.length > 0 : false, writeDomain];
};

export const getRoles = (tokenParsed: any | undefined) => {
	return null;
};
