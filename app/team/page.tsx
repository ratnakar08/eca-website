"use client";

import { useState } from "react";
import { Linkedin } from "lucide-react";

type Member = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

type TeamCategory = "executive" | "technical" | "nontech";

export default function Team() {
  const [activeTab, setActiveTab] = useState<TeamCategory>("executive");

  const teamData: Record<TeamCategory, Member[]> = {
    executive: [
      {
        name: "K.Ratnakar",
        role: "President",
        image: "/team/member1.jpg",
        linkedin: "https://linkedin.com",
      },
      {
        name: "N.Vivek",
        role: "Vice President",
        image: "/team/member2.jpg",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Bhavitha",
        role: "General Secretary",
        image: "/team/member3.jpg",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Charan Reddy",
        role: "Technical Lead",
        image: "/team/member4.jpg",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Akshay",
        role: "Organising Lead",
        image: "/team/member5.jpg",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Sathwik",
        role: "Design Lead",
        image: "/team/member6.jpg",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Charith",
        role: "Publicity Lead",
        image: "/team/member7.jpg",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Madhumathi",
        role: "Documentation Lead",
        image: "/team/member8.jpg",
        linkedin: "https://linkedin.com",
      },
    ],

    technical: [
      {
        name: "Member A",
        role: "Web Development",
        image: "/team/member9.jpg",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Member B",
        role: "DSA Mentor",
        image: "/team/member10.jpg",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Member C",
        role: "Competitive Programming",
        image: "/team/member11.jpg",
        linkedin: "https://linkedin.com",
      },
       {
        name: "Member D",
        role: "Competitive Programming",
        image: "/team/member11.jpg",
        linkedin: "https://linkedin.com",
      },
       {
        name: "Member E",
        role: "Competitive Programming",
        image: "/team/member11.jpg",
        linkedin: "https://linkedin.com",
      },
       {
        name: "Member F",
        role: "Competitive Programming",
        image: "/team/member11.jpg",
        linkedin: "https://linkedin.com",
      },
       {
        name: "Member G",
        role: "Competitive Programming",
        image: "/team/member11.jpg",
        linkedin: "https://linkedin.com",
      },
       {
        name: "Member H",
        role: "Competitive Programming",
        image: "/team/member11.jpg",
        linkedin: "https://linkedin.com",
      },
    ],

    nontech: [
      {
        name: "Member 1",
        role: "Marketing",
        image: "/team/member12.jpg",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Member 2",
        role: "Content",
        image: "/team/member13.jpg",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Member 3",
        role: "Operations",
        image: "/team/member14.jpg",
        linkedin: "https://linkedin.com",
      },
       {
        name: "Member 3",
        role: "Operations",
        image: "/team/member14.jpg",
        linkedin: "https://linkedin.com",
      },
       {
        name: "Member 3",
        role: "Operations",
        image: "/team/member14.jpg",
        linkedin: "https://linkedin.com",
      },
       {
        name: "Member 3",
        role: "Operations",
        image: "/team/member14.jpg",
        linkedin: "https://linkedin.com",
      },
       {
        name: "Member 3",
        role: "Operations",
        image: "/team/member14.jpg",
        linkedin: "https://linkedin.com",
      },
       {
        name: "Member 3",
        role: "Operations",
        image: "/team/member14.jpg",
        linkedin: "https://linkedin.com",
      },
    ],
  };

  const members = teamData[activeTab];

  return (
    <main className="px-10 py-16 max-w-7xl mx-auto">
      {/* PAGE TITLE */}
      <section className="text-center">
        <h1 className="text-5xl font-bold">
          Meet the <span className="text-blue-600">Team</span>
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          The passionate people behind Emerging Computers Arena.
        </p>
      </section>

      {/* TEAM TABS */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={() => setActiveTab("executive")}
          className={`px-6 py-2 rounded-lg border font-medium transition 
          ${
            activeTab === "executive"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          Executive Body
        </button>

        <button
          onClick={() => setActiveTab("technical")}
          className={`px-6 py-2 rounded-lg border font-medium transition 
          ${
            activeTab === "technical"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          Technical Team
        </button>

        <button
          onClick={() => setActiveTab("nontech")}
          className={`px-6 py-2 rounded-lg border font-medium transition 
          ${
            activeTab === "nontech"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          Non-Tech Team
        </button>
      </div>

      {/* TEAM GRID */}
      <section className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {members.map((member, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 text-center shadow hover:shadow-blue-500/40 hover:-translate-y-2 transition duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500"
            />

            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>

            <p className="text-gray-600">{member.role}</p>

            <div className="flex justify-center mt-4">
              <a
                href={member.linkedin}
                target="_blank"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
