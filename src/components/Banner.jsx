import React from 'react';
import { Box, Container } from '@mui/system';
import BannerWeb from '../assets/banner_web-01.png';
import BannerMobile from '../assets/banner-mobile.png';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export default function Banner() {
  const theme = useTheme();
  const down600px = useMediaQuery(theme.breakpoints.down('sm'));
  const down900px = useMediaQuery(theme.breakpoints.down('md'));
  const down1200px = useMediaQuery(theme.breakpoints.down('lg'));
  const styles = {
    container: {
      padding: '0 0 ',

      position: 'relative',
      padding: 0,
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'end',
      '@media (min-width: 600px)': {
        padding: 0,
      },
    },
    image: {
      width: '100%',
      // height: down600px && "80vh",
      padding: '0',
    },
    textBox: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: { xs: 'center', md: 'end' },
      justifyContent: { xs: 'center' },
      padding: { xs: '2rem' },
      paddingRight: { xs: '2rem', md: '10vw' },
      marginTop: { xs: '1vh', sm: '4vh', md: '8vh', lg: '13vh' },
      // right: "8vw",
      // top: "13vw",
      textAlign: { xs: 'center', md: 'end' },
    },
    button: {
      backgroundColor: '#273339',
      borderRadius: '1000px',
      fontSize: '10px',
      padding: '6px 10px',
      color: '#ffffffce',
      textTransform: 'capitalize',
      width: '10rem',
    },
    icon: { marginLeft: '2px', transform: 'scale(.8)' },
  };

  return (
    <Container maxWidth='100vw' sx={styles.container}>
      <Box sx={styles.textBox}>
        <Box sx={styles.upperTextBox}>
          <Typography
            variant='h5'
            sx={{
              marginRight: { xs: '' },
              fontSize: down900px ? '12px' : down1200px ? '16px' : '24px',
              fontWeight: '400',
              color: '#273339',
            }}
            gutterBottom
          >
            DIGITAL AGENCY
          </Typography>
        </Box>

        <Box sx={styles.middleTextBox}>
          {down600px ? (
            <Typography
              variant='h2'
              sx={{
                height: 'fit-content',
                fontSize: down900px ? '25px' : down1200px ? '55px' : '74px',
                fontWeight: 500,
                color: '#273339',
              }}
              gutterBottom
            >
              TAILORING SOLUTIONS
            </Typography>
          ) : (
            <Typography
              variant='h2'
              sx={{
                height: 'fit-content',
                fontSize: down900px ? '30px' : down1200px ? '55px' : '74px',
                fontWeight: 500,
                color: '#273339',
              }}
              gutterBottom
            >
              TAILORING
              <br />
              SOLUTIONS
            </Typography>
          )}
        </Box>

        <Box sx={styles.lowerTextBox}>
          {!down600px ? (
            <Typography
              variant='body1'
              sx={{
                fontSize: down900px ? '6px' : down1200px ? '18px' : '25px',
                fontWeight: 400,
                color: '#273339',
              }}
            >
              We have the power to help you strengthen
              <br />
              your customers' shopping experience
            </Typography>
          ) : (
            <>
              <Typography
                variant='body1'
                sx={{
                  fontSize: down900px ? '13px' : down1200px ? '1.3rem' : '2rem',
                  marginBottom: { xs: '12px' },
                  fontWeight: 400,
                  color: '#273339',
                }}
              >
                We have the power to help you strengthen your customers'
                shopping experience creating innovative product imaging
                solutions.
              </Typography>
              <IconButton
                size='small'
                endIcon
                variant='contained'
                sx={styles.button}
              >
                Contact Us
                <MailOutlineIcon sx={styles.icon} fontSize='small' />
              </IconButton>
            </>
          )}
        </Box>
      </Box>

      <Box
        component='img'
        src={!down600px ? BannerWeb : BannerMobile}
        sx={styles.image}
      />
    </Container>
  );
}
