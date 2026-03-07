"use client";

import axios from "axios";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Pricing() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const res = await axios.get("/api/subscription");
        setIsPro(res.data.isPro);
      } catch {
        setIsPro(false);
      }
    };
    fetchSubscriptionStatus();
  }, []);

  const handleUpgrade = async () => {
    try {
      setLoading(true);
      await axios.post("/api/upgrade");
      toast.success("You are now a Pro user");
      setIsPro(true);
    } catch {
      toast.error("Upgrade failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-16 font-game px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-6xl text-center">Pricing</h2>

        <p className="text-center text-base md:text-lg mt-3">
          Join for unlimited access to all features and courses
        </p>

        {/* CARDS */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 mt-16">

          {/* FREE */}
          <div className="border-4 rounded-2xl p-10 w-full md:w-[420px]">
            <h3 className="text-3xl">Free</h3>

            <p className="text-xl mt-3">$0 / month</p>

            <ul className="mt-6 space-y-3 text-base">
              <li>Limited courses</li>
              <li>Limited exercises</li>
              <li>Limited features</li>
              <li>No AI support</li>
            </ul>

            <Button disabled className="mt-8 text-lg w-full">
              Current Plan
            </Button>
          </div>

          {/* PRO */}
          <div className="border-4 rounded-2xl p-10 w-full md:w-[420px]">
            <h3 className="text-3xl">Pro</h3>

            <p className="text-xl mt-3">$8.99 / month</p>

            <ul className="mt-6 space-y-3 text-base">
              <li>Unlimited courses</li>
              <li>All exercises unlocked</li>
              <li>AI support for help</li>
              <li>24/7 Discord support</li>
            </ul>

            {!user ? (
              <Link href="/sign-in">
                <Button variant="pixel" className="mt-8 w-full">
                  Sign in to upgrade
                </Button>
              </Link>
            ) : (
              <Button
                variant="pixel"
                className="mt-8 text-lg w-full cursor-pointer"
                onClick={handleUpgrade}
                disabled={loading || isPro}
              >
                {isPro
                  ? "Already Pro"
                  : loading
                  ? "Upgrading..."
                  : "Upgrade to Pro"}
              </Button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}