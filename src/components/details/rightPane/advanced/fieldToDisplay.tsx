import {
	getElement,
	getElementFromAttributes,
	setElement,
	setElementToAttributes,
} from '../../commons/utils';

export const toDisplay = [
	{
		name: 'Identifiant',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		getFunction: getElement,
		setFunction: setElement,
		varName: 'username',
		modifiable: true,
	},
	{
		name: 'Nom commun',
		helpTextTitle: ' Nom commun du contact ',
		helpText:
			" Il servira pour le rechercher à travers l'annuaire. Caractères autorisés : alphabétiques chiffres apostrophes espaces tirets",
		getFunction: getElementFromAttributes,
		setFunction: setElementToAttributes,
		varName: 'common_name',
		modifiable: true,
	},
	{
		name: 'Nom',
		helpTextTitle: ' Nom du contact ',
		helpText:
			'Caractères autorisés : alphabétiques chiffres apostrophes espaces tirets',
		getFunction: getElement,
		setFunction: setElement,
		varName: 'lastname',
		modifiable: true,
	},
	{
		name: 'Prénom',
		helpTextTitle: ' Prénom du contact ',
		helpText:
			'Caractères autorisés : alphabétiques chiffres apostrophes espaces tirets',
		getFunction: getElement,
		setFunction: setElement,
		varName: 'firstName',
		modifiable: true,
	},
	{
		name: 'Adresse e-mail',
		helpTextTitle: ' Adresse de messagerie du contact ',
		helpText: "Elle servira pour la rechercher à travers l'annuaire. ",
		getFunction: getElement,
		setFunction: setElement,
		varName: 'mail',
		modifiable: true,
	},
	{
		name: 'Numéro de téléphone',
		helpTextTitle: '  Numéro de téléphone du contact ',
		helpText:
			'Entre 1 et 25 caractères numériques, points, tirets, parenthèses, signe plus, et espaces uniquement. ',
		getFunction: getElementFromAttributes,
		setFunction: setElementToAttributes,
		varName: 'phone_number',
		modifiable: true,
	},
	{
		name: 'Description',
		helpTextTitle: ' Description du contact ',
		getFunction: getElementFromAttributes,
		setFunction: setElementToAttributes,
		varName: 'description',
		modifiable: true,
	},
	{
		name: 'Organisation',
		helpTextTitle: "Organisation d'appartenance de l'agent",
		getFunction: getElementFromAttributes,
		setFunction: setElementToAttributes,
		varName: 'organization',
		modifiable: true,
	},
	{
		name: "Timbre de l'agent",
		getFunction: getElementFromAttributes,
		setFunction: setElementToAttributes,
		varName: 'insee_timbre',
		modifiable: true,
	},
	{
		name: "Organisme de l'agent",
		getFunction: getElementFromAttributes,
		setFunction: setElementToAttributes,
		varName: 'insee_organisme',
		modifiable: true,
	},
];
