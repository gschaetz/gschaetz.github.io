import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Smartphone, Code, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  const floatingIcons = [
    { Icon: Brain, delay: 0, position: { top: '20%', left: '10%' } },
    { Icon: Database, delay: 0.5, position: { top: '30%', right: '15%' } },
    { Icon: Smartphone, delay: 1, position: { bottom: '30%', left: '20%' } },
    { Icon: Code, delay: 1.5, position: { top: '15%', right: '25%' } },
    { Icon: Zap, delay: 2, position: { bottom: '20%', right: '10%' } },
    { Icon: TrendingUp, delay: 2.5, position: { top: '40%', left: '5%' } },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay, duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute text-primary-400"
          style={position}
        >
          <Icon size={48} className="animate-float" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto section-padding">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">SchaetzKC LLC</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Transforming businesses with cutting-edge <span className="text-primary-400 font-semibold">AI solutions</span>, 
          <span className="text-primary-400 font-semibold"> Big Data analytics</span>, and 
          <span className="text-primary-400 font-semibold"> Mobile applications</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Explore Our Services
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
