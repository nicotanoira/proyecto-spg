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
			backgroundColor: down900px ? "#273339" : "#aabdbd",
			borderRadius: "6px",
		},
		leftColumn: {
			display: down900px && "flex",
			alignItems: down900px && "center",
			justifyContent: down900px && "center",
			flexDirection: down900px && "column",
		},
		text: {
			color: "white",
			width: "auto",
		},
		textTitle: {
			color: "white",
			weight: "1200",
		},
		rightColumn: {
			display: "flex",
			flexDirection: "column",
			flexWrap: "wrap",
		},
		rightColumnRow: {
			flex: "1 0 25%" /* explanation below */,
			margin: "5px",
			height: "100px",
			backgroundColor: "blue",
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
		<Container maxWidth="100vw" sx={styles.container}>
			<Box sx={{ flexGrow: 1, height: "320" }}>
				<Grid sx={styles.leftColumn} container spacing={3}>
					{/* Left column */}
					<Grid item xs={4} sx={{ padding: "0" }}>
						<Box component="img" src={LogoBlanco} sx={styles.logoFooter} />
						{/* <Typography sx={styles.text}>SPG DIGITAL CORP</Typography> */}
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
								alignItems: "ce",
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

							<a href="https://www.instagram.com/spg_digital/">
								<Box component="img" src={ICON_FACEBOOK} sx={styles.icons} />
							</a>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
