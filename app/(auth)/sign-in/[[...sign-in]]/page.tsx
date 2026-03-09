'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Image from 'next/image'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-yellow-100 via-white to-yellow-50 px-4 font-mono">
      
      <SignIn.Root>
        <SignIn.Step
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
              Welcome Back
            </h1>
            <p className="text-xs text-gray-600">
              Sign in to continue your coding journey 🚀
            </p>
          </header>

          <Clerk.GlobalError className="text-xs text-red-500 text-center" />

          {/* GOOGLE LOGIN */}
          <Clerk.Connection
            name="google"
            className="flex w-full items-center justify-center gap-2 px-3 py-2.5 
            bg-yellow-400 border-2 border-black 
            shadow-[3px_3px_0_0_#000] 
            hover:translate-y-[2px] hover:shadow-none
            transition-all font-bold uppercase text-sm rounded-lg cursor-pointer"
          >
            Login with Google
          </Clerk.Connection>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-black"></div>
            <span className="mx-3 text-[10px] uppercase font-bold text-gray-500">
              or continue with email
            </span>
            <div className="flex-grow border-t border-black"></div>
          </div>

          {/* EMAIL & PASSWORD */}
          <div className="space-y-4">

            <Clerk.Field name="identifier" className="space-y-1">
              <Clerk.Label className="text-base text-gray-600 font-bold uppercase font-game">
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
              <Clerk.Label className="text-base text-gray-600 font-bold uppercase font-game">
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
          <SignIn.Action
            submit
            className="w-full py-2.5 bg-yellow-400 border-2 border-black 
            shadow-[3px_3px_0_0_#000] 
            hover:translate-y-[2px] hover:shadow-none 
            transition-all uppercase cursor-pointer rounded-lg font-bold text-sm"
          >
            Sign In
          </SignIn.Action>

          {/* FOOTER */}
          <p className="text-center text-gray-600 text-xs">
            No account?{' '}
            <Clerk.Link
              navigate="sign-up"
              className="font-bold underline underline-offset-4 hover:text-yellow-600 transition"
            >
              Create an account
            </Clerk.Link>
          </p>

        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}
