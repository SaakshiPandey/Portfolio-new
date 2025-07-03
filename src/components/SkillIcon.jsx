import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const SkillIcon = ({ skill, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -5 }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem',
          borderRadius: '4px',
          backgroundColor: '#112240',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#64ffda',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover::before': {
            opacity: 0.1,
          },
        }}
      >
        <Box
          component="img"
          src={skill.icon}
          alt={skill.name}
          sx={{ width: '50px', height: '50px', objectFit: 'contain', marginBottom: '0.5rem' }}
        />
        <Typography
          variant="caption"
          sx={{
            position: 'absolute',
            bottom: '-20px',
            opacity: 0,
            transition: 'all 0.3s ease',
            color: '#64ffda',
            fontSize: '0.7rem',
            fontWeight: 500,
          }}
          className="skill-name"
        >
          {skill.name}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default SkillIcon;