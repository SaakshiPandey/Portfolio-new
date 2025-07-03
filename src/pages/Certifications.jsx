import { Box, Typography, Grid, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import LinkIcon from '@mui/icons-material/Link';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const certifications = [
  {
    name: 'ML for Data Science',
    issuer: 'IBM',
    date: 'June 2025',
    link: 'https://www.credly.com/earner/earned/badge/e1fc4690-7f15-430a-8f3e-70b686928d45',
    initials: 'ML',
    color: '#00E5FF' // Vibrant Cyan
  },
  {
    name: 'Enterprise Data Science',
    issuer: 'IBM',
    date: 'June 2025',
    link: 'https://www.credly.com/earner/earned/badge/e1fc4690-7f15-430a-8f3e-70b686928d45',
    initials: 'ML',
    color: '#00BFA5' // Teal
  },
  {
    name: 'Artificial Intelligence Primer Certification',
    issuer: 'Infosys Springboard',
    date: 'June 2025',
    link: 'https://drive.google.com/file/d/1iMxuBZKTVr1G0YLtLmnHuN8B94yiXHBY/view?usp=drive_link',
    initials: 'AI',
    color: '#6200EA' // Deep Purple
  },
  {
    name: 'Deep Learning for Developers',
    issuer: 'Infosys Springboard',
    date: 'June 2025',
    link: 'https://drive.google.com/file/d/1aMrsbPuJI9yjDHh9-kKKKqOvasIJwLiK/view?usp=sharing',
    initials: 'DL',
    color: '#00C853' // Vibrant Green
  },
  {
    name: 'CV101',
    issuer: 'Infosys Springboard',
    date: 'June 2025',
    link: 'https://drive.google.com/file/d/19PDHg9yNyiLPGd1gUeeG3U3YxhRdIjRq/view?usp=drive_link',
    initials: 'CV',
    color: '#2962FF' // Bright Blue
  },
  {
    name: 'Intro to NLP',
    issuer: 'Infosys Springboard',
    date: 'June 2025',
    link: 'https://drive.google.com/file/d/17-UK8OHmNXVXBczfbpEVGvh8t08M4Ufz/view?usp=drive_link',
    initials: 'NLP',
    color: '#FFD600' // Amber
  },
  {
    name: 'Intro to OpenAI GPT',
    issuer: 'Infosys Springboard',
    date: 'June 2025',
    link: 'https://drive.google.com/file/d/1yrRZO69ccRxx3z0Yf1kT3XzjgXoIrNjU/view?usp=drive_link',
    initials: 'GPT',
    color: '#FF3D00' // Deep Orange
  },
  {
    name: 'OpenAI GPT 3.5 for Developers',
    issuer: 'Infosys Springboard',
    date: 'June 2025',
    link: 'https://drive.google.com/file/d/1iPjWmf0An5DvgbQyjyXHMVfv5NZ81Qrb/view?usp=drive_link',
    initials: 'GPT',
    color: '#C6FF00' // Lime
  },
  {
    name: 'Prompt Engineering for Developers',
    issuer: 'Infosys Springboard',
    date: 'June 2025',
    link: 'https://drive.google.com/file/d/1xrJpzYkhA4LupQo4BbT6uGmAv0Wv3skI/view?usp=drive_link',
    initials: 'PE',
    color: '#FF4081' // Pink
  },
  {
    name: 'Generative Models for Developers',
    issuer: 'Infosys Springboard',
    date: 'June 2025',
    link: 'https://drive.google.com/file/d/1TOtROrhhUi9hz7dMbEt0FAuFd5FmdmNw/view?usp=drive_link',
    initials: 'DL',
    color: '#651FFF' // Deep Indigo
  },
  {
    name: 'Big Data 101',
    issuer: 'Infosys Springboard',
    date: 'June 2024',
    link: 'https://drive.google.com/file/d/165M6pvCNJsILp-va5EE3HGQdUPD35Sw1/view?usp=drive_link',
    initials: 'BD',
    color: '#1DE9B6' // Teal
  },
  {
    name: 'Big Data 201',
    issuer: 'Infosys Springboard',
    date: 'April 2025',
    link: 'https://drive.google.com/file/d/11Wt1HM1l9SkYaFVcHnEUwgp2LTrCApnu/view?usp=drive_link',
    initials: 'BD',
    color: '#FF9100' // Orange
  },
  {
    name: 'Data Analytics Essentials',
    issuer: 'CISCO Networking Academy',
    date: 'Dec 2024',
    link: 'https://drive.google.com/file/d/1-mTDzFVkQecn6FNPwZjzZEOgdWSavHcy/view?usp=drive_link',
    initials: 'DA',
    color: '#E040FB' // Purple
  },
  {
    name: 'Python for Data Science',
    issuer: 'Great Learning',
    date: 'Dec 2024',
    link: 'https://drive.google.com/file/d/1FuvzF0VCThVYyHmbA-S31UOtv7-efReD/view?usp=drive_link',
    initials: 'DS',
    color: '#64DD17' // Light Green
  },
  {
    name: 'JavaScript Essential Training',
    issuer: 'LinkedIn Learning',
    date: 'June 2024',
    link: 'https://drive.google.com/file/d/1NE-IxlMzPn0h5CNmgibllosQxypPpUJM/view?usp=drive_link',
    initials: 'JS',
    color: '#00B0FF' // Sky Blue
  },
  {
    name: 'React.js Essential Training',
    issuer: 'LinkedIn Learning',
    date: 'July 2025',
    link: 'hhttps://drive.google.com/file/d/1_rey3oCNOGOsJ9G749EfnBdWpMgEG4gv/view?usp=drive_link',
    initials: 'RJ',
    color: '#FF1744' // Red
  },
  {
    name: 'Learning ECMAScript 6+',
    issuer: 'LinkedIn Learning',
    date: 'June 2024',
    link: 'https://drive.google.com/file/d/1TCgF3qVPGuQHutuuqH511zXpd1jjv-Po/view?usp=drive_link',
    initials: 'ES',
    color: '#76FF03' // Bright Lime
  },
  {
    name: 'Learning REST APIs',
    issuer: 'LinkedIn Learning',
    date: 'July 2025',
    link: 'https://drive.google.com/file/d/1LzjYoGWf4mfodlVxLk6jbaWMB8YMiTBC/view?usp=drive_link',
    initials: 'APIs',
    color: '#D500F9' // Violet
  },
  {
    name: 'JavaScript (Basic)',
    issuer: 'HackerRank',
    date: 'April 2024',
    link: 'https://drive.google.com/file/d/1TCgF3qVPGuQHutuuqH511zXpd1jjv-Po/view?usp=drive_link',
    initials: 'JS',
    color: '#FFEA00' // Yellow
  },
  {
    name: 'Google GenAI Study Jam',
    issuer: 'Google Cloud',
    date: 'May 2024',
    link: 'https://drive.google.com/file/d/YOUR_FILE_ID_3/view',
    initials: 'GC',
    color: '#00E676' // Emerald
  },
  {
    name: 'Master C++ Programming',
    issuer: 'Udemy',
    date: 'Apr 2024',
    link: 'https://drive.google.com/file/d/1ct8G97RJL--s9KW2Bzu641t7x7w8bVgI/view?usp=drive_link',
    initials: 'C++',
    color: '#FF80AB' // Pink
  },
];

const Certifications = () => {
  // Function to split long names into two lines
  const formatName = (name) => {
    if (name.length > 25) {
      const words = name.split(' ');
      const mid = Math.ceil(words.length / 2);
      return (
        <>
          {words.slice(0, mid).join(' ')}
          <br />
          {words.slice(mid).join(' ')}
        </>
      );
    }
    return name;
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        padding: { xs: '3rem 1rem', md: '5rem 3rem' },
        background: `
          linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%),
          radial-gradient(circle at 20% 30%, rgba(106, 17, 203, 0.3) 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(37, 117, 252, 0.3) 0%, transparent 40%)
        `,
        backgroundBlendMode: 'overlay',
        color: 'white'
      }}
    >
      {/* Left-aligned Header */}
      <Box sx={{ maxWidth: '1200px', margin: '0 auto 3rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3rem' },
              fontWeight: 800,
              background: 'linear-gradient(90deg, #64ffda, #48aff0, #ff6bff, #ff8e53)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              animation: 'gradientShift 8s ease infinite',
              backgroundSize: '300% 300%',
              '@keyframes gradientShift': {
                '0%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
                '100%': { backgroundPosition: '0% 50%' }
              }
            }}
          >
            CERTIFICATIONS
          </Typography>
        </motion.div>
      </Box>

      {/* Enhanced Glass Cards Grid */}
      <Grid 
        container 
        spacing={4} 
        sx={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          justifyContent: 'center'
        }}
      >
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              style={{ width: '100%' }}
            >
              <Box
                sx={{
                  height: '100%',
                  minHeight: '320px',
                  padding: '2rem',
                  borderRadius: '16px',
                  background: 'rgba(17, 34, 64, 0.25)',
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${cert.color}`,
                  boxShadow: `
                    0 4px 30px rgba(0, 0, 0, 0.1),
                    inset 0 0 15px ${cert.color}33
                  `,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `
                      0 15px 35px -5px ${cert.color}66,
                      inset 0 0 20px ${cert.color}33
                    `,
                    borderColor: `${cert.color}`,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `
                      radial-gradient(
                        circle at center,
                        ${cert.color}33 0%,
                        transparent 70%
                      )
                    `,
                    opacity: 0,
                    transition: 'opacity 0.6s ease',
                    zIndex: 0,
                  },
                  '&:hover::before': {
                    opacity: 0.6,
                  },
                }}
              >
                {/* Decorative elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: cert.color,
                    opacity: 0.7,
                  }}
                >
                  <StarBorderIcon fontSize="small" />
                </Box>

                {/* Content */}
                <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: `${cert.color}22`,
                      color: cert.color,
                      border: `2px solid ${cert.color}`,
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      mb: 3,
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                        boxShadow: `0 0 20px ${cert.color}66`,
                      },
                    }}
                  >
                    {cert.initials}
                  </Avatar>

                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: '#ffffff', 
                      fontSize: '1.3rem', 
                      marginBottom: '0.5rem',
                      fontWeight: 600,
                      lineHeight: 1.4,
                      minHeight: '3.5em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      wordBreak: 'break-word'
                    }}
                  >
                    {formatName(cert.name)}
                  </Typography>

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: cert.color, 
                      marginBottom: '1rem',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      textShadow: `0 0 8px ${cert.color}33`
                    }}
                  >
                    {cert.issuer}
                  </Typography>

                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#b0bec5',
                      fontSize: '0.85rem',
                      fontStyle: 'italic',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {cert.date}
                  </Typography>
                </Box>

                {/* Animated Button */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    transition: { type: 'spring', stiffness: 500 }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    transition: { type: 'spring', stiffness: 500 }
                  }}
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  <Button
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LinkIcon />}
                    sx={{
                      color: cert.color,
                      border: `1px solid ${cert.color}`,
                      borderRadius: '8px',
                      padding: '0.6rem 1.8rem',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      background: 'rgba(17, 34, 64, 0.4)',
                      backdropFilter: 'blur(4px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: `${cert.color}22`,
                        boxShadow: `0 0 15px ${cert.color}44`,
                      },
                    }}
                  >
                    View Certificate
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certifications;