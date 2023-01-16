import React from 'react';
import { Box, Container } from '@mui/system';
import LogoNegro from '../assets/LogoNegro.svg';
import { Typography } from '@mui/material';

export default function ConfiguratorBanner({
  topTitleBanner,
  bottomTitleBanner,
  imageBanner,
  descriptionBanner,
}) {
  const styles = {
    container: {
      padding: '0 0 ',
      position: 'relative',
      padding: 0,
      '@media (min-width: 600px)': {
        padding: 0,
      },
      background:
        'linear-gradient(90deg, rgba(235, 233, 228, 0.55) 0%, rgba(255, 255, 255, 0) 88.02%);',
    },
    contentContainer: {
      paddingLeft: '2rem',
      display: 'flex',
      padding: 0,
      '@media (min-width: 600px)': {
        padding: 0,
      },
    },
    rightContainer: {
      marginRight: '4rem',
      display: 'flex',
      justifyContent: 'start',
    },
    image: {
      paddingTop: '3rem',
      paddingLeft: '1rem',
      height: '100%',
    },
    logo: {
      width: 280,
      height: 280,
      marginBottom: '2rem',
      marginLeft: '-3.3rem',
    },
    leftContainer: {
      display: 'flex',
      flex: '1 0 50%',
      flexDirection: 'column',
      marginLeft: '5rem',
      width: 'fit-content',
    },
  };

  return (
    <Container maxWidth='100vw' sx={styles.container}>
      <Container maxWidth='100vw' sx={styles.contentContainer}>
        <Container sx={styles.leftContainer}>
          <Box component='img' src={LogoNegro} sx={styles.logo} />

          <Typography
            variant='h3'
            sx={{ fontSize: '260%', letterSpacing: '3px' }}
          >
            {topTitleBanner}
          </Typography>
          <Typography
            variant='h1'
            sx={{ fontSize: '500%', letterSpacing: '5px' }}
            gutterBottom
          >
            {bottomTitleBanner}
          </Typography>
          <Typography
            variant='body1'
            sx={{ fontSize: '200%', whiteSpace: 'pre-wrap' }}
            dangerouslySetInnerHTML={{ __html: descriptionBanner }}
          />
        </Container>

        <Container sx={styles.rightContainer}>
          <Box component='img' src={imageBanner} sx={styles.image} />
        </Container>
      </Container>
    </Container>
  );
}
