import {
	AuthenticationProvider,
	InMemoryWebStorage,
	oidcLog,
} from '@axa-fr/react-oidc-context';
import React, { useEffect, useState } from 'react';
import { getConfigFile } from '../configuration/utils';
import App from './app';
import { Loader } from './commons/loader/loader';
import { UserManagerSettings } from 'oidc-client';

const Root = () => {
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
			loggerLevel={oidcLog.INFO}
			isEnabled={true}
			UserStore={InMemoryWebStorage}
			// notAuthenticated={NotAuthorized}
			// notAuthorized={NotAuthorized}
			authenticating={Loader}
			callbackComponentOverride={Loader}
			sessionLostComponent={Loader}
		>
			<App />
		</AuthenticationProvider>
	);
};

export default Root;
