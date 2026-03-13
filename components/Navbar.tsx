"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <img
            src="/ECA.jpeg"
            alt="ECA Logo"
            className="w-10 h-10 rounded-full object-cover"
          />

          <span className="text-xl font-semibold text-white">
            ECA
          </span>

        </div>


        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-500 transition">
            About
          </Link>

          <Link href="/team" className="hover:text-blue-500 transition">
            Team
          </Link>

          <Link href="/events" className="hover:text-blue-500 transition">
            Events
          </Link>

          <Link href="/gallery" className="hover:text-blue-500 transition">
            Gallery
          </Link>


          {/* ICPC DROPDOWN */}
<div
  className="relative"
  onMouseEnter={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
>

  <Link
    href="/icpc"
    className="hover:text-blue-500 transition"
  >
    ICPC ▾
  </Link>

  {open && (
    <div className="absolute top-10 left-0 bg-black border border-gray-800 rounded-lg shadow-lg w-52 py-2">

      <Link
        href="/icpc"
        className="block px-5 py-3 hover:bg-gray-900"
      >
        About ICPC
      </Link>

      <Link
        href="/icpc/training"
        className="block px-5 py-3 hover:bg-gray-900"
      >
        Training
      </Link>

      <Link
        href="/icpc/teams"
        className="block px-5 py-3 hover:bg-gray-900"
      >
        Teams
      </Link>

     

    </div>
  )}

</div>

          <Link href="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>

        </div>


        {/* JOIN BUTTON */}
        <div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Join ECA
          </button>

        </div>

      </div>

    </nav>
  );
}