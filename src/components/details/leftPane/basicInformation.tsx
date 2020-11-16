import { Grid } from '@material-ui/core';
import React from 'react';
import TextFieldInfo from '../../commons/textfieldInfo/textFieldInfo';
import { toDisplay } from './fieldToDisplay';

interface props {
	user: any;
}

const BasicInformations = ({ user }: props) => {
	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="stretch"
			spacing={2}
		>
			{toDisplay.map((field: any) => (
				<Grid item xs={12}>
					<TextFieldInfo
						name={field.name}
						value={user[field.value]}
						disabled={true}
						helpText={field.helpText}
						helpTextTitle={field.helpTextTitle}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default BasicInformations;
