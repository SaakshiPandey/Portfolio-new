import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaMicrosoft } from 'react-icons/fa';
import { SiExpress, SiGraphql, SiDjango, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiPytorch, SiStreamlit, SiGooglecolab, SiKeras, SiMysql, SiMongodb, SiPostgresql, SiPostman, SiDocker, SiJupyter } from 'react-icons/si';
import profileImage from '../assets/profile.png'; // Adjust the path as necessary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ color: 'white', p: 4, textAlign: 'center' }}>
          <Typography variant="h5">Something went wrong with this component.</Typography>
          <Typography variant="body1">We're working to fix it. Please try again later.</Typography>
        </Box>
      );
    }
    return this.props.children;
  }
}

const About = () => {
  const skillCategories = [
    {
      name: 'Web Development',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 color="#E34F26" size={32} /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" size={32} /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={32} /> },
        { name: 'React', icon: <FaReact color="#61DAFB" size={32} /> },
        { name: 'Express', icon: <SiExpress color="#000000" size={32} /> },
        { name: 'Node.js', icon: <FaNodeJs color="#339933" size={32} /> },
        { name: 'GraphQL', icon: <SiGraphql color="#E10098" size={32} /> },
        { name: 'Django', icon: <SiDjango color="#092E20" size={32} /> },
        { name: 'REST APIs', icon: <SiPostman color="#FF6C37" size={32} /> }
      ]
    },
    {
      name: 'Machine Learning',
      skills: [
        { name: 'NumPy', icon: <SiNumpy color="#4D77CF" size={32} /> },
        { name: 'Pandas', icon: <SiPandas color="#150458" size={32} /> },
        { name: 'Scikit-learn', icon: <SiScikitlearn color="#F7931E" size={32} /> },
        { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" size={32} /> },
        { name: 'PyTorch', icon: <SiPytorch color="#EE4C2C" size={32} /> },
        { name: 'Streamlit', icon: <SiStreamlit color="#FF4B4B" size={32} /> },
        { name: 'Colab', icon: <SiGooglecolab color="#F9AB00" size={32} /> },
        { name: 'Keras', icon: <SiKeras color="#D00000" size={32} /> }
      ]
    },
    {
      name: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql color="#4479A1" size={32} /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={32} /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" size={32} /> }
      ]
    },
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython color="#3776AB" size={32} /> },
        { name: 'Java', icon: <FaJava color="#007396" size={32} /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={32} /> }
      ]
    },
    {
      name: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: <FaGitAlt color="#F05032" size={32} /> },
        { name: 'VS Code', icon: <FaMicrosoft color="#007ACC" size={32} /> },
        { name: 'Postman', icon: <SiPostman color="#FF6C37" size={32} /> },
        { name: 'Docker', icon: <SiDocker color="#2496ED" size={32} /> },
        { name: 'Jupyter', icon: <SiJupyter color="#F37626" size={32} /> }
      ]
    }
  ];

  return (
    <ErrorBoundary>
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
        {/* About Me Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(90deg, #64ffda, #48aff0, #ff6bff, #ff8e53)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              mb: 4,
              animation: 'gradientShift 8s ease infinite',
              backgroundSize: '300% 300%',
              '@keyframes gradientShift': {
                '0%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
                '100%': { backgroundPosition: '0% 50%' }
              }
            }}
            >
              ABOUT ME
        </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Avatar & Intro */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  rotate: [0, 5, -5, 5, 0],
                  y: [0, -10, 10, -10, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Box
                  component={motion.div}
                  whileHover={{
                    boxShadow: '0 0 40px rgba(100, 255, 218, 0.7)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Avatar
                    src={profileImage}
                    alt="Profile Picture"
                    sx={{
                      width: 200,
                      height: 200,
                      border: '3px solid #64ffda',
                      boxShadow: '0 0 30px rgba(100, 255, 218, 0.4)',
                      mb: 3
                    }}
                  />
                </Box>
              </motion.div>
              <Typography variant="body1" sx={{ 
                color: '#ccd6f6', 
                textAlign: 'center', 
                lineHeight: 1.7,
                padding: '0 1rem'
              }}>
                Hey! I’m Saakshi Pandey, someone who loves using tech to solve cool problems. Whether it’s building smart stock tools, playing around with machine learning models, or designing clean web apps, I enjoy creating things that make life easier (and a little smarter). I’m always learning, building, and trying to make an impact through my work. Feel free to explore what I’ve been working on!
              </Typography>
            </motion.div>
          </Grid>

          {/* Education & Skills */}
          <Grid item xs={12} md={8}>
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.8rem',
                  color: '#64ffda',
                  mb: 3,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '60px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #64ffda, #48aff0)',
                    borderRadius: '3px'
                  }
                }}
              >
                Education
              </Typography>

              <Box sx={{ 
                mb: 5,
                background: 'rgba(17, 34, 64, 0.3)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid rgba(100, 255, 218, 0.2)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(100, 255, 218, 0.4)',
                  boxShadow: '0 0 20px rgba(100, 255, 218, 0.2)'
                }
              }}>
                <Typography variant="h4" sx={{ 
                  color: '#ccd6f6', 
                  fontSize: '1.3rem', 
                  mb: 1,
                  fontWeight: 600
                }}>
                  SRM Institute of Science and Technology
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#8892b0', 
                  mb: 1.5,
                  fontSize: '1.1rem'
                }}>
                  Bachelor of Technology in Computer Science
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: '#64ffda', 
                  mb: 2,
                  fontSize: '0.95rem',
                  fontWeight: 500
                }}>
                  Specialization in Big Data Analytics
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 3, 
                  mt: 1.5,
                  alignItems: 'center'
                }}>
                  <Typography variant="body2" sx={{ 
                    color: '#8892b0',
                    fontSize: '0.9rem'
                  }}>
                    2023-2027
                  </Typography>
                  <Box sx={{
                    height: '4px',
                    width: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#8892b0'
                  }} />
                  <Typography variant="body2" sx={{ 
                    color: '#64ffda', 
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    CGPA: 9.72
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            {/* Technical Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.8rem',
                  color: '#64ffda',
                  mb: 3,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '60px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #64ffda, #48aff0)',
                    borderRadius: '3px'
                  }
                }}
              >
                Technical Expertise
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {skillCategories.map((category, catIndex) => (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  >
                    <Box>
                      <Typography variant="h4" sx={{ color: '#ccd6f6', fontSize: '1.2rem', mb: 2 }}>
                        {category.name}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <Box
                              sx={{
                                position: 'relative',
                                width: '60px',
                                height: '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(17, 34, 64, 0.5)',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                '&:hover': {
                                  background: 'rgba(100, 255, 218, 0.1)',
                                  boxShadow: '0 0 15px rgba(100, 255, 218, 0.3)'
                                }
                              }}
                            >
                              {skill.icon}
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                style={{
                                  position: 'absolute',
                                  bottom: '-25px',
                                  left: 0,
                                  right: 0,
                                  textAlign: 'center'
                                }}
                              >
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: '#64ffda',
                                    fontSize: '0.7rem',
                                    fontWeight: 500,
                                    textShadow: '0 0 5px rgba(0,0,0,0.7)'
                                  }}
                                >
                                  {skill.name}
                                </Typography>
                              </motion.div>
                            </Box>
                          </motion.div>
                        ))}
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </ErrorBoundary>
  );
};

export default About;