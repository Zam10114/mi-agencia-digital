import { useState } from 'react'

// 1. Base de datos local de tus proyectos (puedes editarlos con tus trabajos reales o demos)
const proyectosData = [
  {
    id: 1,
    titulo: "Plataforma de Gestión de Clientes",
    categoria: "Desarrollo Web",
    descripcion: "Aplicación web completa con panel administrativo, control de usuarios y reportes en tiempo real.",
    tecnologias: ["React", "Tailwind CSS", "Supabase"],
    enlace: "#contacto"
  },
  {
    id: 2,
    titulo: "Bot de Respuesta y Agendamiento",
    categoria: "Automatizacion",
    descripcion: "Flujo automatizado que califica prospectos desde formularios web y agenda citas en calendario sin intervención humana.",
    tecnologias: ["Python", "APIs", "Webhooks"],
    enlace: "#contacto"
  },
  {
    id: 3,
    titulo: "E-Commerce de Alto Rendimiento",
    categoria: "Desarrollo Web",
    descripcion: "Tienda en línea ultrarrápida optimizada para dispositivos móviles con pasarela de pagos integrada.",
    tecnologias: ["JavaScript", "HTML/CSS", "Stripe"],
    enlace: "#contacto"
  },
  {
    id: 4,
    titulo: "Sincronización de Inventario y Facturas",
    categoria: "Automatizacion",
    descripcion: "Conexión automática entre base de datos interna y sistema de facturación, reduciendo 15 horas semanales de trabajo manual.",
    tecnologias: ["Python", "PostgreSQL", "Automatización"],
    enlace: "#contacto"
  }
]

const categorias = ["Todos", "Desarrollo Web", "Automatizacion"]

export function Portfolio() {
  // 2. Estado para recordar qué botón de filtro está seleccionado
  const [filtroActivo, setFiltroActivo] = useState("Todos")

  // 3. Filtramos la lista antes de dibujarla en pantalla
  const proyectosFiltrados = filtroActivo === "Todos"
    ? proyectosData
    : proyectosData.filter((proyecto) => proyecto.categoria === filtroActivo)

  return (
    <section id="portafolio" className="bg-slate-950 text-white py-20 px-6 border-t border-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">
            Casos de Éxito
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Proyectos Destacados</h2>
          <p className="text-slate-400 mt-3">
            Explora algunas de las soluciones que hemos diseñado y automatizado
          </p>
        </div>

        {/* Botones de Filtro */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroActivo(categoria)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition cursor-pointer ${
                filtroActivo === categoria
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Cuadrícula de Proyectos Filtrados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectosFiltrados.map((proyecto) => (
            <div 
              key={proyecto.id}
              className="bg-slate-900/70 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between hover:border-indigo-500/50 transition"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-500/20 px-3 py-1 rounded-full">
                  {proyecto.categoria}
                </span>
                
                <h3 className="text-2xl font-bold mt-4 mb-3">{proyecto.titulo}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {proyecto.descripcion}
                </p>
              </div>

              <div>
                {/* Etiquetas de tecnologías (un .map dentro de otro .map) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs text-slate-300 bg-slate-950 border border-slate-800 px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={proyecto.enlace}
                  className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 transition"
                >
                  Solicitar un proyecto similar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
