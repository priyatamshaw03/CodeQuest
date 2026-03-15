import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

function InviteFriend() {
  return (
    <div className='flex flex-col items-center mt-8 p-4 border rounded-xl bg-zinc-900 w-full'>
      
      <Image src={'/mail.png'} alt='mail' width={80} height={80} />

      <h2 className='text-3xl font-game mt-2'>Invite Friend</h2>

      <p className='font-game text-center text-gray-400 mt-2'>
        Having fun? Share the love with a friend! Enter an email and we will send them a personal invite.
      </p>

      <div className='flex gap-2 items-center mt-5 w-full'>
        <Input
          placeholder='Enter Invitee Email'
          className='flex-1 font-game'
        />
        <Button
          variant={'pixel'}
          className='font-game text-lg cursor-pointer whitespace-nowrap'
        >
          Invite
        </Button>
      </div>

    </div>
  )
}

export default InviteFriend