export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700 mb-6">
          Enterprise Web Engineering
        </span>
        <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
          Custom-built web solutions for the enterprise
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          React Partners designs and engineers scalable, high-performance
          applications tailored to the way your business actually works.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-700 transition"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="rounded-lg border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
}
