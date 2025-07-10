
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cyan-400">Innomakers</h3>
            <p className="text-gray-300 leading-relaxed">
              Leading the future of automation with innovative solutions that transform industries and enhance lives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors">Portfolio</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-cyan-400 transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Industrial Automation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">IoT Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Home Automation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">GPS Tracking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Custom Software</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@innomakers.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Innovation <br />
                  Tech City, Hyderabad.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 Innomakers. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
