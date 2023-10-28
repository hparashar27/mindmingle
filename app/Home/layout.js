"use client"

import { Inter } from 'next/font/google'
import Footer from "../../components/component/Footer"
import Navbar from "../../components/component/Navbar"



const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbar/>
        {children}  
        <Footer/>
        </body>
    </html>
  )
}
