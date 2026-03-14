"use client"

import { useState } from "react"
import BackButton from "@/components/BackButton"

<BackButton />

type CFUser = {
  handle: string
  rating?: number
  maxRating?: number
  rank?: string
}

export default function Dashboard() {

  const [handle, setHandle] = useState("")
  const [data, setData] = useState<CFUser | null>(null)

  const fetchCF = async () => {
    try {

      const res = await fetch(
        `https://codeforces.com/api/user.info?handles=${handle}`
      )

      const json = await res.json()

      setData(json.result[0])

    } catch (error) {
      console.error(error)
    }
  }

  return (

    <main className="max-w-7xl mx-auto px-8 py-16">

      {/* TITLE */}

      <h1 className="text-5xl font-bold mb-12">
        ICPC Dashboard
      </h1>


      {/* STATS */}

      <section className="grid md:grid-cols-4 gap-6 mb-16">

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <p className="text-gray-400">Members</p>
          <h3 className="text-3xl font-bold">120+</h3>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <p className="text-gray-400">Active Coders</p>
          <h3 className="text-3xl font-bold">60+</h3>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <p className="text-gray-400">ICPC Teams</p>
          <h3 className="text-3xl font-bold">15</h3>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <p className="text-gray-400">Weekly Problems</p>
          <h3 className="text-3xl font-bold">5</h3>
        </div>

      </section>


      {/* CODEFORCES TRACKER */}

      <section className="bg-gray-900 p-8 rounded-xl border border-gray-800 mb-16">

        <h2 className="text-2xl font-semibold mb-4">
          Codeforces Tracker
        </h2>

        <div className="flex gap-4 mb-6">

          <input
            placeholder="Enter Codeforces handle"
            className="bg-black border border-gray-700 px-4 py-2 rounded-lg w-full"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
          />

          <button
            onClick={fetchCF}
            className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Track
          </button>

        </div>


        {data && (

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-black p-6 rounded-lg">
              <p className="text-gray-400">Handle</p>
              <h3 className="text-xl font-semibold">{data.handle}</h3>
            </div>

            <div className="bg-black p-6 rounded-lg">
              <p className="text-gray-400">Rating</p>
              <h3 className="text-xl font-semibold">
                {data.rating ?? "Unrated"}
              </h3>
            </div>

            <div className="bg-black p-6 rounded-lg">
              <p className="text-gray-400">Max Rating</p>
              <h3 className="text-xl font-semibold">
                {data.maxRating ?? "Unrated"}
              </h3>
            </div>

            <div className="bg-black p-6 rounded-lg">
              <p className="text-gray-400">Rank</p>
              <h3 className="text-xl font-semibold">
                {data.rank ?? "Unrated"}
              </h3>
            </div>

          </div>

        )}

      </section>


      {/* LEADERBOARD */}

      <section className="bg-gray-900 p-8 rounded-xl border border-gray-800 mb-16">

        <h2 className="text-2xl font-semibold mb-6">
          Club Leaderboard
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between bg-black p-4 rounded-lg">
            <span>1. Vivek</span>
            <span>1650</span>
          </div>

          <div className="flex justify-between bg-black p-4 rounded-lg">
            <span>2. Rahul</span>
            <span>1520</span>
          </div>

          <div className="flex justify-between bg-black p-4 rounded-lg">
            <span>3. Ananya</span>
            <span>1490</span>
          </div>

        </div>

      </section>


      {/* WEEKLY PROBLEMS */}

      <section className="bg-gray-900 p-8 rounded-xl border border-gray-800">

        <h2 className="text-2xl font-semibold mb-6">
          Weekly Problems
        </h2>

        <ul className="space-y-3 text-gray-300">

          <li>• Binary Search Variations</li>
          <li>• Two Pointers Technique</li>
          <li>• Graph BFS Problem</li>
          <li>• Dynamic Programming Basics</li>
          <li>• Greedy Scheduling</li>

        </ul>

      </section>

    </main>
  )
}