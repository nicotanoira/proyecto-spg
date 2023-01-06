import React from 'react'
import { Box, Container } from '@mui/system'
import BannerWeb from '../assets/banner_web-01.png'
import { Typography } from '@mui/material';

export default function Banner() {
    const styles = {
        container: {
            padding: "0 0 ",
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
            <Box component="img" src={BannerWeb} sx={styles.image} />

            <Box sx={styles.textBox} >

                <Box sx={styles.upperTextBox} >
                    <Typography>DIGITAL AGENCY</Typography>
                </Box>

                <Box sx={styles.middleTextBox} >
                    <Typography>TAILORING</Typography>
                    <Typography>SOLUTIONS</Typography>
                </Box>

                <Box sx={styles.lowerTextBox} >
                    <Typography>We have the power to help you strengthen</Typography>
                    <Typography>your customers' shopping experience</Typography>
                </Box>

            </Box>
        </Container>
    )
}
