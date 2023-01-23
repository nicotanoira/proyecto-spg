import React from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import FirstImage from "../assets/ILLUSTRACION_BANNER_3D.svg";
import SecondImage from "../assets/ILLUSTRACION_BANNER_2D.svg";
import ThirdImage from "../assets/ILLUSTRACION_BANNER_RENDERINGS.svg";

export default function About() {
	const theme = useTheme();
	const down1200px = useMediaQuery(theme.breakpoints.down("lg"));
	const styles = {
		container: {
			margin: { sm: "0", lg: "6.5rem 0  " },
			padding: 0,
			backgroundColor: "white",
		},
		containerBoxed: {
			display: "flex",
			width: "fit-content",
			margin: "0 auto",
			justifyContent: "center",
		},
		containerLeftColumn: {
			margin: 0,
			display: "flex",
			flexDirection: "column",
		},
		boxLeftTitle: {
			textAlign: "right",
			margin: "1rem",
		},
		boxRightTitle: {
			textAlign: "start",
			margin: "1rem",
		},
		upperTitle: {},
		lowerTitle: {
			fontSize: { xs: "10px",
				sm: "13px",
				md: "1rem",
				lg: "1.3rem",
			},

			xs: "10px",
			sm: "13px",
			// md: "210px",
			// lg: "280px",
			xl: "1.25rem",
		},
		containerRightColumn: {
			display: "flex",
			flexDirection: "column",
		},
		boxLowerLeftList: {
			display: "flex",
			flexDirection: "column",
		},
		boxLowerLeftListItems: {
			textAlign: "right",
			margin: "1rem",
		},
		boxLowerRightList: {
			display: "flex",
			justifyContent: "start",
			fontSize: { xs: "11px", md: "1rem", lg: "1.3rem" },
		},
		boxLowerRightListItems: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			margin: { xs: "8px", lg: "2rem" },
		},
		images: {
			width: {
				xs: "100px",
				sm: "180px",
				md: "210px",
				lg: "280px",
				xl: "320px",
			},
			height: {
				xs: "85px",
				sm: "130px",
				md: "160px",
				lg: "190px",
				xl: "230px",
			},
			backgroundColor: "#F9F8F4",
			borderRadius: "18rem",
			"&:hover": {
				transition: "all .35s ease-out",
				boxShadow: "0px 0px 12px 5px rgba(39, 51, 57, 0.14)",
			},
		},
	};

	return (
		<Container maxWidth="100vw" sx={styles.container}>
			<Box sx={styles.containerBoxed}>
				{/* Left COLUMN */}
				{!down1200px && (
					<Container sx={styles.containerLeftColumn}>
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
								<Typography variant="">in the field</Typography>
							</Box>

							<Box sx={styles.boxLowerLeftListItems}>
								<Typography variant="h6" sx={styles.upperTitle}>
									+ 100 projects
								</Typography>
								<Typography variant="">customized</Typography>
							</Box>

							<Box sx={styles.boxLowerLeftListItems}>
								<Typography variant="h6" sx={styles.upperTitle}>
									International
								</Typography>
								<Typography variant="">availability</Typography>
							</Box>
						</Box>
					</Container>
				)}

				{/* Right Column */}
				<Container sx={styles.containerRightColumn}>
					{/* Upper Title */}
					<Box sx={styles.boxRightTitle}>
						<Typography variant="span " sx={{ fontSize: { xs: "18px" } }}>
							WHAT
						</Typography>
						<Typography variant="h4" sx={{ fontSize: { xs: "35px" } }}>
							WE DO
						</Typography>
					</Box>

					{/* Lower List */}
					<Box sx={styles.boxLowerRightList}>
						<Box sx={styles.boxLowerRightListItems}>
							<Link style={{ textDecoration: "none" }} to="/3D-configurators">
								<Box component="img" src={FirstImage} sx={styles.images} />
							</Link>
							<Typography variant="span" sx={styles.lowerTitle}>
								3D
							</Typography>
							<Typography variant="span" sx={styles.lowerTitle}>
								CONFIGURATORS
							</Typography>
						</Box>

						<Box sx={styles.boxLowerRightListItems}>
							<Link style={{ textDecoration: "none" }} to="/2D-configurators">
								<Box component="img" src={SecondImage} sx={styles.images} />
							</Link>
							<Typography variant="span" sx={styles.lowerTitle}>
								2D
							</Typography>
							<Typography variant="span" sx={styles.lowerTitle}>
								CONFIGURATORS
							</Typography>
						</Box>

						<Box sx={styles.boxLowerRightListItems}>
							<Link style={{ textDecoration: "none" }} to="/2D-configurators">
								<Box component="img" src={ThirdImage} sx={styles.images} />
							</Link>
							<Typography variant="span" sx={styles.lowerTitle}>
								RENDERINGS
							</Typography>
							<Typography variant="span" sx={styles.lowerTitle}>
								STATIC & DYNAMIC
							</Typography>
						</Box>
					</Box>
				</Container>
			</Box>
		</Container>
	);
}
