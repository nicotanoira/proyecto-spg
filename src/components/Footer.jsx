import React from "react";
import { borderRadius, Container } from "@mui/system";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import LogoBlanco from "../assets/LogoBlanco.svg";
import ICON_FACEBOOK from "../assets/ICON_FACEBOOK.svg";
import ICON_INSTAGRAM from "../assets/ICON_INSTAGRAM.svg";
import ICON_LINKEDIN from "../assets/ICON_LINKEDIN.svg";
import ICON_EMAIL from "../assets/ICON_EMAIL.svg";
import ICON_PHONE from "../assets/ICON_PHONE.svg";
import ICON_LOCATION from "../assets/ICON_LOCATION.svg";

import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Facebook } from "@mui/icons-material";
//

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function Footer() {
	const theme = useTheme();
	const down960px = useMediaQuery(theme.breakpoints.down("md"));
	const down1200px = useMediaQuery(theme.breakpoints.down("lg"));
	const down2000px = useMediaQuery(theme.breakpoints.down("xl"));

	console.log("md", down960px);
	console.log("lg", down1200px);
	console.log("xl", down2000px);
	const styles = {
		container: {
			display: "flex",
			justifyContent: "space-around",
			marginTop: "1em",
			padding: 0,
			"@media (min-width: 600px)": {
				padding: 0,
			},
			backgroundColor: down960px ? "#273339" : "#AABDBD",
			borderRadius: "6px",
			minWidth: "0",
			display: "flex"
		},
		boxContainer: {
			minWidth: "0",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-around",
			flexDirection:  down960px ? "column" : "row",
			padding: "2rem 9rem",
		},
		text: {
			color: "white",
			width: "fit-content",
			whiteSpace: "nowrap",
		},
		textTitle: {
			color: "white",
			weight: "1200",
		},
		rightColumn: {
			display: "flex",
			flexDirection: "column",
			padding: "0 2rem",
		},
		rightColumnRow: {
			textAlign: down960px ? "center" : "start",
			display: "flex",
			flexDirection: down960px && "column",
			alignItems: "center",
			marginTop: down960px ? "1rem" : "0",
		},
		// CERRADO
		icons: {
			width: !down960px ? "37px" : "60px",
			height: !down960px ? "37px" : "60px",
			color: "white",
			marginTop: !down960px ? "15px" : "6rem",
			marginRight: !down960px ? "1.5rem" : 0,
			alignItems: "center",
			

		},
		// CERRADO
		iconsContact: {
			textAlign: "start",
			height: "37px",
			width: "37px",
			color: "white",
			marginTop: "15px",
			marginRight: !down960px ? "1.25rem" : 0,
		},
		// CERRADO
		logoFooter: {
			width: 300,
			// height: 320,
			// paddingLeft: !down960px && "2em",
			// paddingRight: down960px && "4rem",
		},
	};

	return (
		<Container maxWidth="100%" sx={styles.container}>
				<Box sx={styles.boxContainer}>
					{/* Left column */}
					<Box sx={{ padding: "0", margin: "0" }}>
						<Link style={{ textDecoration: "none" }} to={'/'}>
							<Box component="img" src={LogoBlanco} sx={styles.logoFooter} />
						</Link>
					</Box>

					

					{/* Right column */}
					<Box sx={styles.rightColumn}>

						{/* Phone */}
						<Box
							sx={{
								textAlign: down960px ? "center" : "start",
								display: "flex",
								flexDirection: down960px && "column",
								alignItems: "center",
								marginTop: down960px ? "4rem" : "0",
							}}
						>
							<Box component="img" src={ICON_PHONE} sx={styles.iconsContact} />
							<Box>
								<Typography sx={styles.textTitle}>
									Phone
								</Typography>
								<Typography sx={styles.text}>+01 (305) 790 - 2129</Typography>
							</Box>
						</Box>

						{/* Email */}
						<Box
							sx={styles.rightColumnRow}
						>
							<Box component="img" src={ICON_EMAIL} sx={styles.iconsContact} />
							<Box sx={{}}>
								<Typography sx={styles.textTitle} >
									Email
								</Typography>
								<Typography sx={styles.text}>
									Sebastian@spgdigitalcorp.com
								</Typography>
							</Box>
						</Box>

						{/* Location */}
						<Box
							sx={styles.rightColumnRow}
						>
							<Box component="img" src={ICON_LOCATION} sx={styles.iconsContact} />
							<Box>
								<Typography sx={styles.textTitle}>
									Location
								</Typography>
								<Typography sx={styles.text}>
									550 ocean 2c drive key Biscayne 33149 
								</Typography>
							</Box>
						</Box>

						{/* Social Media */}
						<Box
							sx={{
								textAlign: "start",
								marginBottom: "0.25rem",
								display: "flex",
								justifyContent: down960px ? "space-around" : "start",
							}}
						>
							<a target="_blank" href="https://www.instagram.com/spg_digital/">
								<Box component="img" src={ICON_INSTAGRAM} sx={styles.icons} />
							</a>

							<a
								target="_blank"
								href="https://www.linkedin.com/company/spg-digital/about//"
							>
								<Box component="img" src={ICON_LINKEDIN} sx={styles.icons} />
							</a>

							<a
								target="_blank"
								href="https://www.facebook.com/profile.php?id=100088834549930/"
							>
								<Box component="img" src={ICON_FACEBOOK} sx={styles.icons} />
							</a>
						</Box>
					</Box>
				</Box>
		</Container>
	);
}
