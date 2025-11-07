// src/components/ContactSection.tsx
import { useState } from "react";

const ContactSection: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: replace with your API call
    setTimeout(() => {
      setLoading(false);
      alert("Thanks! We’ll be in touch.");
    }, 900);
  };

  return (
    <section id="contact" className="relative -mt-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-6 pb-20 pt-16 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-white/60">CONTACT</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Get in touch</h2>
          <p className="mt-3 text-white/70">
            Our team will contact you and help with all your questions.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">First name</label>
                <input
                  required
                  placeholder="Jane"
                  className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-teal-300/50"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Last name</label>
                <input
                  required
                  placeholder="Doe"
                  className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-teal-300/50"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Work email</label>
              <input
                type="email"
                required
                placeholder="jane@company.com"
                className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-teal-300/50"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Company size</label>
                <select
                  defaultValue=""
                  required
                  className="w-full appearance-none rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none transition focus:border-teal-300/50"
                >
                  <option value="" disabled className="bg-slate-900">Select company size</option>
                  <option className="bg-slate-900">1–10</option>
                  <option className="bg-slate-900">11–50</option>
                  <option className="bg-slate-900">51–200</option>
                  <option className="bg-slate-900">201–1000</option>
                  <option className="bg-slate-900">1000+</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Demo call</label>
                <select
                  defaultValue="no"
                  className="w-full appearance-none rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none transition focus:border-teal-300/50"
                >
                  <option value="no" className="bg-slate-900">No preference</option>
                  <option value="yes" className="bg-slate-900">Schedule a demo</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us briefly about your request"
                className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-teal-300/50"
              />
            </div>

            <button
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-900 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            <p className="text-center text-[11px] text-white/60">
              By contacting us you agree to our <a href="#" className="underline decoration-white/40">Terms</a> and{" "}
              <a href="#" className="underline decoration-white/40">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;