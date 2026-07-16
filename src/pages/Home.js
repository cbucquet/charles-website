// src/pages/Home.js
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import gradPhoto from '../images/DSC06968.jpeg'
import explainasaurus from '../images/explainasaurus.png'
import little_free_libgen from '../images/little_free_libgen.png'
import pomodoro_pro from '../images/pomodoro_pro.png'
import Typewriter from "typewriter-effect";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const featuredWork = [
  {
    title: "Explainasaurus",
    image: explainasaurus,
    imageBg: "#f3ead9",
    description: "Medical jargon explanations at your fingertips. Built at a hackathon to make discharge paperwork actually readable.",
    link: "https://devpost.com/software/explainasaurus",
  },
  {
    title: "Little Free Libgen",
    image: little_free_libgen,
    description: "A community book-sharing app built for UCLA, inspired by Little Free Libraries.",
    link: "https://devpost.com/software/little-free-libgen",
  },
  {
    title: "Pomodoro Pro",
    image: pomodoro_pro,
    imageBg: "#1d1d1f",
    description: "A physical Pomodoro timer with its own joystick and screen, built for actual focus.",
    link: "https://devpost.com/software/the-pomodoro-pro",
  },
];

const ctaItems = [
  { to: "/projects", title: "Projects", desc: "Hackathon wins and things I've built for fun." },
  { to: "/career", title: "Career", desc: "My professional journey." },
  { to: "/about", title: "About", desc: "Get to know me beyond the code." },
];

const Home = () => {
  const [french, setFrench] = useState(false)
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="home-page">
      <Helmet>
        <title>Charles Bucquet</title>
        <meta
          name="description"
          content="Charles Bucquet, UCLA Computer Science graduate and software engineer. Portfolio, projects, and career."
        />
        <link rel="canonical" href="https://charles.bucquet.com/" />
      </Helmet>
      <section className="hero-section" ref={heroRef}>
        <motion.div className="hero-photo" style={{ y: photoY, scale: photoScale }}>
          <img
            src={gradPhoto}
            alt="Charles Bucquet at UCLA graduation"
            onClick={e => setFrench((e.detail === 3 && !french) || (e.detail !== 3 && french))}
          />
        </motion.div>
        <motion.div className="hero-content" style={{ opacity: heroTextOpacity }}>
          <div className="hero-greeting">
            {french && (<Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .changeDeleteSpeed(50)
                  .typeString("Salut, c'est Carlito")
                  .pauseFor(500)
                  .deleteChars(7)
                  .typeString("Charles 👋")
                  .start();
              }}
              options={{ stringSplitter: (s) => Array.from(s) }}
            />)}
            {!french && (<Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .changeDeleteSpeed(50)
                  .typeString("Hi, I'm Carlito")
                  .pauseFor(500)
                  .deleteChars(7)
                  .typeString("Charles 👋")
                  .start();
              }}
              options={{ stringSplitter: (s) => Array.from(s) }}
            />)}
          </div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Software Engineer · Seattle, WA
          </div>
        </motion.div>
        <motion.div
          className="scroll-indicator"
          style={{ opacity: heroTextOpacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </section>

      <section className="tagline-section">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Reluctant runner. Mid ukulelist. Certified Frenchman.
        </motion.h2>
      </section>

      <section className="work-section">
        <motion.h2
          className="work-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Featured Work
        </motion.h2>
        <div className="work-list">
          {featuredWork.map((project, i) => (
            <motion.div
              key={project.title}
              className={`work-item${i % 2 === 1 ? " work-item-reverse" : ""}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div
                className="work-image"
                style={project.imageBg ? { backgroundColor: project.imageBg } : undefined}
              >
                <img src={project.image} alt={project.title} />
              </div>
              <div className="work-text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-link">
                  View project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <Link to="/projects" className="work-more">See all projects →</Link>
      </section>

      <section className="cta-section">
        <div className="cta-grid">
          {ctaItems.map((item, i) => (
            <motion.div
              key={item.to}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={item.to} className="cta-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="cta-arrow">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="connect-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <h2>Let's connect</h2>
          <p className="connect-subtitle">Always happy to talk software or Hungarian verb conjugations.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/charlesbucquet/" target="_blank" rel="noopener noreferrer">
              <SocialIcon network='linkedin' />
            </a>
            <a href="https://github.com/cbucquet" target="_blank" rel="noopener noreferrer">
              <SocialIcon network='github' />
            </a>
            <a href="https://www.instagram.com/charlesbucquet/" target="_blank" rel="noopener noreferrer">
              <SocialIcon network='instagram' />
            </a>
            <a href="https://www.facebook.com/carlitobucquet/" target="_blank" rel="noopener noreferrer">
              <SocialIcon network='facebook' />
            </a>
          </div>
          <p className="connect-footer">© {new Date().getFullYear()} Charles Bucquet</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
