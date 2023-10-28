"use client"
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import ModeToggle from './ModeToggle'
import Logo from "../../public/images/Logo-mod.png"


const Header = () => {
  return (
    <div className="bg-white dark:bg-gray-900 w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
       
        <Link href="/Home" className="flex items-center">
            <Image src={Logo} width={40} height={40} className="h-8 mr-3" alt="MindMingle"/>
            <span className="self-center text-2xl text-blue-500 font-semibold whitespace-nowrap dark:text-white lg:flex md:hidden hidden">{"MindMingle"}</span>
        </Link>
        <div className="flex items-center space-x-4">
        <Button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <Link href="/sign-in">{"login"}</Link> 
</Button>
  <Button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <Link href="/sign-up">{"register"}</Link> 
</Button>
<ModeToggle/>
        </div>
    </div>
</div>

  )
}

export default Header