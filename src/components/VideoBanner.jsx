import React from "react";
import { Box, Container } from "@mui/system";
import { Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReactPlayer from "react-player";
import {
	video3D,
	company,
	model,
	text,
	buttonText,
} from "../constants/services3D/videoBanner.js";

export default function VideoBanner() {
	const theme = useTheme();
	const down1200px = useMediaQuery(theme.breakpoints.down("lg"));
	const styles = {
		container: {
			padding: "5rem",
			backgroundColor: "red",
			display: "flex",
			alignItems: { xs: "center", lg: "unset" },
			flexDirection: { xs: "column", lg: "row" },
			"@media (min-width: 600px)": {
				padding: "5rem 0",
			},
			background: "linear-gradient(180deg, #FFFFFF 0%, #F3F3EF 100%)",
		},
		textContainer: {
			display: "flex",
			justifyContent: "flex-end",
			flex: "1 0 75%",
			alignItems: "flex-end",
			width: { xs: "100vw", lg: "unset" },
			transform: {
				xs: "translateX(-1.3em)",
				sm: "translateX(-2.6rem)",
				md: "translateX(-3.5rem)",
				// lg: "translateX(-3.5rem)",
				xl: "unset",
			},
			paddingBottom: { xs: "2rem", lg: "unset" },
		},
		videoContainer: {
			flex: "1 0 25%",
			display: "flex",
			paddingLeft: { xs: "unset", lg: "5rem" },

			textAlign: { xs: "center", lg: "start" },
			flexDirection: "column",
			alignItems: "start",
			justifyContent: "center",
			width: "fit-content",
		},
		width: { xs: "90vw", lg: "unset" },
		transform: { xs: "translateX(-4.8rem)", lg: "unset" },
		paddingBottom: { xs: "2rem", lg: "unset" },
		flexButton: {
			width: 260,
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			position: "relative",
		},
		button: {
			flex: "1 0 90%",
			// flex: "1 0 95%",
			display: "flex",
			alignSelf: "center",
			display: "flex",
			// alignItems: 'center',
			// justifyContent: 'center',

			// Text
			width: "100%",
			borderRadius: "20px",
			color: "white",
			padding: "8px 10px",
			borderColor: "gray",
			fontSize: "90%",
			fontWeight: "200",
			letterSpacing: "0.5px",
			backgroundColor: "#273339",
			textTransform: "none",
			"&:hover": {
				borderColor: "gray",
				backgroundColor: "gray",
				color: "white",
			},
		},
	};

	return (
		<Container maxWidth="100vw" sx={styles.container}>
			<Box sx={styles.textContainer}>
				<ReactPlayer
					style={{
						flexDirection: "flex-end",
					}}
					width="90%"
					height={down1200px ? "35vh" : "77vh"}
					url={video3D}
					config={{
						youtube: {
						  playerVars: { showinfo: 1 }
						},
					}}
					showChannel={false}
					showBorder={false}
				/>
			</Box>

			<Box sx={styles.videoContainer}>
				<Box>
					<Typography
						variant="h2"
						fontWeight="bold"
						sx={{ fontSize: "100%", letterSpacing: "3px" }}
					>
						{company}
					</Typography>
					<Typography
						variant="h1"
						sx={{
							fontSize: "350%",
							letterSpacing: "2px",
							marginBottom: "1rem",
						}}
					>
						{model}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							fontSize: "125%",
							whiteSpace: "pre-wrap",
							marginBottom: "1rem",
							width: { xs: "max-content", lg: "unset" },
						}}
						gutterBottom
						dangerouslySetInnerHTML={{ __html: text }}
					/>
				</Box>
				<Box sx={styles.flexButton}>
					<Button
						sx={styles.button}
						// startIcon={<ArrowForwardIosIcon
						//     sx={{
						//         ml: "0",
						//         visibility: "hidden",
						//         alignSelf: 'flex-start',
						//     }}
						// />}
						// endIcon={<ArrowForwardIosIcon
						//     sx={{
						//         mr: "0",
						//         alignSelf: "flex-end",
						//     }}
						// />}
						// variant='outlined'
					>
						{buttonText}
					</Button>
				</Box>
			</Box>
		</Container>
	);
}
