import React, {Component} from 'react';

class Projects extends Component {
  render() {
    return (
      <section className="section-projects" id="projects">
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
                All you need is a web browser, a keyboard and your smarty pants.
              </p>
              <p className="section-projects__icons">
                <i class="devicon-html5-plain"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="section-projects__project">
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-sml">Watch Your Tone</h3>
              <p className="section-projects__text">
              Ever wonder about how an AI interprets the things we say? Using IBM's Tone Analyzer, 
              Watch Your Tone enlists the processing power of Watson to determine the emotional content of your favourite phrases and quotes.
              </p>
            </div>
            <div className="col-1-of-2">
              <img src="img/watch-your-tone.png" alt="How Many Words" className="section-projects__img"></img>
            </div>
          </div>
        </div>
        <div className="section-projects__project">
          <div className="row">
            <div className="col-1-of-2">
              <img src="img/best-dish.png" alt="How Many Words" className="section-projects__img"></img>
            </div>
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-sml">Best Dish</h3>
              <p className="section-projects__text">
                Food blog with CRUD functionality. Many food websites focus mainly on the restaurant - 
                Best Dish is all about the star of the show, the food. Sign up today and share your best dish!
              </p>
            </div>
          </div>
        </div>
        
      </section>
    )
  }
}

export default Projects;