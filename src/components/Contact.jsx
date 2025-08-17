import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'apps@schaetzkc.com',
      href: 'mailto:apps@schaetzkc.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (816) 804-2451',
      href: 'tel:+18168042451'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kansas City, MO',
      href: '#'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Data Analytics',
    'Mobile App Development',
    'Web Development',
    'Data Engineering',
    'Consulting',
    'Other'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);

    const scriptURL = 'https://script.google.com/macros/s/AKfycby-MwUi3m7Yci4hX8a_667FbHp6LXImChbu3J31Q_iiql92F5Ynvz-hGNjfaN1EGVE3FA/exec';
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: data,
      });
      console.log('Success!', response);
      // Handle success feedback to the user
    } catch (error) {
      console.error('Error!', error.message);
      // Handle error feedback to the user
    }


    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Start a Conversation</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're looking to implement AI solutions, analyze big data, or develop a mobile application, 
                we're here to help. Reach out to us and let's discuss how we can bring your vision to life.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">{info.label}</div>
                    <a
                      href={info.href}
                      className="text-white hover:text-primary-400 transition-colors duration-300 font-medium"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-dark-700/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3 text-white">Why Choose Us?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary-400 mr-2" />
                  Expert team with 10+ years of experience
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary-400 mr-2" />
                  Cutting-edge technology solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary-400 mr-2" />
                  Personalized approach to every project
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary-400 mr-2" />
                  Ongoing support and maintenance
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-700/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-8"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-dark-600 border border-gray-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-dark-600 border border-gray-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-dark-600 border border-gray-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-dark-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                    >
                      <option value="" className="bg-dark-600 text-gray-300">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-dark-600 text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-dark-600 border border-gray-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
