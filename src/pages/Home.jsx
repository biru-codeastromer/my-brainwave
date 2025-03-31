import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Collaboration from '../components/Collaboration';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Home;
