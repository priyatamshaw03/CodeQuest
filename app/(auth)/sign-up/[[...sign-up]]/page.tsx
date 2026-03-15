'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import Image from 'next/image'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-yellow-100 via-white to-yellow-50 px-4 font-mono">
      
      <SignUp.Root>

        {/* START STEP */}
        <SignUp.Step
          name="start"
          className="w-full max-w-sm space-y-4 bg-white p-6 border-4 border-black 
          shadow-[8px_8px_0_0_#000] rounded-lg transition-all"
        >

          {/* HEADER */}
          <header className="text-center flex flex-col items-center gap-2">
            <div className="bg-yellow-400 p-2 border-2 border-black shadow-[3px_3px_0_0_#000] rounded-md">
              <Image src={'/logo.png'} alt="logo" width={32} height={32} />
            </div>

            <h1 className="text-lg font-bold text-gray-600 uppercase tracking-wide font-game">
              Create Account
            </h1>

            <p className="text-md font-game text-gray-600">
              Start your coding journey.
            </p>
          </header>

          <Clerk.GlobalError className="text-xs text-red-500 text-center" />

          {/* EMAIL & PASSWORD */}
          <div className="space-y-4">

            <Clerk.Field name="emailAddress" className="space-y-1">
              <Clerk.Label className="text-base text-gray-600 font-game">
                Email
              </Clerk.Label>
              <Clerk.Input
                type="email"
                required
                className="w-full px-3 py-2.5 border-2 border-black rounded-md
                shadow-[2px_2px_0_0_#000]
                focus:outline-none focus:ring-2 focus:ring-yellow-400
                transition-all text-sm"
              />
              <Clerk.FieldError className="text-xs text-red-500" />
            </Clerk.Field>

            <Clerk.Field name="password" className="space-y-1">
              <Clerk.Label className="text-base text-gray-600   font-game">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="w-full px-3 py-2.5 border-2 border-black rounded-md
                shadow-[2px_2px_0_0_#000]
                focus:outline-none focus:ring-2 focus:ring-yellow-400
                transition-all text-sm"
              />
              <Clerk.FieldError className="text-xs text-red-500" />
            </Clerk.Field>

          </div>

          {/* SUBMIT BUTTON */}
          <SignUp.Action
            submit
            className="w-full py-2 bg-yellow-400 border-2 border-black 
            shadow-[3px_3px_0_0_#000] 
             hover:shadow-none 
            transition-all rounded-lg font-game text-black text-xl"
          >
            Create Account
          </SignUp.Action>

          {/* FOOTER */}
          <p className="text-center font-game text-gray-600 text-md">
            Already have an account?{' '}
            <Clerk.Link
              navigate="sign-in"
              className=" underline underline-offset-4 hover:text-yellow-600 transition"
            >
              Sign in
            </Clerk.Link>
          </p>

        </SignUp.Step>

      </SignUp.Root>
    </div>
  )
}
