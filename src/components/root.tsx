import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/home';
import Create from './create/create';
import { Details } from './details/details';
import Search from './search/search';
import Settings from './settings/settings';
import { withOidcSecure } from '@axa-fr/react-oidc-context';
const Root = () => {
	return (
		<Switch>
			<Route
				exact
				path="/realm/:id/create"
				component={withOidcSecure(Create)}
			/>
			<Route
				exact
				path="/detail/:id"
				component={withOidcSecure(Details)}
			/>
			<Route
				exact
				path="/settings"
				component={withOidcSecure(Settings)}
			/>
			<Route
				exact
				path="/realm/:realm"
				component={withOidcSecure(Search)}
			/>
			<Route exact path="/" component={Home} />
			<Redirect to="/" />
		</Switch>
	);
};

export default Root;
