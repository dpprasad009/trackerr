
import React from 'react';
import { Code, Zap, Shield, Cpu, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const services = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Industrial Automation",
      description: "Complete automation solutions for manufacturing processes, increasing efficiency and reducing human error.",
      features: ["PLC Programming", "SCADA Systems", "HMI Development", "Process Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "IoT Solutions",
      description: "Smart connected devices and systems that provide real-time monitoring and control capabilities.",
      features: ["Sensor Networks", "Cloud Integration", "Real-time Analytics", "Remote Monitoring"],
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Systems",
      description: "Advanced security automation including access control, surveillance, and monitoring systems.",
      features: ["Access Control", "CCTV Integration", "Alarm Systems", "Biometric Solutions"],
      color: "from-teal-500 to-green-500"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software",
      description: "Tailored software solutions for automation control, data analysis, and system integration.",
      features: ["Custom Dashboards", "API Development", "Database Design", "System Integration"],
      color: "from-purple-500 to-blue-500"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Automation Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We specialize in creating intelligent automation solutions that transform businesses 
            and drive innovation across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <ArrowRight className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Automation Projects</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Technical Support</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
