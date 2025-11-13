import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Form from 'react-bootstrap/Form';
import AOS from 'aos';
import { Rotate90DegreesCcw } from '@mui/icons-material';

const XaviCntact = ({ dark,scrollToTop }) => {
  const contactdata = [
    { icon: CallIcon, label: 'Call me', data: '+91 9865367268' },
    { icon: EmailIcon, label: 'Email', data: 'xavison03@gmail.com' },
    { icon: InstagramIcon, label: 'Instagram', data: '@xa_vi_03' },
  ];

  useEffect(() => {
    scrollToTop();
  }, []);

  const buttonBg = dark ? '#6366F1' : '#10B981';

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <div className="relative py-20 overflow-hidden">
     
      <div
        className={`absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl opacity-30 ${
          dark
            ? 'bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A78BFA]'
            : 'bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#6EE7B7]'
        }`}
      ></div>

      <Box className="text-center mb-12 relative z-10">
        <Typography
          variant="h4"
          data-aos="fade-up"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: '40px',
              marginBottom:'20px',
            letterSpacing: '1px',
          }}
        >
          Let’s Connect
        </Typography>
        <Typography
          data-aos="fade-up"
          data-aos-delay="200"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: '1.1rem',
            marginBottom:'10px',
            color: dark ? '#d1d5db' : '#4b5563',
          }}
        >
          Have an idea, project, or collaboration in mind?  
          Feel free to reach out — I’d love to hear from you.
        </Typography>
      </Box>

 
      <Box className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
       
       <Box
          className="rounded-3xl p-8 backdrop-blur-md"
          data-aos="fade-right"
          sx={{
            backgroundColor: dark
              ? 'rgba(99,102,241,0.05)'
              : 'rgba(16,185,129,0.05)',
            boxShadow:
              '0 10px 30px rgba(0,0,0,0.15), inset 0 0 15px rgba(255,255,255,0.05)',
          }}
        >
          {contactdata.map((item, i) => {
            const Icon = item.icon;
            return (
              <Box
                key={i}
                display="flex"
                alignItems="center"
                gap={2}
                className="mb-8 group"
                data-aos="fade-up"
                data-aos-delay={`${i * 200}`}
              >
                <Box
                  className="p-4 rounded-full transition-transform duration-500 group-hover:scale-110"
                  sx={{
                    backgroundColor: dark ? '#1e1b4b' : '#ecfdf5',
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: '2rem',
                      color: buttonBg,
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 500,
                      color: dark ? '#cbd5e1' : '#374151',
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: '1.2rem',
                      color: dark ? '#e5e7eb' : '#111827',
                    }}
                  >
                    {item.data}
                  </Typography>
                </Box>
              </Box>
            );
          })}
    
    </Box>
     
        <Box
          className="rounded-3xl p-8 backdrop-blur-md"
          data-aos="fade-left"
          sx={{
            backgroundColor: dark
              ? 'rgba(99,102,241,0.05)'
              : 'rgba(16,185,129,0.05)',
            boxShadow:
              '0 10px 30px rgba(0,0,0,0.15), inset 0 0 15px rgba(255,255,255,0.05)',
          }}
        >
          <Form>
            <Form.Group className="mb-4" controlId="formName">
              <Form.Label>Name</Form.Label>
              
              <Form.Control
                type="text"
                placeholder="Your name"
                required
                className="p-3 rounded-md"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
            
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                className="p-3 rounded-md"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
                What’s your project or idea? Let’s make it real 🚀
              </Typography>
              <Form.Control
                as="textarea"
                rows={4}
                required
                className="p-3 rounded-md"
                placeholder="Your message..."
              />
            </Form.Group>

            <button
              type="submit"
              style={{
                background: `linear-gradient(90deg, ${
                  dark ? '#6366F1' : '#10B981'
                }, ${dark ? '#8B5CF6' : '#34D399'})`,
                color: 'white',
                border: 'none',
                padding: '0.8rem 2.5rem',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: '600',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Send Message
            </button>
          </Form>
        </Box>
      </Box>
      
  

   



    </div>
  );
};

export default XaviCntact;
