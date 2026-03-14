"use client"

import Link from "next/link"

export default function ICPCMainPage() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-16">

      {/* HERO DESCRIPTION */}
      <section className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold">
          ICPC at <span className="text-blue-500">ECA</span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
          The International Collegiate Programming Contest (ICPC) is the worlds
          most prestigious competitive programming competition. At Emerging
          Computers Arena (ECA), we train students to develop strong problem
          solving skills, master algorithms, and compete in national and
          international programming contests.
        </p>

        <p className="text-gray-400 mt-4 text-lg">
          Through structured training sessions, contests, and peer learning,
          we prepare students to represent our college in ICPC regionals and
          other competitive programming events.
        </p>
      </section>

      {/* ICPC INFO SECTION */}
      <section className="grid md:grid-cols-3 gap-8 mb-24">

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 text-center hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-3">🏆 Competitive Programming</h2>
          <p className="text-gray-400">
            Solve algorithmic challenges and compete with programmers around
            the world through contests like ICPC and Codeforces.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 text-center hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-3">👨‍💻 Team Collaboration</h2>
          <p className="text-gray-400">
            ICPC teams consist of 3 members working together to solve
            challenging programming problems under time pressure.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 text-center hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-3">📈 Structured Training</h2>
          <p className="text-gray-400">
            Our training roadmap covers data structures, algorithms,
            problem-solving strategies, and contest preparation.
          </p>
        </div>

      </section>

      {/* PORTAL TITLE */}
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          ICPC <span className="text-blue-500">Portal</span>
        </h2>

        <p className="text-gray-400 mt-3 text-lg">
          Access all ICPC resources and tools from one place.
        </p>
      </section>

      {/* PORTAL CARDS */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

        {/* Dashboard */}
        <Link href="/icpc/dashboard">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition cursor-pointer hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col h-full">
            <h2 className="text-2xl font-semibold mb-2">
              ⭐ Dashboard
            </h2>

            <p className="text-gray-400 flex-grow">
              Track Codeforces stats, leaderboard and weekly problems.
            </p>
          </div>
        </Link>

        {/* Training */}
        <Link href="/icpc/training">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition cursor-pointer hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col h-full">
            <h2 className="text-2xl font-semibold mb-2">
              📚 Training
            </h2>

            <p className="text-gray-400 flex-grow">
              Access roadmap, resources and weekly practice problems.
            </p>
          </div>
        </Link>

        {/* Teams */}
        <Link href="/icpc/teams">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition cursor-pointer hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col h-full">
            <h2 className="text-2xl font-semibold mb-2">
              👥 Teams
            </h2>

            <p className="text-gray-400 flex-grow">
              View all registered teams with details and performance stats.
            </p>
          </div>
        </Link>

        {/* Register */}
        <Link href="/icpc/register">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition cursor-pointer hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col h-full">
            <h2 className="text-2xl font-semibold mb-2">
              📝 Register Team
            </h2>

            <p className="text-gray-400 flex-grow">
              Join ICPC contests by registering your team online.
            </p>
          </div>
        </Link>

      </section>

      {/* ADDITIONAL INFO */}
      <section className="mt-20 text-center max-w-3xl mx-auto">
        <p className="text-gray-400 text-lg">
          Our goal is to create awareness about ICPC, train students,
          and prepare them for college and regional contests.
        </p>

        <p className="text-gray-400 mt-3 text-lg">
          Participate in training sessions, solve practice problems,
          and track your progress through the ICPC dashboard.
        </p>
      </section>

    </main>
  )
}