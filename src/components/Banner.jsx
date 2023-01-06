import React from "react";
import { Box, Container } from "@mui/system";
import BannerWeb from "../assets/banner_web-01.png";
import BannerMobile from "../assets/banner-mobile.png";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

export default function Banner() {
	const theme = useTheme();
	const down700px = useMediaQuery("(min-width:700px)");
	const down900px = useMediaQuery(theme.breakpoints.down("md"));
	const down1200px = useMediaQuery(theme.breakpoints.down("lg"));
	const styles = {
		container: {
			padding: "0 0 ",

			position: "relative",
			padding: 0,
			display: "flex",
			alignItems: "start",
			justifyContent: "end",
			"@media (min-width: 600px)": {
				padding: 0,
			},
		},
		image: {
			width: "100%",
			// height: down700px && "80vh",
			padding: "0",
		},
		textBox: {
			position: "absolute",
			display: "flex",
			flexDirection: "column",
			right: "8vw",
			top: "13vh",
			textAlign: "end",
		},
	};

	return (
		<Container maxWidth="100vw" sx={styles.container}>
			<Box sx={styles.textBox}>
				<Box sx={styles.upperTextBox}>
					<Typography
						variant="h5"
						sx={{
							fontSize: down900px ? "12px" : down1200px ? "16px" : "20px",
						}}
						gutterBottom
					>
						DIGITAL AGENCY
					</Typography>
				</Box>

				<Box sx={styles.middleTextBox}>
					<Typography
						variant="h2"
						sx={{
							height: "fit-content",
							fontSize: down900px ? "45px" : down1200px ? "55px" : "70px",
						}}
						gutterBottom
					>
						TAILORING
						<br />
						SOLUTIONS
					</Typography>
				</Box>

				<Box sx={styles.lowerTextBox}>
					<Typography
						variant="body1"
						sx={{ fontSize: down900px ? "14px" : down1200px ? "18px" : "22px" }}
					>
						We have the power to help you strengthen
						<br />
						your customers' shopping experience
					</Typography>
				</Box>
			</Box>

			<Box
				component="img"
				src={down700px ? BannerMobile : BannerWeb}
				sx={styles.image}
			/>
		</Container>
	);
}
