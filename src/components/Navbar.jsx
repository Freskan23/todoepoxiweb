import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-gray-200/50 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold tracking-tight text-apple-text">TodoEpoxi</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-apple-text/80 hover:text-apple-text transition-colors">
              Inicio
            </Link>
            <div className="relative group">
              <Link to="/servicios" className="text-sm font-medium text-apple-text/80 group-hover:text-apple-text transition-colors flex items-center gap-1 py-4">
                Servicios <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>
              <div className="absolute top-full left-0 w-48 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl py-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <Link to="/servicios/suelos-epoxi" className="block px-4 py-2 text-xs font-medium text-apple-text/80 hover:bg-apple-bg hover:text-apple-blue">Suelos</Link>
                <Link to="/servicios/encimeras-epoxi" className="block px-4 py-2 text-xs font-medium text-apple-text/80 hover:bg-apple-bg hover:text-apple-blue">Encimeras</Link>
                <Link to="/servicios/mesas-resina" className="block px-4 py-2 text-xs font-medium text-apple-text/80 hover:bg-apple-bg hover:text-apple-blue">Mesas de Diseño</Link>
                <Link to="/servicios/arte-resina" className="block px-4 py-2 text-xs font-medium text-apple-text/80 hover:bg-apple-bg hover:text-apple-blue">Arte & Cuadros</Link>
              </div>
            </div>
            <Link to="/galeria" className="text-sm font-medium text-apple-text/80 hover:text-apple-text transition-colors">
              Galería
            </Link>
            <Link to="/precios" className="text-sm font-medium text-apple-text/80 hover:text-apple-text transition-colors">
              Precios
            </Link>
            <Link
              to="/contacto"
              className="bg-apple-text text-white text-xs font-medium py-2 px-4 rounded-full hover:bg-black transition-all duration-300 shadow-sm"
            >
              Presupuesto Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-apple-text hover:bg-gray-100/50 focus:outline-none transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-6 pt-4 pb-8 space-y-4 bg-white/95 backdrop-blur-lg">
          <Link
            to="/"
            className="block text-2xl font-semibold text-apple-text"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <div className="space-y-4">
            <Link to="/servicios" className="block text-2xl font-semibold text-apple-text" onClick={() => setIsOpen(false)}>
              Servicios
            </Link>
            <div className="pl-4 space-y-2">
              <Link to="/servicios/suelos-epoxi" className="block text-lg text-apple-text-secondary" onClick={() => setIsOpen(false)}>Suelos</Link>
              <Link to="/servicios/encimeras-epoxi" className="block text-lg text-apple-text-secondary" onClick={() => setIsOpen(false)}>Encimeras</Link>
              <Link to="/servicios/mesas-resina" className="block text-lg text-apple-text-secondary" onClick={() => setIsOpen(false)}>Mesas</Link>
              <Link to="/servicios/arte-resina" className="block text-lg text-apple-text-secondary" onClick={() => setIsOpen(false)}>Arte</Link>
            </div>
          </div>
          <Link
            to="/galeria"
            className="block text-2xl font-semibold text-apple-text"
            onClick={() => setIsOpen(false)}
          >
            Galería
          </Link>
          <Link
            to="/precios"
            className="block text-2xl font-semibold text-apple-text"
            onClick={() => setIsOpen(false)}
          >
            Precios
          </Link>
          <Link
            to="/contacto"
            className="block py-4 mt-4 bg-apple-text text-white rounded-xl text-center font-medium"
            onClick={() => setIsOpen(false)}
          >
            Presupuesto Gratis
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
