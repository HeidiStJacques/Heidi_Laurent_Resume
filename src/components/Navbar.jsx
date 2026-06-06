import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Name */}
        <h1 className="text-lg font-bold">Heidi Laurent</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#about" className="hover:text-[#007B94]">About</a>
          <a href="#skills" className="hover:text-[#007B94]">Skills</a>
          <a href="#projects" className="hover:text-[#007B94]">Projects</a>
          <a href="#contact" className="hover:text-[#007B94]">Contact</a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="hover:text-[#007B94]"
          >
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="/resume.pdf" target="_blank" onClick={() => setOpen(false)}>
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}