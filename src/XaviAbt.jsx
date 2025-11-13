import { Box, Typography, Button, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import MyImg from '../src/assets/img4.png'
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

import { useNavigate } from "react-router-dom";

const XaviAbt = ({ dark,scrollToTop }) => {
  useEffect(() => {
    scrollToTop();
  }, []);


const navigate = useNavigate();
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
      desc: "Building clean and responsiveusing React and Tailwind CSS.",
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


    


 



    <section className="px-4 md:px-10 lg:px-20 text-center ">
    

 <div className="relative flex flex-col md:flex-row items-center justify-center mt-20 md:mt-28 gap-12 px-6 md:px-16">
  
  <div
    data-aos="fade-right"
    data-aos-duration="1200"
    className="relative group"
  >
    
    <div
      className={`absolute -inset-5 blur-3xl opacity-40 rounded-full transition-all duration-700 ${
        dark
          ? 'bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A78BFA]'
          : 'bg-gray-300'
      }`}
    ></div>


 

<div className="relative flex items-center justify-center group">
 
  <img
    src={MyImg}
    alt="My portrait"
    className={`relative z-10 object-cover border-[4px] rounded-3xl
    w-72 h-80 sm:w-80 sm:h-70 md:w-[20rem] md:h-[25rem]
    transform transition-all duration-700 
    group-hover:scale-105 animate-float 
    shadow-[0_0_40px_10px_rgba(99,102,241,0.4)]
    group-hover:shadow-[0_0_60px_15px_rgba(139,92,246,0.6)]
    ${dark ? 'border-[#8B5CF6]' : 'border-[#34D399]'}`}
  />
</div>


  </div>

  {/* Text Section */}
  <div
    data-aos="fade-left"
    data-aos-duration="1200"
    className="relative max-w-xl text-center md:text-left md:-mt-10"
  >
    {/* Accent Shape Behind Text */}
    <div
      className={`absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-30 z-0 ${
        dark
          ? 'bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6]'
          : 'bg-gradient-to-tr from-[#10B981] to-[#34D399]'
      }`}
    ></div>

    {/* Text Content */}
    <div className="relative z-10 mt-5">
      <h2
        className={`font-['Playfair_Display'] font-extrabold text-4xl md:text-5xl tracking-wide mb-4 bg-clip-text text-transparent ${
          dark
            ? 'bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A78BFA]'
            : 'bg-gradient-to-r from-[#10B981] via-[#34D300] to-[#6EE7B0]'
        } animate-gradient-x`}
      >
        XAVISON
      </h2>

      <p className="text-gray-600 dark:text-gray-300 font-['Poppins'] text-lg md:text-xl mb-6">
        MERN Stack Developer <span className="font-semibold">|</span> Crafting seamless digital experiences
      </p>

      <p className="font-['Poppins'] text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
        I’m a passionate <strong>MERN Stack Developer</strong> who loves creating clean,
        responsive, and user-focused web applications. My goal is to bring ideas to life 
        through modern, scalable, and efficient code. I enjoy turning concepts into engaging 
        products that perform beautifully across devices.
      </p>
      

            <Box
  sx={{ display: 'flex', justifyContent: 'center', mb: 5, mt: 3 }}
  data-aos="flip-up"
>
  {[
    { Icon: InstagramIcon, link: 'https://www.instagram.com/spideyxweb45/' },
    { Icon: LinkedInIcon, link:' https://www.linkedin.com/in/xavison' },
    { Icon: EmailIcon, link: 'mailto:xavison03@gmail.com' },
  ].map(({ Icon, link }, i) => (
    <Button
      key={i}
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ color: buttonBg, mx: 1 ,}}
    >
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
    </div>
  </div>
</div>




     
      <div className="mt-20">
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }} data-aos="fade-down" data-aos-duration="1500">
        <Typography sx={{
          fontFamily: '"Oswald", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 700,
          fontStyle: 'normal',
          fontSize: '40px'
        }}>What I Focus On</Typography>
      </Box>

      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  centeredSlides={true}                 
  autoplay={{ delay: 3500 }}
  pagination={{ clickable: true }}
  breakpoints={{
    768: {
      slidesPerView: 2,
      centeredSlides: false,           
    },
  }}
  data-aos="fade-up"
  data-aos-duration="2000"
  className="p-5"
>
  {focusPoints.map((item, index) => (
    <SwiperSlide key={index} className="flex justify-center">
      <div
        className="shadow-lg rounded-xl overflow-hidden hover:shadow-2xl 
                   transition-all duration-500 mx-auto w-[90%] sm:w-[80%] md:w-[85%]" 
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
        <div className="p-5 text-center">
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

   
     
    </section>













      





     


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

      <Box className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center mt-5 ">
        {projects.map((items, index) => (
          <Box key={index} data-aos="flip-up" className='mb-5 '>
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
                   margin:'15px',
                    "&:hover": {
                      backgroundColor: dark ? '#4f46e5' : '#0d9463'
                    }
                  }}
                  onClick={() => window.open(items.link, '_blank')}
                >
                  Wanna See
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>


      <Box
  className="text-center py-20 px-6"
  
  data-aos="fade-up"
  data-aos-duration="1500"
>
  <Typography
    variant="h4"
    sx={{
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '2rem',
      marginBottom: '1rem',
    }}
  >
    You're Still their ?
  </Typography>

  <Typography
    sx={{
      fontFamily: '"Poppins", sans-serif',
      color: '#4b5563',
      fontSize: '1.1rem',
      marginBottom: '2rem',
    }}
  >
    Let’s build something amazing together — click below to reach out!
  </Typography>

  <button
    style={{
      backgroundColor: dark ? '#6366F1' : '#10B981',
      color: 'white',
      border: 'none',
      padding: '0.9rem 2.5rem',
      borderRadius: '10px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    }}
    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
 onClick={() => navigate("/contact")}
  >
    Contact Me
  </button>
</Box>

    </div>
  )
}

export default XaviAbt
