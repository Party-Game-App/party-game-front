'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="h-[calc(100vh-2.5rem)] w-full bg-[url('/background-main.png')] bg-cover bg-position-[center_right_-10rem] bg-no-repeat">
      <div className="from-fade flex h-full flex-1 flex-col items-center justify-between bg-linear-to-b to-black px-4! py-14!">
        <h1 className="flex-1 text-center text-[32px] text-white">LOGO</h1>

        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-secondary flex-1 text-center text-2xl font-semibold text-white">
            Start your party
          </h1>

          <Link
            href={'/register'}
            className="bg-main group text-light-2 font-secondary border-main hover:text-main h-10 w-full rounded-sm border-2 p-1! text-center text-base font-medium uppercase duration-300 hover:bg-transparent"
          >
            <section className="relative flex h-full items-center justify-center overflow-hidden">
              {/* texto principal (sobe) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="transform transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                  get started
                </p>
              </div>

              {/* texto secundário (entra de baixo) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="translate-y-full transform transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                  get started
                </p>
              </div>
            </section>
          </Link>

          <Link
            href={'/login'}
            className="text-light-2 font-secondary border-main flex h-10 w-full items-center justify-center rounded-sm border-2 bg-transparent p-1! text-center text-base font-medium duration-300 hover:opacity-60"
          >
            I have an account
          </Link>
        </div>
      </div>
    </section>
  )
}
