const steps = [
  {
    title: "Discover",
    description: "We map your goals, constraints, and systems before writing code.",
  },
  {
    title: "Design & Build",
    description: "Iterative delivery in tight loops with full transparency.",
  },
  {
    title: "Scale & Support",
    description: "Launch, optimize, and evolve with a partner you can rely on.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
            How we work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            A pragmatic, partnership-first approach
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
