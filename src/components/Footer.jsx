export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} React Partners. All rights reserved.
        </p>
        <p className="text-sm">Custom enterprise web solutions.</p>
      </div>
    </footer>
  );
}
