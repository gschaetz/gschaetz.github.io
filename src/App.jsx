import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import MobileApps from './pages/MobileApps';
import RPSPrivacy from './pages/RPSPrivacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mobile-apps" element={<MobileApps />} />
            <Route path="/mobile-apps/rps/privacy" element={<RPSPrivacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
