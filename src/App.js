import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import AboutMe from './components/AboutMe';

function App() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleToggleAboutMe = (link) => {
    setActiveLink(link);
    setShowAboutMe(link === 'aboutMe');
  };

  const handleHideAboutMe = () => {
    setShowAboutMe(false);
  };

  return (
    <div className="App">
      <Router>
        <NavBar onToggleAboutMe={handleToggleAboutMe} activeLink={activeLink} />
        <Banner />
        {showAboutMe && <AboutMe />}
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
