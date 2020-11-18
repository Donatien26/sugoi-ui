import { Grid, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByIdAndDomain } from '../../api/api';
import Title from '../commons/title/title';
import LeftPane from './leftPane/leftPane';
import RightPane from './rightPane/rightPane';
import SendLoginModal from './commons/sendLogin/sendLoginModal';

export const Details = () => {
	const { realmName, id } = useParams<any>();
	const [user, setUser] = useState<any>();
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		getUserByIdAndDomain(id, realmName)
			.then((r: any) => setUser(r))
			.catch((err) =>
				enqueueSnackbar("Erreur lors de la requête à l'api", {
					variant: 'error',
					persist: false,
				}),
			);
	}, [id, realmName, enqueueSnackbar]);
	return (
		<>
			<Title title={'Détail du contact ' + id} />
			{user ? (
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<LeftPane user={user} />
					</Grid>
					<Grid item xs={12} md={6}>
						<RightPane user={user} />
					</Grid>
					<Grid item xs={12}>
						<Grid
							container
							direction="row"
							justify="center"
							spacing={3}
						>
							<Grid item>
								<SendLoginModal />
							</Grid>
							<Grid item>
								<Button
									variant="contained"
									color="default"
								>
									Réinitialiser le mot de
									passe
								</Button>
							</Grid>
							<Grid item>
								<Button
									variant="contained"
									color="primary"
									onClick={() =>
										console.log(user)
									}
								>
									Enregistrer les
									modifications
								</Button>
							</Grid>
							<Grid item>
								<Button
									variant="contained"
									color="secondary"
								>
									Supprimer
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			) : null}
		</>
	);
};
