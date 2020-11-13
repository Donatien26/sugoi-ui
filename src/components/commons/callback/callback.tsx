import { useReactOidc } from '@axa-fr/react-oidc-context';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './../loader/loader';
import jwt_decode from 'jwt-decode';
import { tokenChanged } from './../../../redux/actions/user';
import { RootState } from '../../../configuration/store-configuration';

const Callback = () => {
	const { oidcUser } = useReactOidc();
	const dispatch = useDispatch();
	const { config } = useSelector((state: RootState) => state.app);

	useEffect(() => {
		if (oidcUser) {
			const payload = {
				config: config,
				token: jwt_decode(oidcUser.access_token),
			};
			dispatch(tokenChanged(payload));
		}
	}, [oidcUser, dispatch, config]);
	return <Loader />;
};

export default Callback;
