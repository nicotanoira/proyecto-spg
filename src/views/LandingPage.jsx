<<<<<<< HEAD
import { Box } from "@mui/system";
import React from "react";
import Brands from "../components/Brands";
import ForYou from "../components/ForYou";
import Values from "../components/Values";

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
			<Brands />
<<<<<<< HEAD
			<Values /> 
=======
			<Values />
			<ForYou />
>>>>>>> forYou
		</Box>
	);
=======
import { Box } from '@mui/system';
import React from 'react';
import Brands from '../components/Brands';
import Values from '../components/Values';
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
      <Brands />
      <Values />
      <Forms />
    </Box>
  );
>>>>>>> a6a4c19944cd7291d13f7219bcfcd32c04b01068
}
