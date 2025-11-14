'use client'

import { TextAlignRightIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { NavInfosProps } from '../@types'
import { Separator } from '@radix-ui/themes'

const navInfos: NavInfosProps[] = [
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Partner',
    url: '/partner',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
]

export default function Menu() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsVisible((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="w-full h-10 font-main bg-white shadow flex justify-between items-center px-4!">
      <Link href={'/'}>LOGO</Link>

      <section className="relative">
        <div ref={buttonRef}>
          <TextAlignRightIcon
            onClick={toggleMenu}
            size={20}
            className="cursor-pointer duration-300 hover:opacity-90 hover:scale-110"
          />
        </div>

        <nav
          ref={menuRef}
          className={`${
            isVisible ? 'flex' : 'hidden'
          } shadow-2xl flex-col text-sm z-10 bg-light-1 gap-2 rounded-sm p-2! items-center justify-center absolute right-0 top-5`}
        >
          {navInfos.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="border-y border-transparent w-14 duration-300 hover:opacity-70 hover:border-b-dark-1 text-center"
            >
              {item.label}
            </Link>
          ))}

          <Separator size="4" color="gray" />

          <Link
            href={'/get-started'}
            className="bg-dark-1 text-xs text-light-2 font-secondary font-medium w-32 uppercase rounded-sm duration-300 border-2 border-dark-1 hover:opacity-70 text-center p-1!"
          >
            get started
          </Link>

          <Link
            href={'/get-started'}
            className="bg-dark-1 text-xs text-light-2 font-secondary font-medium w-32 uppercase rounded-sm duration-300 border-2 hover:scale-95 border-dark-1 hover:bg-transparent hover:text-dark-1 text-center p-1!"
          >
            get started
          </Link>

          <Link
            href={'/get-started'}
            className="bg-dark-1 text-xs text-light-2 font-secondary font-medium w-32 uppercase rounded-sm duration-300 border-2 hover:scale-105 border-dark-1 hover:bg-transparent hover:text-dark-1 text-center p-1!"
          >
            get started
          </Link>

          <Link
            href={'/get-started'}
            className="bg-dark-1 text-xs group text-light-2 font-secondary font-medium w-32 uppercase rounded-sm duration-300 border-2 border-dark-1 hover:bg-transparent hover:text-dark-1 text-center p-1!"
          >
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                get started
              </p>

              <p className="absolute top-7 left-2.5 text-center group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                get started
              </p>
            </div>
          </Link>
        </nav>
      </section>
    </nav>
  )
}
