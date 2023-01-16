import { Box } from "@mui/system";
import React from "react";
import About from "../components/About";
import Brands from "../components/Brands";
import Values from "../components/Values";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import ForYou from "../components/ForYou";

export default function LandingPage() {
	const styles = {
		container: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
		},
	};
	return (
		<Box sx={styles.container}>
			<Banner />
			<About />
			<Brands />
			<Values />
			<ForYou />
			<Contact />
		</Box>
	);
}
