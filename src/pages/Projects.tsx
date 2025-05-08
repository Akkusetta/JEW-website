import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Calendar, ArrowRight, Wrench, HardHat } from 'lucide-react';

function Projects() {
  const completedProjects = [
    {
      category: "Storage Tanks",
      projects: [
        {
          title: "Alkylate Storage Tanks at Paradip Refinery",
          location: "Paradip, Odisha",
          description: "Fabrication and Erection of 2 Nos. Alkylate Storage Tanks (50.50 Mtr. I/D and 16.0 Mtr. Height)",
          image: "/project-images/alkylate-storage-tank.png"
        },
        {
          title: "Sulphur Storage Tanks at Paradip Refinery",
          location: "Paradip, Odisha",
          description: "Fabrication and Erection of 2 Nos. Sulphur Storage Tanks (18.00 Mtr. I/D and 13.20 Mtr. Height), Cone Roof Storage Tanks",
          image: "/project-images/sulpher-storage-tank.png"
        },
        {
          title: "DDFR Storage Tanks at Paradip Refinery",
          location: "Paradip, Odisha",
          description: "Fabrication and Erection of Alkylate Storage Tanks (50.50 Mtr. I/D and 16.0 Mtr. Height)",
          image: "/project-images/ddfr-storage-tank.png"
        }
      ]
    },
    {
      category: "Dam & Barrage Works",
      projects: [
        {
          title: "Ajay Barrage Maintenance",
          location: "Sikatia, Jharkhand",
          description: "Repair, Maintenance and Painting works",
          image: "/project-images/ajay-barrage-maintenance.png"
        },
        {
          title: "Chandil Dam Gallery",
          location: "Chandil, Jharkhand",
          description: "Repair and Maintenance of Dam Gallery",
          image: "/project-images/chandil-dam-gallery.png"
        },
        {
          title: "Anandapur Barrage",
          location: "Anandapur, Odisha",
          description: "Painting Work at Barrage",
          image: "/project-images/anandapur-barrage.png"
        },
        {
          title: "Getalsud Dam",
          location: "Ranchi, Jharkhand",
          description: "Repair, Maintenance and Painting works",
          image: "/project-images/getalsud-dam.png"
        },
        {
          title: "Farakka Barrage",
          location: "West Bengal",
          description: "Removing of stuck stop-log of bay no-87",
          image: "/project-images/farakka-Barrage.png"
        }
      ]
    },
    {
      category: "Canal & Gate Works",
      projects: [
        {
          title: "Kharkai Right Main Canal",
          location: "Jharkhand",
          description: "Fabrication and Erection of CR gate and Hoisting arrangement at km 10.140",
          image: "/project-images/kharkai-right-main-canal.png"
        },
        {
          title: "Bank of Baroda Gate",
          location: "Bistupur",
          description: "Fabrication and Erection of Sliding Gate at Main Branch",
          image: "/project-images/bob-main-gate.png"
        }
      ]
    },
    {
      category: "Special Projects",
      projects: [
        {
          title: "Tenughat Dam Equipment",
          location: "Jharkhand",
          description: "Blasting and Painting of Radial gate, Repair, Sand Blasting and Painting of Gantry Crane",
          image: "/project-images/tenughat-dam.png"
        },
        {
          title: "Galudih Barrage",
          location: "Jharkhand",
          description: "Gardening and Horticulture Work at IB, Division Office, and Control Room",
          image: "/project-images/galudih-barrage.png"
        }
      ]
    }
  ];

  const ongoingProjects = [
    {
      title: "Tenughat Dam Maintenance",
      location: "Jharkhand",
      description: "Repair Operation Maintenance of radial gates, under sluice gates, emergency gate, service gate & its hoist, 70 MT gantry crane, lifting beam, stop logs, 125 KVA DG sets and 75 HP VT pump set (3-year contract)"
    },
    {
      title: "Omkareshwar Power Station",
      location: "Madhya Pradesh",
      description: "Painting of Radial Gates of Dam"
    },
    {
      title: "Farakka Barrage Repainting",
      location: "West Bengal",
      description: "Repainting of hoist-bridge, trestle, distribution boxes and platform from bay no. 1 to 109 with minor repairs"
    },
    {
      title: "Bindu Barrage Gates",
      location: "Jaldhaka Hydel Project, Kalimpong",
      description: "Dismantling, Supply, Fitting, and Alignment of Rollers and replacement of rubber seals for Five Spillway Gates"
    },
    {
      title: "Chandil Dam Maintenance",
      location: "Jharkhand",
      description: "Pre-monsoon & During monsoon maintenance works of hoist assembly and gantry crane"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl">Discover our extensive portfolio of successful projects across India, showcasing our expertise in hydro-mechanical works, fabrication, and tankages.</p>
        </div>
      </div>

      {/* Ongoing Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Ongoing Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ongoingProjects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md border-l-4 border-blue-900">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{project.location}</span>
              </div>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Projects */}
      {completedProjects.map((category, index) => (
        <div key={index} className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Statistics Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">20+</div>
              <p className="text-gray-600">Completed Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">5+</div>
              <p className="text-gray-600">Ongoing Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">4</div>
              <p className="text-gray-600">States Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <p className="text-gray-600">Years Experience</p>
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

export default Projects;