"use client";

import { useState } from "react";
import { Linkedin, Github } from "lucide-react";
import Image from "next/image";
import teamDataJson from "../../data/team.json";

type Member = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  github: string;
};

type TeamData = {
  executive: Member[];
  technical: Member[];
  nontech: Member[];
};

type TeamCategory = "executive" | "technical" | "nontech";

const teamData: TeamData = teamDataJson as TeamData;

export default function Team() {
  const [activeTab, setActiveTab] = useState<TeamCategory>("executive");
  const members = teamData[activeTab];

  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">

      {/* Heading */}
      <section className="text-center">
        <h1 className="text-5xl font-bold">
          Meet the <span className="text-blue-500">Team</span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          The passionate people behind Emerging Computers Arena.
        </p>
      </section>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-10 flex-wrap">
        {(["executive", "technical", "nontech"] as TeamCategory[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg border border-gray-700 font-medium transition ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            {tab === "executive"
              ? "Executive Body"
              : tab === "technical"
              ? "Technical Team"
              : "Non-Tech Team"}
          </button>
        ))}
      </div>

      {/* Cards */}
      <section className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {members.map((member, idx) => (
          <div
            key={idx}
            className="group relative rounded-xl border border-gray-700 overflow-hidden transition duration-500 hover:-translate-y-2"
          >

            {/* Gradient Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20"></div>

            {/* Card Content */}
            <div className="relative z-10 bg-[#0b0b0b] rounded-xl overflow-hidden">

              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">

                <h3 className="text-xl font-semibold">
                  {member.name}
                </h3>

                <p className="text-gray-400 mt-1">
                  {member.role}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition transform hover:scale-125"
                  >
                    <Linkedin size={22} />
                  </a>

                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition transform hover:scale-125"
                  >
                    <Github size={22} />
                  </a>

                </div>

              </div>

            </div>
          </div>
        ))}

      </section>
    </main>
  );
}