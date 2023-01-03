import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'


export default function About() {
  
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      padding: 0, 
      backgroundColor: "#F5F5F5",
    },
    containerUpperRow: {
      display: "flex",
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
    containerLowerRow: {
      display: "flex",
    },
  }
  
  return (
    <Container sx={styles.container}>

      {/* Upper ROW */}
      <Container sx={styles.containerUpperRow}>

        <Box sx={styles.boxLeftTitle}>
          <Typography variant="span " sx={styles.upperTitle}>ABOUT</Typography>
          <Typography variant="h4" sx={styles.lowerTitle}>SPG</Typography>
        </Box>

        <Box sx={styles.boxRightTitle}>
          <Typography variant="span " sx={styles.upperTitle}>WHAT</Typography>
          <Typography variant="h4" sx={styles.lowerTitle}>WE DO</Typography>
        </Box>

      </Container>

      {/* Lower ROW */}
      <Container sx={styles.containerLowerRow}>
      </Container>
    
    </Container>
  )
}

