import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
            <span className="heading-primary--main">
                Joseph Domovitch
            </span>
            <span className="heading-primary--sub u-margin-top">
                Web Developer
            </span>
        </h1>
        {/* <a href="https://jdomo.github.io/jd-portfolio/docs/jdomovitchresume.pdf" className="header__resume-link" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i>Resume</a>         */}
      </div>
    </header>
  )
}

export default Header;