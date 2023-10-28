"use client"
import React from 'react'

import imgthree from "../../public/images/accessibility.png"
import imgtwo from "../../public/images/community.png"
import imgone from "../../public/images/growth.png"
import imgfour from "../../public/images/compassion.png" 
import Image from 'next/image'

const Homezsection = () => {
  return (
    <section className="flex flex-col ">
      <div className='flex flex-col lg:flex-row md:flex-col justify-evenly my-10'>
      <div className=" flex flex-col justify-center content-center">
          <p className="flex flex-row justify-center text-center text-blue-600 font-poppins text-4xl font-semibold my-10"> {"Your Uniqueness &  Growth"} </p>
          <p className="font-poppins text-center dark:text-white text-lg text-black font-poppins font-normal text-gray-600">
          {"Our solutions are designed to empower your individuality, helping you take charge of your mental health"}</p>
      </div>
      <div>
        <Image src={imgone} width={450} height={450}/>
      </div>
      </div>

      <div className='flex flex-col-reverse lg:flex-row md:flex-col-reverse justify-evenly my-10'>
      <div>
        <Image src={imgthree} width={450} height={450} />
      </div>
      <div className=" flex flex-col justify-center content-center">
          <p className="flex flex-row justify-center text-blue-600 font-poppins text-4xl font-semibold my-10"> {"Accessibility"} </p>
          <p className="font-poppins text-center dark:text-white text-lg text-black font-poppins font-normal text-gray-600">
          {"Our user-friendly platform ensures everyone can access support and resources."}
          </p>
      </div>
      </div>

      <div className='flex flex-col lg:flex-row md:flex-col justify-evenly my-10'>
      <div className=" flex flex-col justify-center content-center">
          <p className="flex flex-row justify-center text-blue-600 font-poppins text-4xl font-semibold my-10"> {"Support Networks"}</p>
          <p className="font-poppins text-center dark:text-white text-lg text-black font-poppins font-normal text-gray-600">
          {"Find and connect with other people who are facing similar challenge and build a community to share your experiences."}</p>
      </div>
      <div>
        <Image src={imgtwo} width={450} height={450} />
      </div>
      </div>

   

      <div className='flex flex-col-reverse lg:flex-row md:flex-col-reverse  justify-evenly my-6'>
      <div>
        <Image src={imgfour} width={450} height={450} />
      </div>
      <div className=" flex flex-col justify-center content-center">
          <p className="flex flex-row justify-center text-blue-600 font-poppins text-4xl font-semibold my-10">{"Compassion"}</p>
          <p className="font-poppins text-center dark:text-white text-lg text-black font-poppins font-normal text-gray-600">
        {"  We care about our users and want to help them achieve their mental health goals."}</p>
      </div>
      
      </div>

      </section>
  )
}

export default Homezsection