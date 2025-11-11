import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#121212',  // Set the default background color
      paper: '#121212',    // Set the background color for paper-like surfaces (e.g., Card)
    },
    text: {
      primary: '#F2F2F2', // Override the default textPrimary color
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#F2F2F2',
          fontFamily: 'Roboto'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#F2F2F2'
        }
      }
    }
  }
});

export default theme;
