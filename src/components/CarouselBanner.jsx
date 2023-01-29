import React from "react";
import { Box, Container } from "@mui/system";
import { Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
	firstImage,
	secondImage,
	thirdImage,
	fourthImage,
	company,
	model,
	text,
	buttonText,
} from "../constants/renderings/carouselBanner.js";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function CarouselBanner() {
	const theme = useTheme();
	const AutoplaySlider = withAutoplay(AwesomeSlider);
	const down1200px = useMediaQuery(theme.breakpoints.down("lg"));
	const styles = {
		container: {
			padding: { xs: "3rem 0", lg: "5rem" },
			gap: { xs: "2rem", lg: "unset" },
			backgroundColor: "red",
			display: "flex",
			alignItems: { xs: "center", lg: "unset" },
			flexDirection: { xs: "column-reverse", lg: "row" },

			background: "linear-gradient(180deg, #FFFFFF 0%, #F3F3EF 100%)",
		},
		carouselContainer: {
			display: "flex",
			justifyContent: { xs: "center", lg: "flex-start" },
			flex: "1 0 75%",
			alignItems: "flex-start",
		},
		textContainer: {
			flex: "1 0 25%",
			display: "flex",
			paddingRight: { xs: "unset", lg: "5rem" },

			textAlign: { xs: "center", lg: "end" },

			flexDirection: "column",
			alignItems: "end",
			justifyContent: "center",
			width: "fit-content",
		},
		textBox: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
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
					<Box sx={{ textAlign: { xs: "center", lg: "end" }, width: "100%" }}>
						<Typography
							variant="h2"
							sx={{ fontSize: "130%", letterSpacing: "3px", fontWeight: "500" }}
						>
							{company}
						</Typography>
						<Typography
							variant="h1"
							sx={{
								fontSize: { xs: "260%", xl: "310%" },
								letterSpacing: "2px",
								marginBottom: "1rem",
								fontWeight: "500",
							}}
						>
							{model}
						</Typography>
					</Box>
					<Box>
						<Typography
							variant="body1"
							sx={{
								fontSize: { xs: "100%", xl: "125%" },
								whiteSpace: "pre-wrap",
								marginBottom: "2rem",
							}}
							gutterBottom
							dangerouslySetInnerHTML={{ __html: text }}
						/>
					</Box>
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
							// variant='outlined'
						>
							{buttonText}
						</Button>
					</Box>
				</Box>
			</Box>

			<Box sx={styles.carouselContainer}>
				<AutoplaySlider
					transitionDelay={0}
					play={true}
					cancelOnInteraction={false} // should stop playing on user interaction
					interval={3000}
					bullets={false}
					style={{
						width: down1200px ? "90vw" : "90%",
						height: down1200px ? "35vh" : "77vh",
					}}
					media={[
						{ source: firstImage },
						{ source: thirdImage },
						{ source: fourthImage },
					]}
				/>
			</Box>
		</Container>
	);
}
