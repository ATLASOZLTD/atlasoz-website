import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Atlasöz | Welcome",
  description: "Industrial Automation & Engineering Solutions",
};

export default function QRPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-xl text-center">

        <Image
          src="/logo.png"
          alt="Atlasöz"
          width={220}
          height={70}
          className="mx-auto mb-8"
          priority
        />

        <h1 className="text-4xl font-bold text-slate-900">
          Welcome to Atlasöz Ltd
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Industrial Automation & Engineering Solutions
        </p>

        <div className="mt-10 flex flex-col gap-4">

          <Link
            href="/"
            className="rounded-xl bg-slate-900 text-white py-4 font-semibold transition hover:bg-slate-800"
          >
            Visit Website
          </Link>

          <a
            href="mailto:info@atlasoz.co.uk"
            className="rounded-xl border border-slate-300 py-4 font-semibold transition hover:bg-slate-100"
          >
            Email Us
          </a>

          <a
            href="tel:+447000000000"
            className="rounded-xl border border-slate-300 py-4 font-semibold transition hover:bg-slate-100"
          >
            Call Us
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-300 py-4 font-semibold transition hover:bg-slate-100"
          >
            LinkedIn
          </a>

        </div>
      </div>
    </main>
  );
}