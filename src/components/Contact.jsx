export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let's build something that lasts
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Tell us about your project and we'll get back within one business day.
        </p>
        <a
          href="mailto:hello@reactpartners.com"
          className="mt-8 inline-block rounded-lg bg-indigo-500 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-400 transition"
        >
          hello@reactpartners.com
        </a>
      </div>
    </section>
  );
}
