'use client'

import { TextAlignRightIcon } from '@phosphor-icons/react'
import { Separator } from '@radix-ui/themes'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { NavInfosProps } from '../@types'

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
    <nav className="font-main flex h-10 w-full items-center justify-between bg-white px-4! shadow">
      <Link href={'/'}>LOGO</Link>

      <section className="relative">
        <div ref={buttonRef}>
          <TextAlignRightIcon
            onClick={toggleMenu}
            size={20}
            className="cursor-pointer duration-300 hover:scale-110 hover:opacity-90"
          />
        </div>

        <nav
          ref={menuRef}
          className={`${
            isVisible ? 'flex' : 'hidden'
          } bg-light-1 absolute top-5 right-0 z-10 flex-col items-center justify-center gap-2 rounded-sm p-2! text-sm shadow-2xl`}
        >
          {navInfos.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="hover:border-b-dark-1 w-14 border-y border-transparent text-center duration-300 hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}

          <Separator size="4" color="gray" />

          <Link
            href={'/get-started'}
            className="bg-dark-1 group text-light-2 font-secondary border-dark-1 hover:text-dark-1 w-32 rounded-sm border-2 p-1! text-center text-xs font-medium uppercase duration-300 hover:bg-transparent"
          >
            <div className="relative overflow-hidden">
              <p className="duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                get started
              </p>

              <p className="absolute top-7 left-2.5 text-center duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                get started
              </p>
            </div>
          </Link>
        </nav>
      </section>
    </nav>
  )
}
