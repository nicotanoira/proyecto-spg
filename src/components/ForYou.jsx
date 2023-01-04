import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
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
		},
		text: { textAlign: "center", marginTop: "4rem" },

		team: {
			display: "flex",
			alignItems: "center",
			marginTop: "-7rem",
			gap: "10rem",
		},
		member: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
		},
		member2: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			marginTop: "10rem",
		},
	};
	return (
		<Box sx={styles.container}>
			<Box sx={styles.text}>
				<Typography variant="h7" gutterBottom>
					WE ARE HERE
				</Typography>
				<Typography variant="h4" gutterBottom>
					FOR YOU
				</Typography>
			</Box>

			<Box sx={styles.team}>
				<Box sx={styles.member}>
					<Box
						component="img"
						sx={{ marginBottom: "1rem" }}
						src={Member1}
						width={200}
					/>
					<Typography variant="h6" gutterBottom>
						Sebastian P. Gara
					</Typography>
					<Typography variant="" gutterBottom>
						Customer's experience
					</Typography>
				</Box>
				<Box sx={styles.member2}>
					<Box
						component="img"
						sx={{ marginBottom: "1rem" }}
						src={Member3}
						width={200}
					/>
					<Typography variant="h6" gutterBottom>
						Andrea La Rosa
					</Typography>
					<Typography variant="" gutterBottom>
						Communication and Press
					</Typography>
				</Box>
				<Box sx={styles.member}>
					<Box
						component="img"
						sx={{ marginBottom: "1rem" }}
						src={Member2}
						width={200}
					/>
					<Typography variant="h6" gutterBottom>
						Constanza Agnoletti
					</Typography>
					<Typography variant="" gutterBottom>
						Ux Ui Design
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default ForYou;
