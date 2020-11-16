export interface Realm {
	name: string;
	url: string;
	appBranch: string;
	userStorages: UserStorage[];
}

export interface UserStorage {
	name: string;
	userBranch: string;
	organizationBranch: string;
}

export interface User {
	lastName: string;
	firstName: string;
	mail: string;
	username: string;
}

export interface Attributes {
	description: string;
}
