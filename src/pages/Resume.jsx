
import {
  Box,
  Typography,
  Button,
  Chip,
  Divider,
  Stack,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';

const ACCENT = '#64ffda';
const styles = {
  body: {
    color: '#c4ced8',
    fontSize: '0.88rem',
    lineHeight: 1.85,
    overflowWrap: 'anywhere',
  },
};

const sections = [
  {
    title: 'PROFESSIONAL SUMMARY',
    content: (
      <Typography sx={styles.body}>
        Computer Science undergraduate specializing in Big Data Analytics,
        with strong foundations in SQL/DBMS, Python, data structures, and
        algorithms. Hands-on experience with Hadoop, Spark, and Informatica,
        data pipelines, data validation and preprocessing workflows, and
        database-backed applications using MySQL and MongoDB. Exposure to AWS
        and Kubernetes through enterprise engineering experience, with a focus
        on testing, documentation, and Agile collaboration.
      </Typography>
    ),
  },
  {
    title: 'EDUCATION',
    content: (
      <ResumeEntry
        title="B.Tech in Computer Science and Engineering"
        subtitle="Big Data Analytics · SRM Institute of Science and Technology, Chennai"
        date="2023 – 2027"
        bullets={['CGPA: 9.66']}
      />
    ),
  },
  {
    title: 'TECHNICAL SKILLS',
    content: (
      <Stack spacing={2}>
        <SkillGroup
          label="Query & Scripting"
          items={['SQL (MySQL)', 'Python']}
        />
        <SkillGroup
          label="Programming"
          items={['Java', 'JavaScript', 'C++', 'C (Basic)']}
        />
        <SkillGroup
          label="Big Data & ETL"
          items={[
            'Hadoop',
            'Spark',
            'Informatica',
            'Data Pipelines',
            'Data Modeling',
            'Snowflake',
          ]}
        />
        <SkillGroup
          label="Databases"
          items={['MySQL', 'MongoDB', 'DBMS']}
        />
        <SkillGroup
          label="Cloud & Deployment"
          items={[
            'AWS',
            'Docker',
            'Kubernetes',
            'Terraform',
            'Apache Tomcat',
          ]}
        />
        <SkillGroup
          label="BI & Visualization"
          items={['Power BI', 'Tableau', 'Grafana', 'Prometheus']}
        />
        <SkillGroup
          label="Tools & Frameworks"
          items={[
            'Git',
            'Confluence',
            'Postman',
            'FastAPI',
            'REST APIs',
            'Node.js',
            'React.js',
            'VS Code',
          ]}
        />
        <SkillGroup
          label="Core CS"
          items={[
            'Object-Oriented Programming',
            'Data Structures',
            'Algorithms',
            'Computer Networks',
          ]}
        />
      </Stack>
    ),
  },
  {
    title: 'EXPERIENCE',
    content: (
      <ResumeEntry
        title="Software Development Engineer Intern"
        subtitle="Barclays India"
        date="June 2026 – August 2026"
        bullets={[
          'Modernized an enterprise Java Spring application by migrating legacy components to the latest supported framework, enabling cloud-ready deployment on AWS.',
          'Refactored backend modules, debugged framework compatibility issues, and validated production readiness through unit and integration testing and deployment on Apache Tomcat.',
          'Developed Kubernetes ConfigMaps for Alpha, Beta, and Gamma environments, enabling environment-specific deployments across cloud infrastructure.',
          'Authored Confluence documentation and collaborated with an Agile engineering team using Git-based workflows to deliver reliable software on schedule.',
        ]}
      />
    ),
  },
  {
    title: 'PROJECTS',
    content: (
      <Stack spacing={3}>
        <ResumeEntry
          title="Data Quality Engine (DQE-X)"
          subtitle="Python · FastAPI · React.js"
          bullets={[
            'Built a data quality platform using FastAPI and React.js to automate dataset validation, feature-level anomaly detection, and preprocessing workflows.',
            'Designed modular validation pipelines supporting reversible preprocessing, audit logging, and human-in-the-loop review, achieving over 96% quality stability across datasets.',
            'Improved dataset quality by 3.4% without introducing silent data loss.',
          ]}
        />

        <ResumeEntry
          title="StockSageAI – Stock Market Recommender"
          subtitle="React.js · FastAPI · MongoDB · Python"
          bullets={[
            'Developed a full-stack platform integrating LSTM-based prediction models with financial and news APIs, ingesting data from multiple external sources.',
            'Implemented MongoDB-based storage and efficient API integration for scalable retrieval of financial information.',
            'Built REST APIs and responsive React.js dashboards presenting market trends and personalized investment insights.',
          ]}
        />

        <ResumeEntry
          title="Climate Forecasting"
          subtitle="Python · LightGBM · GRU"
          bullets={[
            'Built a multivariate forecasting system predicting temperature, rainfall, and humidity by combining LightGBM and GRU models.',
            'Achieved a 0.92 match with actual observed values through the combined-model approach.',
          ]}
        />
      </Stack>
    ),
  },
  {
    title: 'CERTIFICATIONS',
    content: (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
          },
          gap: 2,
        }}
      >
        {[
          'Snowflake – Advanced Data Engineering',
          'Udemy – Big Data Hadoop Masterclass',
          'Infosys – Big Data 101 & 201',
          'Cisco – Data Analytics Essentials',
          'Salesforce – Tableau Foundations',
          'IBM – ML for Data Science Projects',
        ].map((item) => (
          <Box
            key={item}
            sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                mt: '9px',
                flexShrink: 0,
                borderRadius: '50%',
                bgcolor: ACCENT,
                boxShadow: `0 0 8px ${ACCENT}88`,
              }}
            />
            <Typography sx={styles.body}>{item}</Typography>
          </Box>
        ))}
      </Box>
    ),
  },
  {
    title: 'LEADERSHIP',
    content: (
      <Stack spacing={3}>
        <ResumeEntry
          title="Technical Co-Lead"
          subtitle="India-Taiwan Big Data Analytics Lab"
          date="July 2025 – May 2026"
        />
        <ResumeEntry
          title="Vice Chairperson"
          subtitle="SRM ACM SIGKDD Student Chapter"
          date="April 2025 – March 2026"
        />
      </Stack>
    ),
  },
];

