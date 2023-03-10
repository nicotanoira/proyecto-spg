import React from "react";
import { Container } from "@mui/system";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import LogoBlanco from "../assets/LogoBlanco.svg";
import ICON_FACEBOOK from "../assets/ICON_FACEBOOK.svg";
import ICON_INSTAGRAM from "../assets/ICON_INSTAGRAM.svg";
import ICON_LINKEDIN from "../assets/ICON_LINKEDIN.svg";
import ICON_EMAIL from "../assets/ICON_EMAIL.svg";
import ICON_PHONE from "../assets/ICON_PHONE.svg";

import { Link } from "react-router-dom";

// const Item = styled(Paper)(({ theme }) => ({
// 	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
// 	...theme.typography.body2,
// 	padding: theme.spacing(1),
// 	textAlign: "center",
// 	color: theme.palette.text.secondary,
// }));

export default function Footer() {
	const theme = useTheme();
	const down960px = useMediaQuery(theme.breakpoints.down("md"));

	const styles = {
		container: {
			display: "flex",
			marginTop: "1em",
			padding: 0,
			"@media (min-width: 600px)": {
				padding: 0,
			},
			backgroundColor: down960px ? "#273339" : "#AABDBD",
			borderRadius: "6px",
			minWidth: "0",
		},
		boxContainer: {
			width: "100%",
			minWidth: "0",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			flexDirection: down960px ? "column" : "row",
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
			gap: !down960px && "2rem",
		},
		rightColumnRow: {
			textAlign: down960px ? "center" : "start",
			display: "flex",
			flexDirection: down960px && "column",
			alignItems: "center",
			marginTop: down960px ? "1rem" : "0",
		},
		icons: {
			width: !down960px ? "37px" : "60px",
			height: !down960px ? "37px" : "60px",
			color: "white",
			marginTop: !down960px ? "15px" : "6rem",
			marginRight: !down960px ? "1.5rem" : 0,
			alignItems: "center",
		},
		iconsContact: {
			textAlign: "start",
			height: "37px",
			width: "37px",
			color: "white",
			marginTop: "15px",
			marginRight: !down960px ? "1.25rem" : 0,
		},
		logoFooter: {
			width: 300,
		},
	};

	return (
		<Container maxWidth="100%" sx={styles.container}>
			<Box sx={styles.boxContainer}>
				{/* Left column */}
				<Box sx={{ padding: "0", margin: "0" }}>
					<Link style={{ textDecoration: "none" }} to={"/"}>
						<Box component="img" src={LogoBlanco} sx={styles.logoFooter} />
					</Link>
				</Box>

				{/* Right column */}
				<Box sx={styles.rightColumn}>
					{/* Phone */}
					<Box
						// SX for MARGIN TOP for LOGO REPSONSIVE
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
							<Typography sx={styles.textTitle}>Phone</Typography>
							<Typography sx={styles.text}>+01 (305) 790 - 2129</Typography>
						</Box>
					</Box>

					{/* Email */}
					<Box sx={styles.rightColumnRow}>
						<Box component="img" src={ICON_EMAIL} sx={styles.iconsContact} />
						<Box sx={{}}>
							<Typography sx={styles.textTitle}>Email</Typography>
							<Typography sx={styles.text}>
								Sebastian@spgdigitalcorp.com
							</Typography>
						</Box>
					</Box>

					{/* Location */}

					{/* Social Media */}
					<Box
						sx={{
							textAlign: "start",
							marginBottom: "0.25rem",
							display: "flex",
							justifyContent: down960px ? "space-around" : "start",
						}}
					>
						<a rel="noreferrer" target="_blank" href="https://www.instagram.com/spg_digital/">
							<Box component="img" src={ICON_INSTAGRAM} sx={styles.icons} />
						</a>

						<a
							rel="noreferrer" target="_blank"
							href="https://www.linkedin.com/company/spg-digital/about//"
						>
							<Box component="img" src={ICON_LINKEDIN} sx={styles.icons} />
						</a>

						<a
							rel="noreferrer" target="_blank"
							href="https://www.facebook.com/profile.php?id=100088834549930"
						>
							<Box component="img" src={ICON_FACEBOOK} sx={styles.icons} />
						</a>
					</Box>
				</Box>
			</Box>
		</Container>
	);
}
