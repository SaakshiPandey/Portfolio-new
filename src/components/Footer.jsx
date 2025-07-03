import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Instagram, Email } from '@mui/icons-material';

const Footer = () => {
  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/SaakshiPandey' },
    { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/saakshi-pandey-8a1946248/' },
    { icon: <Instagram />, url: 'https://instagram.com/saakshi_pandey__' },
    { icon: <Email />, url: 'mailto:saakshipandey1007@gmail.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        {socialLinks.map((link, index) => (
          <IconButton
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            {link.icon}
          </IconButton>
        ))}
      </Box>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Mischief Managed. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;