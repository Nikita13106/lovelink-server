import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a0f1f] py-8 text-pink-200 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Page Links */}
        <div className="flex flex-wrap gap-6 text-sm font-medium">
          <a href="/" className="hover:text-pink-400 transition">
            Home
          </a>
          <a href="/roles" className="hover:text-pink-400 transition">
            Roles
          </a>
          <a href="/events" className="hover:text-pink-400 transition">
            Events
          </a>
          <a href="/rules" className="hover:text-pink-400 transition">
            Rules
          </a>
          <a href="/vouches" className="hover:text-pink-400 transition">
            Vouches
          </a>
        </div>

        {/* Discord CTA */}
        <a
          href="https://discord.gg/Zuf4VMbDva"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm transition"
        >
           Discord
        </a>
      </div>

      <p className="text-center text-xs text-pink-300/60 mt-6">
        © 2026 LoveLINK. All rights reserved.
      </p>
    </footer>
  );
}
