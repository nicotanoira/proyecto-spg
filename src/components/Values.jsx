import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Laptop from "../assets/Laptop.svg";
import Magnet from "../assets/Magnet.svg";
import Puzzle from "../assets/Puzzle.svg";

const Values = () => {
	const theme = useTheme();
	const down600px = useMediaQuery(theme.breakpoints.down("sm"));
	const down900px = useMediaQuery(theme.breakpoints.down("md"));
	const down1200px = useMediaQuery(theme.breakpoints.down("lg"));
	const styles = {
		container: {
			// backgroundColor: "red",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			gap: down1200px && "2rem",
		},
		text: {
			textAlign: "center",
			marginTop: "4rem",
		},
		laptop: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			textAlign: "start",
			transform: !down1200px && "translateX(-12rem)",
			// marginLeft: !down900px && "30rem",

			gap: down1200px ? ".8rem" : "4rem",
		},

		magnet: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			marginLeft: !down1200px && "30rem",
			gap: down1200px ? ".2rem" : "4rem",
			paddingLeft: "1rem",
			textAlign: "end",
		},
		puzzle: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			textAlign: "start",
			transform: !down1200px && "translateX(-15rem)",
			marginLeft: !down1200px && "30rem",
			marginRight: !down1200px && "20rem",
			gap: down1200px ? ".4rem" : "5rem",

			paddingBottom: "4rem",
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
			<Box sx={styles.laptop}>
				<Box component="img" src={Laptop} width={down900px ? 200 : 400} />
				<Box width={down900px ? 200 : 450} sx={{ padding: "1rem" }}>
					<Typography
						variant="subtitle2"
						gutterBottom
						sx={{ fontWeight: "bold", fontSize: { xs: "20px", md: "25px" } }}
					>
						EVERY DETAIL IS IMPORTANT
					</Typography>
					<Typography
						variant="body2"
						gutterBottom
						sx={{ fontSize: { xs: "16px", md: "18px" } }}
					>
						Design, development and technology teams focused on creating state
						of the art atelier experiences for your customers
					</Typography>
				</Box>
			</Box>
			{/* MAGNET */}
			<Box sx={styles.magnet}>
				<Box width={down900px ? 200 : 375} sx={{ padding: ".26rem" }}>
					<Typography
						variant="subtitle2"
						gutterBottom
						sx={{ fontWeight: "bold", fontSize: { xs: "20px", md: "25px" } }}
					>
						THE ACCURACY
					</Typography>
					<Typography
						variant="body2"
						gutterBottom
						sx={{ fontSize: { xs: "16px", md: "18px" } }}
					>
						We are here to provide you the best solutions to enhance your
						customer's experience. You have great products, we will make sure
						your clients can experience them.
					</Typography>
				</Box>{" "}
				<Box component="img" src={Magnet} width={down900px ? 190 : 400} />
			</Box>
			{/* PUZZLE */}
			<Box>
				<Box sx={styles.puzzle}>
					<Box component="img" src={Puzzle} width={down900px ? 175 : 400} />
					<Box width={down900px ? 200 : 400} sx={{ padding: ".4rem" }}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={{
								fontWeight: "bold",
								fontSize: { xs: "20px", md: "25px" },
							}}
						>
							YOUR CLIENTS ARE OUR CLIENTS
						</Typography>
						<Typography
							variant="body2"
							gutterBottom
							sx={{ fontSize: { xs: "16px", md: "18px" } }}
						>
							Your customer's buying experience is your brand and the image you
							sell them; we know that. We have the tools to make them inmerse
							into your products and brand.
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Values;
