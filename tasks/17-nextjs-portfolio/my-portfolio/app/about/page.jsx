export default function About() {
    return (
      <div className="min-h-screen bg-gray-950 text-white px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-gray-400 text-lg mb-10">
            I'm Andrej, a self-taught web developer from Slovakia. I started learning to code with one goal — to work remotely and live life on my own terms.
          </p>

          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3 mb-10">
            {["HTML", "CSS", "JavaScript", "React", "Next.js", "Git", "REST APIs"].map((skill) => (
              <span key={skill} className="bg-blue-900 text-blue-300 px-4 py-2 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-400 text-lg">
            I started from zero — HTML, CSS, JavaScript — and worked my way up through APIs, React, and now Next.js. Every project I built is in my portfolio below.
          </p>
        </div>
      </div>
    );
  }
