'use client'

import { PricingTable } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Pricing() {
  return (
    <div className="min-h-screen flex items-center justify-center 
    px-4">

      <div className="w-full max-w-4xl p-8 
      border-4 rounded-xl space-y-6">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-4">

          <div className="bg-white p-3 border-2 border-black 
          shadow-[3px_3px_0_0_#000] rounded-md">
            <Image src="/logo.png" alt="logo" width={36} height={36}/>
          </div>

          <h1 className="text-4xl uppercase tracking-wide font-game text-yellow-400">
            Upgrade Your Journey
          </h1>

          <p className="text-2xl text-gray-400 font-game">
            Unlock premium coding challenges and advanced features.
          </p>
        </div>

        {/* PRICING TABLE */}
        <div className="mt-4">
          <PricingTable />
        </div>

      </div>
    </div>
  )
}

export default Pricing