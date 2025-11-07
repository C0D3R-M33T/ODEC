const primaryLinks = [
  'Home',
  'About Us',
  'Why ODEC',
  'The Framework',
  'Publications',
  'Join Us',
  'Contact',
];

const utilityLinks = ['Search', 'Log In', 'Sign Up'];

const Navbar = () => {
  return (
    <header className="border-b border-white/20 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <img src="/Logo_odec.png" alt="ODEC" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-6 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/80">
            {utilityLinks.map((link) => (
              <a key={link} href="#" className="transition hover:text-white">
                {link}
              </a>
            ))}
          </div>
          <button className="md:hidden rounded border border-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white">
            Menu
          </button>
        </div>
        <div className="border-t border-white/10">
          <nav className="hidden lg:flex items-center justify-center gap-10 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
            {primaryLinks.map((link) => (
              <a
                key={link}
                href="#"
                className={`pb-1 transition ${
                  link === 'Home'
                    ? 'border-b-2 border-white text-white'
                    : 'border-b-2 border-transparent hover:border-white/40 hover:text-white'
                }`}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-4 border-t border-white/10 px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/80 lg:hidden">
        {primaryLinks.map((link) => (
          <a
            key={link}
            href="#"
            className={`pb-1 ${
              link === 'Home'
                ? 'border-b border-white text-white'
                : 'border-b border-transparent hover:border-white/40 hover:text-white'
            }`}
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
