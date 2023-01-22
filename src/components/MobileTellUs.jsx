import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import LogoBlanco from '../assets/LogoBlanco.svg';

export default function TellUsYourIdea() {
  return (
    <Box
      sx={{
        paddingTop: '2rem',
        paddingBottom: '2rem',
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderTop: 'solid',
        borderBottom: 'solid',
        borderWidth: '1.5px',
        borderColor: 'white',
      }}
    >
      <Box
        component='img'
        src={LogoBlanco}
        sx={{
          width: '35%',
        }}
      />
      <Box sx={{ color: 'white', textAlign: 'start' }}>
        <Typography variant='body2' letterSpacing={2}>
          TELL US
        </Typography>
        <Typography variant='h4' gutterBottom letterSpacing={3.1}>
          YOUR IDEA
        </Typography>
        <Button
          sx={{
            width: '100%',
            borderRadius: '20px',
            color: '#273339',
            textTransform: 'capitalize',
            textAlign: 'center',
            backgroundColor: 'white',
            '&:hover': {
              borderColor: 'gray',
              backgroundColor: 'gray',
              color: 'white',
            },
          }}
          variant='outlined'
        >
          Contact us
        </Button>
      </Box>
    </Box>
  );
}
