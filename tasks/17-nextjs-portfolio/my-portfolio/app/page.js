import Link from "next/link";

  export default function Home() {
    return (
      <div>
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-8 bg-gray-950 text-white">
          <h1 className="text-6xl font-bold mb-4">Andrej Ferenc</h1>
          <p className="text-2xl text-blue-400 mb-6">Junior Web Developer</p>
          <p className="text-gray-400 max-w-xl mb-10">
            I build web applications with JavaScript and React. Currently learning Next.js and working towards becoming a remote developer.
          </p>
          <div className="flex gap-4">
            <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
              View Projects
            </Link>
            <Link href="/contact" className="border border-gray-600 hover:border-blue-400 px-6 py-3 rounded-lg font-semibold">
              Contact Me
            </Link>
          </div>
        </section>
      </div>
    );
  }
