import { Box } from "@mui/system";
import React from "react";
import About from "../components/About";
import Brands from "../components/Brands";
import ForYou from "../components/ForYou";
import Values from "../components/Values";
import Forms from '../components/Forms';

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
			<About />
			<Brands />
			<Values />
			<ForYou />
      <Forms />
		</Box>
	);
}
