import { User } from '../../../model/interface';

export const getElementFromAttributes = (user: User, name: string) => {
	return (user.attributes as any)[name];
};

export const setElementToAttributes = (
	user: User,
	name: string,
	value: string,
) => {
	(user.attributes as any)[name] = value;
};

export const getElement = (user: User, name: string) => {
	return (user as any)[name];
};
export const setElement = (user: User, name: string, value: string) => {
	return ((user as any)[name] = value);
};

export const getElementFromAddress = (user: User, name: string) => {
	return (user.address as any)[name];
};

export const setElementToAddress = (
	user: User,
	name: string,
	value: string,
) => {
	(user.address as any)[name] = value;
};
