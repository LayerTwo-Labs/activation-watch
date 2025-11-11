/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Link from "next/link";
import Typography from '@mui/material/Typography';


const Footer = () => {
  return (
  <Paper 
    sx={{
      /*marginTop: 'calc(10% + 10px)',*/
      width: '100%',
      bottom: 0,
      backgroundColor: "#121212",
      marginTop: '100px',
      borderTop: '1px solid #444'
    }} 
    component="footer" 
    square 
    variant="outlined"
    >
      <Container maxWidth="lg" sx={{my: '40px'}}>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Typography variant="h6">
            <Link 
              href='/' 
              passHref 
              style={{
                textDecoration: 'none'
              }}
            >
              <Typography variant="h4" sx={{ fontFamily: "VT323", color: '#f2a900' }}>
                ACTIVATION.WATCH
              </Typography>
            </Link>          
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="white">
            Copyright ©2023-2025
          </Typography>
        </Box>
      </Container>
    </Paper>
  )
}

export default Footer;
