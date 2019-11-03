import React from 'react';

const Skills = () => {
  return (
    <section className="section-skills u-margin-bottom-med" id="skills">
      <div className="u-center-text u-unskew">
        <h3 className="heading-secondary--2">
          Skills
        </h3>
        <div className="section-skills__container">
          <div className="section-skills__icon-container">
            <p className="section-skills__label">HTML5</p>
            <i className="devicon-html5-plain section-skills__icon"></i>
          </div>
          <div className="section-skills__icon-container">
            <p className="section-skills__label">CSS3</p>
            <i className="devicon-css3-plain section-skills__icon"></i>
          </div>
          <div className="section-skills__icon-container">
            <p className="section-skills__label">JavaScript</p>
            <i className="devicon-javascript-plain section-skills__icon"></i>
          </div>
          <div className="section-skills__icon-container">
            <p className="section-skills__label">Express</p>
            <i className="devicon-express-original section-skills__icon"></i>
          </div>
          <div className="section-skills__icon-container">
            <p className="section-skills__label">Node.js</p>
            <i className="devicon-nodejs-plain section-skills__icon"></i>
          </div>
          <div className="section-skills__icon-container">
            <p className="section-skills__label">MongoDB</p>
            <i className="devicon-mongodb-plain section-skills__icon"></i>
          </div>
          <div className="section-skills__icon-container">
            <p className="section-skills__label">GitHub</p>
            <i className="devicon-github-plain section-skills__icon"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;