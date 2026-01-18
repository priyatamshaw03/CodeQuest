import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='w-full relative h-screen overflow-hidden'>
      <Image src={'/hero.gif'} alt='hero' width={1000} height={1000} className='w-full h-full object-cover absolute inset-0'/>

      <div className='absolute w-full flex flex-col items-center mt-24'>
        <h2 className='font-semibold text-7xl font-game'>Start Your</h2>
        <h2 className='font-semibold text-8xl font-game text-yellow-400' style={{
          textShadow:"2px -2px 0 #000, -2px 2px 0 #000"
        }}>Coding Adventure</h2>
        <h2 className='text-3xl font-game mt-5'>Beginner friendly Coding Courses and Projects</h2>
        <Link href={'/sign-in'}>
        <Button className='text-3xl font-game mt-6 p-5' variant={'pixel'}>Get Started</Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero