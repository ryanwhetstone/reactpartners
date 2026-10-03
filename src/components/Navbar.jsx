export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900">
          React<span className="text-indigo-600">Partners</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <li><a href="#services" className="hover:text-indigo-600 transition">Services</a></li>
          <li><a href="#approach" className="hover:text-indigo-600 transition">Approach</a></li>
          <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
        </ul>
        <a
          href="#contact"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition"
        >
          Get a Quote
        </a>
      </nav>
    </header>
  );
}
