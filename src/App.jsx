import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Button, Box, Tooltip, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Home from './XaviHome';
import About from './XaviAbt';
import Contact from './XaviCntact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

import Logo from '../src/assets/logo2.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Height } from '@mui/icons-material';


const App = () => {
  const navItems = ['Home', 'About', 'Contact'];
  const [dark, setDark] = useState(true);
  const toggle = () => setDark(!dark);

   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const buttonBg = dark ? '#6366F1' : '#10B981';
  const buttonColor = 'white';

  return (
    <div
      className={
        dark
          ? 'bg-gray-900 text-white min-h-screen transition-colors duration-500'
          : 'bg-gradient-to-r from-green-50 to-white text-gray-900 min-h-screen transition-colors duration-500' 
        
      }
  sx={{Height:'auto'}}
    >
      <BrowserRouter basename="/portfolio">

       <nav
  className="d-flex flex-wrap gap-2 sticky p-3 justify-between container align-items-center position-sticky"
  style={{
    top: 0,
    zIndex: 1000,
    backgroundColor: dark ? '#121212' : '#ffffff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  }}
>
  <Box>
  <img src={Logo} alt="" className='h-10 w-40' />
  </Box>

  <Box className="d-flex align-items-center flex-wrap gap-2">
    {navItems.map((item, index) => {
      const path = item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`;
      return (
        <Link
          key={index}
          to={path}
          style={{
            backgroundColor: buttonBg,
            color: buttonColor,
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            transition: '0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.8)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
        >
          {item}
        </Link>
      );
    })}

    <Tooltip title={dark ? 'Light' : 'Dark'} arrow>
      <Button
        variant="contained"
        onClick={toggle}
        sx={{
          ml: 2,
          backgroundColor: dark ? '#000000' : '#ffffff',
          color: dark ? '#ffffff' : '#000000',
          '&:hover': {
            backgroundColor: dark ? '#111111' : '#f0f0f0',
          },
        }}
      >
        {dark ? 'Light' : 'Dark'}
      </Button>
    </Tooltip>
  </Box>
</nav>


        <Routes>
          <Route path="/" element={<Home dark={dark}  />} />
          <Route path="/about" element={<About  dark={dark}  scrollToTop={scrollToTop} />} />
          <Route path="/contact" element={<Contact  dark={dark}  scrollToTop={scrollToTop} />} />
        </Routes>
      </BrowserRouter>

      <div className="p-5" data-aos="fade-up" data-aos-duration="500">
        <Typography className="text-center p-2">© Copyright Xavison All Rights Reserved</Typography>

       <div className="d-flex justify-center gap-4 p-2">
  <Tooltip title="Instagram" arrow  >
    <a 
      href="https://www.instagram.com/spideyxweb45/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <InstagramIcon 
        sx={{ 
          cursor: 'pointer', 
          color: buttonBg,
          transition: '0.3s',
          '&:hover': { transform: 'scale(1.2)', color: '#E4405F' } 
        }} 
      />
    </a>
  </Tooltip>

  <Tooltip title="LinkedIn" arrow  >
    <a 
      href="https://www.linkedin.com/in/xavison/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <LinkedInIcon 
        sx={{ 
          cursor: 'pointer', 
          color: buttonBg,
          transition: '0.3s',
          '&:hover': { transform: 'scale(1.2)', color: '#0077B5' }
        }} 
      />
    </a>
  </Tooltip>

  <Tooltip title="GitHub" arrow >
    <a 
      href="https://github.com/xavison03"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <GitHubIcon 
        sx={{ 
          cursor: 'pointer', 
          color: buttonBg,
          transition: '0.3s',
          '&:hover': { transform: 'scale(1.2)', color: '#333' } 
        }} 
      />
    </a>
  </Tooltip>
</div>

      </div>
    </div>
  );
};

export default App;
