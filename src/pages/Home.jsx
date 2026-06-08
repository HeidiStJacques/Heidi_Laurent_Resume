import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import DataAnalyticsProjects from "../components/DataAnalysisProjects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DataAnalyticsProjects />
        <Contact />
      </main>

      <Footer />

    </div>
  )
}
