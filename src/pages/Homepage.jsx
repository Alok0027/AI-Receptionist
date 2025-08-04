import React from 'react';
import Hero from '../components/Hero';
import Lines from '../components/Lines';
import Why from '../components/Why';
import AIReceptionists from '../components/AIReceptionists';
import AI24Seven from '../components/AI24Seven';
import CallRouting from '../components/CallRouting';
import AIAnalytics from '../components/AIAnalytics';
import AlwaysOnService from '../components/AlwaysOnService';
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
      <AIReceptionists />
      <AI24Seven />
      <CallRouting />
      <AIAnalytics />
      <AlwaysOnService />
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
