// src/App.js
import React, { useState } from 'react';
import { Route, Link, NavLink, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Career from './pages/Career';
import './App.css';
import signature from './images/signature.png'
import { IoMenu, IoClose } from "react-icons/io5";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/career", label: "Career" },
  { to: "/about", label: "About" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='App'>
      <nav>
        <Link to="/" className="icon" onClick={() => setMenuOpen(false)}>
          <img src={signature} className="navImage" alt="Charles Bucquet" />
        </Link>

        <button
          className="navToggle"
          onClick={() => setMenuOpen(open => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>

        <div className={`navButton${menuOpen ? " open" : ""}`}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => isActive ? "active" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/career" element={<Career/>} />
      </Routes>

    </div>
  );
}

export default App;
