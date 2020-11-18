import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Checkbox, Divider, FormControlLabel } from '@material-ui/core';

export default function FormDialog() {
	const [open, setOpen] = React.useState(false);
	const [includeApplicationName, setIncludeApplicationName] = useState(
		false,
	);
	const [includeMail, setIncludeMail] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				variant="contained"
				color="default"
				onClick={handleClickOpen}
			>
				Envoyer le login
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">
					Envoyer le login à G493QP
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Vous pouvez personnaliser le mail d'envoi du
						login.
					</DialogContentText>
					<FormControlLabel
						control={
							<Checkbox
								checked={includeApplicationName}
								onChange={() =>
									setIncludeApplicationName(
										!includeApplicationName,
									)
								}
								name="checkedA"
							/>
						}
						label=" Inclure le nom de l'application"
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={includeMail}
								onChange={() =>
									setIncludeMail(
										!includeMail,
									)
								}
								name="checkedB"
							/>
						}
						label="Inclure un mail d'assistance"
					/>
					<Divider />
					<DialogContentText>Bonjour,</DialogContentText>
					<DialogContentText>
						Suite à votre demande, voici votre
						identifiant :G493QP
					</DialogContentText>
					<DialogContentText>
						Cordialement,
					</DialogContentText>
					<TextField
						margin="dense"
						id="name"
						label="signature"
						type="email"
						fullWidth
						value="assistance insee"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Subscribe
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
