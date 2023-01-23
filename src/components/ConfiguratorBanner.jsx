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
			alignItems: { xs: "center", lg: "unset" },
			justifyContent: { xs: "center", lg: "unset" },
			flexDirection: { xs: "column", lg: "row" },
			padding: { xs: "5rem", lg: "0" },
			"@media (min-width: 600px)": {
				padding: 0,
			},
		},
		rightContainer: {
			width: { xs: "100vw", lg: "100%" },
			transform: { xs: "translateX(-5.5rem)", lg: "unset" },

			marginRight: "4rem",
			display: "flex",
			justifyContent: "start",
		},
		image: {
			paddingTop: { xs: ".5rem", lg: "3rem" },
			paddingLeft: "1rem",
			height: "100%",
		},
		logo: {
			display: { xs: "none", lg: "flex" },
			width: 280,
			height: 280,
			marginBottom: "2rem",
			marginLeft: "-3.3rem",
		},
		leftContainer: {
			display: "flex",
			flex: "1 0 50%",
			flexDirection: "column",
			marginLeft: "5rem",
			width: "fit-content",
			textAlign: { xs: "center", lg: "start" },
			transform: { xs: "translateX(-11rem)", lg: "unset" },
		},
	};

	return (
		<Container maxWidth="100vw" sx={styles.container}>
			<Container maxWidth="100vw" sx={styles.contentContainer}>
				<Container sx={styles.leftContainer}>
					{/* //LOGO */}
					<Box component="img" src={LogoNegro} sx={styles.logo} />

					<Typography
						variant="h3"
						sx={{ fontSize: { xs: "100%", lg: "260%" }, letterSpacing: "3px" }}
					>
						{topTitleBanner}
					</Typography>
					<Typography
						variant="h1"
						sx={{
							fontSize: { xs: "160%", lg: "500%" },
							fontWeight: "bold",
							letterSpacing: { xs: "2px", lg: "5px" },
							width: { xs: "100vw", lg: "auto" },
						}}
						gutterBottom
					>
						{bottomTitleBanner}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							fontSize: { xs: "80%", lg: "200%" },
							whiteSpace: "pre-wrap",
						}}
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
