import { useParams, Link } from 'react-router-dom';
import { servicios } from '../data/servicios';

const ServicioCategoria = () => {
    const { category } = useParams();
    const servicio = servicios.find(s => s.slug === category);

    if (!servicio) {
        return (
            <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
                    <Link to="/" className="text-blue-600 hover:underline">Volver al inicio</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Ultra Clean */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 scale-105 transition-transform duration-[3s] hover:scale-100">
                    <img
                        src={servicio.heroImage}
                        alt={servicio.titulo}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white"></div>
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-fade-in">
                        {servicio.subtitulo}
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 drop-shadow-2xl">
                        {servicio.titulo}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
                        {servicio.descripcion}
                    </p>
                </div>
            </section>

            {/* Overview & Specs Section */}
            <section className="py-32 relative overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold text-apple-text mb-8">Excelencia Técnica</h2>
                            <p className="text-lg text-apple-text-secondary leading-relaxed mb-12">
                                {servicio.historia}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {servicio.especificaciones.map((spec, idx) => (
                                    <div key={idx} className="border-l-2 border-apple-blue pl-6 py-2">
                                        <p className="text-xs uppercase tracking-widest text-apple-text-secondary font-bold mb-1">{spec.label}</p>
                                        <p className="text-lg font-semibold text-apple-text">{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src={servicio.items[0].image}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                alt="Detalle técnico"
                            />
                            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-6 py-3 rounded-2xl shadow-xl">
                                <p className="text-sm font-bold text-apple-text">Calidad Certificada</p>
                                <p className="text-[10px] text-apple-text-secondary">ISO 9001 / Grado Arquitectónico</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso Artesanal Section (Bento Style) */}
            <section className="py-32 bg-apple-bg">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-apple-text mb-4">El Proceso de Aplicación</h2>
                        <p className="text-apple-text-secondary text-lg">Rigurosidad técnica en cada milímetro de resina.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {servicio.proceso.map((step, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-xl group">
                                <span className="text-5xl font-black text-apple-bg group-hover:text-apple-blue/10 transition-colors block mb-6">{step.paso}</span>
                                <h3 className="text-xl font-bold text-apple-text mb-4">{step.titulo}</h3>
                                <p className="text-sm text-apple-text-secondary leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dense Portfolio Section */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <h2 className="text-4xl font-bold text-apple-text mb-4">Proyectos Destacados</h2>
                            <p className="text-apple-text-secondary">Una selección de nuestras piezas y superficies más exclusivas.</p>
                        </div>
                        <Link to="/galeria" className="text-apple-blue font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                            Ver Galería Completa <span>→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicio.items.map((item, index) => (
                            <div key={index} className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.titulo}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <span className="text-xs font-bold text-white/60 mb-2 uppercase tracking-widest">{item.tag}</span>
                                    <h3 className="text-xl font-bold text-white mb-6">{item.titulo}</h3>
                                    <Link to="/contacto" className="inline-flex items-center justify-center bg-white text-apple-text py-3 rounded-xl font-bold text-sm hover:bg-black hover:text-white transition-all">
                                        Solicitar Información
                                    </Link>
                                </div>
                            </div>
                        ))}

                        {/* Call to action Card inside grid */}
                        <div className="bg-apple-text rounded-[2rem] p-10 flex flex-col justify-between text-white">
                            <div>
                                <h3 className="text-3xl font-bold mb-4">¿Busca algo único?</h3>
                                <p className="text-white/70 leading-relaxed font-light">
                                    Personalizamos pigmentos, texturas y dimensiones para que el resultado sea exactamente como lo imagina.
                                </p>
                            </div>
                            <Link to="/contacto" className="bg-white text-apple-text py-4 rounded-2xl font-bold text-center hover:bg-white/90 transition-all">
                                Diseñar mi proyecto
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical FAQ / Warranty */}
            <section className="py-32 bg-black text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 blur-3xl bg-apple-blue rounded-full -mr-20 -mt-20"></div>
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold mb-8 italic">"Donde la química se convierte en arte."</h2>
                    <div className="w-24 h-1 bg-apple-blue mx-auto mb-12"></div>
                    <p className="text-xl text-white/70 mb-16 leading-relaxed max-w-3xl mx-auto font-light">
                        Nuestros materiales están formulados bajo estrictos estándares europeos, garantizando que su inversión mantenga su brillo y propiedades físicas durante décadas.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-12 text-left border-t border-white/10 pt-16">
                        <div>
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-apple-blue" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                                Resistencia UV
                            </h4>
                            <p className="text-sm text-white/50">Sistemas estabilizados que no amarillean ante la luz solar.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-apple-blue" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                                10 Años de Garantía
                            </h4>
                            <p className="text-sm text-white/50">Cobertura total sobre adherencia y decoloración.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-apple-blue" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                                Eco-Friendly
                            </h4>
                            <p className="text-sm text-white/50">Resinas libres de solventes y bajos en niveles de VOC.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicioCategoria;
