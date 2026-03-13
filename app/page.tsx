import { Users, Trophy, Mic } from "lucide-react";

export default function Home() {
  return (
    <main className="px-10 py-16">

      {/* HERO SECTION */}
      <section className="flex items-center justify-between">

        <div className="max-w-2xl">

          <h1 className="text-5xl font-bold leading-tight whitespace-nowrap">
            Emerging Computers <span className="text-blue-600">Arena</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Emerging Computers Arena (ECA) is a student community at SNIST
            focused on competitive programming, innovation, and building
            impactful technology.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Become a Member
            </button>

            <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>

          </div>

        </div>

        {/* LOGO */}
        <img
          src="/ECA.jpeg"
          alt="ECA Logo"
          className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg"
        />

      </section>


      {/* FEATURES */}
      <section className="mt-24 grid md:grid-cols-3 gap-8">

        <div className="border p-8 rounded-xl shadow hover:shadow-blue-500/40 hover:-translate-y-2 transition duration-300">
          <Users size={40} className="text-blue-600 mb-4" />

          <h3 className="text-xl font-semibold mb-2">Peer Learning</h3>

          <p className="text-gray-600">
            Juniors learn advanced data structures and algorithms from seniors
            through collaborative problem solving.
          </p>
        </div>


        <div className="border p-8 rounded-xl shadow hover:shadow-blue-500/40 hover:-translate-y-2 transition duration-300">
          <Trophy size={40} className="text-blue-600 mb-4" />

          <h3 className="text-xl font-semibold mb-2">Coding Competitions</h3>

          <p className="text-gray-600">
            Participate in competitive programming contests and sharpen your
            algorithmic thinking.
          </p>
        </div>


        <div className="border p-8 rounded-xl shadow hover:shadow-blue-500/40 hover:-translate-y-2 transition duration-300">
          <Mic size={40} className="text-blue-600 mb-4" />

          <h3 className="text-xl font-semibold mb-2">Speaker Sessions</h3>

          <p className="text-gray-600">
            Learn from industry experts through guest talks, workshops and
            technical sessions.
          </p>
        </div>

      </section>


      {/* EVENTS */}
      <section className="mt-24 pb-16">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Upcoming <span className="text-blue-600">Events</span>
          </h2>

          <p className="text-gray-600 mt-3">
            Future events ordered chronologically.
          </p>

          <p className="text-blue-600 font-semibold mt-2">
            Exciting events coming soon!
          </p>

        </div>

      </section>

    </main>
  );
}