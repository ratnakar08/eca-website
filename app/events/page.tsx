"use client";

import { useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import eventsData from "@/data/events.json";

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

  const today = new Date();

  const upcomingEvents: Event[] = eventsData.events.filter(
    (event) => new Date(event.date) >= today
  );

  const pastEvents: Event[] = eventsData.events.filter(
    (event) => new Date(event.date) < today
  );

  const currentEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <main className="px-10 py-16 max-w-7xl mx-auto">

      <section className="text-center">
        <h1 className="text-5xl font-bold">
          ECA <span className="text-blue-600">Events</span>
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Workshops, coding contests and community events organized by ECA.
        </p>
      </section>

      {/* TABS */}
      <div className="flex justify-center gap-6 mt-10">

        <button
          onClick={() => setActiveTab("upcoming")}
          className={`px-6 py-2 rounded-lg border
          ${activeTab === "upcoming" ? "bg-blue-600 text-white" : ""}`}
        >
          Upcoming Events
        </button>

        <button
          onClick={() => setActiveTab("past")}
          className={`px-6 py-2 rounded-lg border
          ${activeTab === "past" ? "bg-blue-600 text-white" : ""}`}
        >
          Past Events
        </button>

      </div>

      {/* EVENTS */}
      <section className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {currentEvents.map((event, index) => (

          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow hover:-translate-y-2 transition"
          >

            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />

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