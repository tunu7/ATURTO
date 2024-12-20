import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Fighters from './pages/Fighters';
import About from './pages/About';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/fighters" element={<Fighters />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
