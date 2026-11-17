import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export function ContactForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [servicio, setServicio] = useState('Desarrollo Web')
  
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(null)

  const manejarEnvio = async (e) => {
    e.preventDefault()
    setEnviando(true)
    setError(null)

    const { error } = await supabase
      .from('leads')
      .insert([{ nombre, email, servicio }])

    setEnviando(false)

    if (error) {
      setError('Hubo un problema al enviar tus datos. Intenta de nuevo.')
      console.error(error)
    } else {
      setEnviado(true)
      setNombre('')
      setEmail('')
    }
  }

  return (
    <section id="contacto" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-lg mx-auto bg-slate-900/90 border border-slate-800 p-8 md:p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center tracking-tight">Hablemos de tu proyecto</h2>
        <p className="text-slate-400 text-center mt-3 mb-8 text-sm md:text-base">
          Déjanos tus datos y te contactaremos en menos de 24 horas.
        </p>

        {enviado ? (
          <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 p-6 rounded-xl text-center">
            <h3 className="text-xl font-bold mb-2">¡Solicitud recibida! 🚀</h3>
            <p className="text-sm text-emerald-300">Gracias por contactarnos. Revisaremos tu caso y te escribiremos pronto.</p>
            <button 
              onClick={() => setEnviado(false)}
              className="mt-5 text-sm font-medium underline text-emerald-400 hover:text-emerald-300 cursor-pointer"
            >
              Enviar otra consulta
            </button>
          </div>
        ) : (
          <form onSubmit={manejarEnvio} className="flex flex-col gap-5 text-left">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">Tu Nombre</label>
              <input
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej. Carlos Mendoza"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">Correo Electrónico</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="carlos@empresa.com"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">¿Qué necesitas?</label>
              <select
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              >
                <option value="Desarrollo Web">Desarrollo Web a Medida</option>
                <option value="Automatizacion">Automatización de Procesos</option>
                <option value="Ambos">Ambos / Sistema Completo</option>
              </select>
            </div>

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            <button
              type="submit"
              disabled={enviando}
              className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-semibold py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition cursor-pointer"
            >
              {enviando ? 'Enviando...' : 'Solicitar Asesoría Gratuita'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
