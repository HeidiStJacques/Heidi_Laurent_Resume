export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold mb-10">Contact</h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Email */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Email</h3>

          <a
            href="mailto:heidi.lynn.laurent@gmail.com"
            className="text-[#007B94] hover:underline break-all"
          >
            heidi.lynn.laurent@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">GitHub</h3>

          <a
            href="https://github.com/HeidiStJacques"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007B94] hover:underline"
          >
            github.com/heidistjacques
          </a>
        </div>

        {/* LinkedIn */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/heidi-laurent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007B94] hover:underline"
          >
            linkedin.com/in/heidi-laurent
          </a>
        </div>

        {/* Resume */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Resume</h3>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007B94] hover:underline"
          >
            Download Resume
          </a>
        </div>

      </div>

    </section>
  )
}