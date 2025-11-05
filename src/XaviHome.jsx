import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import BgImg from '../src/assets/bgImg.jpg'
import { Button } from '@mui/material'
import AOS from 'aos'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const XaviHome = ({dark}) => {





  const name = 'XAVISON';
  const abtcntnt = "I'm a Emerging MERN Developer"

  useEffect(() => {
    AOS.init({ duration: 1000,once:false });
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <Box className="bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${BgImg})` }} data-aos="zoom-in">
        <Box data-aos="zoom-in-down" data-aos-delay="500">
          <Typography
            sx={{
              color: 'white',
            
              lineHeight: 1.1,
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
              mb: 2, textAlign: 'center',
                fontFamily: "Lobster", 
  fontWeight: 400,

            }}


          >
          
          Hey Guys !
          </Typography>


          <Typography
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.5rem' },
              mb: 4,
            }}
            className='animate-pulse'
          >
            {abtcntnt}
          </Typography>

          <div className="flex justify-center " data-aos="fade-down" data-aos-delay='1000'>


            <Button
              variant="contained"
              sx={{
                color: 'white',
                backgroundColor: 'transparent',
                border: '2px solid white',
                fontWeight: 'bold',
                px: { xs: 3, sm: 4 },
                py: { xs: 1.5, sm: 2 },
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'black',
                  transform: 'scale(1.05)',
                  border: '2px solid black',

                },
              }
              }


              className='animate-bounce'
              onClick={() => navigate("/about")}
            >
              About Me
            </Button>
          </div>

        </Box>

      </Box>
    </div>
  )
}

export default XaviHome
