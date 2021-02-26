export default [
	{
		name: 'Identifiant',
		helpTextTitle: "Identifiant unique de l'organisation",
		helpText: "Il servira pour la rechercher à travers l'annuaire.",
		path: 'identifiant',
		type: 'string',
		modifiable: true,
		tag: 'main',
	},
	{
		name: 'Nom commun',
		helpTextTitle: " Nom commun de l'organisation",
		helpText:
			" Il servira pour la rechercher à travers l'annuaire. Caractères autorisés alphabétiques chiffres apostrophes espaces tirets",
		path: 'attributes.commun_name',
		type: 'string',
		modifiable: true,
		tag: 'main',
	},
	{
		name: 'Adresse e-mail',
		helpTextTitle: "Adresse de messagerie de l'organisation",
		helpText: "Il servira pour la rechercher à travers l'annuaire.",
		path: 'attributes.mail',
		type: 'string',
		modifiable: true,
		tag: 'main',
	},
	{
		name: 'Numéro de téléphone',
		helpTextTitle: " Numéro de téléphone de l'organisation ",
		helpText:
			'Entre 1 et 25 caractères numériques, points, tirets, parenthèses, signe plus, et espaces uniquement. ',
		path: 'attributes.phone_number',
		type: 'string',
		modifiable: true,
		tag: 'main',
	},
	{
		name: 'Description',
		helpText: "Description  de l'organisation",
		path: 'attributes.description',
		type: 'string',
		modifiable: true,
		tag: 'main',
	},
	{
		name: 'Organisation',
		helpText: " Organisation d'appartenance de l'organisation ",
		path: 'attributes.organisation',
		type: 'string',
		modifiable: true,
		tag: 'main',
	},
	{
		name: 'Dernière modification',
		path: 'metadatas.modifyTimestamp',
		type: 'string',
		modifiable: false,
		tag: 'advanced',
	},
	{
		name: "Identification de l'entreprise",
		path: 'address.ligne1',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'Identité du destinataire et/ou service',
		path: 'address.ligne2',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'Entrée, tour, bâtiment, immeuble, résidence',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'address.ligne3',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'Numéro et libellé de la voie',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'address.ligne4',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'Lieu dit ou boîte postale ',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'address.ligne5',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'Code postal et localité de destination ',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'address.ligne6',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'Pays ',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'address.ligne7',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'Propriétés',
		helpTextTitle: "Propriétés de l'organisation",
		helpText:
			'Ajouter une propriété à saisir en cliquant sur "Ajouter un champ". Supprimer une propriété saisie en vidant le champ ou en cliquant sur la croix rouge à droite du champ. Aucune limite d\'ajout.',
		path: 'attributes.properties',
		type: 'list',
		tag: 'properties',
		modifiable: true,
		addTitle: 'Ajouter une propriété',
		deleteTitle: 'Supprimer une propriété',
	},
];
