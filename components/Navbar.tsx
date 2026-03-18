"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [icpcOpen, setIcpcOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
  ];

  const icpcLinks = [
    { name: "About ICPC", href: "/icpc" },
    { name: "Training", href: "/icpc/training" },
    { name: "Teams", href: "/icpc/teams" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/ECA.jpeg"
            alt="ECA Logo"
            className="w-10 h-10 rounded-full object-cover border border-white/20 group-hover:scale-110 transition"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ECA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative hover:text-white transition"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* ICPC Dropdown */}
          <div className="relative group">

            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition">
              ICPC <ChevronDown size={16} />
            </div>

            <div className="absolute top-8 left-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">

              <div className="bg-black/90 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl w-44 py-2">

                {icpcLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-white/10 transition"
                  >
                    {item.name}
                  </Link>
                ))}

              </div>

            </div>

          </div>

          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Join Button */}
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition shadow-lg">
            Join ECA
          </button>

        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl text-gray-300 flex flex-col gap-2 px-6 py-4 border-t border-white/10">

          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="py-2 hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile ICPC dropdown */}
          <div>

            <button
              onClick={() => setIcpcOpen(!icpcOpen)}
              className="flex justify-between items-center w-full py-2 hover:text-white"
            >
              ICPC
              <ChevronDown
                size={16}
                className={`${icpcOpen ? "rotate-180" : ""} transition`}
              />
            </button>

            {icpcOpen && (
              <div className="flex flex-col pl-4">

                {icpcLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="py-2 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

              </div>
            )}

          </div>

          <Link
            href="/contact"
            className="py-2 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg">
            Join ECA
          </button>

        </div>
      )}
    </nav>
  );
}