
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/70 z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
            Innovation in
            <span className="block text-cyan-400">Automation</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming industries through cutting-edge automation solutions, 
            IoT devices, and intelligent systems that drive the future forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              size="lg"
              onClick={scrollToProducts}
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-2xl mx-auto">
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">100+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Projects Completed</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Happy Clients</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-400 text-xs sm:text-sm">Support</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
