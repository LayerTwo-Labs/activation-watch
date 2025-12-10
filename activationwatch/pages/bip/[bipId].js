import { Fragment, useState, useEffect, useRef } from 'react';
import BoxContainer from '../../components/BoxContainer.js';
import { Tooltip, Box, Typography, LinearProgress, Select, MenuItem, IconButton, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useRouter } from 'next/router';
import Link from 'next/link';
import text from '../../public/text.json';
import TranslateIcon from '@mui/icons-material/Translate';
import SoftforkInfo from '../../components/SoftforkInfo.js';

const spinnerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  animation: 'spin 1s linear infinite',
  zIndex: 9999
};

const imageStyle = {
  width: '100px',  // Change this to the actual width of your image
  height: '100px'  // Change this to the actual height of your image
};

const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Bip = () => {
  const router = useRouter();
  const { bipId } = router.query;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('en');
  const [isSoftforkInfoVisible, setIsSoftforkInfoVisible] = useState(false);
  const boxRef = useRef(null);

  const handleClickOutside = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setIsSoftforkInfoVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage; 
    setLanguage(userLang.startsWith('zh') ? 'zh' : 'en');
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (bipId) {
        const response = await fetch('/api/get_blockchain_info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ myBips: [bipId] }),
          // body: { myBips: [bipId] },
          //body: { myBips: [bipId] },
        });

        const result = await response.json();
        setData(result);
        setLoading(false);
      }
    }
    fetchData();
  }, [bipId]);

  // Add this function to count occurrences of a character in a string
  const countOccurrences = (str, char) => {
    return (str.match(new RegExp(char, 'g')) || []).length;
  }

  // Use the function to get the counts
  const greenCount = countOccurrences(data[0]?.signalling || '', '#');
  const redCount = countOccurrences(data[0]?.signalling || '', '-');
  const greyCount = 2016 - greenCount - redCount;

  const greenPercentage = parseFloat((greenCount / 20.16).toFixed(2));
  const greyPercentage = parseFloat((greyCount / 20.16).toFixed(2));
  const redPercentage = 100 - greenPercentage - greyPercentage;
  

  if (loading) {
    return (
      <Fragment>
        <style>{keyframes}</style>
        <div style={spinnerStyle}>
          <img src="/loading-icon.png" alt="Loading..." style={imageStyle} />
        </div>
      </Fragment>
    );
  }

  return (
    <Container maxWidth="lg" sx={{minHeight: '100vh'}}>

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

      {/* BIP Dropdown and GitHub Icon */}
      <Box display="flex" justifyContent="center" alignItems="center" sx={{marginTop: '40px'}}>
        <Typography variant="h5" sx={{ fontWeight: '500', marginRight: '10px' }}>BIP:</Typography>
        <Select
          value={bipId}
          onChange={(e) => router.push(`/bip/${e.target.value}`)}
          sx={{ 
            marginRight: '10px',
            color: '#F2F2F2',
            fontSize: '1.3rem',
            fontWeight: '500',
            backgroundColor: '#222',
            borderColor: '#F2F2F2',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#F2F2F2',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f2a900',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f2a900',
            },
            '& svg': { // This targets the dropdown arrow SVG icon
              color: '#F2F2F2',
            },
          }}
        >
          {[bipId, ...['APO', 'BMM', 'CAT', 'CCV', 'CSFS', 'CTV', 'DC', 'GCC', 'GSR', 'INKEY', 'PAIRC', 'QNTUM', 'RDTS', 'TWEKD', 'TXHSH', 'VAULT'].filter(b => b !== bipId)].map(bip => (
            <MenuItem key={bip} value={bip} sx={{color: '#F2F2F2', backgroundColor: '#121212', '&:hover': {backgroundColor: '#2a2a2a'}}}>
              {bip}
            </MenuItem>
          ))}
        </Select>
        <Link href={text[language]["bip_page"][bipId].url} passHref>
          <IconButton>
            <GitHubIcon 
              sx={{
                color: 'white',
                '&:hover': {
                  color: '#f2a900',
                }
              }} />
          </IconButton>
        </Link>
      </Box>

      {/* Information Text */}
      <Box 
        sx={{
          textAlign: 'left',
          marginTop: '60px',
          mx: 'auto',
          maxWidth: '600px',
          '& a': { // Directly target <a> tags within this Box
            color: '#007bff',
            textDecoration: 'none',
            '&:hover': {
              color: '#0056b3', // Hover color
              textDecoration: 'underline',
            }
          }
        }}
      >
        <Typography 
          sx={{
            fontSize: {xs: '16px', sm: '18px'},
            color: '#F2F2F2',
            mb: '16px',
            textIndent: '20px',
            fontWeight: '500'
          }}
          dangerouslySetInnerHTML={{ __html: text[language]["bip_page"][bipId].text1 }}
        />
        
        <Typography 
          sx={{
            fontSize: {xs: '16px', sm: '18px'},
            color: '#F2F2F2',
            mb: '16px',
            textIndent: '20px',
            fontWeight: '500'
          }}
          dangerouslySetInnerHTML={{ __html: text[language]["bip_page"][bipId].text2 }}
        />
        
        <Typography 
          sx={{
            fontSize: {xs: '16px', sm: '18px'},
            color: '#F2F2F2',
            textIndent: '20px',
            fontWeight: '500'
          }}
          dangerouslySetInnerHTML={{ __html: text[language]["bip_page"][bipId].text3 }}
        />
      </Box>




      {/* Progress Bar */}
      <Box 
        sx={{ 
          maxWidth: '1000px', 
          mx: 'auto', 
          marginTop: '50px', 
          position: 'relative', 
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
          overflow: 'hidden',
          height: '50px',
          display: 'flex'
        }}
      >
        <Box 
          sx={{ 
            width: `${greenPercentage}%`, 
            backgroundColor: '#28a745', 
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center' 
          }} 
        >
          <Typography sx={{color: 'white', fontWeight: '500', mx: 'auto', fontSize: {xs: '12px', sm:'12px'}}}>{greenPercentage.toFixed(2)}%</Typography>
        </Box>
        <Box 
          sx={{ 
            width: `${greyPercentage}%`, 
            backgroundColor: '#6c757d', 
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'  
          }} 
        >
          <Typography sx={{color: 'white', fontWeight: '500', mx: 'auto', fontSize: {xs: '12px', sm:'12px'}}}>{greyPercentage.toFixed(2)}%</Typography>
        </Box>
        <Box 
          sx={{ 
            width: `${redPercentage}%`, 
            backgroundColor: '#dc3545', 
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'  
          }} 
        >
          <Typography sx={{color: 'white', fontWeight: '500', mx: 'auto', fontSize: {xs: '12px', sm:'12px'}}}>{redPercentage.toFixed(2)}%</Typography>
        </Box>
      </Box>

      {/* Labels */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          maxWidth: '1000px', 
          position: 'relative', 
          margin: '10px auto', 
          fontSize: '12px' 
        }}
      >
        <Typography 
          sx={{ 
            fontSize: {xs: '10px', sm: '12px'},
            position: 'absolute',
            width: `${greenPercentage}%`, 
            color: '#f2f2f2',
            textAlign: 'center' 
          }}
        >
          {greenCount} {text[language]["bip_page"]["signalling_blocks"]}
        </Typography>

        <Typography 
          sx={{
            fontSize: {xs: '10px', sm: '12px'}, 
            position: 'absolute', 
            left: `${greenPercentage}%`,
            width: `${greyPercentage}%`,
            color: '#f2f2f2',
            textAlign: 'center'
          }}
        >
          {greyCount} {text[language]["bip_page"]["upcoming_blocks"]}
        </Typography>
        <Typography 
          sx={{
            fontSize: {xs: '10px', sm: '12px'},
            position: 'absolute', 
            left: `calc(${100 - redPercentage}%)`, // Center of the red bar
            width: `${redPercentage}%`,  // Set the maximum width to the width of the red bar
            color: '#f2f2f2',
            whiteSpace: 'wrap', // Add ellipsis if the text is too long
            textAlign: 'center'  // Pull the label back to the left by half its width
          }}
        >
          {redCount} {text[language]["bip_page"]["non_signalling_blocks"]}
        </Typography>

      </Box>
      <Box
        ref={boxRef}
        sx={{
          maxWidth: '1000px', 
          justifyContent:"center", 
          mx: 'auto', 
          marginTop: '100px', 
          position: 'relative'
        }}
        onMouseEnter={() => setIsSoftforkInfoVisible(true)}
        onMouseLeave={() => setIsSoftforkInfoVisible(false)}
        onClick={() => setIsSoftforkInfoVisible(!isSoftforkInfoVisible)}
      >
        <Box 
          sx={{
            position: 'absolute',
            zIndex: '1', 
            top: '-30px',
            left: '10px', 
          }}
        >
          <Typography sx={{color: '#f2a900', fontWeight: '500', fontSize: {xs: '14px', sm: '18px'}}}>{text[language]["bip_page"]["box_container_label"]}</Typography>
        </Box>
        {isSoftforkInfoVisible && <SoftforkInfo data={data} softfork_text={text[language]["bip_page"]["softfork_info"]} />}
        <BoxContainer data={data[0]["signalling"]}></BoxContainer>
      </Box>
    </Container>
  );
}

export default Bip;
