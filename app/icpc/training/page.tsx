import Link from "next/link";

export default function TrainingPage() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-16">

      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold mb-4">
          ICPC Training
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          ECA provides structured preparation for ICPC including
          algorithms, practice problems and internal contests.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-10">

        <Link href="/icpc/training/roadmap">

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 hover:border-blue-500 hover:scale-105 transition">

            <h2 className="text-2xl font-semibold mb-3">
              Roadmap
            </h2>

            <p className="text-gray-400">
              A structured learning path from beginner
              to ICPC level problem solving.
            </p>

          </div>

        </Link>

        <Link href="/icpc/training/resources">

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 hover:border-blue-500 hover:scale-105 transition">

            <h2 className="text-2xl font-semibold mb-3">
              Resources
            </h2>

            <p className="text-gray-400">
              Recommended platforms, tutorials
              and learning material.
            </p>

          </div>

        </Link>

        <Link href="/icpc/training/problems">

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 hover:border-blue-500 hover:scale-105 transition">

            <h2 className="text-2xl font-semibold mb-3">
              Practice Problems
            </h2>

            <p className="text-gray-400">
              Curated problems to build
              competitive programming skills.
            </p>

          </div>

        </Link>

      </div>

    </main>
  );
}