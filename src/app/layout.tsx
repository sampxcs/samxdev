import React from 'react'

import './globals.css'
import { Roboto } from 'next/font/google'
import Header from '@/components/Sections/Header'
import LightMove from '@/components/Decorations/LightMove'
import ButtonUp from '@/components/Buttons/ButtonUp'
import Footer from '@/components/Sections/Footer'
import NewsLetterForm from '@/components/Forms/NewsLetterForm'

const inter = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Samxdev',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
          <NewsLetterForm />
        </main>
        <Footer />
        <ButtonUp />
        <LightMove />
      </body>
    </html>
  )
}
