import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-24 pb-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pavimentos de Resina Epoxi en Toda España
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Instalación profesional de suelos epoxi para garajes, naves industriales y espacios comerciales.
                <span className="font-semibold"> Desde 18€/m²</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacto" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Presupuesto Gratis 24h
                </Link>
                <Link to="/servicios" className="btn-secondary border-white text-white hover:bg-white/10">
                  Ver Servicios
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  15+ años experiencia
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Garantía 10 años
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">¿Por qué elegir TodoEpoxi?</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Instaladores certificados y con experiencia
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Materiales de primera calidad
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Presupuesto sin compromiso en 24h
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cobertura en toda España
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones profesionales de pavimento epoxi para todo tipo de espacios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Garajes y Parkings</h3>
              <p className="text-gray-600 mb-4">
                Suelos resistentes y duraderos para garajes particulares y comunitarios.
              </p>
              <Link to="/servicios/garajes" className="text-primary-600 font-semibold hover:text-primary-700">
                Ver más →
              </Link>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Pavimentos Industriales</h3>
              <p className="text-gray-600 mb-4">
                Soluciones para naves, almacenes y espacios de alta resistencia.
              </p>
              <Link to="/servicios/industrial" className="text-primary-600 font-semibold hover:text-primary-700">
                Ver más →
              </Link>
            </div>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Epoxi Decorativo</h3>
              <p className="text-gray-600 mb-4">
                Diseños personalizados para locales comerciales y viviendas.
              </p>
              <Link to="/servicios/decorativo" className="text-primary-600 font-semibold hover:text-primary-700">
                Ver más →
              </Link>
            </div>
          </div>

          {/* Servicio 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-br from-green-500 to-green-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Instalación Profesional</h3>
              <p className="text-gray-600 mb-4">
                Aplicación experta con materiales de primera calidad.
              </p>
              <Link to="/servicios" className="text-primary-600 font-semibold hover:text-primary-700">
                Ver más →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas Section */}
      <section className="bg-gray-50 section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ventajas del Pavimento Epoxi
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Alta Resistencia</h3>
            <p className="text-gray-600">
              Soporta tráfico intenso, impactos y cargas pesadas sin deteriorarse.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Larga Duración</h3>
            <p className="text-gray-600">
              Vida útil de más de 20 años con el mantenimiento adecuado.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Fácil Limpieza</h3>
            <p className="text-gray-600">
              Superficie lisa e impermeable, fácil de limpiar y mantener.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-container">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para transformar tu espacio?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Solicita tu presupuesto gratuito y sin compromiso en menos de 24 horas
          </p>
          <Link to="/contacto" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Solicitar Presupuesto Gratis
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
