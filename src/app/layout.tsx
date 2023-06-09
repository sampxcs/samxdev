import React from 'react'

import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Sections/Header'
import LightMove from '@/components/Decorations/LightMove'
import ButtonUp from '@/components/Buttons/ButtonUp'
import Footer from '@/components/Sections/Footer'
import NewsLetterForm from '@/components/Forms/NewsLetterForm'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Samxdev',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LightMove />
        <ButtonUp />
        <Header />
        <main>
          {children}
        </main>
        <NewsLetterForm />
        <Footer />
      </body>
    </html>
  )
}
