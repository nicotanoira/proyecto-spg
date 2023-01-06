import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import ILLUSTRACION_ARTISANS from '../assets/ILLUSTRACION_ARTISANS.svg';
import ILLUSTRACION_BETTER_EXP from '../assets/ILLUSTRACION_BETTER_EXP.svg';
import ILLUSTRACION_TIME from '../assets/ILLUSTRACION_TIME.svg';
import ILLUSTRACION_VIRTUAL from '../assets/ILLUSTRACION_VIRTUAL.svg';

const styles = {
  container: {
    padding: '3rem 9rem',
  },
  mainBox: {
    width: '80vw',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    justifyContent: 'start',
  },
  card: {
    alignItems: 'center',
    textAlign: 'center',
    flex: '25%',
    width: '20vw',
    heigth: '180px',
    flexDirection: 'column',
  },
  title: {
    padding: '0 8.5%',
    marginBottom: '2.5rem',
  },
};

export default function CustomerExp() {
  return (
    <Container maxWidth='100vw' sx={styles.container}>
      {/* TITULO */}
      <Box sx={styles.title}>
        <Typography variant='h6' gutterBottom letterSpacing={2}>
          WHY IT IMPROVES YOUR
        </Typography>
        <Typography variant='h3' gutterBottom letterSpacing={3.1}>
          CUSTOMERS' EXPERIENCE
        </Typography>
      </Box>
      {/* CARTAS con IMG */}
      <Box sx={styles.mainBox}>
        <Box sx={styles.card}>
          <Box component='img' width={'90%'} src={ILLUSTRACION_ARTISANS} />
          <Typography
            variant='subtitle2'
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            ARTISANS OF THEIR
            <br />
            EXPERIENCE
          </Typography>
          <Typography variant='body2' gutterBottom>
            Lets them play and customize
            <br />
            the product to how it suits them
            <br />
            the most
          </Typography>
        </Box>
        <Box sx={styles.card}>
          <Box component='img' width={'90%'} src={ILLUSTRACION_VIRTUAL} />
          <Typography
            variant='subtitle2'
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            VIRTUAL
            <br />
            SHOWROOM
          </Typography>
          <Typography variant='body2' gutterBottom>
            Get a better understanding of
            <br />
            what they are buying with the
            <br />
            confort of wherever they are
          </Typography>
        </Box>
        <Box sx={styles.card}>
          <Box component='img' width={'90%'} src={ILLUSTRACION_TIME} />
          <Typography
            variant='subtitle2'
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            TIME
            <br />
            OPTIMIZATION
          </Typography>
          <Typography variant='body2' gutterBottom>
            Helps them get a buying
            <br />
            decision faster
          </Typography>
        </Box>
        <Box sx={styles.card}>
          <Box component='img' width={'90%'} src={ILLUSTRACION_BETTER_EXP} />
          <Typography
            variant='subtitle2'
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            BETTER EXPERIENCE,
            <br />
            BETTER IMAGE
          </Typography>
          <Typography variant='body2' gutterBottom>
            It empowers the connection
            <br />
            between your clients and the
            <br />
            brand
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
