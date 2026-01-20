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
          {/* Suelos - Hero style */}
          <div className="md:col-span-8 group relative bg-apple-bg rounded-3xl overflow-hidden min-h-[500px] transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <img src="/images/servicios/suelos-hero.png" alt="Suelos de Resina Epoxi" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-2 block">Premium Flooring</span>
              <h3 className="text-3xl font-semibold mb-4">Pavimentos Continuos</h3>
              <p className="max-w-sm text-white/80 text-sm leading-relaxed mb-6">
                Suelos sin juntas, ultra-resistentes y con acabados artísticos personalizados.
              </p>
              <Link to="/servicios/suelos-epoxi" className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full text-sm inline-block hover:bg-white hover:text-black transition-all">
                Ver Portfolio
              </Link>
            </div>
          </div>

          {/* Encimeras */}
          <div className="md:col-span-4 group relative bg-white border border-gray-100 rounded-3xl overflow-hidden min-h-[500px] transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <img src="/images/servicios/encimeras-hero.png" alt="Encimeras Epoxi" className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-2xl font-semibold mb-2">Encimeras de Lujo</h3>
              <Link to="/servicios/encimeras-epoxi" className="text-sm font-medium underline underline-offset-4">Efecto mármol y piedra</Link>
            </div>
          </div>

          {/* Mesas */}
          <div className="md:col-span-6 group relative bg-apple-bg rounded-3xl overflow-hidden min-h-[400px] transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <img src="/images/servicios/mesas-hero.png" alt="Mesas de Resina" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-2xl font-semibold mb-2">Mobiliario de Autor</h3>
              <p className="max-w-xs text-white/80 text-sm mb-4">Mesas río de madera noble y resina cristalina.</p>
              <Link to="/servicios/mesas-resina" className="text-sm font-medium underline underline-offset-4">Explorar piezas únicas</Link>
            </div>
          </div>

          {/* Arte */}
          <div className="md:col-span-6 group relative bg-black rounded-3xl overflow-hidden min-h-[400px] transition-all duration-500">
            <div className="absolute inset-0 opacity-60 transition-transform duration-700 group-hover:scale-105">
              <img src="/images/servicios/arte-hero.png" alt="Arte en Resina" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 p-10 h-full flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-2">Arte y Decoración</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Cuadros abstractos y geodas de gran formato con profundidad real.
              </p>
              <Link to="/servicios/arte-resina" className="text-white font-medium flex items-center gap-2">
                Ver galería de arte <span className="text-lg">→</span>
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
