export default function Projects() {
  const projects = [
    {
      title: "SocialBright",
      description:
        "HIPAA-compliant multi-tenant SaaS platform for case management, including care plans, documentation, and compliance workflows.",
      tech: ["React", "Vite", "TailwindCSS", "Django", "PostgreSQL"],
      status: "In Progress",
    },
    {
      title: "Kubat Realty Website",
      description:
        "Real estate website in development with responsive design and planned MLS/IDX integration.",
      tech: ["React", "Tailwind CSS"],
      status: "In Progress",
      highlight: "Client Project",
    },
    {
      title: "DipVault",
      description:
        "Mobile app for tracking nail polish inventory, collections, and personal lookbook.",
      tech: ["React Native", "FastAPI", "PostgreSQL"],
      status: "In Progress",
    },
    {
      title: "Transcend Technology",
      description:
        "Company website showcasing services, branding, and technical capabilities.",
      tech: ["React", "Vite", "Responsive Design"],
      status: "Completed",
    },
    {
      title: "Resume Website",
      description:
        "Personal portfolio website showcasing projects, skills, and contact information.",
      tech: ["React", "Tailwind CSS"],
      status: "Completed",
    },
    {
      title: "Effortless Task Manager",
      description: 
        "Effortless Task Manager is a desktop app for professionals who work with people, helping them track client-related tasks, follow-ups, and day‑to‑day responsibilities in one place.",
      tech: ["Electron", "React", "Tailwind CSS"],
      status: "Completed",
      highlight: "Desktop Productivity App"
    },
    {
      title: "Client-Scheduler",
      description:
        "Desktop scheduling application for professionals who work with clients, designed to manage appointments, confirm bookings, and keep notes or comments all in one simple workflow.",
      tech: ["Electron", "React", "Tailwind CSS"],
      status: "Completed",
      highlight: "Desktop Scheduling App"
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border"
          >
            <h3 className="text-xl font-semibold flex flex-wrap items-center gap-2">
              {project.title}

              <span
                className={`text-xs px-2 py-1 rounded ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {project.status}
              </span>

              {project.highlight && (
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {project.highlight}
                </span>
              )}
            </h3>

            <p className="text-gray-600 mt-3">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}