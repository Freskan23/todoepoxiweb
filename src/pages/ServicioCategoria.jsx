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
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={servicio.heroImage}
                        alt={servicio.titulo}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        {servicio.titulo}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        {servicio.descripcion}
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-apple-bg">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        {servicio.ventajas.map((ventaja, index) => (
                            <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 transition-hover duration-300 hover:shadow-md">
                                <div className="w-12 h-12 bg-apple-text text-white rounded-2xl flex items-center justify-center mb-6">
                                    <span className="font-bold">{index + 1}</span>
                                </div>
                                <p className="text-lg text-apple-text font-medium leading-relaxed">
                                    {ventaja}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <h2 className="text-3xl font-bold text-apple-text mb-16 text-center">Portfolio de Proyectos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {servicio.items.map((item, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-[2.5rem] aspect-video">
                                <img
                                    src={item.image}
                                    alt={item.titulo}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.titulo}</h3>
                                    <Link to="/contacto" className="text-white/80 hover:text-white underline underline-offset-4">
                                        Solicitar diseño similar
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-apple-text mb-8">Personalice su espacio</h2>
                    <p className="text-xl text-apple-text-secondary mb-12">
                        Cada pieza y superficie es única. Contacte con nuestros especialistas para empezar a diseñar su proyecto a medida.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contacto" className="bg-apple-text text-white px-10 py-4 rounded-full font-semibold hover:bg-black transition-all">
                            Presupuesto Sin Compromiso
                        </Link>
                        <a href="tel:900123456" className="border border-gray-200 text-apple-text px-10 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all">
                            Llamar ahora
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicioCategoria;
