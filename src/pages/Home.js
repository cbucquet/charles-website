// src/pages/Home.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import pp from '../images/pp.jpg'
import Typewriter from "typewriter-effect";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'


const Home = () => {
  const [french, setFrench] = useState(false)

  return (
    <div className='home-page'>
      <div className="intro">
        <div className="triangle">
          <div className="trianglediv">

          </div>
          <div className="pp-border-container">
            <div className="pp-image-container">
              <img src={pp} alt="Your Name"  onClick={e => setFrench((e.detail===3 && !french) || (e.detail!==3 && french))}/>
            </div>
          </div>
        </div>
        <div className="intro-text" onClick={() => setFrench(!french)}>
          {/* <h1>{french ? "Salut, c'est Charles 👋" : "Hi, I'm Charles 👋"}</h1> */}
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
          />)}
          
        </div>
      </div>
      <div className="more-content">
        <p>{french ? "Je suis un élève d'info à UCLA. Bienvenue sur mon site!" : "I'm a senior at UCLA studying Computer Science. Welcome to my website!"}</p>
        <div className="action-buttons">
          <Link to="/projects">
            See my projects
          </Link>
          <Link to="/career">
            Follow my career
          </Link>
          <Link to="/about">
            Learn about me
          </Link>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/charlesbucquet/" target="_blank" rel="noopener noreferrer">
          <SocialIcon network='linkedin'/>
        </a>
        <a href="https://github.com/cbucquet" target="_blank" rel="noopener noreferrer">
          <SocialIcon network='github'/>
        </a>
        <a href="https://www.instagram.com/charlesbucquet/" target="_blank" rel="noopener noreferrer">
          <SocialIcon network='instagram'/>
        </a>
        <a href="https://www.facebook.com/carlitobucquet/" target="_blank" rel="noopener noreferrer">
          <SocialIcon network='facebook'/>
        </a>
        <a href=" https://twitter.com/charlesbucquet" target="_blank" rel="noopener noreferrer">
          <SocialIcon network='twitter'/>
        </a>
      </div>
      <div className='hiddenText'>triple click on me for the french website</div>
    </div>
  );
};

export default Home;