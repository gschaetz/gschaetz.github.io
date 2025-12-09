import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { href: '/', label: 'Home', isRoute: true },
    { href: '/#services', label: 'Services', isRoute: false },
    { href: '/#about', label: 'About', isRoute: false },
    { href: '/mobile-apps', label: 'Mobile Apps', isRoute: true },
    { href: '/#contact', label: 'Contact', isRoute: false },
  ];

  const handleNavClick = (href) => {
    // Scroll to top for Home and Mobile Apps (only if no hash)
    if (href === '/' || href === '/mobile-apps') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleHashClick = (e, href) => {
    e.preventDefault();
    const hash = href.substring(href.indexOf('#'));
    const targetId = hash.substring(1);

    // If we're not on the home page, navigate first then scroll
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll to the section
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" onClick={() => handleNavClick('/')}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
            >
              SchaetzKC LLC
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer inline-block"
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ) : (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleHashClick(e, item.href)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-700"
          >
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => {
                    handleNavClick(item.href);
                    setIsOpen(false);
                  }}
                  className="block py-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    handleHashClick(e, item.href);
                    setIsOpen(false);
                  }}
                  className="block py-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                >
                  {item.label}
                </a>
              )
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
