import React from 'react'
import Box from '@mui/material/Box';
import TrikeFranc from '../assets/image/Projects-Img/TFload.png'
import RPTL from '../assets/image/Projects-Img/RPTload.png'
import QM from '../assets/image/Projects-Img/QM1.png'
import Typography from '@mui/material/Typography';
import { ProjectContainer } from '../Components/ui/ProjectContainer';
import { projectData } from '../data/ProjectData';

const Project = ({id}) => {
  return (
    <Box id={id} sx={{display: 'block',
      width: '100%',
      // height: {xs: '220vh', sm: '120vh'},
      backgroundColor: 'bg.primary',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'gray',
      py: '1rem',
      overflow: 'hidden'
      }}>
      <Box data-aos="fade-up" sx={{display: 'grid',
        placeItems: 'center',
        width: '100%', 
        pt: {xs:'none', sm:'4rem', 
        fontFamily: 'Tekur',
        color: 'txt.primary',
        },
        mb: '2rem'}}>
        PROJECTS
      </Box>
      <Box sx={{display: {xs:'grid', sm: 'flex'}, justifyContent: 'center'}}>
        {projectData.map((project) => (
          <ProjectContainer
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Project