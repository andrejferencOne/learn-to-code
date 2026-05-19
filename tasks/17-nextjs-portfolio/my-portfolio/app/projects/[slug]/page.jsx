import Link from "next/link";
  import projects from "../../data/projects";

  export default async function ProjectDetail({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
      return (
        <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
          <h1>Project not found</h1>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-gray-950 text-white px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <Link href="/projects" className="text-blue-400 hover:underline mb-8 block">
            ← Back to Projects
          </Link>
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-400 text-lg mb-8">{project.description}</p>

          <h2 className="text-xl font-bold mb-3">Technologies</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
  
          <a
            href={project.github}
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            View on GitHub
          </a>
        </div>
      </div>
    );
  }
