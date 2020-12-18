/**
 * Based on the locale passed as a paremeter, this function will return
 * the corresponding dictionary.
 *
 * @param {string} lang the lang of the user
 * @param {any} dict
 */
export const createDictionary: any = (lang: any) => (dict: any) =>
	Object.keys(dict).reduce((acc, k) => {
		const hasChildObject = Object.keys(dict[k]).find(
			(key) =>
				dict[k][key] &&
				typeof dict[k][key] === 'object' &&
				dict[k][key].constructor === Object,
		);
		return {
			...acc,
			[k]: !hasChildObject
				? dict[k][lang]
				: createDictionary(lang)(dict[k]),
		};
	}, {});

/**
 * This function will return only the lang part of a locale
 * For example, with fr-FR, will return fr
 * If the lang is not fr, will return en
 * @param {string} lang the lang of the user
 */
export const getLang = (defaultLang?: string) => {
	const defaultLanguage =
		(defaultLang || navigator.language)?.split('-')[0] === 'fr'
			? 'fr'
			: 'en';
	document.documentElement.lang = defaultLanguage;
	return defaultLanguage;
};

export default createDictionary(
	getLang(window.localStorage.getItem('lang') === '"fr"' ? 'fr' : 'en'),
);
