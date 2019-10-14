import React, {Component} from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="section-projects" id="projects">
        <div className="u-center-text u-margin-bottom-med">
          <h3 className="heading-secondary">Projects</h3>
        </div>
        <div className="section-projects__project">
          <div className="row">
            <div className="col-1-of-2">
              <img src="img/how-many-words.png" alt="How Many Words" className="section-projects__img"></img>
            </div>
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-sml">How Many Words</h3>
              <p className="section-projects__text">
                How Many Words can you make out of 9 random letters? Set your high score, then step your game up and try to top it. You've got 120 seconds.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            
          </div>
          <div className="col-1-of-2">

          </div>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            
          </div>
          <div className="col-1-of-2">

          </div>
        </div>
      </div>
    )
  }
}

export default Projects;