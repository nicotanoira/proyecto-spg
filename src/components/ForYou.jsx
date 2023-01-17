import {
	Box,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React from "react";

import Member1 from "../assets/Member1.png";
import Member2 from "../assets/Member2.png";
import Member3 from "../assets/Member3.png";
const ForYou = () => {
	const theme = useTheme();
	const down600px = useMediaQuery(theme.breakpoints.down("sm"));
	const down900px = useMediaQuery(theme.breakpoints.down("md"));
	const down1200px = useMediaQuery(theme.breakpoints.down("lg"));

	const styles = {
		container: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			padding: 0,
			"@media (min-width: 600px)": {
				padding: 0,
			},
			background:
				"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F3F3EF 100%)",
			// minWidth: "100vw",
			maxWidth: "100vw",
			padding: "2rem",
		},
		containerLeftColumn: {
			display: "flex",
			flexDirection: "column",
			paddingLeft: "1rem",
			gap: "1rem",
			marginLeft: { xs: "-10rem" },
		},
		boxLeftTitle: {
			textAlign: "right",
			textAlign: "center",
			marginBottom: "-1rem",
			fontSize: ".7rem",
		},
		boxLowerLeftListItems: { margin: "1rem", textAlign: "end" },
		upperTitle: { fontSize: ".9rem", fontWeight: "bold" },
		lowerTitle: { fontSize: ".7rem" },
		barra: {
			height: "15rem",
			border: "1px solid black",
			width: "0px",
			margin: "0 1rem ",
		},
		text: { textAlign: "center", marginTop: "4rem" },

		team: {
			display: "flex",
			alignItems: "center",
			marginTop: { xs: "0", md: "-7rem" },
			marginRight: { xs: "-10rem", md: "0" },
			// justifyContent: { xs: "end", md: "0" },
			gap: { xs: "3px", md: "10rem" },
			flexDirection: { xs: "column", md: "row" },
			paddingRight: { xs: "2rem", md: "" },
		},
		member: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: { xs: "row", md: "column" },
			gap: { xs: ".5rem", md: "" },
		},
		member2: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: { xs: "row", md: "column" },
			marginTop: { xs: "0", md: "10rem" },
			gap: { xs: "1rem", md: "" },
		},
	};
	return (
		<Container maxWidth={"100%"} sx={styles.container}>
			<Box
				sx={{
					display: "flex",
					justifyContent: { xs: "center" },
					flexDirection: { xs: "row", md: "column" },
				}}
			>
				{down900px && (
					<Box sx={styles.containerLeftColumn}>
						{/* Upper Title */}
						<Box sx={styles.boxLeftTitle}>
							<Typography variant="span " sx={styles.upperTitle}>
								ABOUT
							</Typography>
							<Typography variant="h4">SPG</Typography>
						</Box>

						{/* Lower List */}
						<Box sx={styles.boxLowerLeftList}>
							<Box sx={styles.boxLowerLeftListItems}>
								<Typography variant="h6" sx={styles.upperTitle}>
									+ 10 years
								</Typography>
								<Typography sx={styles.lowerTitle}>in the field</Typography>
							</Box>

							<Box sx={styles.boxLowerLeftListItems}>
								<Typography variant="h6" sx={styles.upperTitle}>
									+ 100 projects
								</Typography>
								<Typography sx={styles.lowerTitle}>customized</Typography>
							</Box>

							<Box sx={styles.boxLowerLeftListItems}>
								<Typography variant="h6" sx={styles.upperTitle}>
									International
								</Typography>
								<Typography sx={styles.lowerTitle}>availability</Typography>
							</Box>
						</Box>
					</Box>
				)}
				{!down900px && (
					<Box sx={styles.text}>
						<Typography
							variant="h7"
							gutterBottom
							sx={{
								fontSize: { xs: "17px", md: "20px" },
								letterSpacing: "2px",
							}}
						>
							WE ARE HERE
						</Typography>
						<Typography
							variant="h4"
							gutterBottom
							sx={{
								fontSize: { xs: "35px", md: "50px" },
								letterSpacing: "2px",
							}}
						>
							FOR YOU
						</Typography>
					</Box>
				)}
				{/* BARRA */}
				{down900px && <Box sx={styles.barra} />}
				<Box sx={styles.team}>
					<Box sx={styles.member}>
						<Box
							component="img"
							sx={{ marginBottom: "1rem" }}
							src={Member1}
							width={down900px ? 60 : 200}
						/>
						<Box
							sx={{
								flexDirection: { xs: "column" },
								marginRight: { xs: "1.5rem", md: "0" },
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: ".85rem", md: "1.3rem" },
									fontWeight: "bold",
								}}
								gutterBottom
							>
								Sebastian P. Gara
							</Typography>
							<Typography
								sx={{
									fontSize: { xs: ".8rem", md: "" },
								}}
								gutterBottom
							>
								Customer's experience
							</Typography>
						</Box>
					</Box>
					<Box sx={styles.member2}>
						<Box
							component="img"
							sx={{ marginBottom: "1rem" }}
							src={Member3}
							width={down900px ? 60 : 200}
						/>
						<Box sx={{ flexDirection: { xs: "column" } }}>
							<Typography
								sx={{
									fontSize: { xs: ".85rem", md: "1.3rem" },
									fontWeight: "bold",
								}}
								gutterBottom
							>
								Andrea La Rosa
							</Typography>
							<Typography
								sx={{
									fontSize: { xs: ".8rem", md: "" },
								}}
								gutterBottom
							>
								Communication and Press
							</Typography>
						</Box>
					</Box>
					<Box sx={styles.member}>
						<Box
							component="img"
							sx={{ marginBottom: "1rem" }}
							src={Member2}
							width={down900px ? 60 : 200}
						/>
						<Box
							sx={{
								marginRight: { xs: "1.5rem", md: "0" },
							}}
						>
							<Typography
								sx={{
									fontWeight: "bold",
									fontSize: { xs: ".85rem", md: "" },
								}}
								gutterBottom
							>
								Constanza Agnoletti
							</Typography>
							<Typography
								sx={{
									fontSize: { xs: ".8rem", md: "" },
								}}
								gutterBottom
							>
								Ux Ui Design
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default ForYou;
