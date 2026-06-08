export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#007B94]">
            Developer Portfolio
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Heidi Laurent
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-8">
            Web development student building practical, secure software with a focus on
            real-world problem solving.
          </p>

          <p className="mt-4 text-base md:text-lg text-gray-600 leading-8">
            Currently building{" "}
            <span className="font-semibold text-gray-900">SocialBright</span>, a case management SaaS platform using React, Vite, Tailwind, Django, and PostgreSQL.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-xl bg-[#007B94] px-5 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-900 font-semibold hover:bg-gray-50 transition"
            >
              Contact Me
            </a>
            <a
              href="/Heidi_Laurent_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-[#007B94] px-5 py-3 text-white font-semibold hover:opacity-90 transition"
            >
            View Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (PHOTO)*/}
        <div className="flex justify-center md:justify-end">
          <img
            src="/Heidi_Headshot.png"
            alt="Heidi Laurent"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
