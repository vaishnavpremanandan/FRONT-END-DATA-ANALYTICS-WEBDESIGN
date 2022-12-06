import React from 'react';
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    
    
    <Navbar></Navbar>
    <Hero></Hero>
    <Analytics/>
    <Newsletter/>
    <Cards/>
    <Footer/>
    
    </div>
  );
}

export default App;
