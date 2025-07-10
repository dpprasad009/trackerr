
import React from 'react';
import { MapPin, Home, Smartphone, Wifi, Shield, Battery } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "GPS Tracker Pro",
      description: "Advanced GPS tracking solution with real-time monitoring, geofencing, and comprehensive analytics for fleet management and asset protection.",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
      features: [
        "Real-time GPS tracking",
        "Geofencing alerts",
        "Historical route data",
        "Mobile app integration",
        "Long battery life",
        "Weatherproof design"
      ],
      specs: {
        "Battery Life": "Up to 30 days",
        "Accuracy": "±3 meters",
        "Update Frequency": "Every 10 seconds",
        "Connectivity": "4G LTE + GPS"
      },
      icon: <MapPin className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      status: "Available"
    },
    {
      id: 2,
      name: "Smart Home Hub",
      description: "Comprehensive home automation system that integrates all your smart devices, providing centralized control and intelligent automation scenarios.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      features: [
        "Voice control integration",
        "Multi-device connectivity",
        "Custom automation rules",
        "Energy monitoring",
        "Security integration",
        "Mobile app control"
      ],
      specs: {
        "Supported Devices": "200+ devices",
        "Connectivity": "WiFi, Zigbee, Z-Wave",
        "Voice Support": "Alexa, Google Assistant",
        "Storage": "Local & Cloud"
      },
      icon: <Home className="h-6 w-6" />,
      color: "from-cyan-500 to-teal-500",
      status: "Available"
    }
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Current Products
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our flagship products designed to bring automation and smart technology 
            into your daily life and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white">
                    {product.status}
                  </Badge>
                </div>
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center text-white shadow-lg`}>
                  {product.icon}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Specifications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <div className="text-gray-400">{key}</div>
                        <div className="text-white font-medium">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <Smartphone className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 sm:p-12 border border-gray-700">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Automate Your World?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss custom solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                <Wifi className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Sales
              </Button>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                <Battery className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
