import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';

function ReadWhy({ text1, text2, text3 }) {
    const [isTextVisible, setTextVisibility] = useState(false);

    return (
      <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: '16px', 
            margin: '40px auto 20px', 
            maxWidth: '600px', 
            color: '#fff',
          }}
        >
          {text1} 
          <Typography 
            component="span"
            sx={{
              textDecoration: 'underline',
              cursor: 'pointer',
              marginLeft: '5px',
              '&:hover': {
                color: '#f2a900',
              }
            }}
            onClick={() => setTextVisibility(!isTextVisible)}
          >
            {text2}
          </Typography>
        </Typography>

        {isTextVisible && (
          <Typography 
            variant="body2" 
            sx={{ 
              backgroundColor: '#292929', 
              padding: '7px', 
              fontSize: '14px', 
              margin: '15px auto', 
              maxWidth: '600px', 
              color: '#fff'
            }}
          >
            {text3}
          </Typography>
        )}
      </Box>
    );
}

export default ReadWhy;
