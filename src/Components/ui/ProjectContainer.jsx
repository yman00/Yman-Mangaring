import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from '@mui/material'
import image from '../../assets/image/Projects-Img/TFload.png'
import { Visibility } from '@mui/icons-material'

export const ProjectContainer = ({image, title, description, techStack}) => {
  return (
    <Card data-aos="fade-up" sx={{ maxWidth: 400, m: 1 }}>
      <CardMedia component="img" height="194" image={image} alt={title} sx={{maxHeight: 300}}/>

      <CardContent>
        {techStack.map((tech, index) => (
          <Chip key={index} label={tech} variant="outlined" size="small" sx={{mr: .2}}/>
        ))}

        <h4 style={{ margin: 1 }}>{title}</h4>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
