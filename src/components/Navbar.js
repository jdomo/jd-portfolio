import React, {Component} from "react";

class Navbar extends Component {
  state = {
    active: false,
  }

  toggleClass = () => {
    const currState = this.state.active;
    this.setState({
      active: !currState
    });
  }

  render() {
    return (
      <nav className={this.state.active ? 'navbar' : 'navbar navbar--hide'}>
        <div className="u-center-text">
          <button 
            className={this.state.active ? 'navbar__button navbar__button--clicked' : 'navbar__button'}
            onClick={this.toggleClass}
          >❖</button>
        </div>
        <ul className="navbar__linklist">
          <li className={this.state.active ? 'navbar__item' : 'navbar__item navbar__item--hide'}>
            <a href="#about" className="navbar__link" onClick={this.toggleClass}>About Me</a>
          </li>
          <li className={this.state.active ? 'navbar__item' : 'navbar__item navbar__item--hide'}>
            <a href="#skills" className="navbar__link" onClick={this.toggleClass}>Skills</a>
          </li>
          <li className={this.state.active ? 'navbar__item' : 'navbar__item navbar__item--hide'}>
            <a href="#projects" className="navbar__link" onClick={this.toggleClass}>Projects</a>
          </li>
          <li className={this.state.active ? 'navbar__item' : 'navbar__item navbar__item--hide'}>
            <a href="#contact" className="navbar__link" onClick={this.toggleClass}>Contact</a>
          </li>
          <li className={this.state.active ? 'navbar__item' : 'navbar__item navbar__item--hide'}>
            <a href="https://jdomo.github.io/jd-portfolio/docs/jdomovitchresume.pdf" className="navbar__link" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Resume</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;