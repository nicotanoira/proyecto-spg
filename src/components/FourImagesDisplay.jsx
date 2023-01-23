import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const styles = {
	container: {
		padding: "3rem 9rem",
		display: { xs: "flex", lg: "unset" },
		alignItems: { xs: "center", lg: "unset" },
		justifyContent: { xs: "center", lg: "unset" },
		flexDirection: { xs: "column", lg: "unset" },
	},
	mainBox: {
		width: { xs: "100vw", lg: "80vw" },
		margin: { xs: "unset", lg: "0 auto" },
		display: "flex",
		flexDirection: { xs: "column", lg: "row" },
		alignItems: { xs: "start", lg: "center" },
		gap: "4rem",
		justifyContent: "start",
	},
	card: {
		alignItems: "center",
		textAlign: { xs: "start", lg: "center" },
		flex: "25%",
		width: { xs: "fit-content", lg: "20vw" },
		display: "flex",
		flexDirection: { xs: "row", lg: "column" },
	},
	title: {
		display: { xs: "flex", lg: "unset" },
		alignItems: { xs: "center", lg: "unset" },
		justifyContent: { xs: "center", lg: "unset" },
		flexDirection: { xs: "column", lg: "unset" },
		width: { xs: "max-content", lg: "unset" },
		padding: "0 8.5%",
		marginBottom: "2.5rem",
	},
};

/* const topTitle = 'WHY IT IMPROVES YOUR'; */

export default function FourImagesDisplay({
	topTitle,
	bottomTitle,
	firstImage,
	secondImage,
	thirdImage,
	fourthImage,
	firstImageTitle,
	secondImageTitle,
	thirdImageTitle,
	fourthImageTitle,
	firstImageDescription,
	secondImageDescription,
	thirdImageDescription,
	fourthImageDescription,
}) {
	return (
		<Container maxWidth="100vw" sx={styles.container}>
			{/* TITULO */}
			<Box sx={styles.title}>
				<Typography
					sx={{ fontSize: { xs: "100%", lg: "260%" } }}
					gutterBottom
					letterSpacing={2}
				>
					{topTitle}
				</Typography>
				<Typography
					sx={{ fontSize: { xs: "100%", lg: "260%" } }}
					gutterBottom
					letterSpacing={3.1}
				>
					{bottomTitle}
				</Typography>
			</Box>
			{/* CARTAS con IMG */}
			<Box sx={styles.mainBox}>
				{/* FIRST CARD */}
				<Box sx={styles.card}>
					<Box
						component="img"
						width={{ xs: "40%", lg: "90%" }}
						src={firstImage}
					/>

					<Box sx={{ width: "max-content" }}>
						{" "}
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={{
								fontWeight: "bold",
								// width: { xs: "max-content", lg: "unset" },
							}}
							dangerouslySetInnerHTML={{ __html: firstImageTitle }}
						/>
						<Typography
							variant="body2"
							gutterBottom
							dangerouslySetInnerHTML={{ __html: firstImageDescription }}
						/>
					</Box>
				</Box>
				{/* SECOND CARD */}
				<Box sx={styles.card}>
					<Box
						component="img"
						width={{ xs: "40%", lg: "90%" }}
						src={secondImage}
					/>
					<Box sx={{ width: "max-content" }}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={{
								fontWeight: "bold",
								// width: { xs: "max-content", lg: "unset" },
							}}
							dangerouslySetInnerHTML={{ __html: secondImageTitle }}
						/>
						<Typography
							variant="body2"
							gutterBottom
							dangerouslySetInnerHTML={{ __html: secondImageDescription }}
						/>
					</Box>
				</Box>
				{/* THIRD CARD */}
				<Box sx={styles.card}>
					<Box
						component="img"
						width={{ xs: "40%", lg: "90%" }}
						src={thirdImage}
					/>
					<Box sx={{ width: "max-content" }}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={{
								fontWeight: "bold",
								// width: { xs: "max-content", lg: "unset" },
							}}
							dangerouslySetInnerHTML={{ __html: thirdImageTitle }}
						/>
						<Typography
							variant="body2"
							gutterBottom
							dangerouslySetInnerHTML={{ __html: thirdImageDescription }}
						/>
					</Box>{" "}
				</Box>
				{/* FOURTH CARD */}
				<Box sx={styles.card}>
					<Box
						component="img"
						width={{ xs: "40%", lg: "90%" }}
						src={fourthImage}
					/>
					<Box sx={{ width: "max-content" }}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={{
								fontWeight: "bold",
								// width: { xs: "max-content", lg: "unset" },
							}}
							dangerouslySetInnerHTML={{ __html: fourthImageTitle }}
						/>
						<Typography
							variant="body2"
							gutterBottom
							dangerouslySetInnerHTML={{ __html: fourthImageDescription }}
						/>
					</Box>
				</Box>
			</Box>
		</Container>
	);
}
