import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">Get in touch with our team of experts for your hydro-mechanical, fabrication, and tankages needs.</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <MapPin className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Head Office</h3>
            <p className="text-gray-600">
              Rakha Copper Main Road<br />
              East Singhbhum<br />
              Jharkhand - 832106<br />
              India
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <Clock className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
            <p className="text-gray-600">
              Monday - Saturday: 9:00 AM - 6:00 PM<br />
              Sunday: Closed
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <Phone className="h-8 w-8 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
            <p className="text-gray-600">
              Phone: +91 8002564492<br />
              Mobile: +91 9234924492<br />
              Email: jantaeworks@gmail.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 flex items-center"
              >
                Send Message
                <Send className="h-4 w-4 ml-2" />
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Facilities</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Factory Details</h3>
                <ul className="space-y-2">
                  <li>Total Area: 1200 sq ft</li>
                  <li>Shop Area: 1000 sq ft</li>
                  <li>Office Area: 300 sq ft</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Handling Facilities</h3>
                <ul className="space-y-2">
                  <li>15T New Generation Crane (Ace)</li>
                  <li>15T Wheel Mounted Hydra Crane (Escort)</li>
                  <li>JCB</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Power Facilities</h3>
                <ul className="space-y-2">
                  <li>55 KVA Generator Set</li>
                  <li>65 KVA Generator Set</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;