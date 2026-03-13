import { Target, Code, Users } from "lucide-react";

export default function About() {
  return (
    <main className="px-10 py-16 max-w-7xl mx-auto">

      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold">
          About <span className="text-blue-600">ECA</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Emerging Computers Arena (ECA) is a student driven technical
          community at SNIST focused on competitive programming,
          problem solving and building strong software engineering skills.
        </p>

      </section>


      {/* WHAT WE DO */}
      <section className="mt-24 grid md:grid-cols-3 gap-10">

        <div className="border p-8 rounded-xl shadow hover:shadow-blue-500/30 transition hover:-translate-y-2">

          <Code className="text-blue-600 mb-4" size={40} />

          <h3 className="text-xl font-semibold mb-3">
            Competitive Programming
          </h3>

          <p className="text-gray-600">
            We train students in Data Structures and Algorithms
            and prepare them for competitive programming contests
            like Codeforces, LeetCode and ICPC.
          </p>

        </div>


        <div className="border p-8 rounded-xl shadow hover:shadow-blue-500/30 transition hover:-translate-y-2">

          <Target className="text-blue-600 mb-4" size={40} />

          <h3 className="text-xl font-semibold mb-3">
            Skill Development
          </h3>

          <p className="text-gray-600">
            Through workshops, coding sessions and bootcamps,
            we help students build strong foundations in algorithms,
            problem solving and software development.
          </p>

        </div>


        <div className="border p-8 rounded-xl shadow hover:shadow-blue-500/30 transition hover:-translate-y-2">

          <Users className="text-blue-600 mb-4" size={40} />

          <h3 className="text-xl font-semibold mb-3">
            Community
          </h3>

          <p className="text-gray-600">
            ECA is a collaborative learning environment where
            juniors and seniors work together, share knowledge
            and grow as developers.
          </p>

        </div>

      </section>


      {/* MISSION */}
      <section className="mt-28 text-center max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold">
          Our Mission
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Our mission is to build a strong culture of problem solving
          and algorithmic thinking among students. Through continuous
          practice, mentorship and community collaboration, we aim to
          prepare students for global programming competitions and
          real-world software engineering challenges.
        </p>

      </section>


      {/* COMMUNITY CULTURE */}
      <section className="mt-28 text-center max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold">
          A Community of Builders
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          At ECA, learning goes beyond classrooms. Students collaborate,
          compete and innovate together. Whether solving challenging
          problems, participating in hackathons or preparing for ICPC,
          ECA creates an environment where curiosity and passion drive
          growth.
        </p>

      </section>

    </main>
  );
}