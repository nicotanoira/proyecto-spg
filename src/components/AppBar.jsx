import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoBlanco from '../assets/LogoBlanco.svg';
import ICON_FACEBOOK from '../assets/ICON_FACEBOOK.svg';
import ICON_INSTAGRAM from '../assets/ICON_INSTAGRAM.svg';
import ICON_LINKEDIN from '../assets/ICON_LINKEDIN.svg';
import TellUsYourIdea from './MobileTellUs';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { BorderBottom, BorderColor } from '@mui/icons-material';
import { Grid, Stack, useMediaQuery } from '@mui/material';

/* const drawerWidth = 240; */
const navItems = [
  { name: '3D configurators', source: '/3D-configurators' },
  { name: '2D configurators', source: '/2D-configurators' },
  { name: 'Renderings', source: '/renderings-and-models' },
  /* { name: "Contact" }, */
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {}, [pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const styles = {
    button: {
      flex: '1 0 90%',
      display: 'flex',
      alignSelf: 'center',
      width: '90%',
      borderRadius: '35px',
      color: 'white',
      padding: '8px 10px',
      borderColor: 'gray',
      fontSize: '90%',
      fontWeight: '200',
      letterSpacing: '0.5px',
      backgroundColor: 'rgba(249, 248, 244, 0.15)',
      textTransform: 'none',
      '&:hover': {
        borderColor: 'gray',
        backgroundColor: 'gray',
        color: 'white',
      },
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '2rem',
    },
    icons: {
      color: 'white',
      alignItems: 'center',
      width: '45px',
      margin: '1rem',
    },
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Grid
        sx={{
          display: 'flex',
          alignItems: 'start',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '0 1rem',
          marginTop: '10px',
        }}
      >
        <Link style={{ textDecoration: 'none' }} to='/'>
          <Typography
            variant='body1'
            sx={{ my: 1, color: 'white', left: '0', marginLeft: '5px' }}
          >
            SPG
          </Typography>
        </Link>
        <IconButton
          onClick={handleDrawerToggle}
          close={setMobileOpen}
          size='small'
          sx={{
            color: 'white',
            my: 1,
          }}
        >
          <ArrowBackIosNewIcon fontSize='small' />
        </IconButton>
      </Grid>
      <Box component='img' src={LogoBlanco} sx={{ width: '35%' }} />
      <List sx={{ marginTop: '10px' }}>
        {navItems.map((item) => (
          <Link style={{ textDecoration: 'none' }} to={item.source}>
            <ListItem key={item.name} sx={styles.button} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        {/* CONTACT */}
        {/* <ListItem key={"Contact"} sx={{ color: "black" }} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Contact"} />
          </ListItemButton>
        </ListItem> */}
      </List>
      <TellUsYourIdea />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
        <a target='_blank' href='https://www.instagram.com/spg_digital/'>
          <Box component='img' src={ICON_INSTAGRAM} sx={styles.icons} />
        </a>

        <a
          target='_blank'
          href='https://www.linkedin.com/company/spg-digital/about//'
        >
          <Box component='img' src={ICON_LINKEDIN} sx={styles.icons} />
        </a>

        <a
          target='_blank'
          href='https://www.facebook.com/profile.php?id=100088834549930/'
        >
          <Box component='img' src={ICON_FACEBOOK} sx={styles.icons} />
        </a>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height: { xs: 0, sm: '100%' } }}>
      <CssBaseline />
      <AppBar
        component='nav'
        sx={{
          backgroundColor: { xs: 'transparent', sm: '#F3F2EE' },
          padding: '0',
        }}
        elevation={{ xs: 0, sm: 3 }}
        postition={{ xs: 'static', sm: 'absolute' }}
      >
        <Toolbar>
          {/* Menu Hamburguesa */}
          <Link style={{ textDecoration: 'none' }} to='/'>
            <Typography
              variant='body1'
              sx={{ my: 1, color: '#73807F', left: '0', marginLeft: '5px', display: {xs: "inline", sm: "none"} }}
            >
              SPG
            </Typography>
          </Link>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: {
                sm: 'none',
                color: '#73807F',
              },
              position: 'absolute',
              right: '0',
            }}
          >
            <MenuIcon />
          </IconButton>
          <Link style={{ textDecoration: 'none' }} to='/'>
            <Typography
              variant='h6'
              component='div'
              sx={{
                display: {
                  xs: 'none',
                  sm: 'block',
                  color: 'black',
                  marginLeft: '2rem',
                  fontSize: '1.6rem',
                  color: '#73807F',
                },
              }}
            >
              SPG
            </Typography>
          </Link>
          <Box
            sx={{
              padding: '2vh 0',
              display: {
                xs: 'none',
                sm: 'block',
                marginInlineStart: 'auto',
              },
            }}
          >
            {navItems.map((item) => (
              <NavLink style={{ textDecoration: 'none' }} to={item.source}>
                <Button
                  disableTouchRipple 
                  key={item.name}
                  sx={{
                    color: 'black',
                    textTransform: 'none',
                    marginRight: { sm: "1rem", md: '5rem'},
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item.source === pathname ? (
                    <Box
                      sx={{
                        borderBottom: 'solid',
                        borderBottomWidth: '2px',
                        borderColor: '#273339',
                      }}
                    >
                      {item.name}
                    </Box>
                  ) : (
                    item.name
                  )}
                </Button>
              </NavLink>
            ))}
            {/* <Button key={"Contact"} sx={{ color: "black" }}>
              {"Contact"}
            </Button> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box /* component='nav' */>
        <Drawer
          anchor='right'
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '100%',
              backgroundColor: '#273339',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          // p: 3,
          '@media (min-width: 600px)': {
            padding: 0,
          },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
