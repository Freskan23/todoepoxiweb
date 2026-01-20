import { Link } from 'react-router-dom';
import { provincias } from '../data/provincias';

const Footer = () => {
  return (
    <footer className="bg-apple-bg border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Columna 1 - Sobre nosotros */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight text-apple-text">TodoEpoxi</h3>
            <p className="text-sm text-apple-text-secondary leading-relaxed">
              Expertos en la instalación de pavimentos de resina epoxi de alta gama.
              Compromiso con la excelencia y el diseño en toda España.
            </p>
          </div>

          {/* Columna 2 - Servicios */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-apple-text-secondary mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicios/garajes" className="text-sm text-apple-text hover:text-apple-blue transition-colors">
                  Garajes
                </Link>
              </li>
              <li>
                <Link to="/servicios/industrial" className="text-sm text-apple-text hover:text-apple-blue transition-colors">
                  Industrial
                </Link>
              </li>
              <li>
                <Link to="/servicios/decorativo" className="text-sm text-apple-text hover:text-apple-blue transition-colors">
                  Diseño de Interiores
                </Link>
              </li>
              <li>
                <Link to="/servicios/parkings" className="text-sm text-apple-text hover:text-apple-blue transition-colors">
                  Comunidades
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Enlaces rápidos */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-apple-text-secondary mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/precios" className="text-sm text-apple-text hover:text-apple-blue transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-sm text-apple-text hover:text-apple-blue transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-apple-text hover:text-apple-blue transition-colors">
                  Artículos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-apple-text hover:text-apple-blue transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div className="space-y-4 font-medium">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-apple-text-secondary mb-6">Contacto</h4>
            <p className="text-sm text-apple-text">900 123 456</p>
            <p className="text-sm text-apple-text">hola@todoepoxi.es</p>
            <div className="pt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-bold text-apple-text uppercase tracking-tighter">
                Servicio Nacional
              </span>
            </div>
          </div>
        </div>

        {/* Localidades / SEO SEO Sections */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-apple-text-secondary mb-8 text-center md:text-left">
            Presupuesto de Resina Epoxi en tu Provincia
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-8">
            {provincias.map((provincia) => (
              <Link
                key={provincia.id}
                to={`/${provincia.slug}`}
                className="text-[12px] text-apple-text-secondary hover:text-apple-blue transition-colors"
              >
                Suelos Epoxi en {provincia.nombre}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-[12px] text-apple-text-secondary gap-4">
          <p>&copy; 2026 TodoEpoxi. La marca del epoxi profesional.</p>
          <div className="flex space-x-6">
            <Link to="/privacidad" className="hover:text-apple-text transition-colors">Privacidad</Link>
            <Link to="/cookies" className="hover:text-apple-text transition-colors">Cookies</Link>
            <Link to="/legal" className="hover:text-apple-text transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
