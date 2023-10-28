'use client'
import React from 'react'
import Image from 'next/image'
import img1 from "../../public/images/1.jpeg.jpg"
import img2 from "../../public/images/2.jpeg.jpg"

const Therapy = () => {
    return (
        <div className='mt-10' >
            <h2 className="text-blue-600 poppins text-5xl  text-center mb-10 mt-10 font-bold">
           {" Unlock Professional Support"}
            </h2>
            <h3 className="text-black dark:text-white poppins lg:text-2xl sm:text-1xl text-center mb-10 font-light">
           {" We understand that everyone's mental health journey is unique. Sometimes, the right guidance from a professional can make all the difference. With MindMingle, you have access to a network of experienced therapists ready to support you on your path to wellness."}
            </h3>
            <div className='flex flex-row justify-evenly'>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <Image className="rounded-t-lg" src={img1} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{"Dr. Aane Doe,Licensed Therapist"}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{"Dr. Jane Doe brings over 15 years of experience in helping individuals overcome anxiety, manage stress, and improve their relationships. She is dedicated to guiding you towards a healthier, happier you."}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {"Book Now"}
                 <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
    
    
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <Image className="rounded-t-lg" src={img2} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{"Dr. John Smith,LMFT"}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{"With a focus on family dynamics and life changes, John Smith has been guiding individuals and families towards healthier, more harmonious relationships."}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               {" Book Now"}
                 <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
    
    
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <Image className="rounded-t-lg" src={img1} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{"Dr. Sarah Adams, LCSW"}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{"Sarah Adams has dedicated her career to helping individuals navigate difficult emotional challenges, including depression, grief, and self-esteem issues"}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {"Book Now"}
                 <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
            </div>
            <h3 className='text-center my-10 font-semibold text-blue-500'>{"and many more..."}</h3>
        </div>
      )
    }

export default Therapy