import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Needhelp() {
  return (
    <div className='flex items-center flex-col p-5 border-4 rounded-2xl mt-6'>
      
      <h2 className='text-3xl font-game'>Need Help ?</h2>
      <p className='font-game text-gray-500 text-xl text-center'>Raise a query or contact us</p>
      <Link href={'/contact-us'}>
        <Button className='font-game cursor-pointer text-lg' variant={'pixel'}>Contact us</Button>
      </Link>
    
    </div>
  )
}

export default Needhelp
