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
	const down600px = useMediaQuery(theme.breakpoints.down("sm"));
	const down900px = useMediaQuery(theme.breakpoints.down("md"));
	const down1200px = useMediaQuery(theme.breakpoints.down("lg"));
	const styles = {
		container: {
			marginTop: "1em",
			padding: 0,
			"@media (min-width: 600px)": {
				padding: 0,
			},
			backgroundColor: down900px ? "#273339" : "#aabdbd",
			borderRadius: "6px",
			minWidth: "100vw",
		},
		gridContainer: {
			width: "100%",
			display: down900px && "flex",
			alignItems: down900px && "center",
			justifyContent: down900px && "center",
			flexDirection: down900px && "column",
			marginLeft: down900px && "-4.8rem",
		},
		text: {
			color: "white",
			width: "fit-content",
		},
		textTitle: {
			color: "white",
			weight: "1200",
		},
		rightColumn: {
			display: "flex",
			flexDirection: "column",
		},
		rightColumnRow: {
			flex: "1 0 25%" /* explanation below */,
			height: "100px",
		},
		icons: {
			width: down900px ? "45px" : "37px",
			height: down900px ? "45px" : "37px",
			color: "white",
			marginTop: down900px ? "1.2rem" : "15px",
			alignItems: "center",
			marginRight: "1.5rem",
		},
		iconsContact: {
			textAlign: down900px ? "center" : "start",
			height: "34px",
			color: "white",
			marginTop: "15px",

			marginRight: !down900px && "1.25rem",
		},
		logoFooter: {
			width: 300,
			// height: 320,
			paddingLeft: !down900px && "2em",
			paddingRight: down900px && "4rem",
		},
	};

	return (
		<Container maxWidth={"100%"} sx={styles.container}>
			<Box sx={{ flexGrow: 1, height: "320" }}>
				<Grid sx={styles.gridContainer} container spacing={3}>
					{/* Left column */}
					<Grid item xs={4} sx={{ padding: "0", margin: "0", width: "100%" }}>
						<Link style={{ textDecoration: "none" }} to={'/'}>
							<Box component="img" src={LogoBlanco} sx={styles.logoFooter} />
						</Link>
					</Grid>

					{/* Middle column */}
					<Grid item xs={4} sx={{ height: 300 }}>
						<></>
					</Grid>

					{/* Right column */}
					<Grid item xs={4} sx={styles.rightColumn}>
						<Box
							sx={{
								textAlign: down900px ? "center" : "start",
								display: "flex",
								flexDirection: down900px && "column",
								alignItems: "center",
							}}
						>
							<Box component="img" src={ICON_PHONE} sx={styles.iconsContact} />
							<Box>
								<Typography mt={2} sx={styles.textTitle}>
									Phone
								</Typography>
								<Typography sx={styles.text}>+01 (305) 790 - 2129</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								textAlign: down900px ? "center" : "start",
								display: !down900px && "flex",
							}}
						>
							<Box component="img" src={ICON_EMAIL} sx={styles.iconsContact} />
							<Box sx={{}}>
								<Typography sx={styles.textTitle} mt={2}>
									Email
								</Typography>
								<Typography sx={styles.text}>
									Sebastian@spgdigitalcorp.com
								</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								textAlign: down900px ? "center" : "start",
								display: "flex",
								flexDirection: down900px && "column",
							}}
						>
							<Box
								component="img"
								src={ICON_LOCATION}
								sx={styles.iconsContact}
							/>
							<Box>
								<Typography sx={styles.textTitle} mt={2}>
									Location
								</Typography>
								<Typography sx={styles.text}>
									550 ocean 2c drive key Biscayne 33149
								</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								textAlign: down900px ? "center" : "start",
								marginBottom: "0.25rem",
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
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
