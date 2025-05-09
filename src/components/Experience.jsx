import React from 'react'
import '../css/Experience.css'
import PYTHON from '../assets/PYTHON.png'
import JAVA from '../assets/JAVA.png'
import C from '../assets/C.png'
import JS from '../assets/JS.png'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import REACT from '../assets/REACT.png'
import NODE from '../assets/NODE.png'
import SQL from '../assets/SQL.png'
import GIT from '../assets/GIT.png'

function Experience() {
  return (
    <div id = "experience" className="Experience-Container">
      <h1 className='experience-title'>Experience</h1>
      <div className = 'img-container'>
        <img src={PYTHON} alt="" className="tech-stack-img" />
        <img src={JAVA} alt="" className="tech-stack-img" />
        <img src={C} alt="" className="tech-stack-img" />
        <img src={JS} alt="" className="tech-stack-img" />
        <img src={HTML} alt="" className="tech-stack-img" />
        <img src={CSS} alt="" className="tech-stack-img" />
        <img src={REACT} alt="" className="tech-stack-img" />
        <img src={NODE} alt="" className="tech-stack-img" />
        <img src={SQL} alt="" className="tech-stack-img" />
        <img src={GIT} alt="" className="tech-stack-img" />
      </div>
    </div>
  )
}

export default Experience