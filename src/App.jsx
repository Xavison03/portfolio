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

const App = () => {
  const navItems = ['Home', 'About', 'Contact'];
  const [dark, setDark] = useState(false);
  const toggle = () => setDark(!dark);


  const buttonBg = dark ? '#6366F1' : '#10B981';
  const buttonColor = 'white';

  return (
    <div
      className={
        dark
          ? 'bg-gray-900 text-white min-h-screen transition-colors duration-500'
          : 'bg-white text-gray-900 min-h-screen transition-colors duration-500'
      }
    >
      <BrowserRouter>

       <nav
  className="d-flex flex-wrap gap-2 p-3 justify-between container align-items-center position-sticky"
  style={{
    top: 0,
    zIndex: 1000,
    backgroundColor: dark ? '#121212' : '#ffffff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  }}
>
  <Box>
    <h1 style={{ margin: 0 }}>Portfolio</h1>
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
          <Route path="/" element={<Home dark={dark} toggle={toggle} />} />
          <Route path="/about" element={<About dark={dark} toggle={toggle} />} />
          <Route path="/contact" element={<Contact dark={dark} toggle={toggle} />} />
        </Routes>
      </BrowserRouter>

      <div className="p-5" data-aos="fade-up" data-aos-duration="500">
        <Typography className="text-center p-2">© Copyright Xavison All Rights Reserved</Typography>

        <div className="d-flex justify-center gap-4 p-2">
          <Tooltip title="Instagram" arrow data-aos="zoom-in-up" data-aos-duration="2000">
            <InstagramIcon sx={{ cursor: 'pointer', color: buttonBg }} />
          </Tooltip>
          <Tooltip title="LinkedIn" arrow data-aos="zoom-in-up" data-aos-duration="2000">
            <LinkedInIcon sx={{ cursor: 'pointer', color: buttonBg }} />
          </Tooltip>
          <Tooltip title="GitHub" arrow data-aos="zoom-in-up" data-aos-duration="2000">
            <GitHubIcon sx={{ cursor: 'pointer', color: buttonBg  ,'&:hover': {
                     
                      transform: 'scale(1.2)',
                    }}} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default App;
