import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 - Sobre nosotros */}
          <div>
            <h3 className="text-xl font-bold mb-4">TodoEpoxi</h3>
            <p className="text-gray-400">
              Expertos en instalación de pavimentos de resina epoxi en toda España.
              Más de 15 años de experiencia.
            </p>
          </div>

          {/* Columna 2 - Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios/garajes" className="text-gray-400 hover:text-white transition">
                  Suelos para Garajes
                </Link>
              </li>
              <li>
                <Link to="/servicios/industrial" className="text-gray-400 hover:text-white transition">
                  Pavimentos Industriales
                </Link>
              </li>
              <li>
                <Link to="/servicios/decorativo" className="text-gray-400 hover:text-white transition">
                  Epoxi Decorativo
                </Link>
              </li>
              <li>
                <Link to="/servicios/parkings" className="text-gray-400 hover:text-white transition">
                  Parkings y Comunidades
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/precios" className="text-gray-400 hover:text-white transition">
                  Precios
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-400 hover:text-white transition">
                  Galería de Trabajos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                900 123 456
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@todoepoxi.es
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Servicio en toda España
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 TodoEpoxi. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
