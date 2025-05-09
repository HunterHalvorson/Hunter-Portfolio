import React from 'react'
import '../css/About.css'
import UofC from '../assets/UC.png'
import LI from '../assets/LI.png'
import GH from '../assets/GH.png'
import Mail from '../assets/Mail.png'
import IG from '../assets/IG.png'
import { Link } from 'react-scroll';

function About() {
  return (
    <div id = "about" className="About-Container">
      <h1>About Me</h1>
      <br />
      <p>
        I'm Hunter Halvorson, a Computer Science and Finance student at the University of Calgary with a strong passion for full-stack development. I enjoy building clean, functional web applications using tools like React, Node.js, SQL, and many more!
      </p>
      <br />
      <p>
        I'm always looking to improve my skills by working on real-world projects—from interactive UIs to backend logic—and continuously learning new technologies. Outside of tech, I stay active with regular running and weight training.
      </p>
      <div className = 'image-container'>
        <img className = 'image' src={UofC} alt="" />
      </div>
      <div className = 'icon-container'>
        <img src={LI} onClick={() => window.open('https://www.linkedin.com/notifications/?filter=all')}/>
        <img src={GH} onClick={() => window.open('https://github.com/HunterHalvorson')}/>
        <a href="mailto:someone@example.com"><img src={Mail} /></a>
        <img src={IG} onClick={() => window.open('https://www.instagram.com/hunter.hallvorson/')} />
      </div>
    </div>

  )
}

export default About