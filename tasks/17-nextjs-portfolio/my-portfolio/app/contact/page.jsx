"use client";
  import { useState } from "react";
  import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

  export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    function handleSubmit(e) {
      e.preventDefault();
      setSent(true);
    }

    return (
      <div className="min-h-screen bg-gray-950 text-white px-8 py-20">
        <div className="max-w-xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Contact</h1>
          <p className="text-gray-400 mb-10">Have a project in mind? Let's talk.</p>

          {sent ? (
            <p className="text-green-400 text-xl">Message sent! I'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-gray-900 px-4 py-3 rounded-lg text-white outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-gray-900 px-4 py-3 rounded-lg text-white outline-none"
                required
              />
              <textarea
                placeholder="Your message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="bg-gray-900 px-4 py-3 rounded-lg text-white outline-none resize-none"
                required
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">
                Send Message
              </button>
            </form>
          )}

          <div className="mt-12 flex gap-6">
            <a href="https://github.com/andrejferencOne" target="_blank" className="text-gray-400 hover:text-white transition flex items-center gap-2">
              <FaGithub size={20} /> GitHub
            </a>
            <a href="https://linkedin.com/in/" target="_blank" className="text-gray-400 hover:text-white transition flex items-center gap-2">
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a href="https://facebook.com/" target="_blank" className="text-gray-400 hover:text-white transition flex items-center gap-2">
              <FaFacebook size={20} /> Facebook
            </a>
            <a href="mailto:andrej.ferenc236@gmail.com" className="text-gray-400 hover:text-white transition flex items-center gap-2">
              <FaEnvelope size={20} /> Email
            </a>
          </div>
        </div>
      </div>
    );
  }

