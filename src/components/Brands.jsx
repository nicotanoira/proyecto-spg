import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import BostonWhaler from "../assets/boston-whaler.svg";
import SeaRay from "../assets/sea-ray.svg";
import { Link } from "react-router-dom";

const Brands = () => {
	const theme = useTheme();
	
	const down900px = useMediaQuery(theme.breakpoints.down("md"));
	const styles = {
		container: {
			backgroundColor: "#F9F8F4",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			margin: "0",
			padding: "0",
		},
		text: {
			paddingTop: "4rem",
			textAlign:"center",
			paddingBottom: !down900px && "-4rem",
			fontFamily: 'Inter',
					
		
		},
		logos: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		
			gap: !down900px && "4rem",
			marginBottom: down900px ? "-2rem" : "-6rem",
		},
	};
	return (
		<Box sx={styles.container}>
			<Box sx={styles.text}>
				<Typography variant="h7" gutterBottom sx={{fontFamily: 'Inter', letterSpacing: "2px"}}>
					BRANDS THAT
				</Typography>
				<Typography variant="h4" gutterBottom sx={{fontFamily: 'Inter', letterSpacing: "2px"}}>
					TRUSTED US
				</Typography>
			</Box>
			{/* //logos */}
			<Box sx={styles.logos}>
				<Box>
					<a target="_blank" href="https://www.searay.lat/lat/en.html">
						<Box component="img" src={SeaRay} width={down900px ? 190 : 295} />
					</a>
				</Box>
				<Box>
					<a target="_blank" href="https://www.bostonwhaler.com/">
						<Box component="img" src={BostonWhaler} width={down900px ? 190 : 295} />
					</a>
				</Box>
			</Box>
		</Box>
	);
};

export default Brands;
