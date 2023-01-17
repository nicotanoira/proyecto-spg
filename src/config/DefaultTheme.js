import { createTheme } from "@mui/material";
import '../assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf'

export const theme = createTheme({
    typography: {
        fontFamily: [
          'Inter',
          '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          'sans-serif', 'Inter'
        ],
    },
});