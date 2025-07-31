import React from 'react';
import Hero from '../components/Hero';
import Lines from '../components/Lines';
import Why from '../components/Why';
import Features from '../components/Features';
import Simple from '../components/Simple';
import Result from '../components/Result';
import Testomonial from '../components/Testomonial';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import FAQ from '../components/FAQ';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Lines />
      <Why />
      <Features />
      <Simple />
      <Result />
      <Testomonial />
      <Pricing />
      <Team />
      <FAQ />
    </div>
  );
};

export default Homepage;
