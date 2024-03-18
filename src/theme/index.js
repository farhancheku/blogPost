import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    title1:{
      fontSize:"32px",
      fontWeight: 'bold',
    },
    title2:{
      fontSize:"24px",
      fontWeight: 'bold',
    },
    paragraph:{
      fontSize:"16px",
      fontWeight: 'medium',
    }
  },
  palette: {
    primary: {
      main: '#fff', 
      light:"#F5F5F5"
    },
    secondary: {
      main: '#6c757d', 
    },
  },
});

export default theme;
