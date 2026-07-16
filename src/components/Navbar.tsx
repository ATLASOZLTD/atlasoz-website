import Link from "next/link";

export default function Navbar({ lang = "en" }: { lang?: "en" | "tr" }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">

      <div className="relative w-full px-8 h-16 flex items-center justify-center">

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white text-sm font-normal">

          <a
            href="#"
            className="hover:text-yellow-400 transition"
          >
            {lang === "tr" ? "Ana Sayfa" : "Home"}
          </a>

          <a
            href="#services"
            className="hover:text-yellow-400 transition"
          >
            {lang === "tr" ? "Hizmetler" : "Services"}
          </a>

          <a
            href="#about"
            className="hover:text-yellow-400 transition"
          >
            {lang === "tr" ? "Hakkımızda" : "About"}
          </a>

          <a
            href="#contact"
            className="hover:text-yellow-400 transition"
          >
            {lang === "tr" ? "İletişim" : "Contact"}
          </a>

        </nav>


        {/* Languages */}
        <div className="absolute right-6 flex items-center gap-3 text-sm whitespace-nowrap">

  <Link
    href="/"
    className={
      lang === "tr"
        ? "text-yellow-400 font-semibold"
        : "text-white/70 hover:text-white transition"
    }
  >
    TR
  </Link>

  <span className="text-white/30">|</span>

  <Link
    href="/en"
    className={
      lang === "en"
        ? "text-yellow-400 font-semibold"
        : "text-white/70 hover:text-white transition"
    }
  >
    EN
  </Link>

</div>

      </div>

    </header>
  );
}