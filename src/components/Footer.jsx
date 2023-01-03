// import React from 'react'
// import { borderRadius, Container } from '@mui/system';
// import { Box, Grid, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import LogoBlanco from '../assets/LogoBlanco.svg'
// import ICON_FACEBOOK from '../assets/ICON_FACEBOOK.svg'
// import ICON_INSTAGRAM from '../assets/ICON_INSTAGRAM.svg'
// import ICON_LINKEDIN from '../assets/ICON_LINKEDIN.svg'
// import ICON_EMAIL from '../assets/ICON_EMAIL.svg'
// import ICON_PHONE from '../assets/ICON_PHONE.svg'
// import ICON_LOCATION from '../assets/ICON_LOCATION.svg'

// import { Link } from "react-router-dom";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import { Facebook } from '@mui/icons-material';

// const styles = {
//   container: {
//     padding: 0,
//     backgroundColor: "#aabdbd",
//     borderRadius: "6px"
//   },
//   text: {
//     color: "white"
//   },
//   textTitle: {
//     color: "white",
//     weight: "1200"
//   },
//   rightColumn: {
//     display: "flex",
//     flexDirection: "column",
//     flexWrap: "wrap",
//   },
//   rightColumnRow: {
//     flex: "1 0 25%", /* explanation below */
//     margin: "5px",
//     height: "100px",
//     backgroundColor: "blue",
//   },
//   icons: {
//     width: "37px",
//     height: "37px",
//     color: "white",
//     marginTop: "15px",
//     alignItems: "center",
//     marginRight: "1.5rem",
//   },
//   iconsContact: {
//     width: "34px",
//     height: "34px",
//     color: "white",
//     marginTop: "15px",
//     alignItems: "center",
//     marginRight: "1.25rem",
//   },
//   logoFooter: {
//     width: 300,
//     // height: 320,
//     paddingLeft: "2em",
//   }
// };

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function Footer() {
//   return (
//     <Container maxWidth="100vw" sx={styles.container}>
//         <Box
//           sx={{ flexGrow: 1, height: "320", }}
//         >
//           <Grid container spacing={3}>

//             {/* Left column */}
//             <Grid item xs={4} sx={{ padding: "0"}} >
//               <Box component="img" src={LogoBlanco} sx={styles.logoFooter} />
//               {/* <Typography sx={styles.text}>SPG DIGITAL CORP</Typography> */}
//             </Grid>

//             {/* Middle column */}
//             <Grid item xs={4} sx={{ height: 300}}>
//               <></>
//             </Grid>

//             {/* Right column */}
//             <Grid item xs={4} sx={styles.rightColumn}>
//                 <Box sx={{ textAlign: "start", display: "flex" }}>
//                   <Box component="img" src={ICON_PHONE} sx={styles.iconsContact} />
//                   <Box>
//                     <Typography mt={2} sx={styles.textTitle}>Phone</Typography>
//                     <Typography sx={styles.text}>+01 (305) 790 - 2129</Typography>
//                   </Box>
//                 </Box>
//                 <Box sx={{ textAlign: "start", display: "flex" }}>
//                   <Box component="img" src={ICON_EMAIL} sx={styles.iconsContact} />
//                   <Box>
//                     <Typography sx={styles.textTitle} mt={2}>Email</Typography>
//                     <Typography sx={styles.text}>Sebastian@spgdigitalcorp.com</Typography>
//                   </Box>
//                 </Box>
//                 <Box sx={{ textAlign: "start", display: "flex" }}>
//                   <Box component="img" src={ICON_LOCATION} sx={styles.iconsContact} />
//                   <Box>
//                     <Typography sx={styles.textTitle} mt={2}>Location</Typography>
//                     <Typography sx={styles.text}>550 ocean 2c drive key Biscayne 33149</Typography>
//                   </Box>
//                 </Box>
//                 <Box sx={{ textAlign: "start", marginBottom: "0.25rem" }}>
//                   <a href="https://www.instagram.com/spg_digital/" >
//                     <Box component="img" src={ICON_INSTAGRAM} sx={styles.icons} />
//                   </a>

//                   <a href="https://www.linkedin.com/company/spg-digital/about//" >
//                     <Box component="img" src={ICON_LINKEDIN} sx={styles.icons} />
//                   </a>

//                   <a href="https://www.instagram.com/spg_digital/" >
//                     <Box component="img" src={ICON_FACEBOOK} sx={styles.icons} />
//                   </a>
//                 </Box>
//             </Grid>
//           </Grid>
//         </Box>
//     </Container>
//   )
// }
