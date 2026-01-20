import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase bg-black text-white rounded-full animate-fade-in-up">
            Elite Epoxy Systems
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight-apple text-apple-text mb-8 text-balance animate-fade-in-down">
            La perfección se mide <br className="hidden md:block" />
            en milímetros de resina.
          </h1>
          <p className="text-xl md:text-2xl text-apple-text-secondary mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
            Creamos pavimentos de alto rendimiento que transforman espacios industriales y comerciales en obras maestras de durabilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contacto" className="bg-apple-text text-white hover:bg-black font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:scale-105">
              Presupuesto Express
            </Link>
            <Link to="/servicios" className="group text-apple-text font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
              Explorar colecciones <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight-apple text-apple-text mb-4">
              Ingeniería de superficies.
            </h2>
            <p className="text-lg text-apple-text-secondary leading-relaxed">
              Cada proyecto es una solución a medida, diseñada para resistir el tiempo y el uso más exigente.
            </p>
          </div>
          <Link to="/servicios" className="text-apple-blue font-medium hover:underline flex items-center gap-1">
            Ver todas las soluciones <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Service - Industrial */}
          <div className="md:col-span-8 group relative bg-apple-bg rounded-3xl overflow-hidden min-h-[500px] transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <img src="/images/industrial.png" alt="Industrial" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-2 block">Premium Performance</span>
              <h3 className="text-3xl font-semibold mb-4">Pavimentos Industriales</h3>
              <p className="max-w-sm text-white/80 text-sm leading-relaxed mb-6">
                Sistemas multicapa diseñados para naves de logística y alta producción.
              </p>
              <Link to="/servicios/industrial" className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full text-sm inline-block hover:bg-white hover:text-black transition-all">
                Detalles técnicos
              </Link>
            </div>
          </div>

          {/* Side Service - Garajes */}
          <div className="md:col-span-4 group relative bg-white border border-gray-100 rounded-3xl overflow-hidden min-h-[500px] transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <img src="/images/garajes.png" alt="Garajes" className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-2xl font-semibold mb-2">Parkings de Lujo</h3>
              <Link to="/servicios/garajes" className="text-sm font-medium underline underline-offset-4">Ver serie doméstica</Link>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="md:col-span-4 group relative bg-apple-bg rounded-3xl overflow-hidden min-h-[300px] transition-all duration-500">
            <div className="p-10">
              <h3 className="text-xl font-semibold text-apple-text mb-4">Garantía Certificada</h3>
              <p className="text-apple-text-secondary text-sm leading-relaxed mb-6">
                10 años de cobertura total en adherencia y color. Materiales certificados por la UE.
              </p>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-apple-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 group relative bg-black rounded-3xl overflow-hidden min-h-[300px] transition-all duration-500">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-40">
              <img src="/images/decorativo.png" alt="Decorativo" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 p-10 max-w-md">
              <h3 className="text-2xl font-semibold text-white mb-4">Diseño Interior</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Minimalismo sin juntas. La elección predilecta para lofts modernos y espacios comerciales de diseño.
              </p>
              <Link to="/servicios/decorativo" className="text-white font-medium flex items-center gap-2">
                Ver portafolio <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section >

      {/* Values Section */}
      < section className="bg-white py-32 border-t border-gray-100" >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="space-y-6">
              <div className="text-apple-text">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold text-apple-text tracking-tight-apple">Química Avanzada</h3>
              <p className="text-apple-text-secondary leading-relaxed">
                Utilizamos fórmulas propias de bajo VOC que garantizan una dureza Shore superior y resistencia química extrema.
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-apple-text">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold text-apple-text tracking-tight-apple">Eficiencia de Ejecución</h3>
              <p className="text-apple-text-secondary leading-relaxed">
                Tiempos de curado optimizados. Entregamos superficies transitables en tiempo récord para minimizar su inactividad.
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-apple-text">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold text-apple-text tracking-tight-apple">Estética Impecable</h3>
              <p className="text-apple-text-secondary leading-relaxed">
                Más allá de la funcionalidad, buscamos la pureza visual. Colores sólidos perfectos y acabados de espejo.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="bg-apple-bg py-32 px-6" >
        <div className="max-w-4xl mx-auto rounded-[3rem] bg-white p-12 md:p-24 text-center shadow-sm border border-gray-100">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight-apple text-apple-text mb-8">
            Empiece su proyecto hoy.
          </h2>
          <p className="text-xl text-apple-text-secondary mb-12">
            Nuestros consultores técnicos están disponibles para una evaluación gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all">
              Hablar con un experto
            </Link>
            <a href="tel:900123456" className="bg-apple-bg text-apple-text px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all">
              Llamar gratis
            </a>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Home;
