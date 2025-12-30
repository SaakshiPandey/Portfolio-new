import { Box, Typography, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    name: 'AI-Powered Counterfeit Medicine Detection',
    technologies: ['Python', 'PyTorch', 'Scikit-learn', 'FastAPI', 'Blockchain', 'NLTK', 'SQLite', 'Pickle', 'Docker'],
    points: [
      'Building an ML-powered pipeline classifying counterfeit medicines using tabular data and NLP techniques.',
      'Integrating Blockchain ledger for secure, immutable logging of verified medicine authenticity results',
      'Deployed FastAPI-based microservice delivering real-time predictions and traceability for medicine batches.'
    ],
    github: 'https://github.com/yourusername/ai-research',
    isResearch: true,
    duration: 'May 2025 - Present',
    specialLine: 'Co-authorig research paper under Dr. A Syed Ismail, SRMIST'
  },
  {
    name: 'Data Quality Engine (DQE-X)',
    technologies: [
      "FastAPI",
      "Python",
      "scikit-learn", 
      "pandas",
      "NumPy",
      "MongoDB",
      "Docker"
    ],
    points: [
      'Backend-first data quality engine built with FastAPI, exposing modular REST APIs for dataset ingestion, profiling, scoring, and preprocessing execution',
      'Automated data diagnostics layer performing feature-level quality checks including missingness, redundancy, multicollinearity, and leakage risk detection using pandas and scikit-learn',
      'Production-safe execution workflow with dataset versioning, reversible preprocessing actions, audit logs, and a calibrated Dataset Quality Score (0–100) validated by an improvement >5% on already high quality datasets',
    ],
    github: 'https://github.com/SaakshiPandey/Data-Quality-Engine'
  },
  {
    name: 'StockSage AI',
    technologies: ["React", "Axios", "Recharts","FastAPI", "Python", "MongoDB", "JWT", "scikit-learn", "pandas", "LSTM"]
,
    points: [
      'BFull-stack platform: React (Vite) frontend with Material UI, Axios, React Router, and Recharts; backend uses FastAPI, MongoDB, and JWT auth',
      'Machine learning core: combines scikit-learn, pandas, and LSTM models with real-time data, signals, and news sentiment',
      'Rich user features: includes watchlist, portfolio tracker with ROI and “Sell Now” alerts, sentiment-based insights, and secure signup/login'
    ],
    github: 'https://github.com/SaakshiPandey/StockSage-AI'
  },
  {
    name: 'NeuroBalance',
    technologies: [
      "FastAPI",
      "Python",
      "scikit-learn",
      "pandas",
      "NumPy",
      "React",
      "Recharts"
    ],
    points: [
      'Developed a burnout assessment system based on the Maslach Burnout Inventory (MBI), implementing a validated 16-question survey covering daily habits, work environment, and personal life factors',
      'Designed ML-based evaluation of core burnout dimensions—Emotional Exhaustion, Depersonalization, and Personal Accomplishment—using structured survey responses',
      'Built a FastAPI backend with real-time inference APIs and an interactive React.js dashboard using Recharts to deliver live predictions, visual analytics, and personalized mental-health improvement recommendations'
    ],
    github: 'https://github.com/SaakshiPandey/NeuroBalance'
  },
  {
    name: 'MindLytics – Mental Health Sentiment Analytics',
    technologies: ["Streamlit", "Python", "Detoxify", "PRAW", "pandas", "matplotlib"],
    points: [
      'Web app built with Streamlit, backed by a Python emotion classifier and Detoxify for toxicity detection',
      'Modular architecture: includes text preprocessing, Reddit API (PRAW), emotion mapping, and song recommender utils',
      'Visual analytics: mood-trend bar charts, word clouds, emotion classification, and custom music/mental health suggestions '
    ],
    github: 'https://github.com/SaakshiPandey/MindLytics-Mental-Health-Sentiment-Analytics'
  },
  {
    name: 'Energy‑Demand‑Forecasting',
    technologies: ["Python", "Jupyter Notebook", "TinyTimeMixers", "pandas", "TensorFlow"],
    points: [
      'Demonstrates IBMs TinyTimeMixers (TTM): a compact (<1M params) pre-trained model for multivariate time-series forecasting ',
      'Built in Jupyter Notebooks, likely leveraging Python, pandas, and ML framework TensorFlow (common for TTM)',
      'Focuses on zero-shot and few-shot forecasting, fine‑tunable on custom datasets'
    ],
    github: 'https://github.com/SaakshiPandey/Energy-Demand-Forecasting'
  },
  {
    name: 'Comprehensive‑Library‑Management‑System',
    technologies: ['JAVA', 'Swing', 'JDBC', 'MySQL'],
    points: [
      'Java Swing desktop application defining separate Librarian and Borrower roles',
      'Uses JDBC to connect to a MySQL backend; supports book CRUD operations and user tracking.',
      'Incorporates a login system and management of inventory through GUI tables.'
    ],
    github: 'https://github.com/SaakshiPandey/Comprehensive-Library-Management-System'
  },
  {
    name: 'Titanic Survival Prediction',
    technologies: ["Python", "Jupyter Notebook", "pandas", "numpy", "scikit-learn", "RandomForestClassifier", "GridSearchCV", "Streamlit",],
    points: [
      'Built a Random Forest Classifier to predict passenger survival using the Titanic dataset, with hyperparameter tuning via GridSearchCV',
      'Performed data preprocessing and feature engineering on variables like age, gender, and class using pandas and numpy.',
      'Developed an interactive Streamlit web app for predictions, deployed locally and built in VS Code.'
    ],
    github: 'https://github.com/SaakshiPandey/titanic-survival-prediction'
  },
  {
    name: 'AI Flashcard Generator',
    technologies: ['Python', 'React', 'PyMuPDF', 'OpenAI', 'LLMs'],
    points: [
      'Extracts key concepts from PDFs or transcribed lecture audio using PyMuPDF, Whisper, and text chunking.',
      'Generates flashcards automatically with LLMs using prompt-based summarization and Q&A format.',
      'Built with a clean React frontend, allowing users to upload content and download personalized study decks.'
    ],
    github: 'https://github.com/yourusername/data-viz'
  },
  {
    name: 'Air Quality Analysis & Pollution Modelling',
    technologies: [
      "Python",
      "NumPy",
      "pandas",
      "scikit-learn",
      "Matplotlib",
      "Seaborn"
    ],
    points: [
      'End-to-end ML pipeline built on the UCI Air Quality Dataset, covering preprocessing, feature engineering, and train–test evaluation for environmental sensor data',
      'Implemented multiple supervised models (Linear & Multiple Linear Regression, Logistic Regression, SVM, Random Forest) for pollutant prediction and air quality classification',
      'Applied unsupervised learning using K-Means and K-Medoids clustering with PCA-based visualisation, Silhouette Score, and WCSS to uncover pollution patterns and data groupings'
    ],
    github: 'https://github.com/SaakshiPandey/Air-Quality-Analyser'
  },
  {
    name: 'Entity Extraction using IBM Granite-8B',
    technologies: [
      "Python",
      "IBM Granite-8B",
      "Replicate API",
      "JSON",
      "Jupyter Notebook"
    ],
    points: [
      'Designed a prompt-based entity extraction pipeline using IBM Granite-8B to convert unstructured book descriptions into structured JSON output',
      'Extracted key metadata including title, author, genre, publication year, publisher, ISBN, and language using zero-shot LLM inference',
      'Evaluated extraction quality using precision, recall, and manual validation, demonstrating effective LLM-based NER without task-specific fine-tuning'
    ],
    github: 'https://github.com/SaakshiPandey/Entity-Extraction-from-Description-Related-to-a-Book'
  },
  {
    name: 'Hierarchical Document Summarization with IBM Granite',
    technologies: [
      "Python",
      "IBM Granite",
      "LangChain",
      "Replicate",
      "Docling",
      "transformers"
    ],
    points: [
      'Built a hierarchical abstractive summarization pipeline to process long-form documents exceeding LLM context limits using a summary-of-summaries approach',
      'Implemented token-aware document chunking by chapter using Docling and Granite tokenizer to ensure efficient utilisation of a 128K context window',
      'Integrated LangChain with IBM Granite models to generate coherent, unified summaries from multiple structured inputs, demonstrated on full-length literary works'
    ],
    github: 'https://github.com/SaakshiPandey/Document-Summarization-using-IBM-Granite'
  }

];

