import {
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemText,
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
								<List>
									{roles.map(
										(role: string) => {
											return (
												<ListItem
													key={
														role
													}
												>
													<ListItemText
														key={
															role +
															'text'
														}
														inset={
															true
														}
													>
														-
														{
															role
														}
													</ListItemText>
												</ListItem>
											);
										},
									)}
								</List>
							</CardContent>
						</Card>
					</Grid>
				) : null}
			</Grid>
		</>
	);
};

export default Home;
