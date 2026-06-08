import { useState, useEffect } from 'react';
import { IconButton, Tooltip, Container, Box, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography} from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ReadWhy from '../components/ReadWhy.js';
import text from '../public/text.json';
import TranslateIcon from '@mui/icons-material/Translate';

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#F2F2F2',
  textAlign: 'center'
}));

StyledTypography.defaultProps = {
  variant: 'h6'
};

export default function Home() {

  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage; 
    setLanguage(userLang.startsWith('zh') ? 'zh' : 'en');
  }, []);

  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/get_blockchain_info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ myBips: ['CAT', 'RDTS', 'QNTUM', 'CTV', 'DC', 'GCC', 'GSR', 'TXHSH', 'VAULT'] }),
      });

      const result = await response.json();
      setData(result);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh'}}>

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
        <Link href="https://activation.watch/" style={{ textDecoration: 'none' }}>
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
            {text[language]["main_page"]["links"]["link3"]}
          </Typography>
        </Link>
        <Link href="https://activation.watch/bip/CAT" style={{ textDecoration: 'none' }}>
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
            {text[language]["main_page"]["links"]["link4"]}
          </Typography>
        </Link>
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
      

      {/* Subheader */}
      <Box textAlign="center" sx={{marginTop: {xs: '40px', sm: '50px'}}}>
        <Typography fontWeight="500" variant="h4" sx={{fontSize: {xs: '30px', sm: '34px'}}}>{text[language]["main_page"]["subheader"]}</Typography>
      </Box>


      {/* Info Text */}
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" sx={{fontWeight: "500", fontSize: {xs: '18px', sm: '20px'}, maxWidth: '600px', marginTop: '50px', mx: 'auto', color: '#F2F2F2' }}>
          {text[language]["main_page"]["info_text"]}
        </Typography>
      </Box>

      {/* Table */}
      <Box 
        sx={{
          backgroundColor: '#121212', 
          mx: "auto", 
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          border: 'none',
        }} 
        component={Paper} 
        maxWidth={700}
      >
        <Box 
          sx={{
            maxWidth: '33%',
            wordWrap: 'break-word',
            marginTop: '30px',
            lineHeight: '1.2',
            marginBottom: '6px',
            textAlign: 'center',
            fontSize: '11px',
            px: '10px',
          }}
        >
          <Typography 
            sx={{color: '#f2a900', fontSize: {xs: '10px', sm: '12px'}}} 
            dangerouslySetInnerHTML={{ __html: text[language]["main_page"]["speedy_trial"] }}
          >
          </Typography>
        </Box>
        <Table 
          sx={{
            backgroundColor: '#343a40', 
            border: '0.5px solid', 
            borderColor: 'rgb(119, 110, 98)', 
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{paddingTop: { xs: '10px', sm: '16px' }, paddingBottom: { xs: '10px', sm: '16px' }, width: '33.33%', borderBottom: 'none'}}>
                <StyledTypography></StyledTypography>
              </TableCell>
              <TableCell sx={{paddingTop: { xs: '10px', sm: '16px' }, paddingBottom: { xs: '10px', sm: '16px' }, width: '33.33%', borderBottom: 'none'}}>
                <StyledTypography fontWeight="500" sx={{fontSize: {xs: '16px', sm: '20px' }}}>{text[language]["main_page"]["count"]}</StyledTypography>
              </TableCell>
              <TableCell sx={{paddingTop: { xs: '10px', sm: '16px' }, paddingBottom: { xs: '10px', sm: '16px' }, width: '33.33%', borderBottom: 'none'}}>
                <StyledTypography fontWeight="500" sx={{fontSize: {xs: '16px', sm: '20px' }}}>%</StyledTypography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, idx) => {
              const green_count = (item.signalling.match(/#/g) || []).length;
              const elapsed = (item.signalling.match(/-/g) || []).length + green_count;
              const percentage = (green_count / (elapsed / 100)).toFixed(1);

              let url = "/bip/" + item.Bip;

              const isActive = green_count > 0;
              
              return (
                <TableRow 
                  key={idx} 
                  sx={{
                    transition: 'all 0.3s ease-in-out',
                    backgroundColor: isActive 
                      ? (idx % 2 === 1 ? '#3a4a3d' : 'rgba(76, 175, 80, 0.15)')
                      : (idx % 2 === 1 ? '#2a2a2a' : 'rgba(255,255,255,0.03)'),
                    opacity: isActive ? 1 : 0.4,
                    borderLeft: isActive ? '4px solid #4caf50' : '4px solid transparent',
                    boxShadow: isActive ? '0 0 20px rgba(76, 175, 80, 0.3), inset 0 0 20px rgba(76, 175, 80, 0.1)' : 'none',
                    animation: isActive ? 'pulse 3s ease-in-out infinite' : 'none',
                    '@keyframes pulse': {
                      '0%, 100%': {
                        boxShadow: '0 0 20px rgba(76, 175, 80, 0.3), inset 0 0 20px rgba(76, 175, 80, 0.1)',
                      },
                      '50%': {
                        boxShadow: '0 0 30px rgba(76, 175, 80, 0.5), inset 0 0 30px rgba(76, 175, 80, 0.2)',
                      },
                    },
                    '&:hover': {
                      backgroundColor: isActive 
                        ? 'rgba(76, 175, 80, 0.25)' 
                        : 'rgba(255,255,255,0.05)',
                      transition: 'all 0.3s ease-in-out',
                      transform: isActive ? 'scale(1.02)' : 'none',
                      boxShadow: isActive ? '0 0 40px rgba(76, 175, 80, 0.5), inset 0 0 30px rgba(76, 175, 80, 0.2)' : 'none',
                      '& > .MuiTableCell-root:first-of-type .MuiTypography-root': {
                        color: isActive ? '#81c784' : '#888',
                      },
                      '& > .MuiTableCell-root:first-of-type a': {
                        textDecorationColor: isActive ? '#81c784' : '#888',
                      },
                    },
                    cursor: isActive ? 'pointer' : 'not-allowed',
                    filter: isActive ? 'none' : 'grayscale(100%)',
                  }}
                  onClick={() => {
                    if (isActive) {
                      // Navigate to the link when the TableRow is clicked
                      window.location.href = url;
                    }
                  }}
                >
                  <TableCell sx={{paddingTop: { xs: '10px', sm: '16px' }, paddingBottom: { xs: '10px', sm: '16px' }, borderBottom: '1px solid #454d55' }}>
                    <Link href={url}
                      style={{
                        color: isActive ? '#f2f2f2' : '#666', 
                        textDecoration: 'none',
                        pointerEvents: isActive ? 'auto' : 'none'
                      }}
                    >
                      <StyledTypography sx={{ 
                        textDecoration: 'underline', 
                        fontSize: {xs: '16px', sm: '20px' },
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? '#f2f2f2' : '#666'
                      }}>
                      {item.Bip}
                      </StyledTypography>
                    </Link>
                  </TableCell>
                  <TableCell sx={{paddingTop: { xs: '10px', sm: '16px' }, paddingBottom: { xs: '10px', sm: '16px' }, borderBottom: '1px solid #454d55' }}>
                    <StyledTypography sx={{
                      fontSize: {xs: '16px', sm: '20px' },
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#4caf50' : '#666'
                    }}>
                      {`${green_count}/${elapsed}`}
                    </StyledTypography>
                  </TableCell>
                  <TableCell sx={{paddingTop: { xs: '10px', sm: '16px' }, paddingBottom: { xs: '10px', sm: '16px' }, borderBottom: '1px solid #454d55' }}>
                    <StyledTypography sx={{
                      fontSize: {xs: '16px', sm: '20px' },
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#4caf50' : '#666'
                    }}>
                      {percentage}
                    </StyledTypography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
        <ReadWhy text1={text[language]["main_page"]["read_why"]["text1"]} text2={text[language]["main_page"]["read_why"]["text2"]} text3={text[language]["main_page"]["read_why"]["text3"]} />
      <Box textAlign="center" mt={4}>
      
      </Box>

    </Container>
  );
}
