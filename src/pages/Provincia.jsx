import { useParams, Link } from 'react-router-dom';
import { provincias } from '../data/provincias';

const Provincia = () => {
    const { slug } = useParams();
    const provincia = provincias.find(p => p.slug === slug);

    if (!provincia) {
        return (
            <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Página no encontrada</h1>
                    <Link to="/" className="text-blue-600 hover:underline">Volver al inicio</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
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
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                            Suelos de Resina Epoxi en {provincia.nombre}
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
                            Especialistas en pavimentos continuos de alta resistencia para {provincia.barrioCaro} y toda la provincia de {provincia.nombre}.
                        </p>
                        <Link
                            to="/contacto"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
                        >
                            Solicitar Presupuesto Gratis
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Expertos en Aplicación de Resina en {provincia.barrioCaro}
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                En TodoEpoxi ofrecemos soluciones personalizadas para cada tipo de proyecto en {provincia.nombre}.
                                Ya sea para un garaje privado en {provincia.barrioCaro}, una nave industrial o un local comercial,
                                nuestra resina epoxi garantiza durabilidad, estética y fácil mantenimiento.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Presupuestos sin compromiso en menos de 24h',
                                    'Acabados premium y personalizados',
                                    'Máxima resistencia al tráfico y productos químicos',
                                    'Aplicadores certificados con años de experiencia'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <img
                                src="/images/hero.png"
                                alt={`Suelos epoxi en ${provincia.nombre}`}
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl hidden md:block">
                                <p className="text-2xl font-bold">100%</p>
                                <p className="text-sm">Garantía de Calidad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-8">¿Tienes un proyecto en {provincia.nombre}?</h2>
                    <p className="text-xl text-gray-600 mb-10">
                        Trabajamos en todas las localidades de {provincia.nombre}, incluyendo {provincia.barrioCaro}.
                        Cuéntanos qué necesitas y te daremos la mejor solución técnica al mejor precio.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/contacto"
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition"
                        >
                            Contactar Ahora
                        </Link>
                        <a
                            href="tel:900123456"
                            className="bg-white text-gray-900 border border-gray-300 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition"
                        >
                            Llamar: 900 123 456
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Provincia;
