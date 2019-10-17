import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__linklist">
        <li className="navbar__item">
          <a href="#about" className="navbar__link">About Me</a>
        </li>
        <li className="navbar__item">
          <a href="#skills" className="navbar__link">Skills</a>
        </li>
        <li className="navbar__item">
          <a href="#projects" className="navbar__link">Projects</a>
        </li>
        <li className="navbar__item">
          <a href="/docs/jdomovitchresume.pdf" className="navbar__link">Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;