import React, {Component} from 'react';

class Projects extends Component {
  render() {
    return (
      <section className="section-projects" id="projects">
        <div className="u-center-text u-margin-bottom-med">
          <h3 className="heading-secondary">Projects</h3>
        </div>
        <div className="project">
          <div className="row">
            <div className="col-1-of-2">
              <div class="project__img-container">
                <img src="img/how-many-words.png" alt="How Many Words" className="project__img"></img>
                <div className="project__links">
                  <a href="https://pages.git.generalassemb.ly/jdomo/how-many-words/" className="project__link">Website</a>
                  <a href="https://github.com/jdomo/how-many-words" className="project__link">Repo</a>
                </div>
              </div>
            </div>
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-sml">How Many Words</h3>
              <p className="project__text">
                How Many Words can you make out of 9 random letters? Set your high score, then step your game up and try to top it. You've got 120 seconds.
                All you need is a web browser, a keyboard and your smarty pants.
              </p>
              <h4 className="heading-tertiary--sub u-margin-top">
                Built with HTML, CSS, JavaScript, GitHub
              </h4>
              <p className="project__icons u-margin-top-sml">
                <i className="devicon-html5-plain project__icon"></i>
                <i className="devicon-css3-plain project__icon"></i>
                <i className="devicon-javascript-plain project__icon"></i>
                <i className="devicon-github-plain project__icon"></i>
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-sml">Watch Your Tone</h3>
              <p className="project__text">
              Ever wonder about how an AI interprets the things we say? Using IBM's Tone Analyzer, 
              Watch Your Tone enlists the processing power of Watson to determine the emotional content of your favourite phrases and quotes.
              </p>
              <h4 className="heading-tertiary--sub u-margin-top">
                Built with HTML, CSS, JavaScript, React, Express.js, IBM Watson & Tone Analyzer, NodeJS, MongoDB, Mongoose, Materialize, Chart.js, Github
              </h4>
              <p className="project__icons u-margin-top-sml">
                <i className="devicon-html5-plain project__icon"></i>
                <i className="devicon-css3-plain project__icon"></i>
                <i className="devicon-javascript-plain project__icon"></i>
                <i className="devicon-react-original-wordmark project__icon"></i>
                <i className="devicon-express-original project__icon"></i>
                <i className="devicon-nodejs-plain project__icon"></i>
                <i className="devicon-mongodb-plain project__icon"></i>
                <i className="devicon-github-plain project__icon"></i>
              </p>
            </div>
            <div className="col-1-of-2">
              <div class="project__img-container">
                <img src="img/watch-your-tone.png" alt="Watch Your Tone" className="project__img"></img>
                <div className="project__links">
                  <a href="https://watch-your-tone.herokuapp.com/" className="project__link">Website</a>
                  <a href="http://www.github.com" className="project__link">Repo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="project">
          <div className="row">
            <div className="col-1-of-2">
              <div class="project__img-container">
                <img src="img/best-dish.png" alt="Best Dish" className="project__img"></img>      
                <div className="project__links">
                  <a href="https://sei-bestdish.herokuapp.com/" className="project__link">Website</a>
                  <a href="https://github.com/jdomo/best-dish" className="project__link">Repo</a>
                </div>
              </div>
            </div>
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-sml">Best Dish</h3>
              <p className="project__text">
                Food blog with CRUD functionality. Many food websites focus mainly on the restaurant - 
                Best Dish is all about the star of the show, the food. Sign up today and share your best dish!
              </p>
              <h4 className="heading-tertiary--sub u-margin-top">
                Built with HTML, CSS, JavaScript, Express.js, NodeJS, MongoDB, Mongoose, Github
              </h4>
              <p className="project__icons u-margin-top-sml">
                <i className="devicon-html5-plain project__icon"></i>
                <i className="devicon-css3-plain project__icon"></i>
                <i className="devicon-javascript-plain project__icon"></i>
                <i className="devicon-express-original project__icon"></i>
                <i className="devicon-nodejs-plain project__icon"></i>
                <i className="devicon-mongodb-plain project__icon"></i>
                <i className="devicon-github-plain project__icon"></i>
              </p>
            </div>
          </div>
        </div>
        
      </section>
    )
  }
}

export default Projects;