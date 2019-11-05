import React, {Fragment} from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <div id="content-wrap">
        <Navbar/>
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default App;
