export default function Projects() {
  const projects = [
    {
      title: "SocialBright",
      description:
        "HIPAA-compliant multi-tenant SaaS platform for case management, including care plans, documentation, and compliance workflows.",
      tech: ["React", "Vite", "Tailwind CSS", "Django", "PostgreSQL"],
      status: "In Progress",
      website: "https://www.socialbright.org",
    },
    {
      title: "Kubat Realty Website",
      description:
        "Real estate website in development with responsive design and planned MLS/IDX integration.",
      tech: ["React", "Tailwind CSS"],
      status: "In Progress",
      highlight: "Client Project",
      website: "https://www.kubatrealty.org",
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
      website: "https://www.transcendtechnology.org",
    },
    {
      title: "Resume Website",
      description:
        "Personal portfolio website showcasing projects, skills, and contact information.",
      tech: ["React", "Tailwind CSS"],
      status: "Completed",
      website: "https://www.heidilaurent.com",
    },
    {
      title: "Effortless Task Manager",
      description:
        "Desktop app for professionals who work with people, helping them track client-related tasks, follow-ups, and day-to-day responsibilities in one place.",
      tech: ["Electron", "React", "Tailwind CSS"],
      status: "Completed",
      highlight: "Desktop Productivity App",
    },
    {
      title: "Client Scheduler",
      description:
        "Desktop scheduling application for professionals who work with clients, designed to manage appointments, confirm bookings, and keep notes or comments all in one simple workflow.",
      tech: ["Electron", "React", "Tailwind CSS"],
      status: "Completed",
      highlight: "Desktop Scheduling App",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold">Projects</h2>

          <p className="mt-3 max-w-3xl text-gray-600">
            Software, web development, and desktop application projects built
            with React, Tailwind CSS, Django, PostgreSQL, Electron, and related
            technologies.
          </p>
        </div>

        <a
          href="#analytics"
          className="inline-flex w-fit items-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
        >
          View Analytics Projects →
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border flex flex-col"
          >
            <div className="flex flex-wrap gap-2 mb-3">
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
            </div>

            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="text-gray-600 mt-3 flex-grow">
              {project.description}
            </p>

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

            {project.website && (
              <div className="mt-5">
                <a
                  href={project.website}
                  target={project.website.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    project.website.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-[#007B94] font-semibold hover:underline"
                >
                  View Website →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
