import React from "react";
import { Box, Container } from "@mui/system";
import { Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReactPlayer from "react-player";
import {
	video2D,
	company,
	model,
	text,
	buttonText,
} from "../constants/services2D/rightVideoBanner.js";

export default function RightVideoBanner() {
	const theme = useTheme();
	const down1200px = useMediaQuery(theme.breakpoints.down("lg"));
	const styles = {
		container: {
			padding: "5rem",
			backgroundColor: "red",
			display: "flex",
			// position: "relative",
			"@media (min-width: 600px)": {
				padding: "5rem 0",
			},
			alignItems: { xs: "center", lg: "unset" },
			flexDirection: { xs: "column-reverse", lg: "row" },
			background: "linear-gradient(180deg, #FFFFFF 0%, #F3F3EF 100%)",
		},
		videoContainer: {
			display: "flex",
			justifyContent: "flex-start",
			// alignItems: "center",
			flex: "1 0 75%",
			alignItems: "flex-start",
			width: { xs: "100vw", lg: "unset" },
			transform: {
				xs: "translateX(1.2rem)",
				sm: "translateX(1.8rem)",
				md: "translateX(2.6rem)",
				lg: "translateX(3.5rem)",
				xl: "unset",
			},
			paddingBottom: { xs: "2rem", lg: "unset" },
		},
		textContainer: {
			flex: "1 0 25%",
			display: "flex",
			padding: { xs: "unset", lg: "4rem" },

			flexDirection: "column",
			alignItems: "end",
			justifyContent: "center",
			width: "fit-content",
		},
		textBox: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			textAlign: { xs: "center", lg: "right" },
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
			alignSelf: "center",
			display: "flex",

			// Text
			gap: "2rem",
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
				<Box sx={styles.textBox}>
					<Box sx={{ width: "100%" }}>
						<Typography
							variant="h2"
							sx={{ fontSize: "130%", letterSpacing: "3px", fontWeight: "500" }}
						>
							{company}
						</Typography>
						<Typography
							variant="h1"
							sx={{
								fontSize: { xs: "350%", lg: "310%" },
								fontWeight: 500,
								letterSpacing: "2px",
								marginBottom: "rem",
							}}
						>
							{model}
						</Typography>
					</Box>
					<Typography
						variant="body1"
						sx={{
							fontSize: { xs: "100%", lg: "120%" },
							whiteSpace: "pre-wrap",
							marginBottom: "2rem",
						}}
						gutterBottom
						dangerouslySetInnerHTML={{ __html: text }}
					/>
					<a
						target="_blank"
						rel="noreferrer"
						style={{ textDecoration: "none" }}
						href="https://www.bostonwhaler.com/build-and-price/boat-configurator.420OR.html"
					>
						<Box sx={styles.flexButton}>
							<Button
								sx={styles.button}
								endIcon={
									<ArrowForwardIosIcon
										sx={{
											mr: "-3rem",
											alignSelf: "flex-end",
										}}
									/>
								}
							>
								{buttonText}
							</Button>
						</Box>
					</a>
				</Box>
			</Box>

			<Box sx={styles.videoContainer}>
				<ReactPlayer
					style={{
						flexDirection: "flex-start",
					}}
					width="90%"
					height={down1200px ? "35vh" : "77vh"}
					url={video2D}
				/>
			</Box>
		</Container>
	);
}
