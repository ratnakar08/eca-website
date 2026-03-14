"use client"

import BackButton from "@/components/BackButton"

export default function ProblemsPage() {
  return (
    <main className="max-w-6xl mx-auto px-10 py-16">

      <BackButton />

      <h1 className="text-5xl font-bold mb-12">
        Practice Problems
      </h1>

      <p className="text-gray-400 mb-12 max-w-3xl">
        These problems are curated for students preparing for competitive
        programming contests and ICPC. Practice regularly on platforms like
        Codeforces, LeetCode and AtCoder to improve algorithmic thinking
        and problem solving speed.
      </p>

      {/* BEGINNER */}

      <section className="bg-gray-900 p-8 rounded-xl border border-gray-800 mb-10">

        <h2 className="text-2xl font-semibold mb-4">
          Beginner Problems
        </h2>

        <p className="text-gray-400 mb-4">
          Focus on understanding basic data structures and simple algorithms.
        </p>

        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>Two Sum</li>
          <li>Valid Parentheses</li>
          <li>Binary Search</li>
          <li>Merge Sorted Array</li>
          <li>Maximum Subarray</li>
          <li>Best Time to Buy and Sell Stock</li>
          <li>Contains Duplicate</li>
          <li>Move Zeroes</li>
        </ul>

        <p className="text-gray-500 mt-4">
          Recommended platforms: Codeforces Div 3, LeetCode Easy
        </p>

      </section>


      {/* INTERMEDIATE */}

      <section className="bg-gray-900 p-8 rounded-xl border border-gray-800 mb-10">

        <h2 className="text-2xl font-semibold mb-4">
          Intermediate Problems
        </h2>

        <p className="text-gray-400 mb-4">
          These problems introduce common competitive programming techniques.
        </p>

        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>Longest Substring Without Repeating Characters</li>
          <li>Container With Most Water</li>
          <li>Product of Array Except Self</li>
          <li>3Sum</li>
          <li>Subarray Sum Equals K</li>
          <li>Longest Consecutive Sequence</li>
          <li>Top K Frequent Elements</li>
        </ul>

        <p className="text-gray-500 mt-4">
          Recommended platforms: Codeforces Div 2 A/B, LeetCode Medium
        </p>

      </section>


      {/* ADVANCED */}

      <section className="bg-gray-900 p-8 rounded-xl border border-gray-800">

        <h2 className="text-2xl font-semibold mb-4">
          Advanced Problems
        </h2>

        <p className="text-gray-400 mb-4">
          Advanced algorithmic challenges commonly seen in ICPC contests.
        </p>

        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>Dijkstra Shortest Path</li>
          <li>Longest Increasing Subsequence</li>
          <li>Segment Tree Range Query</li>
          <li>Minimum Spanning Tree</li>
          <li>Network Flow</li>
          <li>Tree Diameter</li>
          <li>Heavy Light Decomposition</li>
        </ul>

        <p className="text-gray-500 mt-4">
          Recommended platforms: Codeforces Div 2 C/D, AtCoder contests
        </p>

      </section>

    </main>
  )
}