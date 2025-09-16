import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { ArrowRight, Phone, Mail, MapPin, Factory, Settings, Shield, Award, Users, Calendar, CheckCircle, Wrench, Droplets, Zap, Building } from 'lucide-react';

const MKFabricatorsLanding = () => {
  const [activeTab, setActiveTab] = useState('water-treatment');

  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Design & Engineering",
      description: "Custom-built process equipment designed to meet your specific industrial requirements with precision engineering."
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Manufacturing & Fabrication",
      description: "State-of-the-art manufacturing of sophisticated machinery in carbon steel & stainless steel configurations."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "All equipment manufactured as per National & International codes under third-party inspections and surveys."
    }
  ];

  const industries = [
    {
      icon: <Droplets className="w-6 h-6" />,
      name: "Chemicals & Agro-Chemicals",
      description: "Specialized equipment for chemical processing and agricultural chemical manufacturing."
    },
    {
      icon: <Building className="w-6 h-6" />,
      name: "Pharmaceuticals",
      description: "CGMP compliant systems and reactors for pharmaceutical manufacturing processes."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: "Power Plants",
      description: "Critical process equipment and water treatment systems for power generation."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      name: "Petro-chemicals",
      description: "Robust equipment for petrochemical processing and refining operations."
    }
  ];

  const products = {
    'water-treatment': [
      {
        name: 'Pressure Sand Filters',
        description: 'Efficient filtration systems for removing suspended solids and turbidity from water',
        features: ['High flow rate', 'Low maintenance', 'Automated backwash'],
        applications: 'Pre-treatment for RO systems, industrial water treatment'
      },
      {
        name: 'Activated Carbon Filters',
        description: 'Advanced adsorption technology for removing chlorine, odor, and organic compounds',
        features: ['Superior adsorption', 'Long service life', 'Regenerable media'],
        applications: 'Drinking water treatment, industrial process water'
      },
      {
        name: 'Reverse Osmosis Systems',
        description: 'High-pressure membrane systems for producing ultra-pure water',
        features: ['99%+ contaminant removal', 'Energy efficient', 'Modular design'],
        applications: 'Pharmaceutical, electronics, boiler feed water'
      },
      {
        name: 'Mineral Water Plants',
        description: 'Complete turnkey solutions for bottled water production',
        features: ['FDA compliant', 'Automated systems', 'Quality monitoring'],
        applications: 'Bottled water industry, beverage manufacturing'
      },
      {
        name: 'Waste Water Treatment',
        description: 'Comprehensive systems for treating and recycling industrial wastewater',
        features: ['Zero liquid discharge', 'Resource recovery', 'Compliance ready'],
        applications: 'Chemical plants, textile industry, pharmaceuticals'
      },
      {
        name: 'Demineralization Plants',
        description: 'Ion exchange systems for producing deionized water',
        features: ['High purity output', 'Automatic regeneration', 'Low operating cost'],
        applications: 'Power plants, steam generation, electronics'
      }
    ],
    'process-equipment': [
      {
        name: 'Distillation Towers',
        description: 'Custom-designed columns for separation and purification processes',
        features: ['Optimized efficiency', 'Corrosion resistant', 'Precise control'],
        applications: 'Chemical processing, petrochemicals, pharmaceuticals'
      },
      {
        name: 'Reactors & CGMP Systems',
        description: 'Pharmaceutical-grade reactors meeting CGMP compliance standards',
        features: ['GMP compliant', 'Sterile design', 'Process validation'],
        applications: 'Pharmaceutical manufacturing, fine chemicals'
      },
      {
        name: 'Heat Exchangers',
        description: 'Shell & tube design for efficient heat transfer applications',
        features: ['High thermal efficiency', 'Robust construction', 'Easy maintenance'],
        applications: 'Chemical processing, HVAC, power generation'
      },
      {
        name: 'Storage Tanks',
        description: 'Pressure vessels and atmospheric tanks for various applications',
        features: ['Code compliant', 'Custom capacities', 'Multiple materials'],
        applications: 'Chemical storage, fuel tanks, water storage'
      },
      {
        name: 'Auto Claves',
        description: 'High-pressure sterilization equipment for various industries',
        features: ['Precise temperature control', 'Safety systems', 'Validation ready'],
        applications: 'Medical devices, pharmaceuticals, research labs'
      },
      {
        name: 'Chemical Dosers',
        description: 'Precision metering pumps for accurate chemical injection',
        features: ['Accurate dosing', 'Corrosion resistant', 'Remote monitoring'],
        applications: 'Water treatment, chemical processing, agriculture'
      }
    ],
    'industrial-systems': [
      {
        name: 'Paper & Pulp Systems',
        description: 'Specialized equipment for pulp processing and paper manufacturing',
        features: ['High efficiency', 'Fiber recovery', 'Environmental compliance'],
        applications: 'Paper mills, pulp processing, recycling plants'
      },
      {
        name: 'Food & Beverages Equipment',
        description: 'Hygienic processing equipment for food and beverage industry',
        features: ['Food grade materials', 'CIP/SIP systems', 'HACCP compliant'],
        applications: 'Food processing, dairy, beverage manufacturing'
      },
      {
        name: 'Oil & Gas Systems',
        description: 'Robust equipment designed for petroleum and gas processing',
        features: ['Explosion proof', 'High pressure rated', 'Corrosion resistant'],
        applications: 'Refineries, gas processing, offshore platforms'
      },
      {
        name: 'Sugar Processing Equipment',
        description: 'Specialized machinery for sugar refining and processing',
        features: ['High throughput', 'Energy efficient', 'Automated control'],
        applications: 'Sugar mills, refineries, distilleries'
      },
      {
        name: 'Pharmaceutical Equipment',
        description: 'GMP-compliant systems for pharmaceutical manufacturing',
        features: ['Sterile design', 'Validation support', 'Regulatory compliance'],
        applications: 'Drug manufacturing, API production, biotechnology'
      },
      {
        name: 'Agro Chemical Systems',
        description: 'Safe handling and processing equipment for agricultural chemicals',
        features: ['Chemical compatibility', 'Safety systems', 'Containment design'],
        applications: 'Pesticide manufacturing, fertilizer plants, agrochemicals'
      }
    ]
  };

  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '25', label: 'Team Members' },
    { number: '₹5Cr', label: 'Annual Turnover' }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Expertise",
      description: "Over two decades of specialized experience in process equipment manufacturing"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Standards",
      description: "All equipment manufactured as per National & International codes with third-party inspections"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experienced Team",
      description: "Skilled engineers and technicians with deep industry knowledge and expertise"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored equipment designed to meet your specific industrial requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>MK Fabricators | Custom Process Equipment & Water Treatment</title>
        <meta name="description" content="Leading manufacturers of custom-built process equipment, water treatment plants, and industrial systems for chemical, pharmaceutical, and allied industries. Over 20 years of experience." />
      </Head>
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="bg-blue-900 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div></div>
            <div className="flex gap-6">
              <a href="#contact" className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                Contact: Avijit Guha (Manager)
              </a>
              <a href="#contact" className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Ambarnath, Maharashtra
              </a>
            </div>
          </div>
        </div>

        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-900">
                MK Fabricators
                <div className="text-sm font-normal text-gray-600">Engineering Contractors</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#products" className="hover:text-blue-600 transition-colors">Products</a>
              <a href="#industries" className="hover:text-blue-600 transition-colors">Industries</a>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-white">
              <div className="max-w-3xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Leading Manufacturers of Custom Process Equipment
                </h1>
                <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                  Over 20+ years of excellence in designing and manufacturing Water Treatment Systems and Industrial Equipment for Chemical, Pharmaceutical & Allied Industries
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="#contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-lg">
                    Get Quote <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#products" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300">
                    View Products <Factory className="w-5 h-5" />
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 text-blue-200 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>ISO Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Third-Party Inspected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>CGMP Compliant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stats Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-white/20 shadow-2xl">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">Company Overview</h3>
                <div className="grid grid-cols-2 gap-6 lg:gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-blue-200 text-sm lg:text-base">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-white font-semibold mb-2">GST Registered</div>
                    <div className="text-blue-200 text-sm">Partnership Firm Since 2017</div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a href="#contact" className="w-full bg-blue-600/80 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors border border-blue-500/30">
                    Contact Manager: Avijit Guha
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About MK Fabricators</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We take pleasure in introducing ourselves as leading <strong>Designers, Manufacturers and Suppliers</strong> of Custom-Built Process Equipment, Water Treatment Plants and Systems. Our specialization serves the critical fields of Chemicals, Agro-Chemicals, Pharmaceuticals, Specialty chemicals, Power plants, Sugar, Paper & Pulp, Petro-chemicals, Food & Beverages, Oil & Gas and other allied Industries.
                </p>
                <p>
                  Founded by the Late Shri M.K. Guha, our company has evolved from a small enterprise handling piping and structural jobs to a comprehensive manufacturer of sophisticated process equipment. Over the past two decades, we have supplied to numerous plants across various Multinational, Public and Private Sector Companies.
                </p>
                <p>
                  Our expertise lies in manufacturing <strong>sophisticated & critical Process machinery</strong> and coded equipment in various configurations of carbon steel & stainless steel, strictly adhering to National & International codes under third-party inspections and surveys.
                </p>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">GST Registration</h4>
                <p className="text-sm text-blue-700">GST No: 27AAJFM9098D1ZT</p>
                <p className="text-sm text-blue-700 mt-1">Registration Date: 01-07-2017</p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/image.png"
                alt="MK Fabricators Manufacturing Facility"
                className="rounded-2xl shadow-2xl w-full"
                width={500}
                height={500}
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">2+</div>
                <div className="text-sm">Decades Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive engineering solutions from design to delivery, ensuring quality and compliance at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-xl mb-6 flex items-center justify-center text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Product Range</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of process equipment and water treatment systems designed for industrial excellence.
            </p>
          </div>

          {/* Product Categories */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('water-treatment')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'water-treatment'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                  Water Treatment
                </button>
                <button
                  onClick={() => setActiveTab('process-equipment')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'process-equipment'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                  Process Equipment
                </button>
                <button
                  onClick={() => setActiveTab('industrial-systems')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'industrial-systems'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                  Industrial Systems
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products[activeTab].map((product, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-20">
                    <Wrench className="w-16 h-16" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 relative z-10">{product.name}</h3>
                  <div className="w-12 h-1 bg-white/30 rounded-full group-hover:w-20 transition-all duration-300"></div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {product.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Factory className="w-4 h-4 text-blue-500" />
                      Applications
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {product.applications}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <a href="#contact" className="w-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group">
                      <span>Request Quote</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Industries We Serve</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies across multiple industrial sectors for over two decades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{industry.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MK Fabricators?</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our commitment to quality, innovation, and customer satisfaction sets us apart in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Get in Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to discuss your project requirements? Contact us for customized solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        C-2, Addl. Ambarnath Industrial Area,<br />
                        Anand Nagar, MIDC, Ambarnath (East),<br />
                        Ambernath - 421506, Thane,<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Manager</h4>
                      <p className="text-gray-600">Avijit Guha</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Business Type</h4>
                      <p className="text-gray-600">Partnership Firm</p>
                      <p className="text-gray-500 text-sm">GST: 27AAJFM9098D1ZT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Get in touch with our team to discuss your custom equipment requirements and receive a detailed quotation.
                </p>
                <div className="space-y-4">
                  <a href="#contact" className="w-full bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                    Request Quote <ArrowRight className="w-5 h-5" />
                  </a>
                  <button className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                    Schedule Visit <Calendar className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Company Partners</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Avijit Mrinal Guha</p>
                  <p>• Sujitkumar Mrunalkanti Guha</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Annual Turnover: ₹1.5 - 5 Crores<br />
                    Team Size: 11-25 Employees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">MK Fabricators</div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Leading manufacturers of custom process equipment and water treatment systems with over 20+ years of industrial expertise.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white">About Us</a>
                <a href="#services" className="block text-gray-300 hover:text-white">Services</a>
                <a href="#products" className="block text-gray-300 hover:text-white">Products</a>
                <a href="#industries" className="block text-gray-300 hover:text-white">Industries</a>
                <a href="#contact" className="block text-gray-300 hover:text-white">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Location</h4>
              <div className="text-gray-300 text-sm leading-relaxed">
                <p>C-2, Addl. Ambarnath Industrial Area</p>
                <p>Anand Nagar, MIDC</p>
                <p>Ambarnath (East), Maharashtra - 421506</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 MK Fabricators And Engineering Contractors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MKFabricatorsLanding;
