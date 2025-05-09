import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav>
      <div className="left-logo">Hunter</div>
      <div>
        <ul className="nav-links">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              activeClass="current" // This applies the 'current' class when active
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              activeClass="current" // This applies the 'current' class when active
            >
              Experience
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              activeClass="current" // This applies the 'current' class when active
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="connect-button">Connect</button>
      </div>
    </nav>
  );
}

export default NavBar;
