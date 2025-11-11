import { Typography, Box, Paper, styled } from '@mui/material';
import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Line = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  lineHeight: '1.5',
  fontSize: '12px',
  minWidth: '1000px',
  fontFamily: 'Roboto mono, Courier New, Courier, monospace',
  boxSizing: 'border-box',
  '&::before': {
    content: 'attr(data-linenum)',
    fontSize: '12px',
    display: 'flex',
    color: '#6a737d',
    width: '50px',
    marginRight: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'auto',
  }
});

const LineAdd = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  lineHeight: '1.5',
  minWidth: '1000px',
  fontSize: '12px',
  fontFamily: 'Roboto mono, Courier New, Courier, monospace',
  boxSizing: 'border-box',
  color: 'white',
  backgroundColor: '#162923',
  '&::before': {
    content: 'attr(data-linenum)',
    fontSize: '12px',
    display: 'flex',
    color: 'white',
    backgroundColor: '#245330',
    width: '50px',
    marginRight: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'auto',
  }
});

const LineInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  height: '20px',
  fontSize: '10px',
  lineHeight: '1.5',
  minWidth: '1000px',
  position: 'relative',
  fontFamily: 'Roboto mono, Courier New, Courier, monospace',
  boxSizing: 'border-box',
  backgroundColor: '#162235', 
  color: '#69727D',
  '&::before': {
    content: '" "',
    display: 'flex',
    backgroundColor: '#254995',
    color: '#6a737d',
    width: '50px',
    paddingRight: '5px',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'auto',
  }
});


export default function DiffParams({ jsObj }) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(jsObj);

  // Use regular spaces for monospace indentation
  const renderIndents = (count) => {
    return "\xa0\xa0\xa0\xa0".repeat(count); // Four non-breaking spaces repeated "count" times
  };

  const prefixForAddLine = () => {
    return <span style={{ userSelect: 'none' }}>+</span>;
  };

  const prefixForLine = () => {
    return <span style={{ userSelect: 'none' }} dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />;
  };   

  return (
    <Paper elevation={3} 
      sx={{ 
        backgroundColor: '#000000', 
        whiteSpace: 'nowrap', 
        overflowX: 'auto', 
        fontFamily: 'Roboto mono, Courier New, Courier, monospace',
        marginTop: '20px',
        paddingBottom: '10px',
      }}
    >
      <Box onClick={() => { setIsOpen(!isOpen) }} sx={{ cursor: 'pointer' }}>
        <Typography variant="h6" sx={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
          {jsObj.header.text}
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Typography>
        
      </Box>
      <Collapse in={isOpen}>
        <Box>
          {jsObj.lines.map(line => {
            return (
              <Box 
                component={
                  line.type === "add" 
                    ? LineAdd 
                    : line.type === "info" 
                      ? LineInfo 
                      : Line
                } 
                data-linenum={line.linenum} 
                key={line.linenum}
              >
                {line.type === "add" ? prefixForAddLine() : prefixForLine()}
                {renderIndents(line.ind)}
                {line.text}
              </Box>
            );
          })}
        </Box>
      </Collapse>
    </Paper>
  );
}


