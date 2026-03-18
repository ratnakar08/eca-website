"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

export default function TeamCard({ name, role, image, linkedin }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
      transition={{ duration: 0.3 }}
      className="border p-6 rounded-xl text-center shadow"
    >
      <Image src={image} alt={name} width={128} height={128} className="rounded-full object-cover mx-auto mb-4 border-4 border-blue-500" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
      <div className="flex justify-center mt-3">
        <a href={linkedin} target="_blank" className="text-gray-500 hover:text-blue-600 transition">
          <Linkedin size={22} />
        </a>
      </div>
    </motion.div>
  );
}