import React from "react";
import { Box, Container } from "@mui/system";
import LogoNegro from "../assets/LogoNegro.svg";
import { Typography } from "@mui/material";

export default function ConfiguratorBanner({
	topTitleBanner,
	bottomTitleBanner,
	imageBanner,
	descriptionBanner,
}) {
	const styles = {
		container: {
			padding: "0 0 ",
			position: "relative",
			padding: 0,
			"@media (min-width: 600px)": {
				padding: 0,
			},
			background:
				"linear-gradient(90deg, rgba(235, 233, 228, 0.55) 0%, rgba(255, 255, 255, 0) 88.02%);",
		},
		contentContainer: {
			paddingLeft: "2rem",
			display: "flex",
			padding: 0,
			"@media (min-width: 600px)": {
				padding: 0,
			},
			flexDirection: { xs: "column", lg: "row" },
		},
		rightContainer: {
			marginRight: "4rem",
			display: "flex",
			justifyContent: "start",
		},
		image: {
			marginTop: { xs: "-3rem", lg: "3rem" },
			paddingLeft: "1rem",
			height: "100%",
			zIndex: "0",
		},
		leftContainer: {
			display: "flex",
			flex: "1 0 50%",
			flexDirection: "column",
			marginLeft: { xs: "none", lg: "5rem" },
			marginTop: { xs: "4rem", lg: "0" },
			width: "fit-content",
			paddingBottom: { xs: "3rem", lg: "5rem" },
			justifyContent: { xs: "center", lg: "start" },
			textAlign: { xs: "center", lg: "start" },
		},
		logo: {
			width: 280,
			height: 280,
			marginBottom: "2rem",
			marginLeft: "-3.3rem",
			display: { xs: "none", lg: "inline" },
		},
		topTitle: {
			fontSize: { xs: "1rem", sm: "1.5", md: "2.5rem" },
			letterSpacing: { xs: "0", sm: "", md: "", lg: "3px" },
			fontWeight: 400,
		},
		bottomTitle: {
			fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
			letterSpacing: { xs: "0", sm: "", md: "", lg: "5px" },
			fontWeight: 500,
		},
		textDescription: {
			fontSize: { xs: ".85rem", sm: "1.2rem", md: "1.4rem", lg: "1.7rem" },
			margin: { xs: "0 1rem", lg: "0" },
			whiteSpace: "pre-wrap",
			zIndex: "1",
			fontWeight: "400",
		},
	};

	return (
		<Container maxWidth="100vw" sx={styles.container}>
			<Container maxWidth="100vw" sx={styles.contentContainer}>
				<Container sx={styles.leftContainer}>
					<Box component="img" src={LogoNegro} sx={styles.logo} />

					<Typography variant="h3" sx={styles.topTitle}>
						{topTitleBanner}
					</Typography>
					<Typography variant="h1" sx={styles.bottomTitle} gutterBottom>
						{bottomTitleBanner}
					</Typography>
					<Typography
						variant="body1"
						sx={styles.textDescription}
						dangerouslySetInnerHTML={{ __html: descriptionBanner }}
					/>
				</Container>

				<Container sx={styles.rightContainer}>
					<Box component="img" src={imageBanner} sx={styles.image} />
				</Container>
			</Container>
		</Container>
	);
}
