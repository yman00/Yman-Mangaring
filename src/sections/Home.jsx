import React from 'react'
import Box from '@mui/material/Box';
import BlurText from "../Components/ReactBits/BlurText";
import { p } from 'framer-motion/client';
import { Typography } from '@mui/material';


const Home = ({id}) => {
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
    <Box id={id} 
    sx={{display: 'flex',
     flexDirection:{xs:'column', sm:'row'},
     width: '100%',
     height: '80vh',
     backgroundColor: 'bg.primary',
     justifyContent: 'center',
     alignItems: {xs:'center', sm:'end'},
     color: 'gray',
     gap: 1,
     p: 1
    }}>
      <Box sx={{display: 'grid', width: {xs:'90%', sm:'100%'}, height: {xs:'90%', sm:'90%'}, backgroundColor: 'bg.primary', placeItems: 'center'}}>
        <BlurText
        text="@YmanPurdy"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
        style={{fontFamily: 'Tektur', fontSize: '11vw', color: '#d2824a', padding: 2}}
      />
      </Box>
    </Box>
  )
}

export default Home