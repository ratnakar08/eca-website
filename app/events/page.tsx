"use client";

import { useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";

type Event = {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
};

type EventCategory = "upcoming" | "past";

export default function Events() {
  const [activeTab, setActiveTab] = useState<EventCategory>("upcoming");

  const events: Record<EventCategory, Event[]> = {
    upcoming: [
         {
        title: "Introduction to CP",
        date: "March 2026",
        location: "Online",
        description:
          "An introduction to Competetive Programming session and opportunities for students.",
        image: "/events/event1.jpg",
      },
      {
        title: "DSA Bootcamp",
        date: "August 2026",
        location: "CSE Seminar Hall",
        description:
          "A complete training program on Data Structures and Algorithms.",
        image: "/events/event2.jpg",
      },
      {
        title: "Coding Contest",
        date: "September 2026",
        location: "Online",
        description:
          "A competitive programming contest designed to challenge algorithmic thinking.",
        image: "/events/event3.jpg",
      },
    ],

    past: [
         {
        title: "ECA Open Session",
        date: "March 2026",
        location: "SNIST Auditorium",
        description:
          "An introduction to ECA, competitive programming and opportunities for students.",
        image: "/events/event1.jpg",
      },
      {
        title: "GeekWeek 4 stages",
        date: "December 2025",
        location: "Online",
        description:
          "Conducted 4 stages of coding compeetitions GeekWeek",
        image: "/events/event5.jpg",
      },
       {
        title: "FrontEnd BootCamp",
        date: "May 2025",
        location: "Online",
        description:
          "An introduction to Frontend development and basic idea on git and github",
        image: "/events/event1.jpg",
      },
       {
        title: "Quantum Computing session",
        date: "October 2025",
        location: "SNIST Auditorium",
        description:
          "An introduction to Quantum Programming, diving into the wrold of quantum",
        image: "/events/event1.jpg",
      },
    ],
  };

  const currentEvents = events[activeTab];

  return (
    <main className="px-10 py-16 max-w-7xl mx-auto">

      {/* PAGE TITLE */}
      <section className="text-center">
        <h1 className="text-5xl font-bold">
          ECA <span className="text-blue-600">Events</span>
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Workshops, coding contests and community events organized by ECA.
        </p>
      </section>


      {/* EVENT TABS */}
      <div className="flex justify-center gap-6 mt-10">

        <button
          onClick={() => setActiveTab("upcoming")}
          className={`px-6 py-2 rounded-lg border font-medium transition
          ${
            activeTab === "upcoming"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          Upcoming Events
        </button>

        <button
          onClick={() => setActiveTab("past")}
          className={`px-6 py-2 rounded-lg border font-medium transition
          ${
            activeTab === "past"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          Past Events
        </button>

      </div>


      {/* EVENTS GRID */}
      <section className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {currentEvents.map((event, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow hover:shadow-blue-500/40 hover:-translate-y-2 transition duration-300"
          >

            {/* EVENT IMAGE */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />

            {/* EVENT CONTENT */}
            <div className="p-6">

              <h3 className="text-xl font-semibold">
                {event.title}
              </h3>

              <div className="flex items-center text-gray-500 mt-2 text-sm gap-2">
                <CalendarDays size={16} />
                {event.date}
              </div>

              <div className="flex items-center text-gray-500 mt-1 text-sm gap-2">
                <MapPin size={16} />
                {event.location}
              </div>

              <p className="text-gray-600 mt-3 text-sm">
                {event.description}
              </p>

            </div>

          </div>
        ))}

      </section>

    </main>
  );
}