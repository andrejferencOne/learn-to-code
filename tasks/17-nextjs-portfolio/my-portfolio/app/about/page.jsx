 export default function About() {
    return (
      <div className="min-h-screen bg-gray-950 text-white px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-gray-400 text-lg mb-6">
            I'm Andrej, a 28-year-old self-taught web developer from Nitra, Slovakia. I started coding from scratch with one clear goal — to work remotely and build a life on my own
  terms.
          </p>
          <p className="text-gray-400 text-lg mb-10">
            My background in design and graphics gives me an eye for detail that goes beyond just writing code. I care about how things look and feel, not just how they work.
          </p>

          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3 mb-10">
            {["HTML", "CSS", "JavaScript", "React", "Next.js", "Git", "REST APIs", "Figma"].map((skill) => (
              <span key={skill} className="bg-blue-900 text-blue-300 px-4 py-2 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-400 text-lg mb-6">
            I started from zero — first HTML tag, first CSS style, first JavaScript function. Task by task I worked through fundamentals, APIs, React, and finally Next.js and
  deployment.
          </p>
          <p className="text-gray-400 text-lg">
            Every project in my portfolio is something I built myself. No shortcuts.
          </p>
        </div>
      </div>
    );
  }
