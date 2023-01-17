import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';

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

/* const topTitle = 'WHY IT IMPROVES YOUR'; */

export default function FourImagesDisplay({
  topTitle,
  bottomTitle,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  firstImageTitle,
  secondImageTitle,
  thirdImageTitle,
  fourthImageTitle,
  firstImageDescription,
  secondImageDescription,
  thirdImageDescription,
  fourthImageDescription,
}) {
  return (
    <Container maxWidth='100vw' sx={styles.container}>
      {/* TITULO */}
      <Box sx={styles.title}>
        <Typography variant='h6' gutterBottom letterSpacing={2}>
          {topTitle}
        </Typography>
        <Typography variant='h3' gutterBottom letterSpacing={3.1}>
          {bottomTitle}
        </Typography>
      </Box>
      {/* CARTAS con IMG */}
      <Box sx={styles.mainBox}>
        {/* FIRST CARD */}
        <Box sx={styles.card}>
          <Box component='img' width={'90%'} src={firstImage} />
          <Typography
            variant='subtitle2'
            gutterBottom
            sx={{ fontWeight: 'bold', }}
            dangerouslySetInnerHTML={{ __html: firstImageTitle }}
          />
          <Typography
            variant='body2'
            gutterBottom
            dangerouslySetInnerHTML={{ __html: firstImageDescription }}
          />
        </Box>
        {/* SECOND CARD */}
        <Box sx={styles.card}>
          <Box component='img' width={'90%'} src={secondImage} />
          <Typography
            variant='subtitle2'
            gutterBottom
            sx={{ fontWeight: 'bold' }}
            dangerouslySetInnerHTML={{ __html: secondImageTitle }}
          />
          <Typography
            variant='body2'
            gutterBottom
            dangerouslySetInnerHTML={{ __html: secondImageDescription }}
          />
        </Box>
        {/* THIRD CARD */}
        <Box sx={styles.card}>
          <Box component='img' width={'90%'} src={thirdImage} />
          <Typography
            variant='subtitle2'
            gutterBottom
            sx={{ fontWeight: 'bold' }}
            dangerouslySetInnerHTML={{ __html: thirdImageTitle }}
          />
          <Typography
            variant='body2'
            gutterBottom
            dangerouslySetInnerHTML={{ __html: thirdImageDescription }}
          />
        </Box>
        {/* FOURTH CARD */}
        <Box sx={styles.card}>
          <Box component='img' width={'90%'} src={fourthImage} />
          <Typography
            variant='subtitle2'
            gutterBottom
            sx={{ fontWeight: 'bold' }}
            dangerouslySetInnerHTML={{ __html: fourthImageTitle }}
          />
          <Typography
            variant='body2'
            gutterBottom
            dangerouslySetInnerHTML={{ __html: fourthImageDescription }}
          />
        </Box>
      </Box>
    </Container>
  );
}
