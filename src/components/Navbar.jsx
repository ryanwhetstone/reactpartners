import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
          React<span className="text-indigo-600">Partners</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <li><Link to="/about" className="hover:text-indigo-600 transition">About</Link></li>
          <li><Link to="/#services" className="hover:text-indigo-600 transition">Services</Link></li>
          <li><Link to="/#approach" className="hover:text-indigo-600 transition">Approach</Link></li>
          <li><Link to="/#contact" className="hover:text-indigo-600 transition">Contact</Link></li>
        </ul>
        <Link
          to="/#contact"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition"
        >
          Get a Quote
        </Link>
      </nav>
    </header>
  );
}
