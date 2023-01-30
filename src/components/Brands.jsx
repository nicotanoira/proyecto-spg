import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import BostonWhaler from "../assets/boston-whaler.svg";
import SeaRay from "../assets/sea-ray.svg";

const Brands = () => {
	const theme = useTheme();

	const down900px = useMediaQuery(theme.breakpoints.down("md"));
	const styles = {
		container: {
			backgroundColor: "#F9F8F4",
			width: "100vw",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			margin: "0",
			padding: "0",
		},
		text: {
			paddingTop: "4rem",
			textAlign: "center",
			paddingBottom: { xs: "-4rem" },
		},
		logos: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			marginTop: down900px ? "-2rem" : "-6rem",
			gap: !down900px && "4rem",
			marginBottom: down900px ? "-2rem" : "-6rem",
		},
	};
	return (
		<Box sx={styles.container}>
			<Box sx={styles.text}>
				<Typography
					variant="h7"
					sx={{ fontSize: { xs: "17px", md: "20px" }, letterSpacing: "2px" }}
					gutterBottom
				>
					BRANDS THAT
				</Typography>
				<Typography
					variant="h4"
					sx={{ fontSize: { xs: "35px", md: "50px" }, letterSpacing: "2px" }}
					gutterBottom
				>
					TRUSTED US
				</Typography>
			</Box>
			{/* //logos */}
			<Box sx={styles.logos}>
				<Box>
					<a rel="noreferrer" target="_blank" href="https://www.searay.lat/lat/en.html">
						<Box component="img" src={SeaRay} width={down900px ? 190 : 350} />
					</a>
				</Box>
				<Box>
					<a rel="noreferrer" target="_blank" href="https://www.bostonwhaler.com/">
						<Box
							component="img"
							src={BostonWhaler}
							width={down900px ? 190 : 350}
						/>
					</a>
				</Box>
			</Box>
		</Box>
	);
};

export default Brands;
