// src/App.js
import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import './App.css';
import test from './images/test.png'


function App() {
  return (
    <div className='App'>
      <nav>
        <div className="icon">

          <Link to="/">
            <img src={test} className="navImage" />
          </Link>
        </div>
        <div className="navButton">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/career">Career</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/career" element={<></>} />
      </Routes>

    </div>
  );
}

export default App;
