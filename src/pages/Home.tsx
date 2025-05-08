import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, HardHat, Users, CheckCircle, Phone, Mail } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Janta Engineering Works</h1>
              <p className="text-xl mb-8">Established in 2008, we are a distinguished brand in hydro-mechanical works, fabrication, erection, and tankages works. With a proven track record of excellence, we deliver exceptional results across India.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>+91 8002564492, +91 9234924492</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>jantaeworks@gmail.com</span>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img 
                src="/logos/logo.png" 
                alt="Janta Engineering Works Logo" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Droplets className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Hydro-Mechanical Works</h3>
              <p className="mb-4">Specialized expertise in dam construction, maintenance, and water infrastructure projects.</p>
              <Link to="/services" className="text-blue-900 font-semibold hover:text-blue-700">Learn more →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <HardHat className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fabrication & Erection</h3>
              <p className="mb-4">Professional fabrication and erection services for various industrial applications.</p>
              <Link to="/services" className="text-blue-900 font-semibold hover:text-blue-700">Learn more →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Tankages Works</h3>
              <p className="mb-4">Expert solutions for storage tank construction and maintenance.</p>
              <Link to="/services" className="text-blue-900 font-semibold hover:text-blue-700">Learn more →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Major Clients */}
      <div className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">Our Major Clients</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="p-4 text-center flex items-center justify-center gap-4">
        <p className="font-medium">Water Resources Department, Jharkhand</p>
      </div>
      <div className="p-4 text-center flex items-center justify-center gap-4">
        <img src="/logos/ntpc-logo.png" alt="NTPC Logo" className="h-10 w-auto" />
        <p className="font-medium">NTPC</p>
      </div>
      <div className="p-4 text-center flex items-center justify-center gap-4">
        <img src="/logos/OCCL-logo.png" alt="OCCL Logo" className="h-10 w-auto" />
        <p className="font-medium">OCCL</p>
      </div>
      <div className="p-4 text-center flex items-center justify-center gap-4">
        <img src="/logos/BnR-logo.png" alt="Bridge and Roof Co. India Ltd." className="h-10 w-auto" />
        <p className="font-medium">Bridge and Roof Co. India Ltd.</p>
      </div>
      <div className="p-4 text-center flex items-center justify-center gap-4">
        <img src="/logos/WAPCOS-logo.png" alt="WAPCOS Logo" className="h-10 w-auto" />
        <p className="font-medium">WAPCOS</p>
      </div>
      <div className="p-4 text-center flex items-center justify-center gap-4">
        <img src="/logos/nhdc-logo.jpg" alt="NHDC Logo" className="h-10 w-auto" />
        <p className="font-medium">NHDC</p>
      </div>
      <div className="p-4 text-center flex items-center justify-center gap-4">
        <img src="/logos/WBSEDCL-Logo.png" alt="WBSEDCL Logo" className="h-10 w-auto" />
        <p className="font-medium">WBSEDCL</p>
      </div>
      <div className="p-4 text-center flex items-center justify-center gap-4">
        <p className="font-medium">Farakka Barrage Project</p>
      </div>
    </div>
  </div>
</div>


      {/* Financial Growth */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Financial Growth</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-6 py-3">Financial Year</th>
                  <th className="px-6 py-3">Gross Receipts (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">2022-2023</td>
                  <td className="px-6 py-4">4,84,56,161.00</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">2021-2022</td>
                  <td className="px-6 py-4">4,62,70,343.00</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">2020-2021</td>
                  <td className="px-6 py-4">2,04,36,224.00</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">2019-2020</td>
                  <td className="px-6 py-4">1,24,96,309.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">2018-2019</td>
                  <td className="px-6 py-4">1,63,80,467.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's work together to bring your vision to life. Our team of experts is ready to help you achieve your infrastructure goals.</p>
          <Link to="/contact" className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;