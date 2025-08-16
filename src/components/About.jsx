import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Completed', value: '50+', icon: Target },
    { label: 'Happy Clients', value: '25+', icon: Users },
    { label: 'Technologies Mastered', value: '20+', icon: Lightbulb },
  ];

  const expertise = [
    'Python & Machine Learning',
    'React & Modern Web Development',
    'iOS & Android Development',
    'Cloud Architecture (AWS, Azure)',
    'Data Engineering & Analytics',
    'DevOps & CI/CD',
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">SchaetzKC LLC</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're passionate about leveraging technology to solve complex business challenges and drive innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Innovating for the Future
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                SchaetzKC LLC is a forward-thinking technology company specializing in artificial intelligence, 
                big data analytics, and mobile application development. We combine deep technical expertise 
                with business acumen to deliver solutions that drive real results.
              </p>
              <p>
                Our approach is rooted in understanding your unique challenges and crafting tailored solutions 
                that not only meet your current needs but also position you for future growth. We stay at the 
                forefront of emerging technologies to ensure our clients have a competitive advantage.
              </p>
              <p>
                From startups to enterprise organizations, we've helped businesses across various industries 
                harness the power of modern technology to streamline operations, enhance customer experiences, 
                and unlock new opportunities for growth.
              </p>
            </div>

            {/* Expertise Tags */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Core Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {expertise.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-primary-500/20 text-primary-300 px-4 py-2 rounded-full text-sm font-medium border border-primary-500/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-dark-700/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 text-center group hover:border-primary-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-full h-full text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
              Our Mission
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and 
              competitive advantage. We believe in the transformative power of AI, data, and mobile technology 
              to create meaningful impact and unlock new possibilities for our clients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
