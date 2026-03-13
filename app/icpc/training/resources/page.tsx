import Link from "next/link";

const resources = [
  {
    name: "Codeforces",
    desc: "The most popular competitive programming platform with frequent contests and a huge problem archive.",
    link: "https://codeforces.com",
  },
  {
    name: "LeetCode",
    desc: "Excellent platform for algorithm practice and technical interview preparation.",
    link: "https://leetcode.com",
  },
  {
    name: "CSES Problem Set",
    desc: "A structured set of problems covering most competitive programming topics.",
    link: "https://cses.fi/problemset/",
  },
  {
    name: "AtCoder",
    desc: "High quality contests and algorithmic challenges used by many ICPC competitors.",
    link: "https://atcoder.jp",
  },
];

export default function ResourcesPage() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-16">

      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold mb-4">
          Learning Resources
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          These platforms are used by competitive programmers worldwide
          to prepare for ICPC and algorithmic contests.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {resources.map((r, index) => (

          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition"
          >

            <h2 className="text-2xl font-semibold mb-3">
              {r.name}
            </h2>

            <p className="text-gray-400 mb-6">
              {r.desc}
            </p>

            <a
              href={r.link}
              target="_blank"
              className="inline-block bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Visit Platform
            </a>

          </div>

        ))}

      </div>

    </main>
  );
}