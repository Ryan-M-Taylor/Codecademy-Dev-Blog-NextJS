import localFont from 'next/font/local'
import { Inter, Nunito } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const spaceMono = localFont({
  variable: '--font-spaceMono-Bold',
  src: '../public/fonts/spaceMono-Bolf.ttf',
  display: 'swap'
})

export const nunito = Nunito({
  subsets: ['latin'],
  weight: '300',
  display: 'swap',
})

