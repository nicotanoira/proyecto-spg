import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Laptop from "../assets/Laptop.svg";
import Magnet from "../assets/Magnet.svg";
import Puzzle from "../assets/Puzzle.svg";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { height } from "@mui/system";

const Values = () => {
	const theme = useTheme();
	const down600px = useMediaQuery(theme.breakpoints.down("sm"));
	const down900px = useMediaQuery(theme.breakpoints.down("md"));
	const down1200px = useMediaQuery(theme.breakpoints.down("lg"));
	const styles = {
		container: {
			width: "100vw",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			gap: down1200px && "2rem",
			paddingBottom: "4rem",	
		},
		text: {
			textAlign: "center",
			marginTop: "4rem",
		},
		cardContainers: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		card: {
			boxShadow: { xs: "0px 4px 10px rgba(123, 122, 120, 0.2)", md: 0 },
			borderRadius: { xs: "100px", md: 0 },
			display: "flex",
			alignItems: "center",
			textAlign: { xs: "start", md: "center" },
			width: "90%",
		},
		cardInverted: {
			boxShadow: { xs: "0px 4px 10px rgba(123, 122, 120, 0.2)", md: 0 },
			borderRadius: { xs: "100px", md: 0 },
			display: "flex",
			flexDirection: "row-reverse",
			alignItems: "center",
			textAlign: { xs: "start", md: "center" },
			width: "90%",
		},

		images: {
			width: {xs: 100, sm: 200, md: 300, lg: 350, },
			padding: { xs: "1.5rem 0 1.5rem 1.5rem", lg: 0 },
		},
		
		laptop: {
			display: "flex",
			alignItems: "center",
			transform: !down1200px && "translateX(-12rem)",
			gap: "3rem",
		},

		magnet: {
			display: "flex",
			alignItems: "center",
			gap: "3rem",
			textAlign: "end",
			marginLeft: !down1200px && "26rem",
			
		},
		puzzle: {
			display: "flex",
			alignItems: "center",
			gap: "3rem",
			transform: !down1200px && "translateX(-12rem)",
		},
		textBox: {
			padding: "0 1.5rem 0 1rem",
			width: { xs: "100%",  md: 450},
		},
		textTitle: {
			fontSize: {  xs: "12px", sm: "20px", md: "25px" },
		},
		textDescription: { 
			fontSize: { xs: "10px", sm: "17px", md: "18px" } 
		},
	};
	
	return (
		<Box sx={styles.container}>
			<Box sx={styles.text}>
				<Typography
					variant="h7"
					gutterBottom
					sx={{ fontSize: { xs: "17px", md: "20px" } }}
				>
					OUR VISION
				</Typography>
				<Typography
					variant="h4"
					sx={{ fontSize: { xs: "35px", md: "50px" } }}
					gutterBottom
				>
					AND VALUES
				</Typography>
			</Box>


			
				{/* LAPTOP */}
				<Box sx={ down900px ? styles.card : styles.laptop }>
					<Box component="img" src={Laptop} sx={styles.images} />
					<Box  sx={styles.textBox}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={styles.textTitle}
						>
							EVERY DETAIL IS IMPORTANT
						</Typography>
						<Typography
							variant="body2"
							gutterBottom
							sx={styles.textDescription}
						>
							Design, development and technology teams focused on creating state
							of the art atelier experiences for your customers
						</Typography>
					</Box>
				</Box>
				{/* MAGNET */}
				<Box sx={ down900px ? styles.cardInverted : styles.magnet }>
					<Box sx={styles.textBox}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={styles.textTitle}
						>
							THE ACCURACY
						</Typography>
						<Typography
							variant="body2"
							gutterBottom
							sx={styles.textDescription}
						>
							We are here to provide you the best solutions to enhance your
							customer's experience. You have great products, we will make sure
							your clients can experience them.
						</Typography>
					</Box>{" "}
					<Box component="img" src={Magnet} sx={styles.images} />
				</Box>
				{/* PUZZLE */}
				<Box sx={ down900px ? styles.card : styles.puzzle }>
					<Box component="img" src={Puzzle} sx={styles.images} />
					<Box sx={styles.textBox}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={styles.textTitle}
						>
							YOUR CLIENTS ARE OUR CLIENTS
						</Typography>
						<Typography
							variant="body2"
							gutterBottom
							sx={styles.textDescription}
						>
							Your customer's buying experience is your brand and the image you
							sell them; we know that. We have the tools to make them inmerse
							into your products and brand.
						</Typography>
					</Box>
				</Box>
			
		</Box>
	);
};

export default Values;
