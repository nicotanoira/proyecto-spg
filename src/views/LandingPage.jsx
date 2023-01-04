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
}
