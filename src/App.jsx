import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Provincia from './pages/Provincia';
import ServicioCategoria from './pages/ServicioCategoria';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/servicios" element={<Home />} />
            <Route path="/servicios/:category" element={<ServicioCategoria />} />
            <Route path="/galeria" element={<Home />} />
            <Route path="/precios" element={<Home />} />
            <Route path="/:slug" element={<Provincia />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
