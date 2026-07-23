import Image from "next/image";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATLAS OZ LTD | İngiltere Vize Desteği ve Tercüme Hizmetleri",
  description:
    "İngiltere vize başvuruları, ILR, vatandaşlık süreçleri, resmi belge desteği ve profesyonel tercüme hizmetleri konusunda destek.",
};
export default async function Home() {
  
  return (
    <>
      <Navbar lang="tr" />

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
  Birleşik Krallık'taki Güvenilir Çözüm Ortağınız
</h1>

            <p className="mt-5 text-sm md:text-base text-white/80 max-w-xl mx-auto">
              Profesyonel İngiltere Vize Desteği, Vatandaşlık Başvuruları, Tercümanlık Hizmetleri, Form Doldurma Desteği ve Göçmenlik Desteği.
            </p>

          </div>

        </section>

        {/* SERVICES */}
        <section
  id="services"
  className="relative z-10 max-w-7xl mx-auto px-6 py-2 -mt-8"
>
        

          <h2 className="text-xl md:text-2xl font-semibold text-center mb-3 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
  Hizmetlerimiz
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
  İngiltere Vize Desteği
</h3>

  <p className="text-gray-300 text-sm leading-relaxed">
    Aile Vizesi, Eş Vizesi, Turist Vizesi, Ziyaretçi Vizesi,
Öğrenci Vizesi, Süresiz Oturum (ILR) ve Vatandaşlık Başvuruları.
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
  Sözlü Tercümanlık
</h3>

  <p className="text-gray-300 text-sm leading-relaxed text-center">
    Profesyonel İngilizce ⇄ Türkçe çeviri
ve sözlü tercümanlık hizmetleri.
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
    Form Doldurma Desteği
  </h3>

  <p className="text-gray-300 text-sm leading-relaxed text-center">
    Home Office, DVLA, NHS, Belediye, Yardımlar ve Companies House
formlarında profesyonel destek sağlayarak doğru ve sorunsuz başvurular yapmanıza yardımcı oluyoruz.
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
  Lojistik
</h3>

  <p className="text-gray-300 text-sm leading-relaxed text-center">
    Uluslararası lojistik ve
iş destek çözümleri.
  </p>

</div>

          </div>

        </section>

        {/* WHY CHOOSE US */}
        <section className="relative z-10 bg-black/30 py-24">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-3xl font-semibold text-center mb-10">
              Neden Atlas OZ?
            </h2>

            <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16">
              Birleşik Krallık genelinde bireyler, aileler ve işletmeler için
güvenilir, profesyonel ve çözüm odaklı destek sağlıyoruz.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="group bg-black/30 border border-yellow-500/25 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-black/45 hover:border-yellow-400/40">

  <div className="text-5xl mb-4">🇬🇧</div>

  <h3 className="text-xl font-semibold mb-3 text-yellow-400">
    İngiltere Deneyimi
  </h3>

  <p className="text-gray-300 text-sm leading-relaxed">
    Birleşik Krallık'ta yaşam ve çalışma deneyimimizle
profesyonel destek sunuyoruz.
  </p>

</div>

              <div className="group bg-black/30 border border-yellow-500/25 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-black/45 hover:border-yellow-400/40">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">
  Vize Desteği
</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Vize başvuruları, yerleşim,
vatandaşlık ve göçmenlik süreçlerinde rehberlik ediyoruz.
                </p>
              </div>

              <div className="group bg-black/30 border border-yellow-500/25 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-black/45 hover:border-yellow-400/40">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">
  Tercümanlık Desteği
</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  İngilizce ve Türkçe sözlü tercümanlık
ve çeviri desteği sağlıyoruz.
                </p>
              </div>

              <div className="group bg-black/30 border border-yellow-500/25 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-black/45 hover:border-yellow-400/40">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">
  Kişisel Hizmet
</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Her adımda samimi, şeffaf ve
müşteri odaklı destek sunuyoruz.
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

  <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4 text-center">
    Atlas OZ Hakkında
  </p>

  <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-white">
    İngiltere Yolculuğunuzda Yanınızdayız
  </h2>

  <div className="grid lg:grid-cols-3 gap-8 items-start">

    {/* Şirket Hakkında */}
    <div className="bg-black/30 backdrop-blur-md border border-yellow-500/25 rounded-3xl p-8 h-full">

      <h3 className="text-2xl font-bold text-yellow-400 mb-6">
        Atlas OZ Hakkında
      </h3>

      <p className="text-gray-300 leading-8 mb-5">
        Atlas OZ LTD, Birleşik Krallık genelinde bireyler, aileler ve
        işletmeler için profesyonel destek hizmetleri sunmaktadır.
      </p>

      <p className="text-gray-300 leading-8 mb-5">
        Vize başvuruları, vatandaşlık işlemleri, Süresiz Oturum (ILR),
        pasaport başvuruları, form doldurma, tercümanlık ve çeviri
        hizmetlerinde idari destek sağlıyoruz.
      </p>

      <p className="text-gray-300 leading-8">
        Amacımız karmaşık süreçleri daha anlaşılır hale getirerek
        müşterilerimize güvenilir ve profesyonel destek sunmaktır.
      </p>

    </div>

    {/* Hizmet Kapsamı */}
    <div className="bg-black/30 backdrop-blur-md border border-yellow-500/25 rounded-3xl p-8 h-full">

      <h3 className="text-2xl font-bold text-yellow-400 mb-6">
        Hizmet Kapsamımız
      </h3>

      <p className="text-gray-300 leading-7 mb-4">
        ATLAS OZ LTD, göçmenlik danışmanlığı veya hukuki danışmanlık
        hizmeti sunmamaktadır.
      </p>

      <p className="text-gray-300 leading-7 mb-4">
        Hizmetlerimiz yalnızca müşterilerimizin tercih ettiği başvuru
        türü ve sağladıkları bilgiler doğrultusunda idari destek
        sağlamaya yöneliktir.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-300">

        <li>Başvuru formlarının hazırlanması</li>

        <li>Belgelerin düzenlenmesi</li>

        <li>İngilizce ↔ Türkçe tercümanlık</li>

        <li>Form ve belge desteği</li>

        <li>Uluslararası lojistik desteği</li>

      </ul>

      <p className="text-gray-300 leading-7 mt-5">
        Başvurularla ilgili tüm kararlar ve sağlanan bilgilerin
        doğruluğu müşterilerimize aittir.
      </p>

    </div>

    {/* İstatistikler */}
    <div className="bg-black/30 backdrop-blur-md border border-yellow-500/25 rounded-3xl p-8">

      <div className="grid grid-cols-2 gap-8">

        <div>
          <h3 className="text-4xl font-bold text-yellow-400">12+</h3>
          <p className="text-gray-300 mt-2">
            Yıllık İngiltere Deneyimi
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-yellow-400">2</h3>
          <p className="text-gray-300 mt-2">
            Desteklenen Diller
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-yellow-400">100%</h3>
          <p className="text-gray-300 mt-2">
            Müşteri Odaklı
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-yellow-400">UK</h3>
          <p className="text-gray-300 mt-2">
            İngiltere Merkezli Hizmet
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
              Başvurunuz İçin Desteğe mi İhtiyacınız Var?
            </h2>

            <p className="text-lg mb-8">
              Profesyonel destek almak için bugün Atlas OZ ile iletişime geçin.
            </p>

            <a
              href="https://wa.me/447393082943"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold"
            >
              WhatsApp'tan Bize Ulaşın
            </a>

          </div>

        </section>

      <section
  id="contact"
  className="max-w-7xl mx-auto px-6 py-24"
>

  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Bize Ulaşın
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
      Telefon
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
    src="/icons/whatsapp.PNG"
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
      E-posta
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
      Bizi Takip Edin
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
          src="/icons/instagram.PNG"
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
    src="/icons/facebook.PNG"
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
          src="/icons/linkedin.PNG"
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
  © 2026 Atlas OZ LTD. Tüm Hakları Saklıdır.
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