import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import FirstImage from '../assets/ILLUSTRACION_SPG-01.svg'
import SecondImage from '../assets/ILLUSTRACION_SPG-02.svg'
import ThirdImage from '../assets/ILLUSTRACION_SPG-03.svg'


export default function About() {
  
  const styles = {
    container: {
      display: "flex",
      width: "100vw",
      justifyContent: "start",
      padding: 0, 
      backgroundColor: "#F5F5F5",
    },
    containerLeftColumn: {
      display: "flex",
      flexDirection: "column",
    },
    boxLeftTitle: {
      textAlign: "right",
      margin: "1rem",
    },
    boxRightTitle: {
      textAlign: "start",
      margin: "1rem",
    },
    upperTitle: {

    },
    lowerTitle: {

    },
    containerRightColumn: {
      display: "flex",
      flexDirection: "column",
    },
    boxLowerLeftList: {
      display: "flex",
      flexDirection: "column",
    },
    boxLowerLeftListItems: {
      textAlign: "right",
      margin: "1rem",
    },
    boxLowerRightList: {
      display: "flex",
      justifyContent: "start",
    },
    boxLowerRightListItems: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "1rem",
    },
    images: {
      width: 320,
      height: 230,
    }
  }
  
  return (
    <Container sx={styles.container}>

      {/* Left COLUMN */}
      <Container sx={styles.containerLeftColumn}>

        {/* Upper Title */}
        <Box sx={styles.boxLeftTitle}>
          <Typography variant="span " sx={styles.upperTitle}>ABOUT</Typography>
          <Typography variant="h4" sx={styles.lowerTitle}>SPG</Typography>
        </Box>

        {/* Lower List */}
        <Box sx={styles.boxLowerLeftList}>

          <Box sx={styles.boxLowerLeftListItems} >
            <Typography variant="h6" sx={styles.upperTitle}>+ 10 years</Typography>
            <Typography variant="p" sx={styles.lowerTitle}>in the field</Typography>
          </Box>

          <Box sx={styles.boxLowerLeftListItems} >
            <Typography variant="h6" sx={styles.upperTitle}>+ 100 projects</Typography>
            <Typography variant="p" sx={styles.lowerTitle}>customized</Typography>
          </Box>

          <Box sx={styles.boxLowerLeftListItems} >
            <Typography variant="h6" sx={styles.upperTitle}>International</Typography>
            <Typography variant="p" sx={styles.lowerTitle}>availability</Typography>
          </Box>

        </Box>

      </Container>

      {/* Right Column */}
      <Container sx={styles.containerRightColumn}>

        {/* Upper Title */}
        <Box sx={styles.boxRightTitle}>
          <Typography variant="span " sx={styles.upperTitle}>WHAT</Typography>
          <Typography variant="h4" sx={styles.lowerTitle}>WE DO</Typography>
        </Box>

        {/* Lower List */}
        <Box sx={styles.boxLowerRightList}>

          <Box sx={styles.boxLowerRightListItems} >
            <Box component="img" src={FirstImage} sx={styles.images} />
            <Typography variant="h6" sx={styles.lowerTitle}>3D</Typography>
            <Typography variant="span" sx={styles.lowerTitle}>Configurators</Typography>
          </Box>

          <Box sx={styles.boxLowerRightListItems} >
            <Box component="img" src={SecondImage} sx={styles.images} />
            <Typography variant="h6" sx={styles.lowerTitle}>2D</Typography>
            <Typography variant="span" sx={styles.lowerTitle}>Configurators</Typography>
          </Box>

          <Box sx={styles.boxLowerRightListItems} >
            <Box component="img" src={ThirdImage} sx={styles.images} />
            <Typography variant="span" sx={styles.lowerTitle}>RENDERINGS</Typography>
            <Typography variant="h6" sx={styles.lowerTitle}>STATIC & DYNAMIC</Typography>
          </Box>

        </Box>

      </Container>
    
    </Container>
  )
}

