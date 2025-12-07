import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Star, Download } from 'lucide-react';

const MobileApps = () => {
  const apps = [
    {
      id: 'rps',
      name: 'RPS: Rock Paper Scissors',
      tagline: 'Rock it. Paper it. Play it.',
      description: 'A modern iOS game featuring the classic Rock Paper Scissors with multiple engaging game modes, SharePlay multiplayer support, and a premium ad-free experience via In-App Purchase.',
      icon: '/apps/rps/app-icon.png',
      appStoreUrl: 'https://apps.apple.com/us/app/rps-rock-paper-scissor/id6670299623',
      privacyUrl: '/mobile-apps/rps/privacy',
      screenshots: [
        '/apps/rps/screenshots/6.9inch_iPhone_17_Pro_Max/1.png',
        '/apps/rps/screenshots/6.9inch_iPhone_17_Pro_Max/2.png',
        '/apps/rps/screenshots/6.9inch_iPhone_17_Pro_Max/3.png',
        '/apps/rps/screenshots/6.9inch_iPhone_17_Pro_Max/4.png',
        '/apps/rps/screenshots/6.9inch_iPhone_17_Pro_Max/5.png',
        '/apps/rps/screenshots/6.9inch_iPhone_17_Pro_Max/6.png',
        '/apps/rps/screenshots/6.9inch_iPhone_17_Pro_Max/7.png',
      ],
      features: [
        'Single Player - Fast-paced speed challenge',
        'Head to Head - SharePlay multiplayer',
        'Ad Removal - Premium IAP ($1.99)',
        'Theme System - Light/Dark/System',
        'Performance Mode - Battery optimization',
        'Animated Cartoon Backgrounds',
        'Statistics & Leaderboard',
        'Continue with Rewarded Ads',
      ],
      platforms: ['iOS'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Mobile Apps
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our collection of mobile applications designed to entertain, educate, and enhance your mobile experience.
          </p>
        </div>
      </motion.div>

      {/* Apps Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-24"
          >
            {/* App Header */}
            <div className="glass-effect rounded-2xl p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                {/* App Icon */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={app.icon}
                      alt={`${app.name} icon`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* App Info */}
                <div className="flex-grow">
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {app.name}
                  </h2>
                  <p className="text-xl text-primary-400 mb-4">{app.tagline}</p>
                  <p className="text-gray-300 mb-6">{app.description}</p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <Download size={20} />
                      Download on App Store
                    </a>
                    <Link
                      to={app.privacyUrl}
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshots Carousel */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Screenshots</h3>
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6">
                  {app.screenshots.map((screenshot, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-64 rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={screenshot}
                          alt={`${app.name} screenshot ${idx + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {app.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-dark-700/50 hover:bg-dark-700 transition-colors"
                  >
                    <Star className="text-primary-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="glass-effect rounded-2xl p-8">
          <Smartphone className="w-16 h-16 text-primary-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            More Apps Coming Soon
          </h3>
          <p className="text-gray-300 mb-6">
            We're constantly working on new and exciting mobile applications. Stay tuned for more releases!
          </p>
          <Link to="/#contact" className="btn-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileApps;