function SkillGroup({ label, items }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '140px minmax(0, 1fr)' },
        gap: 1.2,
        alignItems: 'start',
      }}
    >
      <Typography
        sx={{
          color: '#9fb0bf',
          fontSize: '0.82rem',
          fontWeight: 600,
          lineHeight: 2,
        }}
      >
        {label}
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
        {items.map((item) => (
          <Chip
            key={item}
            label={item}
            size="small"
            sx={{
              height: 'auto',
              maxWidth: '100%',
              color: '#dce8ed',
              background: 'rgba(100,255,218,0.055)',
              border: '1px solid rgba(100,255,218,0.18)',
              borderRadius: '6px',
              '& .MuiChip-label': {
                display: 'block',
                whiteSpace: 'normal',
                py: 0.65,
                px: 1.1,
                fontSize: '0.73rem',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

function ResumeEntry({ title, subtitle, date, bullets = [] }) {
  return (
    <Box sx={{ mb: 1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 1.5,
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ minWidth: 0, flex: '1 1 220px' }}>
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 700,
              fontSize: '1rem',
              lineHeight: 1.6,
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              sx={{
                color: ACCENT,
                fontSize: '0.84rem',
                lineHeight: 1.7,
                mt: 0.3,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        {date && (
          <Typography
            sx={{
              color: '#aab8c5',
              fontSize: '0.76rem',
              lineHeight: 1.7,
              textAlign: { xs: 'left', sm: 'right' },
              flexShrink: 0,
            }}
          >
            {date}
          </Typography>
        )}
      </Box>

      {bullets.length > 0 && (
        <Box
          component="ul"
          sx={{
            pl: 2.5,
            mt: 1,
            mb: 0,
            color: '#c4ced8',
            '& li': {
              pl: 0.3,
              mb: 1,
              fontSize: '0.86rem',
              lineHeight: 1.8,
            },
            '& li::marker': { color: ACCENT },
          }}
        >
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default function Resume() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: { xs: 1.5, sm: 3, md: 4 },
        pt: { xs: '100px', md: '115px' },
        pb: 7,
        color: '#fff',
        background: `
          radial-gradient(circle at 15% 20%, rgba(100,255,218,0.09), transparent 32%),
          radial-gradient(circle at 85% 55%, rgba(72,175,240,0.12), transparent 35%),
          linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)
        `,
      }}
    >
      <Box sx={{ maxWidth: 1050, mx: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            sx={{
              color: ACCENT,
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: 3,
              mb: 1.5,
            }}
          >
            PROFESSIONAL PROFILE / 2026
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontFamily: '"Roboto Mono", monospace',
              fontSize: { xs: '2.8rem', md: '4.7rem' },
              lineHeight: 1.1,
              fontWeight: 900,
              letterSpacing: '-2px',
            }}
          >
            MY{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #64ffda, #48aff0, #ff6bff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              RESUME
            </Box>
          </Typography>

          <Typography
            sx={{ color: '#aebdca', mt: 2, fontSize: '1rem' }}
          >
            Software engineering, data systems, and cloud technologies.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{ mt: 3, alignItems: { xs: 'stretch', sm: 'center' } }}
          >
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              href="/Saakshi_Pandey_Resume.pdf"
              download="Saakshi_Pandey_Resume.pdf"
              sx={styles.actionButton}
            >
              Download PDF
            </Button>

            <Button
              variant="text"
              startIcon={<EmailOutlinedIcon />}
              href="mailto:saakshipandey1007@gmail.com"
              sx={{
                color: '#d5e1e8',
                alignSelf: { xs: 'flex-start', sm: 'center' },
                textTransform: 'none',
                '&:hover': { color: ACCENT },
              }}
            >
              Contact Me
              <ArrowOutwardIcon sx={{ ml: 0.5, fontSize: 16 }} />
            </Button>
          </Stack>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 2.5,
            my: 4,
            p: 2,
            borderRadius: 3,
            background: 'rgba(17,34,64,0.32)',
            border: '1px solid rgba(100,255,218,0.18)',
          }}
        >
          <ContactItem icon={<PhoneOutlinedIcon />} text="+91 9735844700" />
          <ContactItem
            icon={<EmailOutlinedIcon />}
            text="saakshipandey1007@gmail.com"
          />
          <ContactItem
            icon={<LocationOnOutlinedIcon />}
            text="Chennai, India"
          />
        </Box>

        <Box
          sx={{
            p: { xs: 2.5, sm: 4, md: 6 },
            borderRadius: 4,
            background: 'rgba(12,20,34,0.86)',
            border: '1px solid rgba(100,255,218,0.22)',
            boxShadow: '0 20px 70px rgba(0,0,0,0.35)',
            backdropFilter: 'blur(14px)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '1.8rem', sm: '2.5rem' },
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                Saakshi Pandey
              </Typography>
              <Typography sx={{ color: ACCENT, mt: 1, fontSize: '0.9rem' }}>
                Computer Science & Engineering · Big Data Analytics
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                border: '1px solid rgba(100,255,218,0.25)',
                borderRadius: 10,
                px: 1.5,
                py: 1,
                color: '#9fb7bb',
                fontSize: '0.65rem',
                letterSpacing: 1,
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  bgcolor: ACCENT,
                  boxShadow: `0 0 10px ${ACCENT}`,
                }}
              />
              PROFESSIONAL PROFILE
            </Box>
          </Box>

          <Divider sx={styles.divider} />

          {sections.map((section, index) => (
            <Box
              key={`${section.title}-${index}`}
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: '185px minmax(0, 1fr)',
                },
                gap: { xs: 1.5, md: 3.5 },
                py: 3,
                borderBottom:
                  index === sections.length - 1
                    ? 'none'
                    : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {section.title && (
                <Typography
                  sx={{
                    color: ACCENT,
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    lineHeight: 1.8,
                  }}
                >
                  {section.title}
                </Typography>
              )}

              <Box sx={{ minWidth: 0 }}>{section.content}</Box>
            </Box>
          ))}

          <Divider sx={styles.divider} />

          <Typography
            sx={{
              color: '#738797',
              fontSize: '0.65rem',
              letterSpacing: 2,
              textAlign: 'center',
              lineHeight: 1.8,
            }}
          >
            SAAKSHI PANDEY · SOFTWARE ENGINEERING & DATA SYSTEMS
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
            mt: 3,
            p: 2.5,
            borderRadius: 3,
            background: 'rgba(17,34,64,0.3)',
            border: '1px solid rgba(100,255,218,0.14)',
          }}
        >
          <Typography sx={{ color: '#b0bec5', fontSize: '0.9rem' }}>
            Prefer a portable copy? Download the original PDF.
          </Typography>

          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            href="/Saakshi_Pandey_Resume.pdf"
            download="Saakshi_Pandey_Resume.pdf"
            sx={styles.actionButton}
          >
            Download Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function ContactItem({ icon, text }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        color: '#c7d3df',
        fontSize: '0.83rem',
        overflowWrap: 'anywhere',
        minWidth: 0,
      }}
    >
      <Box sx={{ display: 'flex', color: ACCENT, flexShrink: 0 }}>
        {icon}
      </Box>
      {text}
    </Box>
  );
}

styles.actionButton = {
  color: ACCENT,
  borderColor: ACCENT,
  borderRadius: '9px',
  px: 2.5,
  py: 1.1,
  textTransform: 'none',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: 'rgba(100,255,218,0.1)',
    borderColor: ACCENT,
  },
};

styles.divider = {
  borderColor: 'rgba(100,255,218,0.18)',
  my: 3,
};
