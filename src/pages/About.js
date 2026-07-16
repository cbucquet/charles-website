// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import basketball from "../images/basketball.jpg"
import hike from "../images/hike.JPG"
import ski from "../images/ski.jpg"
import skydive from "../images/skydive.jpg"
import tennis from "../images/tennis.JPG"
import wake from "../images/wake.jpg"

import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const About = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About | Charles Bucquet</title>
        <meta
          name="description"
          content="A bit more about Charles Bucquet: photos, fun facts, and how to get in touch."
        />
        <link rel="canonical" href="https://charles.bucquet.com/about" />
      </Helmet>
      <div className="page-intro">
        <motion.h2
          className="pageTitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          About Me
        </motion.h2>
        <motion.p
          className="pageSubtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          A few more photos, a few more facts.
        </motion.p>
      </div>

      <motion.div
        className="photoGallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          swipeable={true}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={33}
          transitionTime={1000}
          stopOnHover={true}
        >
          <div>
            <img className="carouselImage" src={basketball} alt="Playing basketball" />
          </div>
          <div>
            <img className="carouselImage" src={hike} alt="Hiking" />
          </div>
          <div>
            <img className="carouselImage" src={ski} alt="Skiing" />
          </div>
          <div>
            <img className="carouselImage" src={skydive} alt="Skydiving" />
          </div>
          <div>
            <img className="carouselImage" src={tennis} alt="Playing tennis" />
          </div>
          <div>
            <img className="carouselImage" src={wake} alt="Wakeboarding" />
          </div>
        </Carousel>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h3>Fun Facts</h3>
          <ul className="about-facts-list">
            <li>Dragibus Addict</li>
            <li>Tudok magyarul beszélni A1 szinten</li>
            <li>Snowboard without catching an edge</li>
            <li>Attended 2 Grand Slams</li>
            <li>Curler</li>
            <li>Spam Over the Rainbow on ukulele</li>
            <li>Favorite number is √44</li>
          </ul>
        </motion.div>

        <motion.div
          className="about-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3>Life</h3>
          <p className="about-placeholder">Coming soon.</p>
        </motion.div>

        <motion.div
          className="about-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3>Contact</h3>
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
        </motion.div>
      </div>
    </div>
  );
};

export default About;
