import { Box, Typography, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const socialLinks = [
    { icon: <GitHub sx={{ fontSize: 30 }} />, url: 'https://github.com/SaakshiPandey' },
    { icon: <LinkedIn sx={{ fontSize: 30 }} />, url: 'https://www.linkedin.com/in/saakshi-pandey-8a1946248/' },
    { icon: <Instagram sx={{ fontSize: 30 }} />, url: 'https://instagram.com/saakshi_pandey__' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Animation lasts 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '0 20px',
        background: `
          linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%),
          radial-gradient(circle at 10% 20%, rgba(106, 17, 203, 0.3) 0%, transparent 30%),
          radial-gradient(circle at 90% 80%, rgba(37, 117, 252, 0.3) 0%, transparent 30%)
        `,
        backgroundBlendMode: 'overlay',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Welcome Animation */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0a0a0a',
              zIndex: 1000,
              flexDirection: 'column',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ 
                duration: 1,
                ease: [0.17, 0.67, 0.83, 0.67]
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #64ffda, #48aff0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(100, 255, 218, 0.5)',
                  mb: 2,
                }}
              >
                Welcome
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ 
                delay: 0.5,
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#8892b0',
                  fontWeight: 400,
                  maxWidth: '500px',
                  px: 2,
                }}
              >
                to my portfolio
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ 
                delay: 1,
                duration: 1,
                ease: "easeInOut"
              }}
              style={{
                height: '2px',
                background: 'linear-gradient(90deg, #64ffda, #48aff0)',
                marginTop: '2rem',
                borderRadius: '2px',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {/* Matrix-style Binary Rain */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            style={{
              position: 'absolute',
              left: `${i * 8 + 5}%`,
              top: '-20px',
              width: '2px',
              height: '100vh',
              background: `linear-gradient(to bottom, transparent, rgba(100, 255, 218, 0.1) 20%, rgba(100, 255, 218, 0.05) 80%, transparent)`,
              fontSize: '12px',
              color: 'rgba(100, 255, 218, 0.1)',
              fontFamily: 'monospace',
              overflow: 'hidden',
            }}
            animate={{
              y: ['-100vh', '100vh'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Hexagonal Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            style={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: `rgba(${i % 3 === 0 ? '100, 255, 218' : i % 3 === 1 ? '72, 175, 240' : '106, 17, 203'}, 0.15)`,
              border: `1px solid rgba(${i % 3 === 0 ? '100, 255, 218' : i % 3 === 1 ? '72, 175, 240' : '106, 17, 203'}, 0.2)`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              x: [0, Math.sin(i) * 50, 0],
              y: [0, Math.cos(i) * 50, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Scanning Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`scan-${i}`}
            style={{
              position: 'absolute',
              width: '100%',
              height: '2px',
              background: `linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.3) 50%, transparent)`,
              top: `${20 + i * 30}%`,
              left: '0',
              boxShadow: `0 0 10px rgba(100, 255, 218, 0.2)`,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}

        {/* Circuit Board Patterns */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`circuit-${i}`}
            style={{
              position: 'absolute',
              width: '60px',
              height: '1px',
              background: `rgba(100, 255, 218, 0.1)`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              transformOrigin: 'left center',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Glitch Effect Blocks */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`glitch-${i}`}
            style={{
              position: 'absolute',
              width: '100px',
              height: '5px',
              background: `rgba(${i % 2 === 0 ? '255, 0, 100' : '0, 255, 255'}, 0.05)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              mixBlendMode: 'screen',
            }}
            animate={{
              x: [0, -10, 5, -3, 0],
              opacity: [0, 0.8, 0.2, 0.9, 0],
              skewX: [0, 5, -3, 2, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 8 + Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Code Snippets */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: '8px',
              fontFamily: 'monospace',
              color: 'rgba(100, 255, 218, 0.08)',
              userSelect: 'none',
              transform: 'rotate(-15deg)',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [-15, -10, -15],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {['console.log();', 'function()', '{ return }', 'const x =', 'if (true)'][i]}
          </motion.div>
        ))}

        {/* Pulsing Grid Intersections */}
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={`grid-dot-${i}`}
            style={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              background: 'rgba(100, 255, 218, 0.2)',
              borderRadius: '50%',
              left: `${(i % 3) * 33 + 16}%`,
              top: `${Math.floor(i / 3) * 33 + 16}%`,
              boxShadow: '0 0 8px rgba(100, 255, 218, 0.3)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Neon Trace Lines */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`neon-${i}`}
            style={{
              position: 'absolute',
              width: '300px',
              height: '1px',
              background: `linear-gradient(90deg, transparent, rgba(${i === 0 ? '100, 255, 218' : '106, 17, 203'}, 0.4), transparent)`,
              left: '-150px',
              top: `${25 + i * 50}%`,
              filter: 'blur(0.5px)',
              boxShadow: `0 0 5px rgba(${i === 0 ? '100, 255, 218' : '106, 17, 203'}, 0.3)`,
            }}
            animate={{
              x: ['0vw', '100vw'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 7,
            }}
          />
        ))}
      </Box>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: showWelcome ? 0 : 1, y: showWelcome ? -50 : 0 }}
        transition={{ duration: 0.8, delay: showWelcome ? 0 : 0.5 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
            fontWeight: 700,
            marginBottom: '1rem',
            background: 'linear-gradient(90deg, #64ffda, #48aff0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
          }}
        >
          Saakshi Pandey
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showWelcome ? 0 : 1 }}
        transition={{ duration: 0.8, delay: showWelcome ? 0 : 1 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Typography variant="h5" sx={{ 
          marginBottom: '2rem', 
          minHeight: '2.5rem',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
        }}>
          <Typewriter
            options={{
              strings: ['Student', 'Data Analyst', 'Web Developer', 'Software Engineer'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showWelcome ? 0 : 1, y: showWelcome ? 50 : 0 }}
        transition={{ duration: 0.8, delay: showWelcome ? 0 : 1.5 }}
        style={{ display: 'flex', gap: '1.5rem', position: 'relative', zIndex: 1 }}
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              color="primary"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#64ffda',
                border: '1px solid rgba(100, 255, 218, 0.5)',
                background: 'rgba(100, 255, 218, 0.1)',
                backdropFilter: 'blur(5px)',
                '&:hover': {
                  background: 'rgba(100, 255, 218, 0.2)',
                  boxShadow: '0 0 15px rgba(100, 255, 218, 0.4)',
                },
              }}
            >
              {link.icon}
            </IconButton>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default Home;