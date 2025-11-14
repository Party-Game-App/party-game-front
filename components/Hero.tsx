'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <main className="bg-[url('/background-main.png')] bg-cover bg-no-repeat bg-position-[center_right_-10rem] w-full h-[calc(100vh-2.5rem)]">
      <section className="flex flex-1 flex-col py-8! items-center justify-between bg-linear-to-b from-fade to-black h-full">
        <h1 className="text-white mt-6! flex-1 text-center text-[32px]">LOGO</h1>

        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-white flex-1 font-semibold text-center text-2xl font-secondary">
            Start your party
          </h1>

          <Link
            href={'/get-started'}
            className="bg-main text-sm group text-light-2 font-secondary font-medium w-full uppercase rounded-sm duration-300 border-2 border-main hover:bg-transparent hover:text-main text-center p-1!"
          >
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                get started
              </p>

              <p className="absolute top-7 left-11 text-center group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                get started
              </p>
            </div>
          </Link>

          <Link
            href={'/login'}
            className="bg-transparent text-sm text-light-2 font-secondary font-medium w-full rounded-sm duration-300 border-2 border-main hover:opacity-60 text-center p-1!"
          >
            I have an account
          </Link>
        </div>
      </section>
    </main>
  )
}
