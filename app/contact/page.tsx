"use client"

import { useState } from "react"
import { FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa"

type ContactFormData = {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <main className="max-w-4xl mx-auto px-8 py-16">

      <h1 className="text-4xl font-bold mb-10">Contact Us</h1>

      {/* Contact Form */}
      <div className="bg-gray-900 p-10 rounded-xl border border-gray-800 mb-10">
        {submitted && (
          <p className="mb-6 text-green-400 font-semibold">
            Thank you! Your message has been sent.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-black border border-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 mb-10">
        <h2 className="text-2xl font-semibold mb-4">Connect with us</h2>
        <div className="flex gap-6 text-3xl">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://discord.gg/yourserver" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
            <FaDiscord />
          </a>
        </div>
      </div>

      {/* Club Contacts */}
      <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Contact our Leaders</h2>

        <p><span className="font-semibold">President:</span> +91 77777 77777</p>
        <p><span className="font-semibold">Vice President:</span> +91 99999 99999</p>
      </div>

    </main>
  )
}