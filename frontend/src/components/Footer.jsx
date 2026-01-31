import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
    bg-[#1a0f1f] text-pink-200
    transition-colors
    h-[140px]
    flex flex-col justify-between
  "
    >
      {/* Main content */}
      <div
        className="
          max-w-6xl mx-auto w-full
          px-6 py-8
          flex flex-col md:flex-row
          justify-between items-center
          gap-6
        "
      >
        {/* Page Links */}
        <nav
          className="
            flex flex-wrap justify-center md:justify-start
            gap-6 text-sm font-medium
          "
        >
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
        </nav>

        {/* Discord CTA */}
        <a
          href="https://discord.gg/Zuf4VMbDva"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            px-5 py-2
            rounded-full
            bg-pink-500 hover:bg-pink-600
            text-white font-semibold text-sm
            transition
            whitespace-nowrap
          "
        >
          <FaDiscord className="shrink-0" />
          Discord
        </a>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-pink-300/60 pb-4">
        © 2026 LoveLINK. All rights reserved.
      </p>
    </footer>
  );
}
