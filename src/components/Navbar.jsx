import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary-600">TodoEpoxi</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition">
              Inicio
            </Link>
            <Link to="/servicios" className="text-gray-700 hover:text-primary-600 transition">
              Servicios
            </Link>
            <Link to="/galeria" className="text-gray-700 hover:text-primary-600 transition">
              Galería
            </Link>
            <Link to="/precios" className="text-gray-700 hover:text-primary-600 transition">
              Precios
            </Link>
            <Link to="/contacto" className="btn-primary">
              Presupuesto Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              to="/galeria"
              className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Galería
            </Link>
            <Link
              to="/precios"
              className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Precios
            </Link>
            <Link
              to="/contacto"
              className="block px-3 py-2 bg-primary-600 text-white rounded-md text-center"
              onClick={() => setIsOpen(false)}
            >
              Presupuesto Gratis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
