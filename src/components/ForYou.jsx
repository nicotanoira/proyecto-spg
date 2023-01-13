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
			background:
				"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F3F3EF 100%)",
			paddingBottom: "2rem",
			marginTop: { xs: "10rem", md: "0" },
		},
		text: { textAlign: "center", marginTop: "4rem" },

		team: {
			display: "flex",
			alignItems: "center",
			marginTop: { xs: "0", md: "-7rem" },
			justifyContent: { xs: "end", md: "0" },
			gap: { xs: "2px", md: "10rem" },
			flexDirection: { xs: "column", md: "row" },
		},
		member: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: { xs: "row", md: "column" },
		},
		member2: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: { xs: "row", md: "column" },
			marginTop: { xs: "0", md: "10rem" },
		},
	};
	return (
		<Box sx={styles.container}>
			{!down900px && (
				<Box sx={styles.text}>
					<Typography variant="h7" gutterBottom>
						WE ARE HERE
					</Typography>
					<Typography variant="h4" gutterBottom>
						FOR YOU
					</Typography>
				</Box>
			)}
			<Box sx={styles.team}>
				<Box sx={styles.member}>
					<Box
						component="img"
						sx={{ marginBottom: "1rem" }}
						src={Member1}
						width={down900px ? 80 : 200}
					/>
					<Box
						sx={{ flexDirection: { xs: "column" }, fontSize: { xs: "12px" } }}
					>
						<Typography
							sx={{
								fontSize: { xs: "13px", md: "1.3rem" },
								fontWeight: "bold",
							}}
							gutterBottom
						>
							Sebastian P. Gara
						</Typography>
						<Typography variant="" gutterBottom>
							Customer's experience
						</Typography>
					</Box>
				</Box>
				<Box sx={styles.member2}>
					<Box
						component="img"
						sx={{ marginBottom: "1rem" }}
						src={Member3}
						width={down900px ? 80 : 200}
					/>
					<Box
						sx={{ flexDirection: { xs: "column" }, fontSize: { xs: "12px" } }}
					>
						<Typography
							sx={{
								fontSize: { xs: "13px", md: "1.3rem" },
								fontWeight: "bold",
							}}
							gutterBottom
						>
							Andrea La Rosa
						</Typography>
						<Typography variant="" gutterBottom>
							Communication and Press
						</Typography>
					</Box>
				</Box>
				<Box sx={styles.member}>
					<Box
						component="img"
						sx={{ marginBottom: "1rem" }}
						src={Member2}
						width={down900px ? 80 : 200}
					/>
					<Box
						sx={{
							flexDirection: { xs: "column" },
							fontSize: { xs: "12px" },
							fontSize: { xs: "12px" },
						}}
					>
						<Typography
							sx={{
								fontSize: { xs: "13px", md: "1.3rem" },
								fontWeight: "bold",
							}}
							gutterBottom
						>
							Constanza Agnoletti
						</Typography>
						<Typography variant="" gutterBottom>
							Ux Ui Design
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default ForYou;
