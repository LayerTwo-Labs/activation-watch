import React from 'react';
import { Box, Typography } from '@mui/material';

function SoftforkInfo({ data, softfork_text }) {
  return (
    <Box
      className="softfork-info-ul"
      sx={{
        position: 'absolute',
        textAlign: 'left',
        padding: '5px',
        backgroundColor: '#444',
        border: '1px solid #f2a900',
        zIndex: 1000,
        width: '200px',
        left: '0',
        top: '0'
      }}
    >
      <ul>
        <li><Typography fontWeight="500" variant="body1">{softfork_text["status"]}</Typography></li>
        <li><Typography fontWeight="500" variant="body1">{softfork_text["bit"]} {data[0]["Bit"]}</Typography></li>
        <li><Typography fontWeight="500" variant="body1">{softfork_text["count"]} {data[0]["Count"]}</Typography></li>
        <li><Typography fontWeight="500" variant="body1">{softfork_text["elapsed"]} {data[0]["Elapsed"]}</Typography></li>
        <li><Typography fontWeight="500" variant="body1">{softfork_text["period"]} {data[0]["Period"]}</Typography></li>
        <li><Typography fontWeight="500" variant="body1">{softfork_text["threshold"]} {data[0]["Threshold"]}</Typography></li>
        <li><Typography fontWeight="500" variant="body1">{softfork_text["possible"]} {data[0]["Possible"]}</Typography></li>
      </ul>
    </Box>
  );
}

export default SoftforkInfo;
