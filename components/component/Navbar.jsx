"use client"
import { UserButton } from '@clerk/nextjs';
import React, { useState } from 'react';
import Image from 'next/image';
import ModeToggle from '../component/ModeToggle';
import Link from 'next/link';
import Logo from "../../public/images/Logo-mod.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900 w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/Home" className="flex items-center">
            <Image src={Logo} width={40} height={40} className="h-8 mr-3 " alt="Flowbite Logo" />
            <span className="self-center text-2xl text-blue-500 font-semibold whitespace-nowrap dark:text-white md:hidden lg:flex">{"MindMingle"}</span>
          </Link>
          <div className="flex md:order-2">
            <div className='h-full w-20 flex items-center justify-center '>
              <UserButton afterSignOutUrl="/"></UserButton>
            </div>
            <ModeToggle />
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full ${isMenuOpen ? 'relative' : 'hidden'} md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
              <Link href="/Home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{"Home"}</Link>
              </li>
              
              <li>
              <Link href="/Home/MoodTracker" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{"Mood Tracker"}</Link>
              </li>
              <li>
              <Link href="/Home/Therapy" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{"Therapy"}</Link>
              </li>
              <li>
              <Link href="/Home/Contact" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{"Discussions"}</Link>
              </li> 
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
