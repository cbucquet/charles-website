// src/pages/Career.js
import React from 'react';
import { IoOpen } from "react-icons/io5";


const Carrer = () => {
  return (
    <div className="career-page">
      <div className="pageTitle">
        <h2>My Career</h2>
      </div>
      <div className='action-buttons'>
        <a href="https://drive.google.com/file/d/1RXfMkw_-L_SmvK_IgWvekCmqnnOOFFlw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='pdfContainer'>
            <p className='resumeText'>Resume PDF</p>
            <IoOpen color='black'/>
        </a>
      </div>
    </div>
  );
};

export default Carrer;