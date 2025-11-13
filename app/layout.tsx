import type { Metadata } from 'next'
import { Roboto, Orbitron } from 'next/font/google'
import './globals.css'
import Menu from '../components/Menu'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

const roboto = Roboto({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
})

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Party Game',
  description:
    'Life is a game, either you learn to play it, or it will stay in the Game-Over forever.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${orbitron.className} antialiased font-sans`}>
        <Theme>
          <Menu />
          {children}
        </Theme>
      </body>
    </html>
  )
}
