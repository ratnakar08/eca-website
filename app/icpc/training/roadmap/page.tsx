export default function RoadmapPage() {
  return (
    <main className="max-w-6xl mx-auto px-10 py-16">

      {/* PAGE INTRO */}

      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6">
          ICPC Training Roadmap
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          The ECA ICPC training roadmap is designed to help students gradually
          build strong problem solving skills and algorithmic thinking.
          The program starts with programming fundamentals and progresses
          to advanced algorithms required for international programming
          contests like ICPC.
        </p>
      </section>

      {/* PHASE BASED ROADMAP */}

      <section className="space-y-8 mb-16">

        {/* PHASE 1 */}

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-3">
            Phase 1 — Foundations
          </h2>

          <p className="text-gray-400 mb-4">
            This phase focuses on building the core fundamentals of
            programming and problem solving.
          </p>

          <p className="font-semibold mb-2">Topics</p>

          <ul className="text-gray-400 list-disc ml-6 mb-4">
            <li>Time Complexity</li>
            <li>Arrays</li>
            <li>Strings</li>
            <li>Sorting</li>
            <li>Binary Search</li>
            <li>Basic Problem Solving</li>
          </ul>

          <p className="text-gray-400">
            Goal: Build strong fundamentals in programming and algorithmic thinking.
          </p>
        </div>

        {/* PHASE 2 */}

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-3">
            Phase 2 — Intermediate Algorithms
          </h2>

          <p className="text-gray-400 mb-4">
            Students learn common algorithmic patterns used frequently
            in competitive programming problems.
          </p>

          <ul className="text-gray-400 list-disc ml-6 mb-4">
            <li>Recursion</li>
            <li>Backtracking</li>
            <li>Greedy Algorithms</li>
            <li>Prefix Sum</li>
            <li>Two Pointers</li>
            <li>Sliding Window</li>
          </ul>

          <p className="text-gray-400">
            Goal: Learn patterns that help solve medium difficulty problems efficiently.
          </p>
        </div>

        {/* PHASE 3 */}

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-3">
            Phase 3 — Advanced Data Structures
          </h2>

          <p className="text-gray-400 mb-4">
            At this stage students start solving harder problems
            that require efficient algorithms and deeper understanding.
          </p>

          <ul className="text-gray-400 list-disc ml-6 mb-4">
            <li>Trees</li>
            <li>Binary Search Trees</li>
            <li>Graph Algorithms</li>
            <li>DFS / BFS</li>
            <li>Shortest Path Algorithms</li>
            <li>Dynamic Programming</li>
          </ul>

          <p className="text-gray-400">
            Goal: Solve medium to difficult competitive programming problems.
          </p>
        </div>

        {/* PHASE 4 */}

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-3">
            Phase 4 — ICPC Level Topics
          </h2>

          <p className="text-gray-400 mb-4">
            These are advanced topics commonly required in ICPC
            and high level competitive programming contests.
          </p>

          <ul className="text-gray-400 list-disc ml-6 mb-4">
            <li>Segment Trees</li>
            <li>Fenwick Trees</li>
            <li>Disjoint Set Union</li>
            <li>Advanced Graph Algorithms</li>
            <li>String Algorithms</li>
            <li>Bit Manipulation</li>
          </ul>

          <p className="text-gray-400">
            Goal: Prepare students for real ICPC contests and advanced algorithm challenges.
          </p>
        </div>

      </section>


      {/* WEEKLY TRAINING SCHEDULE */}

      <section className="mb-16">

        <h2 className="text-3xl font-bold mb-6">
          Weekly Training Schedule
        </h2>

        <div className="bg-gray-900 rounded-xl border border-gray-800 p-8">

          <table className="w-full text-left text-gray-300">

            <thead className="border-b border-gray-700">
              <tr>
                <th className="py-3">Day</th>
                <th className="py-3">Activity</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b border-gray-800">
                <td className="py-3">Monday</td>
                <td>DSA Concepts</td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="py-3">Wednesday</td>
                <td>Problem Solving</td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="py-3">Friday</td>
                <td>Doubt Sessions</td>
              </tr>

              <tr>
                <td className="py-3">Saturday</td>
                <td>Mock Contest</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* MOCK CONTESTS */}

      <section>

        <h2 className="text-3xl font-bold mb-4">
          Mock Contests
        </h2>

        <p className="text-gray-400 text-lg">
          ECA regularly conducts internal mock contests to simulate
          real ICPC competitions. These contests help students improve
          speed, teamwork and problem solving under time pressure.
        </p>

      </section>

    </main>
  )
}