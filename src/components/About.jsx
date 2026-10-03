import { useState } from "react";

const team = [
  {
    name: "Jude Stepaniak",
    role: "Chief Executive Officer",
    initials: "JS",
    image: "/jude-stepaniak.jpg",
  },
  {
    name: "Ryan Whetstone",
    role: "Chief Technology Officer",
    initials: "RW",
    image: "/ryan-whetstone.jpg",
  },
];

function TeamMember({ member }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <div className="mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full bg-slate-200">
        {member.image && !imgError ? (
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-slate-500">
            {member.initials}
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
      <p className="mt-1 text-sm text-indigo-600 font-medium">{member.role}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
            About us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            A partner in building enterprise software
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            React Partners is a team of senior engineers and strategists
            focused on custom web solutions that move enterprise businesses
            forward. We combine deep technical expertise with a
            partnership-first mindset.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
            Leadership
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
            {team.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
