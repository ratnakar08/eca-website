import Link from "next/link";

export default function Gallery() {

  const events = [
    {
      name: "ECA Open Session 2026",
      slug: "open-session",
      image: "/gallery/open-session/cover.jpg"
    },
    {
      name: "Quantum Computing Session",
      slug: "dsa-bootcamp",
      image: "/gallery/dsa-bootcamp/cover.jpg"
    },
    {
      name: "Open Session 2025",
      slug: "hackathon",
      image: "/gallery/hackathon/cover.jpg"
    }
  ];

  return (
    <main className="px-10 py-20 max-w-7xl mx-auto">

      {/* HERO HEADER */}
      <section className="text-center mb-20">

        <h1 className="text-6xl font-bold tracking-tight">
          ECA <span className="text-blue-600">Gallery</span>
        </h1>

        <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
          Explore moments captured from workshops, coding competitions,
          open sessions and hackathons conducted by the Emerging Computers Arena.
        </p>

      </section>


      {/* EVENT CARDS */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {events.map((event) => (

          <Link key={event.slug} href={`/gallery/${event.slug}`}>

            <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">

              {/* IMAGE */}
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* EVENT TITLE */}
              <div className="absolute bottom-8 left-8 text-white">

                <h2 className="text-2xl font-semibold group-hover:translate-y-[-4px] transition">
                  {event.name}
                </h2>

                <p className="text-sm text-gray-200 opacity-80">
                  View Event Photos →
                </p>

              </div>

            </div>

          </Link>

        ))}

      </section>

    </main>
  );
}