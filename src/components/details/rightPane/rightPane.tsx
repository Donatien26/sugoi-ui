import { Grid } from '@material-ui/core';
import React from 'react';
import { MyPaper } from '../commons/myPaper';
import AddressInformations from './adressInformations';
import AdvancedInformations from './advancedInformations';
import RightInformations from './rightInformations';
interface props {
	user: any;
}

const RightPane = ({ user }: props) => {
	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="stretch"
			spacing={2}
		>
			<Grid item xs={12}></Grid>
			<Grid item xs={12}>
				<MyPaper
					title="Information complémentaire"
					children={<AdvancedInformations user={user} />}
					collapsible={true}
				/>
			</Grid>
			<Grid item xs={12}>
				<MyPaper
					title="Adresse"
					children={<AddressInformations user={user} />}
					collapsible={true}
				/>
			</Grid>
			<Grid item xs={12}>
				<MyPaper
					title="Droits Applicatifs"
					children={<RightInformations user={user} />}
					collapsible={true}
				/>
			</Grid>
		</Grid>
	);
};

export default RightPane;
