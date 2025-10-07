import { Box, Typography, Button, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import MyImg from '../src/assets/myimg.avif'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AOS from 'aos'
import 'aos/dist/aos.css'

import Img1 from '../src/assets/waveimg.png'
import Img2 from '../src/assets/calcimg.png'
import Img3 from '../src/assets/spideyportimg.png'

const XaviAbt = ({ dark, toggle }) => {



  const skills = [
    { skilnme: 'HTML', perc: '89' },
    { skilnme: 'CSS', perc: '78' },
    { skilnme: 'BOOTSTRAP', perc: '80' },
     { skilnme: 'JAVASCRIPT', perc: '85' },
    { skilnme: 'REACTJS', perc: '80' },
    { skilnme: 'NODEJS', perc: '70' },
    { skilnme: 'EXPRESSJS', perc: '30' },
    { skilnme: 'MONGODB', perc: '60' }
  ];

  const projects = [
    { projtitle: 'Wave Cafe', projcaptn: 'A responsive café website built with HTML, CSS, Bootstrap, and JavaScript .', img: Img1, link: 'https://xavison03.github.io/cafe.io/' },
    { projtitle: 'Calculator', projcaptn: 'A simple web app that performs basic arithmetic operations using HTML, CSS, and JavaScript.', img: Img2, link: 'https://xavison03.github.io/calculator1.io/' },
    { projtitle: 'Spidey Portfolio', projcaptn: 'Your friendly neighborhood portfolio — crafted with Bootstrap and web magic.', img: Img3, link: 'https://xavison03.github.io/parkar.io/' }
  ];


  const abtpoint=[
      'Building full-stack projects using the MERN stack',
  'Creating responsive and interactive user interfaces',
  'Writing clean and maintainable JavaScript code',
  'Developing backend logic with RESTful APIs',
  'Implementing modern UI animations and themes',
  'Optimizing web applications for better performance',
  'Integrating frontend and backend seamlessly',
  'Managing MongoDB databases efficiently',
  'Deploying projects with best practices',
  'Collaborating effectively on development projects',
  'Debugging code and fixing issues quickly',
  'Using Git and version control for organized project workflow',
    'Debugging and troubleshooting code to improve functionality',
    ]
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const buttonBg = dark ? '#6366F1' : '#10B981';

  return (
    <div
      style={{
        backgroundColor: dark ? '#0b0c0c' : 'white',
        color: dark ? 'white' : 'black',
        transition: '0.5s ease-in-out',
        minHeight: '100vh'
      }}
    >



      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }} data-aos="fade-down" data-aos-duration="1500">
        <Typography sx={{
          fontFamily: '"Oswald", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 700,
          fontStyle: 'normal',
          fontSize: '40px'
        }}>About</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img"
          src={MyImg}
          alt="My image"
          sx={{
            borderRadius: "12px",
            boxShadow: "0px 10px 30px rgba(28, 27, 27, 0.98)",
            transition: "transform 0.4s ease",
            height: { xs: "20rem", sm: "22rem", md: "24rem", lg: "28rem" },
            "&:hover": { transform: "scale(1.1)" }
          }}
          data-aos="flip-down" data-aos-duration="1500"
        />
      </Box>

      <Box sx={{ mt: '3rem', textAlign: 'center',overflowX: 'hidden' }}>
        <Typography data-aos="fade-down" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>XAVISON</Typography>
        <Typography data-aos="fade-down" sx={{ marginTop: '30px' ,fontWeight:500, fontSize: { xs: '1rem', md: '1.3rem',lg:'1.5rem' } }}>
          Crafting intuitive user interfaces and powerful backends with MERN.
        </Typography>
      </Box>





<Typography
  data-aos="fade-up"
  sx={{
    maxWidth: '800px',
    mx: 'auto',
    mt: 4,
      fontSize: { 
    xs: '1.2rem',   
    sm: '1.5rem',   
    md: '2rem',     
    lg: '2.5rem',   
    xl: '1.5rem'      
  },
    lineHeight: 1.4,
    textAlign: 'center',
    color: dark ? '#d1d5db' : '#333',
    fontFamily: "Instrument Serif",
  fontWeight: 400,
  fontStyle: 'italic',
letterSpacing:'3px',
lineHeight:'60px',
  fontSize: { xs: '1.2rem', md: '1.3rem',lg:'1.5rem' },
  overflowX: 'hidden'

  }}
>
  I'm a passionate <strong>MERN Stack Developer</strong> who loves building
  clean, responsive, and creative web applications. I enjoy turning ideas into real projects that
  not only look great but also perform smoothly. I work mostly with <strong>React, Node.js, Express,</strong>
  and <strong>MongoDB</strong> to create full-stack applications. I have completed my <strong>BSc in Computer Science</strong> from
  <strong> Government Arts and Science College, Konam</strong>.
</Typography>

<Box
  sx={{
    mt: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
 
>
  <Typography  sx={{
          fontFamily: '"Oswald", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 700,
          fontStyle: 'normal',
          fontSize: '40px'
        }}  data-aos="fade-up"
  data-aos-duration="1500">
    What I Focus On
  </Typography>
  <Grid
    container
    spacing={2}
    sx={{
      maxWidth: '800px',
      justifyContent: 'center',
      marginTop:'20px'
    }}
     data-aos="fade-up"
  data-aos-duration="2000"
  >
    {abtpoint.map((text, index) => (
      <Grid item xs={12} md={6} key={index}>
        <Typography
          sx={{
            marginTop:'20px',
            opacity: 0.9,
            textAlign: 'center',
            lineHeight: 1.6,
            // fontFamily: '"Londrina Solid", sans-serif',
  fontStyle: 'normal',
  fontSize:'1.1rem',
  overflowX: 'hidden'
          }}
        >
          ➤ {text}
        </Typography>
      </Grid>
    ))}
  </Grid>


</Box>


<Typography
  data-aos="fade-up"
  sx={{
    mt: 5,
    fontSize: '1.4rem',
    lineHeight: 1.8,
    textAlign: 'center',
    color: dark ? '#9ca3af' : '#555',
    maxWidth: '750px',
    mx: 'auto',
    overflowX: 'hidden'
  }}
>
  I’m always exploring new technologies and improving my skills to create better digital experiences.
  Every project I work on is a step toward building something meaningful, functional, and visually engaging.
</Typography>












      

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5, mt: 3 }} data-aos="flip-up">
        {[InstagramIcon, LinkedInIcon, EmailIcon].map((Icon, i) => (
          <Button key={i} sx={{ color: buttonBg, mx: 1 }}>
            <Icon />
          </Button>
        ))}
      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        <Button
          variant="contained"
          component="a"
          href="/xavisonmerndeveloper.pdf"
          download
          sx={{
            backgroundColor: buttonBg,
            color: 'white',
            fontWeight: 'bold',
            "&:hover": {
              backgroundColor: dark ? '#4f46e5' : '#0d9463',
              transform: 'scale(1.05)',
              transition: '0.3s'
            }
          }}
          data-aos="flip-right"
        >
          Download Resume
        </Button>
      </Box>


      <Box className='d-flex justify-center mt-5' >
        <Typography variant="h5" sx={{
          fontFamily: '"Oswald", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 700,
          fontStyle: 'normal',
          fontSize: '40px'
        }}>SKILLS</Typography>
      </Box>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 container" data-aos="fade-left">
        {skills.map((item, index) => (
          <Box key={index} className="p-4 rounded shadow" sx={{ backgroundColor: dark ? '#1f2937' : 'white' }}>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>{item.skilnme}</Typography>
            <ProgressBar
              now={item.perc}
              label={<span style={{ color: 'white', fontWeight: 'bold' }}>{item.perc}%</span>}
              style={{
                backgroundColor: dark ? '#374151' : '#e0e0e0',
                height: '20px'
              }}
              striped
              animated
            >
              <div
                className="progress-bar"
                style={{ backgroundColor: buttonBg, width: `${item.perc}%` }}
              />
            </ProgressBar>
          </Box>
        ))}
      </div>


      <Box sx={{ textAlign: 'center', mt: 7 }}>
        <Typography variant="h5" sx={{
          fontFamily: '"Oswald", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 700,
          fontStyle: 'normal',
          fontSize: '40px'
        }} data-aos="fade-down" data-aos-duration="1500">Projects</Typography>
      </Box>

      <Box className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center mt-5">
        {projects.map((items, index) => (
          <Box key={index} data-aos="flip-up">
            <Card sx={{ maxWidth: 345, backgroundColor: dark ? '#111827' : 'white', color: dark ? 'white' : 'black' }}>
              <CardMedia component="img" alt={items.projtitle} height="140" image={items.img} />
              <CardContent>
                <Typography gutterBottom variant="h5">{items.projtitle}</Typography>
                <Typography variant="body2" sx={{ color: dark ? '#d1d5db' : 'text.secondary' }}>
                  {items.projcaptn}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: buttonBg,
                    color: 'white',
                    "&:hover": {
                      backgroundColor: dark ? '#4f46e5' : '#0d9463'
                    }
                  }}
                  onClick={() => window.open(items.link, '_blank')}
                >
                  Go Live
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </div>
  )
}

export default XaviAbt
