"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-game md:text-7xl font-bold text-yellow-400">
          Contact Us
        </h1>
        <p className="text-gray-300 font-game mt-3 text-2xl">
          We'd love to hear from you
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
          <Image
            src="/contact-us.png"
            fill
            alt="contact-image"
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT FORM */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl">

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <div>
              <label className="text-sm font-medium text-gray-300">
                Your Name
              </label>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg outline-none focus:border-yellow-400 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-300">
                Your Email
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg outline-none focus:border-yellow-400 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg outline-none focus:border-yellow-400 resize-none transition"
              />
            </div>

            <Button
              variant="pixel"
              type="submit"
              className="w-full font-game text-2xl py-6 mt-2"
            >
              Send Message
            </Button>

          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Or email us directly at
            <p className="text-yellow-400 text-lg mt-1">
              support@codequest.com
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}