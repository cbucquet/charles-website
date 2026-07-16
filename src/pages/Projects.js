// src/pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import explainasaurus from '../images/explainasaurus.png'
import little_free_libgen from '../images/little_free_libgen.png'
import budgetTrip from '../images/budgetTrip.png'
import sportify from '../images/sportify.png'
import pomodoro_pro from '../images/pomodoro_pro.png'
import broqoli from '../images/broqoli.png'
import c_calcul from '../images/c_calcul.png'
import golftrack from '../images/golftrack.png'
import leesto from '../images/leesto.png'
import sharebook from '../images/sharebook.png'
import brain from '../images/brain.jpeg'
import bruinline from '../images/bruinline.png'
import fitus from '../images/fitus.png'
import winner_ribbon from '../images/winner.png'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const ProjectCard = ({ title, imageSrc, description, projLink, gitLink, imageType = "NORMAL", winner = false, index = 0 }) => {
  return (
    <motion.div
      className="projectCard"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="cardInfoContainer">
        {imageType === "SMALL" && (
          <div className="smallCardImageContainer">
            <img className="smallCardImage" src={imageSrc} alt={title} />
          </div>
        )}
        {imageType === "NORMAL" && (
          <img className="cardImage" src={imageSrc} alt={title} />
        )}
        {imageType === "FIT" && (
          <img className="fitCardImage" src={imageSrc} alt={title} />
        )}
        <h3 className="cardTitle">{title}</h3>
        <p className="cardDesc">{description}</p>
        {winner && (<img className="winnerRibbon" src={winner_ribbon} alt="Hackathon winner" />)}
      </div>

      <div className="cardButtonContainer">
        <button className="cardButton" onClick={() => window.open(projLink, '_blank')} disabled={projLink === "NONE"}>
          Project page
        </button>
        <button className="cardButton cardButtonOutline" onClick={() => window.open(gitLink, "_blank")} disabled={gitLink === "NONE"}>
          GitHub
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: 'Explainasaurus',
      imageSrc: explainasaurus,
      description: 'Medical jargon explanations at your fingertips',
      projLink: "https://devpost.com/software/explainasaurus",
      gitLink: "https://github.com/rmboyce/explainasaurus",
      imageType: "FIT",
    },
    {
      title: 'Little Free Libgen',
      imageSrc: little_free_libgen,
      description: 'Little Free Libraries for the Modern Era',
      projLink: "https://devpost.com/software/little-free-libgen",
      gitLink: "https://github.com/ajtadeo/little-free-libgen",
    },
    {
      title: 'Sportify',
      imageSrc: sportify,
      description: 'Enjoy sports and save the planet!',
      projLink: "https://devpost.com/software/sportify-aju8pv",
      gitLink: "https://github.com/KevZ1209/HOTHX-Sportify",
      winner: true,
    },
    {
      title: 'Pomodoro Pro',
      imageSrc: pomodoro_pro,
      description: 'Efficiency at Your Fingertips: Master Productivity with the Pomodoro Pro',
      projLink: "https://devpost.com/software/the-pomodoro-pro",
      gitLink: "https://github.com/cbucquet/pomodoro_pro",
    },
    {
      title: 'BudgetTrip',
      imageSrc: budgetTrip,
      description: 'Your own personalized trip planner tool that always keeps you under budget!',
      projLink: "https://devpost.com/software/budgettrip",
      gitLink: "https://github.com/KevZ1209/BudgetTrip-lahacks2023",
    },
    {
      title: 'Bruin Rain',
      imageSrc: brain,
      description: 'Smart, portable, and automatic rain catcher',
      projLink: "https://devpost.com/software/brain-fqwm4o",
      gitLink: "NONE",
    },
    // Add more projects as needed
  ];

  const personalProjectsData = [
    {
      title: 'BruinLine',
      imageSrc: bruinline,
      description: 'Choose a dining hall with your friends!',
      projLink: "NONE",
      gitLink: "https://github.com/matthewcyy/BruinLine",
      imageType: "FIT",
    },
    {
      title: 'GolfTrack',
      imageSrc: golftrack,
      description: 'Aim your phone camera at the flagpole and find its distance',
      projLink: "NONE",
      gitLink: "https://github.com/cbucquet/GolfTrack",
      imageType: "SMALL",
    },
    {
      title: 'C-Calcul',
      imageSrc: c_calcul,
      description: 'Practice mental math by yourself or with others',
      projLink: "NONE",
      gitLink: "https://github.com/cbucquet/C-Calcul",
      imageType: "SMALL",
    },
    {
      title: 'BROqoli',
      imageSrc: broqoli,
      description: 'Easy way to keep track of your crypto portfolio',
      projLink: "NONE",
      gitLink: "https://github.com/cbucquet/BROqoli",
      imageType: "SMALL",
    },
    {
      title: 'FitUs',
      imageSrc: fitus,
      description: 'Encourage employees to exercise via donations for every workout tracked in the app',
      projLink: "NONE",
      gitLink: "https://github.com/cbucquet/FitUs",
      imageType: "SMALL",
    },
    {
      title: 'Leesto',
      imageSrc: leesto,
      description: 'Share and modify your grocery lists with your family',
      projLink: "NONE",
      gitLink: "https://github.com/cbucquet/Leesto",
      imageType: "SMALL",
    },
    {
      title: 'ShareBook',
      imageSrc: sharebook,
      description: 'Remember what books to bring at school',
      projLink: "NONE",
      gitLink: "NONE",
      imageType: "SMALL",
    },
  ];

  return (
    <div className="projects-page">
      <div className="page-intro">
        <motion.h2
          className="pageTitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Projects
        </motion.h2>
        <motion.p
          className="pageSubtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Hackathon wins, and things I build for fun on the side.
        </motion.p>
      </div>

      <div className="projects-section">
        <motion.h3
          className="projectSectionTitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Hackathons
        </motion.h3>
        <div className="cardsContainer">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>

      <div className="projects-section">
        <motion.h3
          className="projectSectionTitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Personal Projects
        </motion.h3>
        <div className="cardsContainer">
          {personalProjectsData.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
