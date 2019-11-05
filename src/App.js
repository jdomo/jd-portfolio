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
    <div id="master-container">
      <div id="content-wrap">
        <Navbar/>
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
