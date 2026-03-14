"use client";
import Image from "next/image";
import { Users, Trophy, Mic } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Emerging Computers <span className="text-blue-600">Arena</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Emerging Computers Arena (ECA) is a student community at SNIST
            focused on competitive programming, innovation, and building
            impactful technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Become a Member
            </button>
            <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        <Image
          src="/ECA.jpeg"
          alt="ECA Logo"
          width={256}
          height={256}
          className="rounded-full border-4 border-blue-500 shadow-lg object-cover"
        />
      </section>

      {/* FEATURES */}
      <section className="mt-24 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Users size={40} className="text-blue-600 mb-4" />,
            title: "Peer Learning",
            description:
              "Juniors learn advanced data structures and algorithms from seniors through collaborative problem solving.",
          },
          {
            icon: <Trophy size={40} className="text-blue-600 mb-4" />,
            title: "Coding Competitions",
            description:
              "Participate in competitive programming contests and sharpen your algorithmic thinking.",
          },
          {
            icon: <Mic size={40} className="text-blue-600 mb-4" />,
            title: "Speaker Sessions",
            description:
              "Learn from industry experts through guest talks, workshops and technical sessions.",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="border p-8 rounded-xl shadow hover:shadow-blue-500/30 hover:-translate-y-2 transition duration-300"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* EVENTS PREVIEW */}
      <section className="mt-24 pb-16 text-center">
        <h2 className="text-4xl font-bold">
          Upcoming <span className="text-blue-600">Events</span>
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Future events ordered chronologically.
        </p>
        <p className="text-blue-600 font-semibold mt-2">
          Exciting events coming soon!
        </p>
      </section>
    </main>
  );
}