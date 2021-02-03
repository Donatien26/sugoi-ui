import React, { useState } from 'react';
import {
	Card,
	CardContent,
	Grid,
	IconButton,
	CardHeader,
	CardActions,
	Collapse,
	Box,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../configuration/store-configuration';
import { Realm } from '../../model/api/realm';
import RealmCard from './realm-card';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandButton from '../commons/expandButton/expand-button';
import Title from '../commons/title/title';
import { useTranslation } from 'react-i18next';

const Settings = () => {
	const realms: Realm[] = useSelector(
		(store: RootState) => store.app.realms,
	);
	const [expand, setExpand] = useState(false);
	const { t } = useTranslation();
	return (
		<>
			<Title title={t('settings.title')} />
			<Card>
				<CardHeader
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title={t('settings.card.title')}
				/>
				<CardContent>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
						spacing={2}
					>
						{realms.map((realm, i) =>
							i < 4 ? (
								<Grid item xs={12} sm={3}>
									<RealmCard
										realm={realm}
									/>
								</Grid>
							) : null,
						)}
					</Grid>
					<Box p={1} />
					<Collapse in={expand}>
						<Grid
							container
							direction="row"
							justify="center"
							alignItems="center"
							spacing={2}
						>
							{realms.map((realm, i) =>
								i > 3 ? (
									<Grid item xs={12} sm={3}>
										<RealmCard
											realm={realm}
										/>
									</Grid>
								) : null,
							)}
						</Grid>
					</Collapse>
				</CardContent>
				<CardActions>
					<Grid
						container
						direction="row"
						justify="flex-end"
						spacing={3}
					>
						<Grid item>
							<ExpandButton
								expand={expand}
								setExpand={setExpand}
							/>
						</Grid>
					</Grid>
				</CardActions>
			</Card>
		</>
	);
};

export default Settings;
