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
          {/* <div className="header__logo-box">
              <img src="img/logo-white.png" alt="logo" className="header__logo"/>
          </div> */}
      </div>
    </header>
  )
}

export default Header;