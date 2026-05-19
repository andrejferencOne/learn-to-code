import Link from "next/link";
  import projects from "../data/projects";

  export default function Projects() {
    return (
      <div className="min-h-screen bg-gray-950 text-white px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-gray-400 mb-12">Things I built while learning to code.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <div className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition cursor-pointer">
                  {project.image && (
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
