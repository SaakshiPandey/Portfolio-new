import { Box, Typography, Grid, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    type: 'Professional',
    position: 'Advanced Software Engineer (Job Simulation)',
    company: 'Walmart via Forage',
    duration: 'July 2025',
    points: [
      'Built scalable backend solutions and optimizing algorithms for real-world logistics problems.',
      'Applied object-oriented programming and SOLID design principles to design production-ready code.',
      'Simulated Agile team workflows through efficient system design and clear technical documentation.'
    ],
    certificate: 'https://drive.google.com/file/d/YOUR_WALMART_FILE_ID/view?usp=sharing'
  },
  {
    type: 'Professional',
    position: 'AI/ML Virtual Intern',
    company: 'AICTE-Google',
    duration: 'April - May 2025',
    points: [
      'Completed AICTE-Google AI/ML internship, focusing on scalable model development workflows.',
      'Developed machine learning models using Python, TensorFlow, and real-world structured datasets.',
      'Implemented data preprocessing pipelines, optimized hyperparameters and validated models'
    ],
    certificate: 'https://drive.google.com/file/d/1gN5bfHyTcmN7PAzyWqdMveRrwVUeBbHx/view?usp=drive_link'
  },
  {
    type: 'Professional',
    position: 'Web Development Intern',
    company: 'BharatIntern',
    duration: 'March 2024',
    points: [
      'Built responsive web applications using HTML 5, CSS 3 and JavaScript',
      'Implemented modern front-end interfaces and optimized performance',
      'Developed responsive portfolio website and an e-commerce platform page'
    ],
    certificate: 'https://drive.google.com/file/d/1pdDODG5FD4vBdRC4Rw8JePKGYa3RSPnH/view?usp=drive_link'
  },
  {
    type: 'Professional',
    position: 'Web Development Intern',
    company: 'CodSoft',
    duration: 'February 2024',
    points: [
      'Created dynamic web applications from design to deployment using modern JavaScript frameworks',
      'Optimized website performance and user experience through responsive design principles',
      'Implemented state management solutions and integrated third-party APIs'
    ],
    certificate: 'https://drive.google.com/file/d/1MU1UP-c_UIDlaHIj1FpQeeryGSiyHFg7/view?usp=drive_link'
  },
  {
    type: 'Leadership',
    position: 'Vice Chairperson',
    company: 'SRM ACM SIGKDD',
    duration: 'April 2025 - Present',
    points: [
      'Leading the Knowledge Discovery and Data Mining special interest group with 50+ members',
      'Organizing technical workshops and speaker sessions on data science and machine learning',
      'Mentoring junior members in research projects and competition preparation'
    ]
  },
];

const Experience = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        padding: { xs: '4rem 1rem', md: '6rem 3rem' },
        background: `
          linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%),
          radial-gradient(circle at 20% 30%, rgba(106, 17, 203, 0.3) 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(37, 117, 252, 0.3) 0%, transparent 40%)
        `,
        backgroundBlendMode: 'overlay',
        color: 'white'
      }}
    >
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
            marginBottom: '3rem',
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
          EXPERIENCE
        </Typography>
      </motion.div>

      <Box sx={{ marginBottom: '4rem' }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontSize: '1.8rem', 
            marginBottom: '2rem',
            color: '#64ffda',
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
          Professional Experience
        </Typography>
        <Grid container spacing={4}>
          {experiences.filter(exp => exp.type === 'Professional').map((exp, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ExperienceCard experience={exp} index={index} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <Typography 
          variant="h3" 
          sx={{ 
            fontSize: '1.8rem', 
            marginBottom: '2rem',
            color: '#64ffda',
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
          Leadership Experience
        </Typography>
        <Grid container spacing={4}>
          {experiences.filter(exp => exp.type === 'Leadership').map((exp, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ExperienceCard experience={exp} index={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const ExperienceCard = ({ experience, index }) => {
  const companyInitial = experience.company.charAt(0).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        sx={{
          height: '100%',
          minHeight: '320px',
          padding: '2rem',
          borderRadius: '12px',
          background: 'rgba(17, 34, 64, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(100, 255, 218, 0.2)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            transform: 'translateY(-5px)',
            borderColor: 'rgba(100, 255, 218, 0.4)',
            boxShadow: '0 20px 30px -15px rgba(100, 255, 218, 0.2)',
            '& .certificate-button': {
              opacity: 1,
              transform: 'translateY(0)',
            },
            '& .company-logo': {
              transform: 'translateY(-5px) rotate(10deg)',
              boxShadow: '0 0 20px rgba(100, 255, 218, 0.4)'
            },
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(100, 255, 218, 0) 100%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover::before': {
            opacity: 1,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
          <Avatar
            className="company-logo"
            sx={{
              width: 50,
              height: 50,
              bgcolor: 'rgba(100, 255, 218, 0.1)',
              color: '#64ffda',
              border: '1px solid rgba(100, 255, 218, 0.3)',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              mr: 2,
              transition: 'all 0.3s ease'
            }}
          >
            {companyInitial}
          </Avatar>
          <Box>
            <Typography 
              variant="h3" 
              sx={{ 
                color: '#ccd6f6', 
                fontSize: '1.3rem', 
                fontWeight: 600,
                lineHeight: 1.2
              }}
            >
              {experience.position}
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                color: '#64ffda', 
                fontSize: '1rem', 
                fontWeight: 500
              }}
            >
              {experience.company} • {experience.duration}
            </Typography>
          </Box>
        </Box>

        <Box 
          component="ul" 
          sx={{ 
            paddingLeft: '1.5rem',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          {experience.points.map((point, i) => (
            <Typography 
              key={i} 
              component="li" 
              variant="body1" 
              sx={{ 
                color: '#8892b0', 
                marginBottom: '0.8rem',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                '&::marker': {
                  color: '#64ffda',
                },
              }}
            >
              {point}
            </Typography>
          ))}
        </Box>
        
        {experience.certificate && (
          <Button
            href={experience.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-button"
            sx={{
              alignSelf: 'flex-end',
              color: '#64ffda',
              border: '1px solid',
              borderColor: '#64ffda',
              borderRadius: '4px',
              padding: '0.5rem 1rem',
              fontSize: '0.8rem',
              opacity: 0,
              transform: 'translateY(10px)',
              transition: 'all 0.3s ease',
              mt: 2,
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
              },
            }}
          >
            View Certificate
          </Button>
        )}
      </Box>
    </motion.div>
  );
};

export default Experience;