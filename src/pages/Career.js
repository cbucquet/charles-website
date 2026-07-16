// src/pages/Career.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const experience = [
  {
    company: "Amazon Web Services",
    title: "Software Development Engineer",
    dates: "Sept 2024 – Present",
    location: "Seattle, WA",
    description: "Building and maintaining backend systems for Amazon Cognito, AWS's identity platform used by millions of applications.",
    current: true,
  },
  {
    company: "Amazon Web Services",
    title: "Software Development Engineer Intern",
    dates: "June 2023 – Sept 2023",
    location: "Dallas, TX",
    description: "Contributed to backend services for Amazon Cognito, focused on billing and usage metering.",
  },
  {
    company: "Bliss Point Media",
    title: "Software Engineer Intern",
    dates: "June 2022 – Aug 2022",
    location: "Santa Monica, CA (remote)",
    description: "Built features for an internal ad-performance platform used by media clients.",
  },
  {
    company: "NewPush",
    title: "Technology Intern",
    dates: "June 2021 – July 2021",
    location: "Baltimore, MD (remote)",
    description: "Improved internal tooling and researched emerging security technologies.",
  },
  {
    company: "Chappuis Halder & Co.",
    title: "Software Developer Intern",
    dates: "April 2020 – July 2020",
    description: "Supported internal software tools as an early introduction to professional development.",
  },
];

const Career = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  return (
    <div className="career-page">
      <Helmet>
        <title>Career | Charles Bucquet</title>
        <meta
          name="description"
          content="Charles Bucquet's career timeline: Software Development Engineer at Amazon Web Services, working on Amazon Cognito."
        />
        <link rel="canonical" href="https://charles.bucquet.com/career" />
      </Helmet>
      <div className="page-intro">
        <motion.h1
          className="pageTitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          My Career
        </motion.h1>
        <motion.p
          className="pageSubtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Software Engineer.
        </motion.p>
      </div>

      <div className="timeline" ref={timelineRef}>
        <div className="timeline-track" />
        <motion.div className="timeline-track-fill" style={{ scaleY: scrollYProgress }} />

        {experience.map((job, i) => (
          <motion.div
            key={`${job.company}-${job.dates}`}
            className="timeline-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`timeline-marker${job.current ? " timeline-marker-current" : ""}`} />
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{job.title}</h3>
                <span className="timeline-dates">{job.dates}</span>
              </div>
              <p className="timeline-meta">
                {job.company}{job.location ? ` · ${job.location}` : ''}
              </p>
              <p className="timeline-description">{job.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Link to="/projects" className="work-more">See what I've built →</Link>
    </div>
  );
};

export default Career;
