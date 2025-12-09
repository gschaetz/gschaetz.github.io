import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top for Home and Mobile Apps pages if there's no hash fragment
    if ((pathname === '/' || pathname === '/mobile-apps') && !hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
