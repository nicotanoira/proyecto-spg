import { createTheme } from "@mui/material";
import '../assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf'

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  },
  typography: {
      fontFamily: [
        'Inter',
        '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        'sans-serif', 'Inter'
      ],
  },
});