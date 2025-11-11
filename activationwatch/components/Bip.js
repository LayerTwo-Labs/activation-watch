import { useState, useEffect } from 'react';
import BoxContainer from '../components/BoxContainer.js';
import { Box } from '@mui/material';

const Bip = (myBip) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/get_blockchain_info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ myBips: [myBip] }),
        //body: { myBips: [myBip] },
      });

      const result = await response.json();
      console.log(result);
      setData(result);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Box sx={{maxWidth: '900px'}}>
        <BoxContainer data={data[0]["signalling"]}></BoxContainer>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Box>
    </div>
  );
}

export default Bip;
