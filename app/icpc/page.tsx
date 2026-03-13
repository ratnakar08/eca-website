"use client"

import Link from "next/link"

export default function ICPCMainPage() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-16">

      {/* TITLE */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          ICPC <span className="text-blue-500">Portal</span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Learn, Train, and Compete! Explore all ICPC resources and participate in contests organized by our club.
        </p>
      </section>

      {/* CARDS */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Dashboard */}
        <Link href="/icpc/dashboard">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">
              ⭐ Dashboard
            </h2>
            <p className="text-gray-400">
              Track Codeforces stats, leaderboard & weekly problems.
            </p>
          </div>
        </Link>

        {/* Training */}
        <Link href="/icpc/training">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">
              📚 Training
            </h2>
            <p className="text-gray-400">
              Access roadmap, resources, and weekly practice problems.
            </p>
          </div>
        </Link>

        {/* Teams */}
        <Link href="/icpc/teams">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">
              👥 Teams
            </h2>
            <p className="text-gray-400">
              View all registered teams with details and performance stats.
            </p>
          </div>
        </Link>

        {/* Register Team */}
        <Link href="/icpc/register">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">
              📝 Register Team
            </h2>
            <p className="text-gray-400">
              Join the ICPC club contests by registering your team online.
            </p>
          </div>
        </Link>

      </section>

      {/* ADDITIONAL INFO */}
      <section className="mt-16 text-center">
        <p className="text-gray-400 text-lg">
          Our goal is to create awareness about ICPC, train students, and prepare them for college and regional contests. 
        </p>
        <p className="text-gray-400 mt-2 text-lg">
          Participate in training sessions, solve practice problems, and track your progress using the Dashboard.
        </p>
      </section>

    </main>
  )
}