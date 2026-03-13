export default function RoadmapPage() {
  return (
    <main className="max-w-6xl mx-auto px-10 py-16">

      <h1 className="text-4xl font-bold mb-10">
        Competitive Programming Roadmap
      </h1>

      <div className="space-y-6">

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold">Stage 1: Basics</h2>
          <p className="text-gray-400">
            Arrays, Strings, Sorting, Basic Math.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold">Stage 2: Intermediate</h2>
          <p className="text-gray-400">
            Binary Search, Two Pointers, Recursion, Prefix Sums.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold">Stage 3: Advanced</h2>
          <p className="text-gray-400">
            Graphs, Dynamic Programming, Greedy Algorithms.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold">Stage 4: ICPC Level</h2>
          <p className="text-gray-400">
            Segment Trees, Maximum Flow, Advanced Graph Algorithms.
          </p>
        </div>

      </div>

    </main>
  );
}