import { Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-6 px-10 flex justify-between items-center">

      <p className="text-gray-500">
        © 2026 Emerging Computers Arena | SNIST
      </p>

      <div className="flex gap-6 text-gray-500">

        <a
          href="mailto:eca@snist.edu"
          className="hover:text-blue-600 hover:scale-110 transition"
        >
          <Mail size={22} />
        </a>

        <a
          href="https://www.linkedin.com"
          className="hover:text-blue-600 hover:scale-110 transition"
        >
          <Linkedin size={22} />
        </a>

        <a
          href="https://discord.com"
          className="hover:text-blue-600 hover:scale-110 transition"
        >
          <MessageCircle size={22} />
        </a>

        <a
          href="https://instagram.com"
          className="hover:text-blue-600 hover:scale-110 transition"
        >
          <Instagram size={22} />
        </a>

      </div>

    </footer>
  );
}