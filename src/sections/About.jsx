import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {personalData} from '../data/PersonalData'

const About = ({id}) => {
    useEffect(() => {
    AOS.init({ duration: 500 }); // Initialize AOS here
  }, []);

  const style = {color: 'txt.primary',
      fontSize: {xs:'9vw', sm:'2vw'},
      cursor: 'pointer',
      transition: 'font-size 0.3s ease-in-out',
      '&:hover': {
      fontSize: '3.5vw'}
      }

  return (
    <Box id={id} 
    sx={{display: 'flex', 
        // width: '100%', 
        // height: {xs:'150vh', sm:'100vh'}, 
        backgroundColor: 'bg.primary', 
        justifyContent: 'space-evenly', 
        color: 'gray',
        flexDirection: {xs: 'column', sm: 'row'}
        }}>
      <Box sx={{display: 'flex', flexDirection: 'column', width: {xs: '100vw', sm: '40vw'},pt: {xs:'5rem', sm:'none'}, justifyContent: 'center', alignItems: 'center'}}>
        <Stack data-aos="fade-right" sx={{width: '100%', gap: 1, px: '2rem'}}>
          <Typography variant='h5'>Hi there!</Typography>
          <Typography variant='h3' sx={{fontFamily: 'Tektur', color: 'txt.primary'}}>{personalData.name}</Typography>
          <Typography variant='body2' sx={{ textAlign: 'justify'}}>
            {personalData.about}
          </Typography>
          <Box sx={{display: 'flex', width: '100%', height: '4rem', gap: 2, p: '1rem' }}>
            <GitHubIcon
            onClick={() => window.open(personalData.github, '_blank')}
            sx={style}/>
            <FacebookRoundedIcon 
            onClick={() => window.open(personalData.facebook, '_blank')} 
            sx={style}/>
            <EmailRoundedIcon 
            onClick={() => window.open(personalData.email, '_blank')} 
            sx={style}/>
            <LinkedInIcon 
            onClick={() => window.open(personalData.linkedin, '_blank')} 
            sx={style}/>
          </Box>
        </Stack>
      </Box>
      <Box sx={{display: 'flex', width: {xs:'100vw', sm:'32vw'}, height: '90vh', justifyContent: 'center', alignItems: 'center'}}>
          <img src={personalData.image} alt="Yman Purdy" data-aos="fade-up" style={{ width: '90%', height: '90%', objectFit: 'cover',borderRadius: '2rem'}} />
      </Box>
    </Box>
  )
}

export default About