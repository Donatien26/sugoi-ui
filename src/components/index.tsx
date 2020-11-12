import {
	AuthenticationProvider,
	InMemoryWebStorage,
	oidcLog,
} from '@axa-fr/react-oidc-context';
import React, { useEffect, useState } from 'react';
import { getConfigFile } from '../configuration/utils';
import App from './app';
import { Loader } from './loader/loader';
import { UserManagerSettings } from 'oidc-client';

const Index = () => {
	const [configuration, setConfiguration] = useState<
		UserManagerSettings | undefined
	>(undefined);
	useEffect(() => {
		getConfigFile().then((r) => setConfiguration(r.auth));
	}, []);

	return configuration === undefined ? (
		<Loader />
	) : (
		<AuthenticationProvider
			configuration={configuration}
			loggerLevel={oidcLog.ERROR}
			isEnabled={true}
			UserStore={InMemoryWebStorage}
		>
			<App />
		</AuthenticationProvider>
	);
};

export default Index;
