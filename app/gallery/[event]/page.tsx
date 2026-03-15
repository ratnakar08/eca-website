"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import galleryData from "../../../data/gallery.json";

export default function EventGallery() {
  const params = useParams();
  const slug = params.event as string;

  const event = galleryData.find((e) => e.slug === slug);

  const [index, setIndex] = useState(-1);

  if (!event) return <p>Gallery not found</p>;

  const images = Array.from(
    { length: event.count },
    (_, i) => `/gallary/${event.folder}/${i + 1}.jpeg`
  );

  return (
    <main className="px-10 py-16 max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold mb-12">{event.title}</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <img
              src={src}
              alt="event"
              className="w-full h-72 object-cover hover:scale-110 transition"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />

    </main>
  );
}