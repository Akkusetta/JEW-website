import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, HardHat, Wrench, Shield, Settings, PenTool as Tool } from 'lucide-react';

function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">Delivering excellence in hydro-mechanical works, fabrication, and infrastructure solutions with precision and expertise.</p>
        </div>
      </div>

      {/* Main Services */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hydro-Mechanical Works */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <Droplets className="h-12 w-12 text-blue-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hydro-Mechanical Works</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Installation and maintenance of radial gates, sluice gates, and emergency gates</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Gantry crane operations and maintenance (up to 70 MT capacity)</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Dam gallery maintenance and repair</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Stop-log installation and removal</span>
                </li>
              </ul>
            </div>

            {/* Fabrication & Erection */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <HardHat className="h-12 w-12 text-blue-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fabrication & Erection</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Large-scale storage tank fabrication (up to 50.50 Mtr. I/D)</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Custom industrial equipment fabrication</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Structural steel fabrication and erection</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Precision welding and assembly</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Tankages Works */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <Settings className="h-12 w-12 text-blue-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tankages Works</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Chemical storage tank construction</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Cone roof storage tank installation</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Tank maintenance and repair services</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Vacuum testing and quality assurance</span>
                </li>
              </ul>
            </div>

            {/* Maintenance & Repair */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <Tool className="h-12 w-12 text-blue-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Maintenance & Repair</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Industrial equipment overhaul and repair</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Specialized surface treatment and painting</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Preventive maintenance programs</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-900 mr-2 mt-1" />
                  <span>Emergency repair services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <Wrench className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Equipment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>15T New Generation Crane</li>
                <li>15T Wheel Mounted Hydra Crane</li>
                <li>JCB Equipment</li>
                <li>Advanced Welding Machinery</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <Settings className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Facilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>1200 sq ft Factory Area</li>
                <li>1000 sq ft Shop Floor</li>
                <li>300 sq ft Office Space</li>
                <li>Modern Testing Equipment</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <HardHat className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Power Backup</h3>
              <ul className="space-y-2 text-gray-600">
                <li>55 KVA Generator Set</li>
                <li>65 KVA Generator Set</li>
                <li>Uninterrupted Operations</li>
                <li>Emergency Power Supply</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's work together to bring your vision to life. Our team of experts is ready to help you achieve your infrastructure goals.</p>
          <Link to="/contact" className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition duration-300 hover:bg-blue-100">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;