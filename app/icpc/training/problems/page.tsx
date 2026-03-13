export default function ProblemsPage() {
  return (
    <main className="max-w-6xl mx-auto px-10 py-16">

      <h1 className="text-4xl font-bold mb-10">
        Practice Problems
      </h1>

      <div className="space-y-6">

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

          <h2 className="text-xl font-semibold mb-2">
            Beginner
          </h2>

          <ul className="text-gray-400 list-disc ml-5">
            <li>Two Sum</li>
            <li>Binary Search</li>
            <li>Valid Parentheses</li>
          </ul>

        </div>


        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

          <h2 className="text-xl font-semibold mb-2">
            Intermediate
          </h2>

          <ul className="text-gray-400 list-disc ml-5">
            <li>Longest Substring Without Repeating</li>
            <li>Graph BFS</li>
            <li>Shortest Path</li>
          </ul>

        </div>


        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

          <h2 className="text-xl font-semibold mb-2">
            Advanced
          </h2>

          <ul className="text-gray-400 list-disc ml-5">
            <li>Segment Tree</li>
            <li>Maximum Flow</li>
            <li>Dynamic Programming Optimization</li>
          </ul>

        </div>

      </div>

    </main>
  );
}