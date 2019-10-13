import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
