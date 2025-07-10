
import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Products from '../components/Products';
import About from '../components/About';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Portfolio />
      <Products />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
