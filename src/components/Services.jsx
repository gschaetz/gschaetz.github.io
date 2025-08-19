import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Smartphone, ArrowRight } from 'lucide-react';

const Services = () => {
  const serviceToContactMapping = {
    'Artificial Intelligence': 'AI & Machine Learning',
    'Big Data Analytics': 'Data Analytics',
    'Mobile Applications': 'Mobile App Development'
  };

  const handleLearnMore = (serviceTitle) => {
    const contactService = serviceToContactMapping[serviceTitle];
    const contactSection = document.getElementById('contact');
    const serviceSelect = document.getElementById('service');
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    setTimeout(() => {
      if (serviceSelect && contactService) {
        serviceSelect.value = contactService;
        serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }, 500);
  };

  const services = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Custom AI solutions including machine learning models, natural language processing, and intelligent automation to revolutionize your business processes.',
      features: ['Machine Learning', 'Deep Learning', 'NLP & Computer Vision', 'AI Automation'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Big Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics, data visualization, and predictive modeling solutions.',
      features: ['Data Pipeline Development', 'Predictive Analytics', 'Real-time Processing', 'Business Intelligence'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
      features: ['iOS & Android Development', 'Cross-Platform Solutions', 'UI/UX Design', 'App Store Optimization'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We specialize in cutting-edge technologies that drive digital transformation and business growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-dark-700/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-8 group hover:border-primary-400/50 transition-all duration-300"
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-full h-full text-white" />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <ArrowRight size={16} className="text-primary-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                onClick={() => handleLearnMore(service.title)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Ready to transform your business with cutting-edge technology?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block"
          >
            Start Your Project Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