const Projects = () => {
  const researchProjects = projects.filter(project => project.isResearch);
  const otherProjects = projects.filter(project => !project.isResearch);

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
          PROJECTS
        </Typography>
      </motion.div>

      {researchProjects.length > 0 && (
        <>
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
            Research Projects
          </Typography>
          <Grid container spacing={4} sx={{ marginBottom: '4rem' }}>
            {researchProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={`research-${index}`}>
                <ProjectCard project={project} index={index} isResearch={true} />
              </Grid>
            ))}
          </Grid>
        </>
      )}

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
        Other Projects
      </Typography>

      <Grid container spacing={4}>
        {otherProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={`project-${index}`}>
            <ProjectCard project={project} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const ProjectCard = ({ project, index, isResearch = false }) => {
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
            boxShadow: '0 20px 30px -15px rgba(100, 255, 218, 0.3)',
            '&::before': {
              opacity: 1,
            },
            '& .github-button': {
              transform: 'scale(1.1) rotate(5deg)',
              boxShadow: '0 0 15px rgba(100, 255, 218, 0.5)'
            }
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
        }}
      >
        {isResearch && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              padding: '0.5rem 1.5rem',
              background: 'linear-gradient(90deg, #ff6bff, #ff8e53, #64ffda)',
              color: '#0a192f',
              fontSize: '0.8rem',
              fontWeight: 700,
              borderBottomLeftRadius: '12px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              animation: 'gradientShift 8s ease infinite',
              backgroundSize: '300% 300%',
              zIndex: 1
            }}
          >
            RESEARCH PROJECT
          </Box>
        )}

        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Typography variant="h3" sx={{ 
              color: '#ccd6f6', 
              fontSize: '1.3rem', 
              marginBottom: '0.5rem',
              fontWeight: 600,
              pr: isResearch ? '6rem' : 0
            }}>
              {project.name}
            </Typography>
          </Box>

          {project.duration && (
            <Typography variant="body1" sx={{ 
              color: '#64ffda', 
              marginBottom: '1rem',
              fontWeight: 500
            }}>
              {project.duration}
            </Typography>
          )}

          {project.specialLine && (
            <Typography variant="body1" sx={{ 
              color: '#ccd6f6', 
              fontStyle: 'italic', 
              marginBottom: '1.5rem',
              borderLeft: '3px solid #64ffda',
              paddingLeft: '1rem'
            }}>
              {project.specialLine}
            </Typography>
          )}

          <Box component="ul" sx={{ 
            paddingLeft: '1.5rem', 
            marginBottom: '1.5rem' 
          }}>
            {project.points.map((point, i) => (
              <Typography 
                key={i} 
                component="li" 
                variant="body1" 
                sx={{ 
                  color: '#8892b0', 
                  marginBottom: '0.8rem',
                  '&::marker': {
                    color: '#64ffda',
                  },
                }}
              >
                {point}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Typography 
                  variant="caption" 
                  sx={{ 
                    padding: '0.3rem 0.7rem', 
                    backgroundColor: 'rgba(100, 255, 218, 0.1)', 
                    color: '#64ffda', 
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 500
                  }}
                >
                  {tech}
                </Typography>
              </motion.div>
            ))}
          </Box>

          <motion.div
            className="github-button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <IconButton
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#64ffda',
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                border: '1px solid rgba(100, 255, 218, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.2)',
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Projects;