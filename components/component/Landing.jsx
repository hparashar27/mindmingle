"use client"
import React from 'react';
import Image from 'next/image';
import medimage from '../../public/images/meditation.png';
import readimage from '../../public/images/reading.png';
import therpimage from '../../public/images/therapy.png';
import yogaimage from '../../public/images/yoga.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; 
import { Button } from '../ui/button';
import Link from 'next/link';



const Landing = () => {
  return (
    <div className="container mx-auto mt-8 flex flex-col md:flex-row items-center">
      <section className="md:w-1/2  mb-8 md:mb-0 md:mr-4">
        <h1 className="text-6xl font-bold mb-10 text-blue-500 text-black font-poppins">
          {"Mind Mingle"} </h1>
          <h3 className="text-4xl font-bold mb-10 dark:text-blue-400 text-black font-poppins" > {"Where Wellbeing Blossoms and Minds Flourish "}</h3>
        
        <p className="text-1xl dark:text-white font-poppin text-blue-500 font-bold  mb-10 text-blue-700">
         {" Nurturing Good Mental Health: Inspiring Connections, Compassionate Support, and Holistic Wellbeing for a Balanced, Fulfilling Life."}
        </p>
        <div>
        <Link href="/sign-up">
        <Button className="mb-10lg:text-start sm:text-center bg-blue-500">{"Get Started"}</Button>
        </Link>
        </div>
      </section>
      <section className="md:w-1/2 p-6 ">
        <Carousel
          axis="horizontal"
          autoPlay={true}
          autoFocus={true}
          infiniteLoop={true}
          stopOnHover={true}
          showThumbs={false}
        >
          <Image alt="therapy-image" src={therpimage} />
          <Image alt="yoga-image" src={yogaimage} />
          <Image alt="meditation-image" src={medimage} />
          <Image alt="readind-image" src={readimage} />
        </Carousel>
      </section>
    </div>
  );
};

export default Landing;
