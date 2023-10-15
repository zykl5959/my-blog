import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Yi's Blog",
  description: 'Created by Yi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-900">
        <Navbar></Navbar>
        <MyProfilePic></MyProfilePic>
        {children}</body>
    </html>
  )
}
