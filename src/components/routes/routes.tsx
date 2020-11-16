import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { withOidcSecure } from '@axa-fr/react-oidc-context';
import Create from '../create/create';
import { Details } from '../details/details';
import Settings from '../settings/settings';
import Search from '../search/search';
import Home from '../home/home';
const Routes = () => {
	return (
		<Switch>
			<Route
				exact
				path="/realm/:realmName/create"
				component={withOidcSecure(Create)}
			/>
			<Route
				exact
				path="/realm/:realmName/detail/user/:id"
				component={withOidcSecure(Details)}
			/>
			<Route
				exact
				path="/settings"
				component={withOidcSecure(Settings)}
			/>
			<Route
				exact
				path="/realm/:realmName/search"
				component={withOidcSecure(Search)}
			/>
			<Route exact path="/" component={Home} />
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
