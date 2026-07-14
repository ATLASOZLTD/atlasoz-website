import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">

      <div className="relative w-full px-8 h-16 flex items-center justify-center">

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white text-sm font-normal">

          <a
            href="#"
            className="hover:text-yellow-400 transition"
          >
            Home
          </a>

          <a
            href="#services"
            className="hover:text-yellow-400 transition"
          >
            Services
          </a>

          <a
            href="#about"
            className="hover:text-yellow-400 transition"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-yellow-400 transition"
          >
            Contact
          </a>

        </nav>

        {/* Languages */}
<div className="absolute right-6 flex items-center gap-3 text-sm whitespace-nowrap">

  <button
    className="text-yellow-400 font-semibold"
  >
    EN
  </button>

  <span className="text-white/30">|</span>

  <button
    className="text-white/70 hover:text-white transition"
  >
    TR
  </button>

</div>
      </div>

    </header>
  );
}