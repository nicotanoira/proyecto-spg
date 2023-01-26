import React from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box, Container } from "@mui/system";

const styles = {
	container: {
		padding: { xs: "1rem 3rem", md: "3rem 9rem" },
	},

	mainBox: {
		display: "flex",
		flexDirection: { xs: "column", md: "row" },
		width: "80vw",
		margin: "0 auto",
		alignItems: "center",
		gap: { xs: "1rem", md: "4rem" },
		justifyContent: "start",
	},
	card: {
		boxShadow: { xs: "0px 4px 10px rgba(123, 122, 120, 0.2)", md: 0 },
		borderRadius: { xs: "100px", md: 0 },
		display: "flex",
		// padding: {xs: "1rem", md: "0"},
		flexDirection: { xs: "row", md: "column" },
		alignItems: "center",
		textAlign: { xs: "start", md: "center" },
		flex: "25%",
		width: { xs: "100%", md: "20vw" },
		heigth: "180px",
	},
	responsiveText: {
		display: { xs: "flex", md: "inline" },
		flexDirection: "column",
		width: "100%",
		marginLeft: { xs: "1.5rem", md: 0 },
		marginRight: { xs: "1rem", md: 0 },
		fontSize: "20px",
	},
	image: {
		width: { xs: 90, sm: 150, md: "90%" },
		padding: { xs: "1rem 0 1rem 1rem", md: 0 },
		// marginLeft: {xs: "2rem", md: 0},
		// height: {xs: "100%", md: 0}
	},
	textTitle: {
		fontWeight: "600",
		fontSize: { xs: ".8rem", sm: "1.4rem", md: "0.875rem" },
	},
	textDescription: {
		fontSize: { xs: ".7rem", sm: "1.2rem", md: "0.875rem" },
	},

	// TOP TITLE
	title: {
		textAlign: { xs: "center", md: "start" },
		fontSize: {},
		padding: { xs: "1rem 0", sm: "1rem", md: "0 5%" },
		marginBottom: { xs: "0", md: "2.5rem" },
	},
	topTitle: {
		fontSize: { xs: "1.2rem", sm: "2rem", md: "1.25rem" },
	},
	bottomTitle: {
		fontSize: {
			xs: "2rem",
			sm: "3rem",
			md: "3rem",
		},
		padding: 0,
		fontWeight: 400,
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
	firstImageTitleResp,
	secondImageTitleResp,
	thirdImageTitleResp,
	fourthImageTitleResp,
	firstImageDescription,
	secondImageDescription,
	thirdImageDescription,
	fourthImageDescription,
	firstImageDescriptionResp,
	secondImageDescriptionResp,
	thirdImageDescriptionResp,
	fourthImageDescriptionResp,
}) {
	const theme = useTheme();
	const down600px = useMediaQuery(theme.breakpoints.down("xs"));
	const down960px = useMediaQuery(theme.breakpoints.down("md"));
	const down1200px = useMediaQuery(theme.breakpoints.down("lg"));
	const down2000px = useMediaQuery(theme.breakpoints.down("xl"));

	return (
		<Container maxWidth="100vw" sx={styles.container}>
			{/* TITULO */}
			<Box sx={styles.title}>
				<Typography
					variant="h6"
					sx={styles.topTitle}
					gutterBottom
					letterSpacing={{ xs: 0.5, md: 2 }}
				>
					{topTitle}
				</Typography>
				<Typography
					variant="h3"
					sx={styles.bottomTitle}
					gutterBottom
					letterSpacing={{ xs: 0.2, md: 3.1 }}
				>
					{bottomTitle}
				</Typography>
			</Box>
			{/* CARTAS con IMG */}
			<Box sx={styles.mainBox}>
				{/* FIRST CARD */}
				<Box sx={styles.card}>
					<Box component="img" sx={styles.image} src={firstImage} />
					<Box sx={styles.responsiveText}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={styles.textTitle}
							dangerouslySetInnerHTML={
								down960px
									? { __html: firstImageTitleResp }
									: { __html: firstImageTitle }
							}
						/>
						<Typography
							variant="body2"
							gutterBottom
							sx={styles.textDescription}
							dangerouslySetInnerHTML={
								down960px
									? { __html: firstImageDescriptionResp }
									: { __html: firstImageDescription }
							}
						/>
					</Box>
				</Box>
				{/* SECOND CARD */}
				<Box sx={styles.card}>
					<Box component="img" sx={styles.image} src={secondImage} />
					<Box sx={styles.responsiveText}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={styles.textTitle}
							dangerouslySetInnerHTML={
								down960px
									? { __html: secondImageTitleResp }
									: { __html: secondImageTitle }
							}
						/>
						<Typography
							variant="body2"
							gutterBottom
							sx={styles.textDescription}
							dangerouslySetInnerHTML={
								down960px
									? { __html: secondImageDescriptionResp }
									: { __html: secondImageDescription }
							}
						/>
					</Box>
				</Box>
				{/* THIRD CARD */}
				<Box sx={styles.card}>
					<Box component="img" sx={styles.image} src={thirdImage} />
					<Box sx={styles.responsiveText}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={styles.textTitle}
							dangerouslySetInnerHTML={
								down960px
									? { __html: thirdImageTitleResp }
									: { __html: thirdImageTitle }
							}
						/>
						<Typography
							variant="body2"
							gutterBottom
							sx={styles.textDescription}
							dangerouslySetInnerHTML={
								down960px
									? { __html: thirdImageDescriptionResp }
									: { __html: thirdImageDescription }
							}
						/>
					</Box>
				</Box>
				{/* FOURTH CARD */}
				<Box sx={styles.card}>
					<Box component="img" sx={styles.image} src={fourthImage} />
					<Box sx={styles.responsiveText}>
						<Typography
							variant="subtitle2"
							gutterBottom
							sx={styles.textTitle}
							dangerouslySetInnerHTML={
								down960px
									? { __html: fourthImageTitleResp }
									: { __html: fourthImageTitle }
							}
						/>
						<Typography
							variant="body2"
							gutterBottom
							sx={styles.textDescription}
							dangerouslySetInnerHTML={
								down960px
									? { __html: fourthImageDescriptionResp }
									: { __html: fourthImageDescription }
							}
						/>
					</Box>
				</Box>
			</Box>
		</Container>
	);
}
