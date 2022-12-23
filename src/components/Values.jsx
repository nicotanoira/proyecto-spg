import React from "react";
import { Box, Typography } from "@mui/material";
import Laptop from "../assets/Laptop.svg";
import Magnet from "../assets/Magnet.svg";
import Puzzle from "../assets/Puzzle.svg";

const Values = () => {
	const styles = {
		container: {},
		// text: { marginTop: "4rem", marginBottom: "-4rem" },
		laptop: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			textAlign: "start",
			marginRight: "20rem",
			gap: "10rem",
		},
		text: {
			marginTop: "5rem",
		},
		magnet: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			marginLeft: "30rem",
			gap: "10rem",
			textAlign: "end",
		},
	};
	return (
		<Box sx={styles.container}>
			<Box sx={styles.text}>
				<Typography variant="h7" gutterBottom sx={{}}>
					OUR VISION
				</Typography>
				<Typography variant="h4" gutterBottom>
					AND VALUES
				</Typography>
			</Box>
			{/* LAPTOP */}
			<Box sx={styles.laptop}>
				<Box component="img" src={Laptop} width={295} />
				<Box width={325}>
					<Typography
						variant="subtitle2"
						gutterBottom
						sx={{ fontWeight: "bold" }}
					>
						EVERY DETAIL IS IMPORTANT
					</Typography>
					<Typography variant="body2" gutterBottom>
						Design, development and technology teams focused on creating state
						of the art atelier experiences for your customers
					</Typography>
				</Box>
			</Box>
			{/* MAGNET */}
			<Box sx={styles.magnet}>
				<Box width={285}>
					<Typography
						variant="subtitle2"
						gutterBottom
						sx={{ fontWeight: "bold" }}
					>
						THE ACCURACY
					</Typography>
					<Typography variant="body2" gutterBottom>
						We are here to provide you the best solutions to enhance your
						customer's experience. You have great products, we will make sure
						your clients can experience them.
					</Typography>
				</Box>{" "}
				<Box component="img" src={Magnet} width={295} sx={{}} />
			</Box>
			{/* PUZZLE */}
			<Box>
				<Box sx={styles.laptop}>
					<Box component="img" src={Puzzle} width={295} />
					<Box width={300}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={{ fontWeight: "bold" }}
						>
							YOUR CLIENTS ARE OUR CLIENTS
						</Typography>
						<Typography variant="body2" gutterBottom>
							Your customer's buying experience is your brand and the image you
							sell them; we know that. We have the tools to make them inmerse
							into your products and brand.
						</Typography>
					</Box>
				</Box>
			</Box>
			{/* //logos */}
			{/* <Box sx={styles.logos}>
				<Box>
					<Box component="img" src={Laptop} width={295} />
				</Box>
				<Box>
					<Box component="img" src={Magnet} width={295} />
				</Box>{" "}
				<Box>
					<Box component="img" src={Puzzle} width={295} />
				</Box>
			</Box> */}
		</Box>
	);
};

export default Values;
