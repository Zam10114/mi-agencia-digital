const listaServicios = [
  {
    id: 1,
    titulo: "Desarrollo Web a Medida",
    descripcion: "Sitios web ultrarrápidos, responsivos y optimizados para convertir visitantes en clientes reales.",
    icono: "🌐"
  },
  {
    id: 2,
    titulo: "Automatización de Procesos",
    descripcion: "Conectamos tus herramientas y eliminamos tareas manuales repetitivas para ahorrarte decenas de horas al mes.",
    icono: "⚡"
  },
  {
    id: 3,
    titulo: "Sistemas e Integraciones",
    descripcion: "Bases de datos seguras, paneles administrativos y conexiones con APIs para centralizar tu operación.",
    icono: "⚙️"
  }
]

export function Services() {
  return (
    <section id="servicios" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
          <p className="text-slate-400 mt-4">Soluciones tecnológicas diseñadas para impulsar tu crecimiento</p>
        </div>

        {/* Cuadrícula de tarjetas generada dinámicamente */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listaServicios.map((servicio) => (
            <div 
              key={servicio.id} 
              className="bg-slate-950 border border-slate-800 p-8 rounded-xl hover:border-indigo-500 transition"
            >
              <div className="text-4xl mb-4">{servicio.icono}</div>
              <h3 className="text-xl font-bold mb-3">{servicio.titulo}</h3>
              <p className="text-slate-400 leading-relaxed">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
