import { Tooltip, IconButton, Container, Box, Typography, Link, Divider } from '@mui/material';
import { styled } from '@mui/system';
import DiffParams from '../components/DiffParams.js';
import howtosignal from '../public/howtosignal.json';
import text from "../public/text.json";
import { Fragment, useState, useEffect } from 'react';
import TranslateIcon from '@mui/icons-material/Translate';

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  paddingLeft: '2rem'
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: '#808080', 
  borderWidth: '1.5px', 
  marginTop: '50px'
}));


const HowToSignal = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage; 
    setLanguage(userLang.startsWith('zh') ? 'zh' : 'en');
  }, []);

  return (
    <Container maxWidth="lg">

      {/* Header */}
      <Box textAlign="center" mt={3}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Typography 
            variant="h2" 
            sx={{
              fontSize: {xs: '50px', sm: '60px'}, 
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', 
              color: "#f2a900", 
              fontFamily: "'VT323', monospace",
            }}>
            {text[language]["main_page"]["header"]}
          </Typography>
        </Link>
      </Box>


      {/* Links */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link href="/proposalinfo" style={{ textDecoration: 'none' }}>
          <Typography 
            variant="h6" 
            sx={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
              fontWeight: '500',
              fontSize: {xs: '16px', sm: '20px'},
              color: '#F2F2F2',
              marginRight: '15px',
              padding: '8px 16px',
              border: '2px solid #F2F2F2',
              borderRadius: '8px',
              transition: 'all 0.3s',
              '&:hover': {
                color: '#f2a900',
                borderColor: '#f2a900',
                backgroundColor: 'rgba(242, 169, 0, 0.1)',
              }
            }}
          >
            {text[language]["main_page"]["links"]["link2"]}
          </Typography>
        </Link>
        <Link href="/howtosignal" style={{ textDecoration: 'none' }}>
          <Typography 
            variant="h6" 
            sx={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
              fontWeight: '500',
              fontSize: {xs: '16px', sm: '20px'},
              color: '#F2F2F2',
              padding: '8px 16px',
              border: '2px solid #F2F2F2',
              borderRadius: '8px',
              transition: 'all 0.3s',
              '&:hover': {
                color: '#f2a900',
                borderColor: '#f2a900',
                backgroundColor: 'rgba(242, 169, 0, 0.1)',
              }
            }}
          >
            {text[language]["main_page"]["links"]["link1"]}
          </Typography>
        </Link>
        
        <Tooltip title="Change Language" sx={{marginLeft: '5px'}}>
          <IconButton 
            size="large"
            aria-label="change language" 
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
          >
            <TranslateIcon 
              sx={{
                color: '#F2F2F2', 
                fontSize: {xs: '1.5rem', sm: '1.5rem'},
                transition: 'color 0.3s',
                '&:hover': {
                  color: '#f2a900',
                }
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>


      <Box sx={{ color: "#F2F2F2", marginTop: '70px'}}>
        <StyledTypography variant="h4" sx={{ marginTop: '70px' }}>{text[language]["how_to_signal"]["subheader"]}</StyledTypography>
        <StyledTypography variant="h6" sx={{ marginTop: '10px'}}>{text[language]["how_to_signal"]["introduction"]}</StyledTypography>
      </Box>

      <StyledDivider />



      <Box sx={{ color: '#F2F2F2', marginTop:'40px'}}>
        <StyledTypography variant="h4">
          {text[language]["how_to_signal"]["option2"]}
        </StyledTypography>
      </Box>

      <StyledBox sx={{ color: '#F2F2F2', marginTop:'20px'}}>
        <StyledTypography>
          {text[language]["how_to_signal"]["step_1"]} <Link href="https://github.com/LayerTwo-Labs/activation-watch/tree/bitcoin-activation" style={{color: '#007bff', textDecoration: 'none'}}>https://github.com/LayerTwo-Labs/activation-watch/tree/bitcoin-activation</Link>
        </StyledTypography>

        <StyledTypography>
	  2. Mine blocks using GBT: 
          {"./bitcoin-cli getblocktemplate '{\"rules\": [\"segwit\", \"taproot\", \"APO\", \"TXHSH\"]}'"}
        </StyledTypography>
      </StyledBox>
      
      <StyledDivider />


    </Container>
  );
}

export default HowToSignal;
