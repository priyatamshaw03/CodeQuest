'use client'
import { UserDetailContext } from '@/context/UserDetailContext';
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext } from 'react'

function UserStatus() {
    const {user} = useUser();
    const {userDetail, setUserDetail}= useContext(UserDetailContext);
  return (
    <div className='p-4 border-4 rounded-2xl'>
        <div className='flex gap-2 items-center min-w-0'>
        <Image src={'/alex_walk.gif'} alt='walking_user' width={70} height={70}/>
        <h2 className='font-game text-xl break-all'>
            {user?.primaryEmailAddress?.emailAddress}
        </h2>
        </div>
        <div className='grid grid-cols-2 gap-6 pr-4'>
            <div className='flex gap-3 items-center'>
                <Image src={'/star.png'} alt='star' width={35} height={35}/>
                <div>
                    <h2 className='text-3xl font-game'>{userDetail?.points || 0}</h2>
                    <h2 className='font-game text-xl text-gray-400'>Total Points</h2>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <Image src={'/badge.png'} alt='star' width={35} height={35}/>
                <div>
                    <h2 className='text-3xl font-game'>0</h2>
                    <h2 className='font-game text-xl text-gray-400'>Badge</h2>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <Image src={'/book.png'} alt='star' width={35} height={35}/>
                <div>
                    <h2 className='text-3xl font-game'>{userDetail?.totalExercises || 0}</h2>
                    <h2 className='font-game text-xl text-gray-400'>Total Exercises</h2>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <Image src={'/fire.png'} alt='star' width={35} height={35}/>
                <div>
                    <h2 className='text-3xl font-game'>0</h2>
                    <h2 className='font-game text-xl text-gray-400'>Daily Streak</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserStatus
