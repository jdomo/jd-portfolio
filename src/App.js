import React from 'react';
import './App.scss';
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
    </div>
  );
}

export default App;
