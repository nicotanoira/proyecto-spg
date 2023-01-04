import React from 'react'
import { Box, Container } from '@mui/system'
import BannerWeb from '../assets/banner_web-01.png'
import { Typography } from '@mui/material';

export default function Banner() {
    const styles = {
        container: {
            padding: "0 0 ",
            position: "relative",
            padding: 0,
                '@media (min-width: 600px)': {
                padding: 0,
            },
        },
        image: {
            width: "100%",
            padding: "0",
        },
        textBox: {
            position: "absolute",
            right: "8vw",
            top: "13vh",
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
        },
        upperTextBox: {
            textAlign: "end", 
        

        },
        middleTextBox: {
            textAlign: "end",

        },
        lowerTextBox: {
            textAlign: "end",

        },
    };

    return (
        <Container maxWidth="100vw" sx={styles.container}>

            <Box sx={styles.textBox} >

                <Box sx={styles.upperTextBox} >
                    <Typography variant="h5" sx={{ fontSize: "20px"}} gutterBottom>DIGITAL AGENCY</Typography>
                </Box>

                <Box sx={styles.middleTextBox} >
                    <Typography variant="h2" sx={{ height: "fit-content", fontSize: "70px"}}>TAILORING</Typography>
                    <Typography variant="h2" sx={{ height: "fit-content", fontSize: "70px"}} gutterBottom>SOLUTIONS</Typography>
                </Box>

                <Box sx={styles.lowerTextBox} >
                    <Typography variant="body1" sx={{ fontSize: "22px" }} >We have the power to help you strengthen</Typography>
                    <Typography variant="body1" sx={{ fontSize: "22px" }} >your customers' shopping experience</Typography>
                </Box>

            </Box>

            <Box component="img" src={BannerWeb} sx={styles.image} />

        </Container>
    )
}
