import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h3 className="heading-tertiary footer__heading">Contact Me:</h3>
        <h3 className="heading-tertiary--sub footer__heading footer__heading--sub">jdomovitch@gmail.com</h3>
        <div className="footer__links">
          <a className="footer__link" href="https://www.linkedin.com/in/josephdomovitch">
            <i className="fab fa-linkedin" id="linked-in"></i>
          </a>
          <a className="footer__link" href="https://www.github.com/jdomo">
            <i className="devicon-github-plain" id="github"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;