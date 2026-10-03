const services = [
  {
    title: "Custom Web Applications",
    description:
      "Bespoke platforms engineered around your business, not the other way around.",
  },
  {
    title: "Enterprise Integrations",
    description:
      "Connect legacy systems, ERPs, and third-party APIs into one reliable pipeline.",
  },
  {
    title: "Design Systems",
    description:
      "Scalable component libraries that keep large teams fast and consistent.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Resilient infrastructure with CI/CD, observability, and zero-downtime deploys.",
  },
  {
    title: "Performance Engineering",
    description:
      "Sub-second loads and rock-solid stability under enterprise-scale traffic.",
  },
  {
    title: "Ongoing Support",
    description:
      "A long-term partner for maintenance, evolution, and continuous improvement.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
            What we do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Custom-built enterprise web solutions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We design and engineer digital products that hold up to the demands
            of large organizations.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-indigo-300 transition"
            >
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
