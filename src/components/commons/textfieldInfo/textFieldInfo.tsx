import React from 'react';
import {
	createStyles,
	makeStyles,
	Theme,
	TextField,
	IconButton,
	Typography,
	Box,
	Popover,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

interface props {
	name: string;
	value: string | null;
	helpTextTitle?: string;
	helpText?: string;
	disabled?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			alignItems: 'center',
		},
		margin: {
			margin: theme.spacing(1),
		},
		typography: {
			padding: theme.spacing(1),
		},
	}),
);
const TextFieldInfo = ({
	name,
	value,
	disabled,
	helpTextTitle,
	helpText,
}: props) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
		null,
	);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);

	return (
		<div className={classes.root}>
			<Typography component="div" variant="body1" align="left">
				<Box fontWeight="fontWeightBold" m={1}>
					{name}
				</Box>
			</Typography>
			<IconButton
				aria-label="info"
				className={classes.margin}
				size="small"
				onClick={handleClick}
				color="primary"
			>
				<InfoIcon fontSize="inherit" />
			</IconButton>
			<div style={{ flexGrow: 5 }} />
			<TextField
				variant="outlined"
				label={name}
				name={name}
				disabled={disabled}
				value={value}
				fullWidth
			/>
			<Popover
				id="popover-help"
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<Typography
					component="div"
					variant="body1"
					className={classes.typography}
				>
					<Box fontWeight="fontWeightBold">
						{helpTextTitle}
					</Box>
				</Typography>
				<Typography
					component="div"
					variant="caption"
					className={classes.typography}
				>
					<Box>{helpText}</Box>
				</Typography>
			</Popover>
		</div>
	);
};

export default TextFieldInfo;
