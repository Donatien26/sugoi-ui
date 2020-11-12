import {
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	Typography,
} from '@material-ui/core';
import React from 'react';
import Title from '../commons/title/title';
import MainFeaturedPost from './landingpage/landingpage';
import { useReactOidc } from '@axa-fr/react-oidc-context';

const Home = () => {
	const { oidcUser } = useReactOidc();
	let roles = oidcUser?.profile.roles;
	return (
		<>
			<Title
				title={
					'Service Unifié de Gestion des Openldaps Internes'
				}
			/>
			<MainFeaturedPost />
			<Grid
				container
				direction="column"
				justify="center"
				spacing={5}
			>
				{oidcUser ? (
					<Grid item>
						<Card>
							<CardHeader title="Vos droits: " />
							<Divider />
							<CardContent>
								<Typography
									variant="body1"
									component="p"
								>
									{roles &&
									roles?.length > 0
										? roles?.map(
												(
													role: string,
													i: string,
												) => (
													<ul
														key={
															'role' +
															i
														}
													>
														{
															role
														}
													</ul>
												),
										  )
										: "Vous n'avez aucun droits"}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				) : null}
			</Grid>
		</>
	);
};

export default Home;
