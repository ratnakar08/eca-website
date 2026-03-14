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
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo → Redirects to Home */}
        <Link
          href="/"
          className="flex items-center gap-3 cursor-pointer hover:scale-105 transition"
        >
          <img
            src="/ECA.jpeg"
            alt="ECA Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-white">ECA</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="hover:text-blue-500 transition relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}

          {/* ICPC Dropdown */}
          <div className="relative group">

            <Link
              href="/icpc"
              className="flex items-center gap-1 hover:text-blue-500 transition cursor-pointer"
            >
              ICPC <ChevronDown size={16} />
            </Link>

            <div className="absolute left-0 top-8 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 bg-black border border-gray-800 rounded-lg shadow-lg w-44 py-2">

              {icpcLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                  {item.name}
                </Link>
              ))}

            </div>
          </div>

          <Link
            href="/contact"
            className="hover:text-blue-500 transition relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
          >
            Contact
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 text-white"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

        </div>

        {/* Mobile Hamburger */}
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
        <div className="md:hidden bg-black text-gray-300 flex flex-col gap-2 px-6 py-4 border-t border-gray-800">

          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="py-2 hover:text-blue-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile ICPC Dropdown */}
          <div>

            <button
              onClick={() => setIcpcOpen(!icpcOpen)}
              className="flex justify-between items-center w-full py-2 hover:text-blue-500"
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
                    className="py-2 hover:text-blue-500"
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
            className="py-2 hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Join Button */}
          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Join ECA
          </button>

        </div>
      )}

    </nav>
  );
}