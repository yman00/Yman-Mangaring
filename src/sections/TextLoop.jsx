import { Box } from '@mui/material';
import React from 'react';
import CurvedLoop from '../Components/ReactBits/CurvedLoop';

const TextLoop = () => {
  return (
    <Box sx={{ backgroundColor: 'bg.primary', height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CurvedLoop 
        marqueeText="Frontend ✦ Backend ✦ Database ✦ Automation ✦ Web Site ✦ Analytics ✦"
        speed={1}
        curveAmount={10}
        direction="right"
        interactive={false}
        className="custom-text-style"
        color="txt.primary"
      />
    </Box>
  );
};

export default TextLoop;
