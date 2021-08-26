import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import useStyles from "../Header/styles.js";

const Footer = () => {
	const classes = useStyles();
	return (
		<AppBar position="static" className={classes.footbar}>
			<Container maxWidth="md">
				<Toolbar className={classes.toolbar}>
					<Typography
						variant="body1"
						color="inherit"
						className={classes.center}
					>
						© 2021 Baidelaire
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Footer;
