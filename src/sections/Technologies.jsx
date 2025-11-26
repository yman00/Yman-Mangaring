import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { keyframes } from '@mui/system';

import html from '../assets/image/Technologies-Icons/html-5.png';
import css from '../assets/image/Technologies-Icons/css-3.png';
import js from '../assets/image/Technologies-Icons/javascript.png';
import reactJs from '../assets/image/Technologies-Icons/reactJs.png';
import tailwind from '../assets/image/Technologies-Icons/tailwind.png';
import nodejs from '../assets/image/Technologies-Icons/nodejs.png';
import python from '../assets/image/Technologies-Icons/python.png';
import mongodb from '../assets/image/Technologies-Icons/mongodb.png';
import mysql from '../assets/image/Technologies-Icons/mysql.png';
import VScode from '../assets/image/Technologies-Icons/VScode.png';
import figma from '../assets/image/Technologies-Icons/figma.png';
import canva from '../assets/image/Technologies-Icons/canva.png';

const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const techItems = [
  { src: html, label: 'HTML 5' },
  { src: css, label: 'CSS 3' },
  { src: js, label: 'Javascript' },
  { src: reactJs, label: 'React Js' },
  { src: tailwind, label: 'Tailwind' },
  { src: nodejs, label: 'Node Js' },
  { src: python, label: 'Python' },
  { src: mongodb, label: 'MongoDB', width: '65%' },
  { src: mysql, label: 'MySQL', width: '45%' },
  { src: VScode, label: 'Visual Studio Code' },
  { src: figma, label: 'Figma' },
  { src: canva, label: 'Canva' },
];

const toolItems = [
  { src: VScode, label: 'Visual Studio Code' },
  { src: figma, label: 'Figma' },
  { src: canva, label: 'Canva' },
];

const renderMarqueeItems = (items) => (
  <>
    {items.map((item, index) => (
      <Box key={index} sx={{ display: 'grid', placeItems: 'center', minWidth: 150, mx: 2 }}>
        <img src={item.src} alt={item.label} style={{ width: item.width || '50%' }} />
        <Typography variant="body1" sx={{ color: 'white' }}>
          {item.label}
        </Typography>
      </Box>
    ))}
  </>
);

const Technologies = ({ id }) => {
  return (
    <Box
      id={id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // height: { xs: '40vh', sm: '45vh' },
        backgroundColor: 'bg.primary',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'gray',
        gap: 4,
      }}
    >
      <Box data-aos="fade-up" sx={{display: 'grid',
        placeItems: 'center',
        width: '100%', 
        pt: {xs:'none',
        sm:'4rem', fontFamily: 'Tekur',
        color: 'txt.primary'}}}>
        TECHNOLOGIES
      </Box>
      {/* Seamless Marquee for Tech Stack */}
      <Box data-aos="fade-up" sx={{ overflow: 'hidden', width: '100%', py: 2 }}>
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            animation: `${marquee} 10s linear infinite`,
          }}
        >
          {renderMarqueeItems(techItems)}
          {renderMarqueeItems(techItems)}
        </Box>
      </Box>
    </Box>
  );
};

export default Technologies;
