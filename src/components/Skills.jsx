export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <p>React, Vite, HTML, CSS, Tailwind</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Backend</h3>
            <p>Python, Django, REST APIs</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Database</h3>
            <p>PostgreSQL, SQL</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Data Analytics</h3>
            <p>
              Power BI, Excel, Data Visualization,
              Data Cleaning, Reporting, Healthcare Analytics
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
