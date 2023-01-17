import React from "react";
import { Box, Container } from "@mui/system";
import { Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReactPlayer from "react-player";

export default function VideoBanner() {
	const styles = {
		container: {
			padding: "5rem",
			backgroundColor: "red",
			display: "flex",
			// position: "relative",
			"@media (min-width: 600px)": {
				padding: "5rem 0",
			},
			background:
				"linear-gradient(90deg, rgba(235, 233, 228, 0.55) 0%, rgba(255, 255, 255, 0) 88.02%);",
		},
		leftContainer: {
			display: "flex",
			justifyContent: "flex-end",
			// alignItems: "center",
			flex: "1 0 65%",
			alignItems: "flex-end",
		},
		rightContainer: {
			flex: "1 0 35%",
			display: "flex",
			paddingLeft: "5rem",
			flexDirection: "column",
			alignItems: "start",
			justifyContent: "center",
			width: "fit-content",
		},
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
			fontSize: "75%",
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

	const company = "SEARAY";
	const model = "400SLX";
	const text =
		"3D configurator to help your<br>clients feel your product like<br>their own.";
	const video3D =
		"https://www.youtube.com/watch?v=Yu7myWY8tVU&ab_channel=ConstanzaAgnoletti";

	return (
		<Container maxWidth="100vw" sx={styles.container}>
			<Box sx={styles.leftContainer}>
				<ReactPlayer
					style={{
						flexDirection: "flex-end",
					}}
					width="90%"
					height="60vh"
					url={video3D}
				/>
			</Box>

			<Box sx={styles.rightContainer}>
				<Typography
					variant="h2"
					fontWeight="bold"
					sx={{ fontSize: "100%", letterSpacing: "3px" }}
				>
					{company}
				</Typography>
				<Typography
					variant="h1"
					sx={{ fontSize: "350%", letterSpacing: "2px", marginBottom: "1rem" }}
				>
					{model}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontSize: "125%",
						whiteSpace: "pre-wrap",
						marginBottom: "1rem",
					}}
					gutterBottom
					dangerouslySetInnerHTML={{ __html: text }}
				/>
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
						See our work
					</Button>
				</Box>
			</Box>
		</Container>
	);
}
