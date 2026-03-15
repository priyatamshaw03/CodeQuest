import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Unplug } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 font-game mt-20 border-t border-zinc-800">
      <div
        className="max-w-7xl mx-auto
                   px-6 sm:px-10 md:px-16 lg:px-24
                   py-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2">
              <Image src={"/logo.png"} alt="logo" width={40} height={40} />
                        <h2 className="mt-3 text-3xl font-game">CodeQuest</h2>
            </div>

            <p className="text-lg mt-3 max-w-s">
              CodeQuest is an interactive learning platform designed to help beginners start their coding journey with ease.
            </p>
          </div>

          <div>
            <h3 className="text-yellow-400 text-xl">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li className="hover:text-yellow-300 transition">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-yellow-300 transition">
                <Link href="/courses">Courses</Link>
              </li>
              <li className="hover:text-yellow-300 transition">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="hover:text-yellow-300 transition">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 text-xl">Social</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="https://discord.com/"
                  target="_blank"
                  className="flex items-center justify-center sm:justify-start gap-2 hover:text-yellow-300 transition"
                >
                  <Unplug className="h-4 w-4" />
                  Discord
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="flex items-center justify-center sm:justify-start gap-2 hover:text-yellow-300 transition"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </Link>
              </li>

              <li>
                <Link
                  href="https://x.com/"
                  target="_blank"
                  className="flex items-center justify-center sm:justify-start gap-2 hover:text-yellow-300 transition"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-s text-gray-500 mt-12">
          © {new Date().getFullYear()} CodeQuest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
