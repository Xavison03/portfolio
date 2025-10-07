import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import AOS from 'aos'
import { useEffect } from 'react';

const XaviCntact = () => {


  const contactdata = [
    { icon: CallIcon, data: '+91 9865367268' },
    { icon: EmailIcon, data: 'xavison03@gmail.com' },
    { icon: InstagramIcon, data: 'xa_vi_03' },
  ];
  const [dark, setDark] = useState(false)
  const toggle = () => setDark(!dark)
  const buttonBg = dark ? '#6366F1' : '#10B981';

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Box>
        <Typography className='text-center' variant="h4" gutterBottom data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500" sx={{
            fontFamily: '"Oswald", sans-serif',
            fontOpticalSizing: 'auto',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '40px'
          }}>
          Contact
        </Typography>
        <Typography className='text-center' data-aos="flip-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="2000">
          Ready to build something awesome? Drop me a line and let’s make it happen!
        </Typography>
      </Box>

      <Box className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center mt-5">


        <Box sx={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          padding: '2rem',
          width: '100%'
        }} data-aos="flip-left" data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="2000">
          {contactdata.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Box key={index} className='mb-3 mt-4' display="flex" alignItems="center" gap={1}>
                <IconComponent
                  sx={{
                    fontSize: { lg: '2rem', md: '1.5rem', sm: '1.2rem' },
                    color: buttonBg,
                    transition: '0.3s',
                    '&:hover': {
                      color: buttonBg,
                      transform: 'scale(1.2)',
                    },
                    cursor: 'pointer',
                  }}
                  data-aos="flip-up" data-aos-duration='3000' data-aos-delay="1000"
                />
                <Typography sx={{
                  fontSize: { lg: '1.5rem', md: '1rem', sm: '0.9rem' }, fontFamily: '"Playfair Display", serif',
                  fontOpticalSizing: 'auto',
                  fontWeight: 400,
                  fontStyle: 'normal',
                }} data-aos="flip-up" data-aos-duration='3000' data-aos-delay="1000">
                  {item.data}
                </Typography>
              </Box>
            )
          })}
        </Box>


        <Box sx={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          width: '100%',
          padding: '2rem'
        }} data-aos="flip-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="2000">
          <Form data-aos="flip-up" data-aos-duration='3000' data-aos-delay="1000">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} required />
            </Form.Group>
            <button type="submit">Submit</button>
          </Form>
        </Box>
      </Box>
    </div>
  )
}

export default XaviCntact;
