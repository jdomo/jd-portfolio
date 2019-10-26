import React from 'react';

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="u-center-text u-margin-bottom-med">
        <h3 className="heading-secondary">About Me</h3>
      </div>
      <div className="u-margin-top">
        <div className="section-about__content">
          <div className="row">
            <figure className="section-about__shape">
              <img src="img/jd.jpg" className="section-about__img" alt="Joseph"/>
            </figure>
            <div className="section-about__text">
              <p>
                I am a software engineer with a colourful background in music production and psychology. 
                I’m passionate about programming, music, food, and travel. Striving to deliver creative yet 
                straightforward solutions, I am seeking a position where I can apply my skills while tackling 
                any challenge presented.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <span id="skills"/> */}
    </section>
  )
}

export default About;