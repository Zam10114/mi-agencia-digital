export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Nombre / Logo de agencia */}
        <a href="#" className="text-xl font-bold text-white tracking-tight">
          Mi<span className="text-indigo-500">Agencia</span>
        </a>

        {/* Enlaces de navegación */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#servicios" className="hover:text-white transition">Servicios</a>
          <a href="#portafolio" className="hover:text-white transition">Portafolio</a>
          <a href="#contacto" className="hover:text-white transition">Contacto</a>
        </nav>

        {/* Botón CTA rápido */}
        <a 
          href="#contacto" 
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
        >
          Cotizar ahora
        </a>
      </div>
    </header>
  )
}
