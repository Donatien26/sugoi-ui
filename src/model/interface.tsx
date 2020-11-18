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
	attributes: Attributes;
	address: Address;
}

export interface Attributes {
	description: string;
}

export interface Address {
	ligne1?: string;
	ligne2?: string;
	ligne3?: string;
	ligne4?: string;
	ligne5?: string;
	ligne6?: string;
	ligne7?: string;
}
