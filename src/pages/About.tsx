import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Globe, Users, Shield, Target, Lightbulb } from 'lucide-react';

function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About Janta Engineering Works</h1>
          <p className="text-xl max-w-3xl">Leading the way in dam construction and water infrastructure since 1998, delivering excellence through innovation, expertise, and unwavering commitment to quality.</p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Legacy of Excellence</h2>
              <p className="text-lg mb-6">For over 25 years, Janta Engineering Works has been at the forefront of dam construction and water infrastructure development. Our journey began with a vision to transform water management systems across the globe, and today, we stand as industry leaders in delivering innovative engineering solutions.</p>
              <p className="text-lg mb-6">With a team of over 500 skilled engineers and professionals, we have successfully completed more than 100 major dam projects across 15 countries, impacting millions of lives through improved water access and management.</p>
              <Link to="/projects" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
                View Our Projects
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                alt="Engineering team at work"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Safety First</h3>
              <p>Prioritizing the safety of our workforce and communities in every project we undertake.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Target className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p>Maintaining the highest standards of quality and precision in all our engineering endeavors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Lightbulb className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p>Embracing cutting-edge technology and innovative solutions to tackle complex challenges.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-900 mb-2">100+</div>
              <p className="text-lg">Major Projects Completed</p>
            </div>
            <div>
              <Globe className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <p className="text-lg">Countries Served</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <p className="text-lg">Expert Engineers</p>
            </div>
            <div>
              <Shield className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-900 mb-2">25+</div>
              <p className="text-lg">Years of Excellence</p>
            </div>
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

export default About;