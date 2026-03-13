"use client"

import { useState } from "react"

type CFUser = {
  handle: string
  rating?: number
  maxRating?: number
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
      console.error("Error fetching Codeforces data:", error)
    }
  }

  return (

    <main className="max-w-6xl mx-auto px-8 py-16">

      <h1 className="text-5xl font-bold mb-10">
        ICPC Dashboard
      </h1>

      <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Track Codeforces Handle
        </h2>

        <div className="flex gap-4">

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

          <div className="mt-8 grid md:grid-cols-3 gap-6">

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

          </div>

        )}

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">

          <h2 className="text-xl font-semibold mb-2">
            Weekly Problems
          </h2>

          <p className="text-gray-400">
            Solve curated ICPC style problems every week.
          </p>

        </div>

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">

          <h2 className="text-xl font-semibold mb-2">
            Leaderboard
          </h2>

          <p className="text-gray-400">
            Track top performing teams in club contests.
          </p>

        </div>

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">

          <h2 className="text-xl font-semibold mb-2">
            Team Stats
          </h2>

          <p className="text-gray-400">
            See registered teams and their performance.
          </p>

        </div>

      </div>

    </main>

  )
}