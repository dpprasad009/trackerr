
import React from 'react';
import { Users, Award, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We push the boundaries of technology to create solutions that didn't exist before.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision",
      description: "Every solution is crafted with meticulous attention to detail and accuracy.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand and exceed their expectations.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, from design to delivery.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Innomakers
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Founded with a vision to revolutionize automation, Innomakers has been at the forefront of 
            industrial innovation for over 5 years. We combine cutting-edge technology with deep industry 
            expertise to deliver solutions that transform businesses and improve lives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Innomakers was born from a simple belief: technology should make life better, not more complicated. 
                Our founders, experienced engineers and visionaries, saw the potential for automation to solve 
                real-world problems across industries.
              </p>
              <p>
                Starting with small-scale industrial projects, we've grown to become a trusted partner for 
                businesses seeking intelligent automation solutions. From GPS tracking systems to comprehensive 
                home automation, we've expanded our expertise while maintaining our commitment to innovation.
              </p>
              <p>
                Today, we continue to push boundaries, exploring new technologies like IoT, AI, and advanced 
                robotics to create solutions that anticipate the needs of tomorrow.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h4 className="text-2xl font-bold text-white mb-6">Our Mission</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses and individuals through intelligent automation solutions that enhance 
                efficiency, security, and quality of life while fostering sustainable technological advancement.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center leading-relaxed">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
