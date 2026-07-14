import Image from "next/image";
import Navbar from "../components/Navbar";

export default async function Home() {
  
  return (
    <>
      <Navbar />

      <main className="relative z-10 text-white">
         
         <div className="fixed inset-0 -z-10">
  <img
    src="/london-bg.png"
    alt="London Background"
    className="w-full h-full object-cover"
  />
</div>

        {/* HERO */}
        <section className="relative min-h-[65vh] flex items-center justify-center text-center overflow-hidden pt-20">

          <div className="relative z-10 max-w-4xl px-6 -mt-56">

            <div className="flex justify-center mb-6 mt-15">
  <Image
    src="/atlas-logo.png"
    alt="Atlas OZ LTD"
    width={600}
    height={140}
    priority
    className="w-full max-w-[300px] h-auto"
  />
</div>

            <h1 className="text-xl md:text-2xl font-semibold leading-tight">
  Your Trusted Partner in the United Kingdom
</h1>

            <p className="mt-5 text-sm md:text-base text-white/80 max-w-xl mx-auto">
              Professional UK Visa Support, Citizenship Applications, Translation Services and Immigration Assistance.
            </p>

          </div>

        </section>

        {/* SERVICES */}
        <section
  id="services"
  className="relative z-10 max-w-7xl mx-auto px-6 py-2 -mt-8"
>
        

          <h2 className="text-xl md:text-2xl font-semibold text-center mb-3 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
  Our Services
</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="group bg-black/30 border border-yellow-500/25 rounded-2xl pt-0 px-6 pb-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-black/45 hover:border-yellow-400/40">

  <Image
    src="/services/visa.png"
    alt="Visa Support"
    width={64}
    height={64}
    className="object-contain mx-auto -mt-3 mb-0"
  />

  <h3 className="text-xl font-semibold mb-2 -mt-5 text-yellow-400">
  Visa Support
</h3>

  <p className="text-gray-300 text-sm leading-relaxed">
    Family Visa, Spouse Visa, Tourist Visa, Visitor Visa,
    Student Visa, ILR and Citizenship Applications.
  </p>

</div>

            <div className="group bg-black/30 border border-yellow-500/25 rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:bg-black/45 hover:border-yellow-400/40">

<Image
  src="/services/translation.png"
  alt="Translation"
  width={110}
  height={110}
  className="object-contain mx-auto -mt-7 mb-0"
/>

  <h3 className="text-xl font-semibold mb-2 -mt-1 text-yellow-400 text-center">
  Consecutive Interpreting
</h3>

  <p className="text-gray-300 text-sm leading-relaxed text-center">
    Professional English ⇄ Turkish translation
    and interpreting services.
  </p>

</div>

            <div className="group bg-black/30 border border-yellow-500/25 rounded-2xl pt-0 px-6 pb-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-black/45 hover:border-yellow-400/40">

  <Image
    src="/services/forms.png"
    alt="Form Assistance"
    width={75}
    height={75}
    className="object-contain mx-auto -mt-1"
  />

  <h3 className="text-xl font-semibold mb-2 -mt-2 text-yellow-400 text-center">
    Form Assistance
  </h3>

  <p className="text-gray-300 text-sm leading-relaxed text-center">
    Professional assistance with Home Office, DVLA, NHS, Council, Benefits and Companies House forms, ensuring accurate and stress-free applications.
  </p>

</div>

            <div className="group bg-black/30 border border-yellow-500/25 rounded-2xl pt-0 px-6 pb-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-black/45 hover:border-yellow-400/40">

  <Image
    src="/services/logistics.png"
    alt="Logistics"
    width={120}
    height={120}
    className="object-contain mx-auto -mt-1"
  />

  <h3 className="text-xl font-semibold mb-2 -mt-2 text-yellow-400 text-center">
  Logistics
</h3>

  <p className="text-gray-300 text-sm leading-relaxed text-center">
    International logistics and
    business support solutions.
  </p>

</div>

          </div>

        </section>

        {/* WHY CHOOSE US */}
        <section className="relative z-10 bg-black/30 py-24">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-3xl font-semibold text-center mb-10">
              Why Choose Atlas OZ?
            </h2>

            <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16">
              Reliable, professional and friendly support for individuals,
              families and businesses across the United Kingdom.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="group bg-black/30 border border-yellow-500/25 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-black/45 hover:border-yellow-400/40">

  <div className="text-5xl mb-4">🇬🇧</div>

  <h3 className="text-xl font-semibold mb-3 text-yellow-400">
    UK Experience
  </h3>

  <p className="text-gray-300 text-sm leading-relaxed">
    Years of practical experience living and working in the United Kingdom.
  </p>

</div>

              <div className="group bg-black/30 border border-yellow-500/25 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-black/45 hover:border-yellow-400/40">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">
  Visa Assistance
</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Guidance for visas, settlement,
                  citizenship and immigration matters.
                </p>
              </div>

              <div className="group bg-black/30 border border-yellow-500/25 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-black/45 hover:border-yellow-400/40">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">
  Translation Support
</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  English and Turkish interpreting and
                  translation assistance.
                </p>
              </div>

              <div className="group bg-black/30 border border-yellow-500/25 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-black/45 hover:border-yellow-400/40">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">
  Personal Service
</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Friendly, transparent and client-focused
                  support every step of the way.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* ABOUT */}
<section
  id="about"
  className="relative z-10 max-w-7xl mx-auto px-6 py-24"
>

  <div className="grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT - About */}
<div>

  <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">
    About Atlas OZ
  </p>

  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
    Supporting Your Journey in the UK
  </h2>


  {/* Text Card */}
  <div className="bg-black/30 border border-yellow-500/25 rounded-3xl p-10">

    <p className="text-gray-300 mb-6 leading-8">
      Atlas OZ LTD provides professional support for individuals,
      families and businesses across the United Kingdom.
    </p>

    <p className="text-gray-300 mb-6 leading-8">
      We assist with visa applications, citizenship requests,
      Indefinite Leave to Remain (ILR), passport applications,
      form completion, translation and interpreting services.
    </p>

    <p className="text-gray-300 leading-8">
      Our goal is to make complex processes easier to understand
      while providing reliable and professional guidance every step
      of the way.
    </p>

  </div>

</div>


    {/* RIGHT - Stats Card */}
    <div className="bg-black/30 border border-yellow-500/25 rounded-3xl p-10">

      <div className="grid grid-cols-2 gap-8">

        <div>
          <h3 className="text-4xl font-bold text-yellow-400">
            12+
          </h3>
          <p className="text-gray-300 mt-2">
            Years UK Experience
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-yellow-400">
            2
          </h3>
          <p className="text-gray-300 mt-2">
            Languages Supported
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-yellow-400">
            100%
          </h3>
          <p className="text-gray-300 mt-2">
            Client Focused
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-yellow-400">
            UK
          </h3>
          <p className="text-gray-300 mt-2">
            Based Service
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

        {/* CONTACT */}
        <section className="bg-yellow-500 text-black py-20">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-bold mb-4">
              Need Help With Your Application?
            </h2>

            <p className="text-lg mb-8">
              Contact Atlas OZ today for professional support.
            </p>

            <a
              href="https://wa.me/447393082943"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold"
            >
              WhatsApp Us
            </a>

          </div>

        </section>

      <section
  id="contact"
  className="max-w-7xl mx-auto px-6 py-24"
>

  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Contact Us
  </h2>


  <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-md border border-yellow-500/25 rounded-3xl p-10 text-center">


    {/* Contact Details */}

    <div className="space-y-8">


      {/* Phone */}

      <a
  href="tel:+447393082943"
  className="flex justify-center items-center gap-4 hover:opacity-80 transition"
>

  <Image
    src="/icons/phone.PNG"
    alt="Phone"
    width={28}
    height={28}
  />

  <div className="text-left">
    <h3 className="text-yellow-400 font-semibold">
      Phone
    </h3>

    <p className="text-white">
      +44 7393 082943
    </p>
  </div>

</a>



      {/* WhatsApp */}

      <a
  href="https://wa.me/447393082943"
  target="_blank"
  rel="noopener noreferrer"
  className="flex justify-center items-center gap-4 hover:opacity-80 transition"
>

  <Image
    src="/icons/whatsapp.png"
    alt="WhatsApp"
    width={28}
    height={28}
  />

  <div className="text-left">
    <h3 className="text-yellow-400 font-semibold">
      WhatsApp
    </h3>

    <p className="text-white">
      +44 7393 082943
    </p>
  </div>

</a>



      {/* Email */}

      <a
  href="mailto:info@atlasoz.co.uk"
  className="flex justify-center items-center gap-4 hover:opacity-80 transition"
>

  <Image
    src="/icons/email.PNG"
    alt="Email"
    width={28}
    height={28}
  />

  <div className="text-left">
    <h3 className="text-yellow-400 font-semibold">
      Email
    </h3>

    <p className="text-white">
      info@atlasoz.co.uk
    </p>
  </div>

</a>


    </div>



    {/* Divider */}

    <div className="border-t border-white/10 my-10"></div>



    {/* Follow Us */}

    <h3 className="text-xl font-semibold text-yellow-400 mb-8">
      Follow Us
    </h3>



    <div className="flex justify-center gap-10 flex-wrap">


      {/* Instagram */}

      <a
        href="https://instagram.com/atlasozltd"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-3 transition duration-300 hover:scale-110"
      >

        <Image
          src="/icons/instagram.png"
          alt="Instagram"
          width={36}
          height={36}
        />

        <span className="text-gray-300 text-sm">
          @atlasozltd
        </span>

      </a>



      {/* Facebook */}

      <a
  href="https://www.facebook.com/profile.php?id=61592017431957"
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col items-center gap-3 transition duration-300 hover:scale-110"
>

  <Image
    src="/icons/facebook.png"
    alt="Facebook"
    width={36}
    height={36}
  />

  <span className="text-gray-300 text-sm">
    ATLAS OZ LTD
  </span>

</a>



      {/* LinkedIn */}

      <a
        href="https://www.linkedin.com/in/atlas-oz-ltd-63a075421/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-3 transition duration-300 hover:scale-110"
      >

        <Image
          src="/icons/linkedin.png"
          alt="LinkedIn"
          width={36}
          height={36}
        />

        <span className="text-gray-300 text-sm">
          ATLAS OZ LTD
        </span>

      </a>


    </div>


  </div>


</section>

<footer className="border-t border-yellow-500/20 py-8 text-center text-gray-400">
  © 2026 Atlas OZ LTD. All Rights Reserved.
</footer>
{/* FLOATING WHATSAPP */}
<a
  href="https://wa.me/447393082943"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-xl flex items-center justify-center transition hover:scale-110 whatsapp-pulse"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="30"
    height="30"
    fill="white"
  >
    <path d="M16.04 3C8.84 3 3 8.74 3 15.82c0 2.52.74 4.98 2.14 7.09L3 29l6.31-2.07a13.18 13.18 0 0 0 6.73 1.84h.01c7.2 0 13.04-5.74 13.04-12.82C29.09 8.74 23.25 3 16.04 3zm7.59 18.1c-.32.89-1.88 1.68-2.59 1.78-.67.09-1.52.13-2.46-.16-.57-.18-1.29-.42-2.22-.82-3.91-1.69-6.45-5.63-6.65-5.9-.2-.27-1.59-2.09-1.59-3.98s.99-2.82 1.34-3.21c.35-.39.77-.49 1.02-.49.25 0 .51 0 .73.01.24.01.56-.09.88.66.32.75 1.08 2.58 1.18 2.77.1.19.16.42.03.68-.13.27-.19.43-.39.66-.19.22-.4.49-.57.65-.19.18-.38.37-.16.73.22.36.97 1.58 2.09 2.56 1.44 1.26 2.65 1.66 3.02 1.85.38.19.6.16.82-.1.22-.27.95-1.09 1.2-1.46.25-.37.51-.31.86-.19.35.12 2.24 1.04 2.62 1.23.38.19.63.28.73.43.1.15.1.86-.22 1.75z" />
  </svg>
</a>
      </main>
    </>
  );
}