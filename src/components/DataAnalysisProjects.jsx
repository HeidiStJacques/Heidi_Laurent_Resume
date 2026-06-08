export default function DataAnalyticsProjects() {
  const analyticsProjects = [
    {
      title: "Kickstarter Campaign Success Analysis",
      description:
        "Imported, cleaned, and analyzed 378,661 Kickstarter campaign records using PostgreSQL and SQL. Built a Power BI dashboard to evaluate campaign outcomes, funding goals, and category trends, revealing that projects with lower funding goals were significantly more likely to succeed.",
      tech: ["PostgreSQL", "SQL", "Power BI", "Data Visualization"],
      status: "Completed",
      highlight: "Data Analytics Project",
      image: "/images/Kickstarter_Campaign_Success_Analysis.png",
      report: "/reports/Kickstarter_Campaign_Success_Analysis.pdf",
    },
    {
      title: "Hospital Readmission Risk Analysis",
      description:
        "Analyzed 101,766 diabetic patient encounters using PostgreSQL and SQL to identify factors associated with 30-day hospital readmissions. Built an interactive Power BI dashboard to evaluate readmission trends across age groups, hospital length of stay, diabetes medication use, and insulin treatment changes. Findings revealed that longer hospital stays and diabetes-related treatment complexity were associated with increased readmission risk.",
      tech: ["PostgreSQL", "SQL", "Power BI", "Healthcare Analytics"],
      status: "Completed",
      highlight: "Data Analytics Project",
      image: "/images/Hospital_Readmission_Risk_Analysis.png",
      report: "/reports/Hospital_Readmission_Risk_Analysis.pdf",
    },
    {
      title: "Medicare Healthcare Utilization & Spending Analysis",
      description:
        "Imported and analyzed Medicare beneficiary enrollment, inpatient claims, outpatient claims, and prescription drug event data using PostgreSQL and SQL. Built a multi-page Power BI dashboard to evaluate healthcare spending, service utilization, beneficiary demographics, and high-cost populations, revealing that outpatient services were the largest spending driver and that a small subset of beneficiaries accounted for a disproportionate share of total expenditures.",
      tech: ["PostgreSQL", "SQL", "Power BI", "Healthcare Analytics"],
      status: "Completed",
      highlight: "Data Analytics Project",
      images: [
        "/images/Medicare_Claims_1.png",
        "/images/Medicare_Claims_2.png",
        "/images/Medicare_Claims_3.png",
      ],
      report: "/reports/Medicare_Claims.pdf",
    },
    {
      title: "Healthcare Workforce Staffing Analysis",
      description:
        "Imported, cleaned, and analyzed nursing home staffing and quality data across 14,000+ U.S. facilities using PostgreSQL and SQL. Built a multi-page Power BI dashboard to evaluate staffing levels, facility performance, staffing mix, and compliance outcomes. Findings revealed that RN staffing hours are the strongest predictor of overall quality ratings, for-profit facilities accumulate significantly higher fines, and states like Kentucky and Texas carry the highest total penalty burdens.",
      tech: ["PostgreSQL", "SQL", "Power BI", "Healthcare Analytics"],
      status: "Completed",
      highlight: "Data Analytics Project",
      images: [
        "/images/Healthcare_workforce_1.png",
        "/images/Healthcare_workforce_2.png",
        "/images/Healthcare_workforce_3.png",
        "/images/Healthcare_workforce_4.png",
      ],
      report: "/reports/Healthcare_Workforce.pdf",
    },
  ]

  return (
    <section id="analytics" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-3">Data Analytics Projects</h2>

      <p className="text-gray-600 mb-10">
        Projects using SQL, PostgreSQL, Power BI, and data visualization to
        analyze real-world datasets and communicate business insights.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {analyticsProjects.map((project, index) => {
          const projectImages = project.images || [project.image]

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <h3 className="text-xl font-semibold flex flex-wrap items-center gap-2">
                {project.title}

                <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800">
                  {project.status}
                </span>

                {project.highlight && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {project.highlight}
                  </span>
                )}
              </h3>

              <div className="grid grid-cols-1 gap-3 mt-4 mb-4">
                {projectImages.map((img, imgIndex) => (
                  <a
                    key={imgIndex}
                    href={img}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${imgIndex + 1}`}
                      className="w-full rounded-lg border shadow-md hover:scale-[1.02] transition"
                    />
                  </a>
                ))}
              </div>

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

              <a
                href={project.report}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
              >
                View Full Report
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
