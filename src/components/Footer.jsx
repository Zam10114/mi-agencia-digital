export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 py-10 px-6 text-center text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Agencia Digital. Todos los derechos reservados.</p>
        <p className="text-slate-600">Desarrollo Web & Automatizaciones Inteligentes</p>
      </div>
    </footer>
  )
}
