import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero'; 
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (  
  <>
    <div className="App">
      <BrowserRouter>  
        <Nav/>
        <Hero/>
        <Portfolio/>
        <AboutMe/>
      </BrowserRouter> 
    </div>
  </>
  );
}

export default App;
