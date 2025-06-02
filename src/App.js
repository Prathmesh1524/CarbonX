import React, { useEffect, useState } from 'react';
// IMPORT COMPONENTS
import Hero from "./components/Hero"
import Header from "./components/Header"
import NavMobile from './components/NavMobile';
import Stats from "./components/Stats";
import Why from "./components/Why"
import Calculate from "./components/Calculate"
import Trade from "./components/Trade"
import Features from "./components/Features"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"

import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  //Mobile Nav 
  const [navMobile, setNavMobile] = useState(false);
  //aos init
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 300
    })
  })
  return <div>
    <Header setNavMobile={setNavMobile} />
    <Hero />
    {/* Mobile Nav */}
    <div className={`${navMobile ? 'right-0' : '-right-full'
      } fixed top-0 z-10 h-full transition-all duration-200`}>
      <NavMobile setNavMobile={setNavMobile} />
    </div>
    <Stats />
    <Why />
    <Calculate />
    <Trade />
    <Features />
    <Newsletter />
    <Footer />

  </div>
};

export default App;
