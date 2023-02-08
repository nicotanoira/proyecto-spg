import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import LogoBlanco from '../assets/LogoBlanco.svg';
import logoChat from '../assets/chat_logo-14.svg';

export default function TellUsYourIdea(props) {
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
        src={logoChat}
        sx={{
          width: '35%',
          marginRight: '20px',
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
          onClick={() => props.handleContactClick()}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}
