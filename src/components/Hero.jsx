export function Hero() {
  return (
    <section className="bg-slate-950 text-white py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">
          Agencia de Tecnología y Automatización
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          Construimos sistemas web y automatizaciones que escalan tu negocio
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl mt-6">
          Dejamos atrás las tareas repetitivas y las páginas lentas. Creamos soluciones digitales modernas diseñadas para convertir visitantes en clientes.
        </p>

        <div className="mt-10">
          <a 
            href="#contacto" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-lg transition inline-block"
          >
            Cotizar mi proyecto
          </a>
        </div>
      </div>
    </section>
  )
}
