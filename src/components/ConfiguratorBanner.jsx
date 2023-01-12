import React from 'react'
import { Box, Container } from '@mui/system'
import ConfigBanner from '../assets/ILLUSTRACION_SPG-01.svg'
import LogoNegro from '../assets/LogoNegro.svg'
import { Typography } from '@mui/material';

export default function ConfiguratorBanner() {
    const styles = {
        container: {
            padding: "0 0 ",
            position: "relative",
            padding: 0,
                '@media (min-width: 600px)': {
                padding: 0,
            },
            background: "linear-gradient(90deg, rgba(235, 233, 228, 0.55) 0%, rgba(255, 255, 255, 0) 88.02%);",
        },
        contentContainer: {
            paddingLeft: "2rem",
            display: "flex",
            padding: 0,
                '@media (min-width: 600px)': {
                padding: 0,
            },
        },
        rightContainer: {
            marginRight: "4rem",
            display: "flex",
            justifyContent: "center",
        },
        image: {
            paddingTop: "3rem",
            paddingLeft: "1rem",
            height: "100%", 
        },
        logo: {
            width: 300,
            height: 300,
            marginBottom: "2rem",
        },
        leftContainer: {
            display: "flex",
            flex: "1 0 60%",
            flexDirection: "column",
            marginLeft: "5rem",
        },

    };

  return (
    <Container maxWidth="100vw" sx={styles.container}>

        <Container maxWidth="100vw" sx={styles.contentContainer}>
            <Container sx={styles.leftContainer} >
                <Box component="img" src={LogoNegro} sx={styles.logo} />

                <Typography variant="h3" sx={{ fontSize: "400%", letterSpacing: "4px"}}>INTERACTIVE EXPERIENCES</Typography>
                <Typography variant="h1" sx={{ fontSize: "620%", letterSpacing: "6px"}} gutterBottom>3D CONFIGURATORS</Typography>
                <Typography variant="body1" sx={{ fontSize: "250%", whiteSpace: "pre-wrap" }} >3D experience to help your client explore, play and<br/>personalize your products in an easy web browser,<br/>responsive and mobile oriented.</Typography>
            </Container>

            <Container sx={styles.rightContainer} >
                <Box component="img" src={ConfigBanner} sx={styles.image} />
            </Container>

        </Container>
    </Container>
  )
}
