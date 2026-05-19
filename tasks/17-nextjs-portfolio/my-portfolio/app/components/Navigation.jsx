 import Link from "next/link";

  export default function Navigation() {
    return (
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
        <Link href="/" className="text-xl font-bold">Andrej Ferenc</Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/projects" className="hover:text-blue-400">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </nav>
    );
  }
