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
            Artesanía en Resina Epoxi
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight-apple text-apple-text mb-8 text-balance animate-fade-in-down">
            Donde el arte encuentra <br className="hidden md:block" />
            la funcionalidad.
          </h1>
          <p className="text-xl md:text-2xl text-apple-text-secondary mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
            Creamos superficies únicas en resina epoxi: desde suelos continuos hasta mesas río y obras de arte de gran formato.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contacto" className="bg-apple-text text-white hover:bg-black font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:scale-105">
              Solicitar Presupuesto
            </Link>
            <Link to="/servicios" className="group text-apple-text font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
              Ver galería de proyectos <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight-apple text-apple-text mb-4">
              Del funcionalismo al arte.
            </h2>
            <p className="text-lg text-apple-text-secondary leading-relaxed">
              Transformamos espacios y creamos piezas únicas que combinan belleza visual con durabilidad excepcional.
            </p>
          </div>
          <Link to="/servicios" className="text-apple-blue font-medium hover:underline flex items-center gap-1">
            Ver todos los servicios <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Suelos - Hero style */}
          <div className="md:col-span-8 group relative bg-apple-bg rounded-[2.5rem] overflow-hidden min-h-[500px] transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 transition-transform duration-[5s] group-hover:scale-110">
              <img src="/images/portfolio/suelos-1.png" alt="Suelos de Resina Epoxi" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-12 left-12 text-white right-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-apple-blue"></span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80 block">Pavimentos de Élite</span>
              </div>
              <h3 className="text-4xl font-semibold mb-4 leading-tight">Ingeniería de Suelos Continuos</h3>
              <p className="max-w-md text-white/70 text-base leading-relaxed mb-8 font-light">
                Superficies monolíticas que fusionan la estética del arte con la durabilidad de la industria.
              </p>
              <Link to="/servicios/suelos-epoxi" className="bg-white text-apple-text px-8 py-3.5 rounded-full text-sm font-bold inline-block hover:bg-apple-blue hover:text-white transition-all shadow-xl">
                Explorar Soluciones
              </Link>
            </div>
          </div>

          {/* Encimeras */}
          <div className="md:col-span-4 group relative bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden min-h-[500px] transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 transition-transform duration-[5s] group-hover:scale-110">
              <img src="/images/servicios/encimeras-hero.png" alt="Encimeras Epoxi" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-2xl font-semibold mb-4">Encimeras de Diseño</h3>
              <Link to="/servicios/encimeras-epoxi" className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                Ver series exclusivas <span>→</span>
              </Link>
            </div>
          </div>

          {/* Mesas */}
          <div className="md:col-span-6 group relative bg-apple-bg rounded-[2.5rem] overflow-hidden min-h-[450px] transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 transition-transform duration-[5s] group-hover:scale-110">
              <img src="/images/portfolio/mesas-1.png" alt="Mesas de Resina" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-semibold mb-3">Mobiliario de Autor</h3>
              <p className="max-w-xs text-white/70 text-sm mb-6 font-light">Mesas río forjadas en maderas nobles y resina cristalina.</p>
              <Link to="/servicios/mesas-resina" className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-white hover:text-black transition-all">
                Piezas Disponibles
              </Link>
            </div>
          </div>

          {/* Arte */}
          <div className="md:col-span-6 group relative bg-black rounded-[2.5rem] overflow-hidden min-h-[450px] transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 opacity-70 transition-transform duration-[5s] group-hover:scale-110">
              <img src="/images/portfolio/arte-1.png" alt="Arte en Resina" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 p-12 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-semibold text-white mb-4">Arte Mural 3D</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 font-light max-w-sm">
                Geodas y oleajes marinos con profundidad real para interiores que respiran.
              </p>
              <Link to="/servicios/arte-resina" className="text-apple-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Descubra la colección <span className="text-xl">→</span>
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
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <h3 className="text-2xl font-semibold text-apple-text tracking-tight-apple">Diseño Personalizado</h3>
              <p className="text-apple-text-secondary leading-relaxed">
                Cada proyecto es único. Trabajamos contigo para crear superficies y piezas que reflejen tu visión artística.
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-apple-text">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold text-apple-text tracking-tight-apple">Calidad Garantizada</h3>
              <p className="text-apple-text-secondary leading-relaxed">
                Utilizamos resinas epoxi de máxima calidad con certificación europea. Garantía de 10 años en todos nuestros trabajos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-apple-text">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold text-apple-text tracking-tight-apple">Acabados Profesionales</h3>
              <p className="text-apple-text-secondary leading-relaxed">
                Desde superficies ultra-brillantes con efecto espejo hasta acabados mate sedosos. Cada detalle importa.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="bg-apple-bg py-32 px-6" >
        <div className="max-w-4xl mx-auto rounded-[3rem] bg-white p-12 md:p-24 text-center shadow-sm border border-gray-100">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight-apple text-apple-text mb-8">
            Dale vida a tu proyecto.
          </h2>
          <p className="text-xl text-apple-text-secondary mb-12">
            Nuestros especialistas en resina epoxi te ayudarán a materializar tu visión. Consulta gratuita sin compromiso.
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
