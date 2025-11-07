import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#03091F] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="mb-8 flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
          <img src="/Logo_odec.png" alt="ODEC" className="h-16 w-auto" />

          <div className="flex flex-col items-center gap-3 text-center md:items-end md:text-right">
            <p className="text-sm font-semibold text-white">
              This is an initiative of{' '}
              <a
                href="https://cosmeon.in"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-white/50 underline-offset-2 transition hover:decoration-white"
              >
                COSMEON Space Technologies Pvt. Ltd.
              </a>
            </p>
            <a
              href="https://www.linkedin.com/company/orbitaldataethicscouncil"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white transition hover:border-white"
            >
              <Linkedin className="h-4 w-4" />
              Follow us on LinkedIn
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Orbital Data Ethics Council. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
