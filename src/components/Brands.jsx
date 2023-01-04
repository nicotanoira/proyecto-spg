import { Box, Typography } from "@mui/material";
import React from "react";
import BostonWhaler from "../assets/boston-whaler.svg";
import SeaRay from "../assets/sea-ray.svg";
import { Link } from "react-router-dom";


const Brands = () => {
	const styles = {
		container: {
			height: "16.5rem",
			backgroundColor: "#F9F8F4",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
		},
		text: { marginTop: "4rem", marginBottom: "-4rem" },
		logos: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			gap: "4rem",
			marginBottom: "-6rem",
		},
	};
	return (
		<Box sx={styles.container}>
			<Box sx={styles.text}>
				<Typography variant="h7" gutterBottom>
					BRANDS THAT
				</Typography>
				<Typography variant="h4" gutterBottom>
					TRUSTED US
				</Typography>
			</Box>
			{/* //logos */}
			<Box sx={styles.logos}>
				<Box>
					<a target="_blank" href="https://www.searay.lat/lat/en.html" >
						<Box component="img" src={SeaRay} width={295} />
					</a>
				</Box>
				<Box>
					<a target="_blank" href="https://www.bostonwhaler.com/" >
						<Box component="img" src={BostonWhaler} width={295} />
					</a>
				</Box>
			</Box>
		</Box>
	);
};

export default Brands;
