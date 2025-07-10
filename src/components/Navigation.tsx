
import React, { useState } from 'react';
import { Menu, X, User, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-cyan-400">
                Innomakers
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">
                Portfolio
              </a>
              <a href="#products" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">
                Products
              </a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">
                About
              </a>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10">
                  <Link to="/login">
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Link>
                </Button>
                <Button size="sm" asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                  <Link to="/register">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/95 backdrop-blur-sm rounded-lg mt-2">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#portfolio" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">
                Portfolio
              </a>
              <a href="#products" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">
                Products
              </a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">
                About
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 w-full justify-start">
                  <Link to="/login">
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Link>
                </Button>
                <Button size="sm" asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold w-full justify-start transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                  <Link to="/register">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
