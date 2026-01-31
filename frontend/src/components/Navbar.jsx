import { NavLink } from "react-router-dom";
import { FaDiscord, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { IMAGES, cloudImage } from "../config/images";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 text-base font-medium transition-colors ${
      isActive ? "text-pink-500" : "text-gray-700 hover:text-pink-500"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-pink-300 bg-white flex items-center justify-center transition-colors">
            <img
              src={cloudImage(IMAGES.homepage.logo, { width: 56 })}
              alt="LoveLINK"
              className="w-7 h-7 rounded-full object-cover"
              loading="lazy"
            />
          </div>
          <span className="font-semibold text-lg text-gray-800 transition-colors">
            LoveLINK
          </span>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => linkClass({ isActive })}>
            Home
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) => linkClass({ isActive })}
          >
            Events
          </NavLink>
          <NavLink
            to="/roles"
            className={({ isActive }) => linkClass({ isActive })}
          >
            Roles
          </NavLink>
          <NavLink
            to="/rules"
            className={({ isActive }) => linkClass({ isActive })}
          >
            Rules
          </NavLink>
          <NavLink
            to="/vouches"
            className={({ isActive }) => linkClass({ isActive })}
          >
            Vouches
          </NavLink>

          {/* DISCORD */}
          <a
            href="https://discord.gg/Zuf4VMbDva"
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white font-medium shadow-sm hover:opacity-90 transition"
          >
            <FaDiscord />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 transition-colors"
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 backdrop-blur transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink
          to="/events"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Events
        </NavLink>
        <NavLink
          to="/roles"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Roles
        </NavLink>
        <NavLink
          to="/rules"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Rules
        </NavLink>
        <NavLink
          to="/vouches"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Vouches
        </NavLink>

        {/* Discord button for mobile */}
        <a
          href="https://discord.gg/Zuf4VMbDva"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-medium rounded-full my-2 mx-4 shadow-sm hover:opacity-90 transition"
        >
          <FaDiscord /> Join Discord
        </a>
      </div>
    </nav>
  );
}
