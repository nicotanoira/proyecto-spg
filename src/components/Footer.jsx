import React from 'react'
import { borderRadius, Container } from '@mui/system';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Logo from '../assets/logo.svg'
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';

const styles = {
  container: {
    padding: 0, 
    backgroundColor: "#aabdbd",
    borderRadius: "6px"
  },
  text: { 
    color: "white"
  },
  textTitle: { 
    color: "white",
    weight: "1200"
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  rightColumnRow: {
    flex: "1 0 25%", /* explanation below */
    margin: "5px",
    height: "100px",
    backgroundColor: "blue",
  },
  icons: {
    width: "37px",
    height: "37px",
    color: "white",
    marginTop: "15px",
    alignItems: "center",
  }
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <Container maxWidth="100vw" sx={styles.container}>
        <Box
          sx={{ flexGrow: 1, height: "320", }}
        >
          <Grid container spacing={3}>

            {/* Left column */}
            <Grid item xs={4}>
              <Box component="img" src={Logo} width={208} height={282} />
              <Typography sx={styles.text}>SPG DIGITAL CORP</Typography>
            </Grid>

            {/* Middle column */}
            <Grid item xs={4}>
              <></>
            </Grid>

            {/* Right column */}
            <Grid item xs={4} sx={styles.rightColumn}>
                <Box sx={{ textAlign: "start" }}>
                  <Typography mt={2} sx={styles.textTitle}>Phone</Typography>
                  <Typography sx={styles.text}>+01 (305) 790 - 2129</Typography>
                </Box>
                <Box sx={{ textAlign: "start" }}>
                  <Typography sx={styles.textTitle} mt={2}>Email</Typography>
                  <Typography sx={styles.text}>Sebastian@spgdigitalcorp.com</Typography>
                </Box>
                <Box sx={{ textAlign: "start" }}>
                  <Typography sx={styles.textTitle} mt={2}>Location</Typography>
                  <Typography sx={styles.text}>550 ocean 2c drive key Biscayne 33149</Typography>
                </Box>
                <Box sx={{ textAlign: "start" }}>
                  <InstagramIcon sx={styles.icons} ></InstagramIcon>
                </Box>
            </Grid>
          </Grid>
        </Box>
    </Container>
  )
}
