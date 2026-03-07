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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white font-game">
      
      {/* Banner */}
      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] overflow-hidden">
        <Image
          src="/contact-us.jpg"
          fill
          alt="contact-banner"
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          {/* <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-yellow-400">
            Contact Us
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl mt-3 text-gray-200">
            We'd love to hear from you
          </p> */}
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6">
        
          <p className="text-3xl
          lg:text-4xl text-center mb-10 md:text-2xl mt-3 text-gray-200">
            We'd love to hear from you
          </p>
        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl p-6 sm:p-10">
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <div>
              <label className="text-sm sm:text-base font-medium">
                Your Name
              </label>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 mt-2 bg-zinc-800 rounded-xl border border-zinc-700 outline-none focus:border-yellow-400 transition"
              />
            </div>

            <div>
              <label className="text-sm sm:text-base font-medium">
                Your Email
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-2 bg-zinc-800 rounded-xl border border-zinc-700 outline-none focus:border-yellow-400 transition"
              />
            </div>

            <div>
              <label className="text-sm sm:text-base font-medium">
                Message
              </label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message..."
                className="w-full px-4 py-3 mt-2 bg-zinc-800 rounded-xl border border-zinc-700 outline-none focus:border-yellow-400 resize-none transition"
              />
            </div>

            <Button
              variant="pixel"
              type="submit"
              className="w-full text-base sm:text-lg py-6 mt-2"
            >
              Send Message
            </Button>

          </form>
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-center my-12 px-4">
        <p className="text-sm sm:text-lg text-gray-400">
          Or reach us directly at
        </p>
        <p className="text-xl sm:text-2xl text-yellow-400 my-2">
          support@codequest.com
        </p>
      </div>

    </div>
  );
}