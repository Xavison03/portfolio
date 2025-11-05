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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Img1 from '../src/assets/waveimg.png'
import Img2 from '../src/assets/calcimg.png'
import Img3 from '../src/assets/spideyportimg.png'


import Fimg1 from '../src/assets/resp1.png';
import Fimg2 from '../src/assets/scale2.png'
import Fimg3 from '../src/assets/eff3.png'
import Fimg4 from '../src/assets/maintain4.png'
import Fimg5 from '../src/assets/implement5.png'
import Fimg6 from '../src/assets/collab6.png'

const XaviAbt = ({ dark }) => {



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

  const focusPoints = [
    {
      title: "Frontend Development",
      desc: "Building clean, responsive, and dynamic UIs using React and Tailwind CSS.",
      img: Fimg1,
    },
    {
      title: "Backend Development",
      desc: "Designing scalable APIs with Node.js, Express, and MongoDB.",
      img:Fimg2,
    },
    {
      title: "Performance Optimization",
      desc: "Creating fast, efficient, and optimized web applications.",
      img:Fimg3,
    },
    {
      title: "Clean Code & UI/UX",
      desc: "Writing maintainable code and crafting intuitive user experiences.",
      img: Fimg4,
    },
    {
      title:" Modern UI",
      desc:"Implementing modern UI animations and themes",
      img:Fimg5
    
    },

    {
         title:"Collaboration",
      desc:"Collaborating effectively on development projects",
      img:Fimg6
    }
  ];



  useEffect(() => {
    AOS.init({ duration: 1000,once:false });
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


<Box>

</Box>


    


 



    <section className="px-4 md:px-10 lg:px-20 text-center overflow-x-hidden">
    
      <div className="flex justify-center mt-12">
        <img
          src={MyImg}
          alt="My portrait"
          data-aos="flip-down"
          data-aos-duration="1500"
          className="rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.25)] 
          transition-transform duration-500 hover:scale-105 
          h-72 sm:h-80 md:h-96 lg:h-[30rem]"
        />
      </div>

      <div className="mt-10">
        <h2
          data-aos="fade-down"
          className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl tracking-wide"
        >
          XAVISON
        </h2>

        <p
          data-aos="fade-down"
          className="mt-3 text-gray-500 dark:text-gray-500 font-['Poppins'] 
          text-base md:text-lg"
        >
          MERN Stack Developer | Crafting seamless digital experiences
        </p>
      </div>

     
      <p
        data-aos="fade-up"
        className="max-w-3xl mx-auto mt-10 font-['Poppins'] text-gray-500 dark:text-gray-500 
        text-base md:text-lg leading-relaxed"
      >
        I'm a passionate <strong>MERN Stack Developer</strong> who loves creating clean,
        responsive, and user-focused web applications.  
        My goal is to bring ideas to life through modern, scalable, and efficient code.
        I enjoy turning concepts into engaging products that perform beautifully across devices.
      </p>

     
      <div className="mt-20">
        <h3
          data-aos="fade-up"
          className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl tracking-wide mb-8"
        >
          What I Focus On
        </h3>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 }, 
          }}
         
          data-aos="fade-up"
          data-aos-duration="2000"
          className='p-5'
        >
          {focusPoints.map((item, index) => (
            <SwiperSlide key={index}  >
              <div
                className=" shadow-lg rounded-xl overflow-hidden 
                hover:shadow-2xl transition-all duration-500  mx-5 container "
                 style={{
        backgroundColor: dark ? '#0b0c0c' : 'white',
        color: dark ? 'white' : 'black',
            }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h4 className="font-['Playfair_Display'] text-xl font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="font-['Poppins'] text-gray-500 dark:text-gray-500 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

   
      <p
        data-aos="fade-up"
        className="max-w-2xl mx-auto mt-14 mb-16 font-['Poppins'] 
        text-gray-500 dark:text-gray-500 text-base md:text-lg leading-relaxed mt-5"
      >
        I’m always exploring new technologies and best practices to build meaningful,
        high-quality digital experiences that make an impact.
      </p>
    </section>













      

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
            <p className='float-end pt-3'>{item.perc}%</p>
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
          <Box key={index} data-aos="flip-up" className='mb-5'>
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
