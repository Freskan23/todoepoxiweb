import { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    tipoServicio: '',
    metrosCuadrados: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias! Nos pondremos en contacto contigo en menos de 24 horas.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-apple-text-secondary mb-4 block">Contacto</span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight-apple text-apple-text mb-6">
              Hablemos de su proyecto.
            </h1>
            <p className="text-xl text-apple-text-secondary">
              Reciba una consultoría técnica y presupuesto detallado sin compromiso.
            </p>
          </div>

          <div className="bg-apple-bg rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-apple-text ml-1 uppercase tracking-wider">Nombre completo</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full bg-white px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-apple-text ml-1 uppercase tracking-wider">Email institucional</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-apple-text ml-1 uppercase tracking-wider">Teléfono de contacto</label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full bg-white px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-apple-text ml-1 uppercase tracking-wider">Ubicación del proyecto</label>
                  <input
                    type="text"
                    name="ciudad"
                    required
                    value={formData.ciudad}
                    onChange={handleChange}
                    className="w-full bg-white px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                    placeholder="Ciudad o Provincia"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-apple-text ml-1 uppercase tracking-wider">Tipo de Servicio</label>
                  <select
                    name="tipoServicio"
                    required
                    value={formData.tipoServicio}
                    onChange={handleChange}
                    className="w-full bg-white px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all appearance-none"
                  >
                    <option value="">Seleccionar categoría</option>
                    <option value="industrial">Industrial Performance</option>
                    <option value="garaje">Garajes & Parkings</option>
                    <option value="decorativo">Epoxi Decorativo</option>
                    <option value="mantenimiento">Renovación & Mante.</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-apple-text ml-1 uppercase tracking-wider">Superficie aprox. (m²)</label>
                  <input
                    type="number"
                    name="metrosCuadrados"
                    value={formData.metrosCuadrados}
                    onChange={handleChange}
                    className="w-full bg-white px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                    placeholder="150"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-apple-text ml-1 uppercase tracking-wider">Requerimientos específicos</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-white px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                  placeholder="Describa brevemente las necesidades técnicas de su espacio..."
                ></textarea>
              </div>

              <div className="flex items-center gap-3 px-1">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                  id="privacidad"
                />
                <label htmlFor="privacidad" className="text-xs text-apple-text-secondary leading-snug">
                  He leído y acepto la política de tratamiento de datos personales conforme al RGPD.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-apple-text text-white font-semibold py-5 rounded-2xl hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                Solicitar Consultoría Técnica
              </button>
            </form>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-20 text-center">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-apple-text-secondary">Teléfono Directo</h4>
              <p className="text-lg font-semibold text-apple-text">900 123 456</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-apple-text-secondary">Email Profesional</h4>
              <p className="text-lg font-semibold text-apple-text">hola@todoepoxi.es</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-apple-text-secondary">Tiempo de Respuesta</h4>
              <p className="text-lg font-semibold text-apple-text">Menos de 24 horas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
