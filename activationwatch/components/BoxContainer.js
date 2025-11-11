import { Box, styled } from '@mui/system';

const Container = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(13px, 1fr))',
  gap: '2px',
  width: '100%',
  maxWidth: '1000px',
  backgroundColor: '#444',
});

const BoxGreen = styled(Box)({
  width: '13px',
  height: '13px',
  border: '1px solid #444',
  borderRadius: '2px',
  backgroundColor: 'green',
  backgroundImage: 'linear-gradient(to bottom left, rgba(0,0,0,0.2), transparent)',
  padding: '2px',
  boxSizing: 'border-box',
  
});

const BoxRed = styled(Box)({
  width: '13px',
  height: '13px',
  border: '1px solid #444',
  borderRadius: '2px',
  backgroundColor: 'red',
  backgroundImage: 'linear-gradient(to bottom left, rgba(0,0,0,0.2), transparent)',
  padding: '2px',
  boxSizing: 'border-box',
  
});

const BoxGrey = styled(Box)({
  width: '13px',
  height: '13px',
  border: '1px solid #444',
  borderRadius: '2px',
  backgroundColor: 'grey',
  backgroundImage: 'linear-gradient(to bottom left, rgba(0,0,0,0.2), transparent)',
  padding: '2px',
  boxSizing: 'border-box',
  
});


const BoxContainer = ({ data }) => {
  const totalBoxes = 2016;
  const boxes = [];

  for (let char of data) {
    if (char === '#') {
      boxes.push(<BoxGreen key={boxes.length} />);
    } else if (char === '-') {
      boxes.push(<BoxRed key={boxes.length} />);
    }
  }

  const remainingBoxes = totalBoxes - boxes.length;
  for (let i = 0; i < remainingBoxes; i++) {
    boxes.push(<BoxGrey key={boxes.length + i} />);
  }

  return <Container sx={{backgroundColor: '#444'}}>{boxes}</Container>;
}

export default BoxContainer;