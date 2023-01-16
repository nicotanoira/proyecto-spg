import React from 'react'
import { Box, Container } from '@mui/system'
import { Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
    company,
    model,
    text,
    buttonText
} from '../constants/renderings/carouselBanner.js'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function CarouselBanner() {

    const styles = {
        container: {
            padding: "5rem",
            backgroundColor: "red",
            display: "flex",
            '@media (min-width: 600px)': {
                padding: "5rem 0",
            },
            background: "linear-gradient(90deg, rgba(235, 233, 228, 0.55) 0%, rgba(255, 255, 255, 0) 88.02%);",
        },
        carouselContainer: {
            display: 'flex', 
            justifyContent: 'flex-start',
            flex: "1 0 75%",
            alignItems: 'flex-start'
        },
        textContainer: {
            flex: "1 0 25%",
            display: "flex",
            paddingRight: "5rem",
            
            flexDirection: "column",
            alignItems: 'end',
            justifyContent: "center",
            width: "fit-content",
        },
        textBox: {
            display: "flex",
            flexDirection: "column",
        },
        flexButton: {
            width: 260,
            display: "flex",
            flexDirection: "column",
            justifyContent: 'space-between',
            position: "relative",
        },
        button: {
            flex: "1 0 90%",
            // flex: "1 0 95%",
            display: "flex",
            alignSelf: 'center',
            display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            
            // Text
            width: "100%",
            borderRadius: '20px',
            color: 'white',
            padding: "8px 10px",
            borderColor: 'gray',
            fontSize: "90%",
            fontWeight: "200",
            letterSpacing: "0.5px",
            backgroundColor: '#273339',
            textTransform: 'none',
            '&:hover': {
                borderColor: 'gray',
                backgroundColor: 'gray',
                color: 'white',
            },
        },
    }

    return (
        <Container maxWidth="100vw" sx={styles.container}>

                <Box sx={styles.textContainer}>
                    <Box sx={styles.textBox}>
                        <Typography variant="h2" fontWeight="bold" sx={{ fontSize: "100%", letterSpacing: "3px" }}>{company}</Typography>
                        <Typography variant="h1" sx={{ fontSize: "350%", letterSpacing: "2px", marginBottom: "1rem" }} >{model}</Typography>
                        <Typography variant="body1" sx={{ fontSize: "125%",  whiteSpace: "pre-wrap", marginBottom: "1rem" }} gutterBottom dangerouslySetInnerHTML={{__html: text}} />
                        <Box sx={styles.flexButton}>
                            <Button
                                sx={styles.button}
                                // startIcon={<ArrowForwardIosIcon 
                                //     sx={{
                                //         ml: "0",
                                //         visibility: "hidden",
                                //         alignSelf: 'flex-start',
                                //     }} 
                                // />}
                                // endIcon={<ArrowForwardIosIcon 
                                //     sx={{
                                //         mr: "0", 
                                //         alignSelf: "flex-end",
                                //     }} 
                                // />}
                                // variant='outlined'
                            >
                                {buttonText}
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box sx={styles.carouselContainer}>
                    <AwesomeSlider
                        transitionDelay={0}
                        bullets={false}
                        style={{
                            width: '90%',
                            height: '77vh',
                        }}
                        media={[{source: firstImage}, {source: thirdImage}, {source: fourthImage}]}
                    />
                    
                </Box>

        </Container>
    )
}
