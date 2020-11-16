import React from 'react';
import {
	Card,
	CardContent,
	CardHeader,
	Divider,
	List,
	ListItem,
	ListItemText,
} from '@material-ui/core';
import { RootState } from '../../configuration/store-configuration';
import { useSelector } from 'react-redux';
import D from './../../i18n';

const CardRights = () => {
	const roles = useSelector((state: RootState) => state.role);
	return (
		<Card>
			<CardHeader title={D.right_card_title} />
			<Divider />
			<CardContent>
				<List>
					{roles.isAdmin ? (
						<ListItem key="role-admin">
							<ListItemText
								key="role-admin-text"
								inset={true}
							>
								{D.right_card_administrator}
							</ListItemText>
						</ListItem>
					) : null}
					{roles.isReader
						? roles.readerDomains.map(
								(role: string) => (
									<ListItem
										key={
											'role-reader-' +
											role
										}
									>
										<ListItemText
											key={
												'role-reader-text-' +
												role
											}
											inset={true}
										>
											{D.right_card_reader +
												role}
										</ListItemText>
									</ListItem>
								),
						  )
						: null}
					{!roles.isAdmin &&
					!roles.isWriter &&
					!roles.isReader ? (
						<ListItem key={'no-rights'}>
							<ListItemText
								key={'no-rights-text'}
								inset={true}
							>
								{D.right_card_norights}
							</ListItemText>
						</ListItem>
					) : null}
				</List>
			</CardContent>
		</Card>
	);
};

export default CardRights;
