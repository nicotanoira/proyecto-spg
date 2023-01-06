import React from 'react';
import { Container, width } from '@mui/system';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import ICON_FACEBOOK from '../assets/ICON_FACEBOOK.svg';
import ICON_INSTAGRAM from '../assets/ICON_INSTAGRAM.svg';
import ICON_LINKEDIN from '../assets/ICON_LINKEDIN.svg';
import { BorderColor } from '@mui/icons-material';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'White',
    borderRadius: '6px',
    margin: "8.5rem 0",
  },
  mainBox: {
    textAlign: 'start',
    display: 'flex',
    flexDirection: 'row',
  },
  textTitle: {
    weight: '1200',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  icons: {
    width: '50px',
    height: '50px',
    color: 'red',
    marginTop: '15px',
    alignItems: 'center',
    marginRight: '1.5rem',
  },
  iconsContact: {
    width: '34px',
    height: '34px',
    color: 'white',
    marginTop: '15px',
    alignItems: 'center',
    marginRight: '1.25rem',
  },
  textBigTitle: {
    marginTop: '4rem',
    marginBottom: '-4rem',
  },
  barra: {
    height: '18rem',
    border: '1px solid black',
    width: '0px',
    margin: '0 10rem 0 9rem',
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    textAlign: 'start',
  },
};

export default function Contact() {
  return (
    <Container sx={styles.container} maxWidth='100vw'>
      {/* TITULO */}
      <Box sx={{ flextDirection: 'column' }}>
        <Box sx={{ textAlign: 'start' }}>
          <Typography variant='h6' gutterBottom>
            LET US HELP YOU
          </Typography>
          <Typography variant='h3' gutterBottom>
            TELL US YOUR IDEA
          </Typography>
        </Box>
        <Box sx={styles.mainBox}>
          {/* INFO (Phone - Email - Location) */}
          <Box item xs={4} sx={styles.leftColumn}>
            <Box sx={{ textAlign: 'start', display: 'flex' }}>
              <Box>
                <Typography mt={2} sx={styles.textTitle}>
                  Phone
                </Typography>
                <Typography sx={styles.text}>+01 (305) 790 - 2129</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ flexDirection: 'column' }}>
                <Box sx={{ textAlign: 'start', display: 'flex' }}>
                  <Box>
                    <Typography sx={styles.textTitle} mt={2}>
                      Email
                    </Typography>
                    <Typography sx={styles.text}>
                      Sebastian@spgdigitalcorp.com
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'start', display: 'flex' }}>
                  <Box>
                    <Typography sx={styles.textTitle} mt={2}>
                      Location
                    </Typography>
                    <Typography sx={styles.text}>
                      550 ocean 2c drive key Biscayne 33149
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'start', marginBottom: '0.25rem' }}>
                  <a target="_blank" href='https://www.instagram.com/spg_digital/'>
                    <Box
                      component='img'
                      src={ICON_INSTAGRAM}
                      sx={styles.icons}
                    />
                  </a>
                  <a target="_blank" href='https://www.linkedin.com/company/spg-digital/about//'>
                    <Box
                      component='img'
                      src={ICON_LINKEDIN}
                      sx={styles.icons}
                    />
                  </a>
                  <a target="_blank" href='https://www.instagram.com/spg_digital/'>
                    <Box
                      component='img'
                      src={ICON_FACEBOOK}
                      sx={styles.icons}
                    />
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* BARRA */}
          <Box sx={styles.barra} />
          {/* INPUT */}
          <Box sx={styles.inputs}>
            <Box sx={{}}>
              <TextField
                sx={{ marginRight: '2rem' }}
                id='standard-helperText'
                label='Your e-mail'
                variant='outlined'
              />
              <TextField
                id='standard-helperText'
                label='Your name'
                variant='outlined'
              />
            </Box>
            <Box>
              <TextField
                sx={{ marginTop: '25px', marginBottom: '20px' }}
                id='outlined-multiline-static'
                label='How can we help you?'
                multiline
                rows={3}
                fullWidth
              />
            </Box>
            <FormControlLabel
              sx={{ marginBottom: '25px' }}
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    '&.Mui-checked': {
                      color: 'gray',
                    },
                  }}
                />
              }
              label='Subscribe to newsletter'
            />
            <Button
              sx={{
                width: '175px',
                borderRadius: '20px',
                color: 'gray',
                borderColor: 'gray',
                '&:hover': {
                  borderColor: 'black',
                  color: 'black',
                },
              }}
              variant='outlined'
            >
              Send!
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
