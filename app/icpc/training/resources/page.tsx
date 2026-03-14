import Link from "next/link"

export default function ResourcesPage() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-16">

      <h1 className="text-5xl font-bold text-center mb-16">
        Learning Resources
      </h1>

      {/* PLATFORMS */}

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">
          Competitive Programming Platforms
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">Codeforces</h3>
            <p className="text-gray-400">
              A competitive programming platform that hosts regular contests
              and provides a huge archive of algorithmic problems.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">LeetCode</h3>
            <p className="text-gray-400">
              Great platform for practicing data structures and algorithms
              commonly asked in technical interviews.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">AtCoder</h3>
            <p className="text-gray-400">
              A Japanese platform known for high quality algorithm contests.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">CodeChef</h3>
            <p className="text-gray-400">
              Popular platform for monthly contests and competitive programming practice.
            </p>
          </div>

        </div>
      </section>

      {/* LEARNING RESOURCES */}

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">
          Learning Guides
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>CP Algorithms</li>
          <li>USACO Guide</li>
          <li>Competitive Programming Handbook</li>
          <li>GeeksforGeeks DSA</li>
        </ul>
      </section>

      {/* YOUTUBE */}

      <section>
        <h2 className="text-3xl font-semibold mb-8">
          Recommended YouTube Channels
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>William Lin</li>
          <li>Errichto</li>
          <li>Tushar Roy</li>
          <li>Abdul Bari</li>
        </ul>
      </section>

    </main>
  )
}