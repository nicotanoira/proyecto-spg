import { Box } from "@mui/system";
import React from "react";
import About from "../components/About";
import Brands from "../components/Brands";
import Values from "../components/Values";
import Banner from '../components/Banner';
import Forms from "../components/Forms";
import ForYou from "../components/ForYou";

export default function LandingPage() {
	const styles = {
		container: {
			// height: "15rem",
			// display: "flex",
			// alignItems: "center",
			// justifyContent: "center",
			// flexDirection: "column",
		},
	};
	return (
		<Box sx={styles.container}>
			<Banner />
			<About />
			<Brands />
			<Values />
			<ForYou />
			<Forms />
		</Box>
	);
}
