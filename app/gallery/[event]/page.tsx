"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryData: Record<string, string[]> = {
  "open-session": [
    "/gallery/open-session/img1.jpg",
    "/gallery/open-session/img2.jpg",
    "/gallery/open-session/img3.jpg",
    "/gallery/open-session/img4.jpg",
  ],

  "dsa-bootcamp": [
    "/gallery/dsa-bootcamp/img1.jpg",
    "/gallery/dsa-bootcamp/img2.jpg",
    "/gallery/dsa-bootcamp/img3.jpg",
  ],

  hackathon: [
    "/gallery/hackathon/img1.jpg",
    "/gallery/hackathon/img2.jpg",
    "/gallery/hackathon/img3.jpg",
  ],
};

export default function EventGallery() {
  const params = useParams();
  const event = params.event as string;

  const images = galleryData[event] || [];

  const [index, setIndex] = useState(-1);

  return (
    <main className="px-10 py-16 max-w-7xl mx-auto">
      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-12 capitalize">
        {event.split("-").join(" ")} Gallery
      </h1>

      {/* IMAGE GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow hover:shadow-blue-500/40 transition cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <img
              src={src}
              alt="Event"
              className="w-full h-72 object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX VIEWER */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </main>
  );
}