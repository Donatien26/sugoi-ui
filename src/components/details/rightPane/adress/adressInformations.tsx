import { Grid } from '@material-ui/core';
import React from 'react';
import TextFieldInfo from '../../../commons/textfieldInfo/textFieldInfo';
import { toDisplay } from './fieldToDisplay';

interface props {
	user: any;
}
const AddressInformations = ({ user }: props) => {
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
						object={user}
						disabled={field.modifiable ? true : false}
						helpText={field.helpText}
						helpTextTitle={field.helpTextTitle}
						getFunction={field.getFunction}
						setFunction={field.setFunction}
						varName={field.varName}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default AddressInformations;
