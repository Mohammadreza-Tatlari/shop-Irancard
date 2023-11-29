import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from './components/Navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import LoginModal from './components/Modals/LoginModal';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
        <Navbar />
        <LoginModal />
        </ClientOnly>   
        {children}
        </body>
    </html>
  )
}
