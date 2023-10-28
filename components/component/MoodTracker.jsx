'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

import imgtwo from "../../public/images/growth.png"

const MoodTracker = () => {
  return (
    <div >
   <h2 className="text-blue-600 poppins text-5xl  text-center mb-10 mt-10 font-bold">
            {"Unlock Professional Support"}
            </h2>
            <h3 className="text-black dark:text-white poppins lg:text-2xl sm:text-1xl text-center mb-10 font-light">
           {" We understand that everyone's mental health journey is unique. Sometimes, the right guidance from a professional can make all the difference. With MindMingle, you have access to a network of experienced therapists ready to support you on your path to wellness."}
            </h3>
            <div className='flex flex-row justify-center'>
                <Image src={imgtwo} width={400} height={500}/>
            </div>
        <div className='flex flex-row justify-center'>
        <Button className="bg-blue-500 ">
            <Link href="https://marketplace.canva.com/EAE3CoGpmMw/1/0/1131w/canva-mood-tracker-planner-template-%7C-yearly-tracker-%7C-yearly-log-%7C-bullet-journal-template-pQBkj-pETk4.jpg" target='_blank'>{"Get chart here "}</Link></Button>
        </div >

            <h2 className="text-blue-600 poppins text-3xl  text-center mb-10 mt-10 font-bold">
            {"How to get started with Mood Tracking"}
            <div>
                <h2 className="text-black poppins text-2xl  text-center mb-10 mt-10 font-bold">{"Track Your Emotions Over Time"}</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{"With the help of the mood chart, you can log your emotions, highs, lows, and everything in between. Monitor your emotional patterns and better understand what influences your mood."}</p>
            </div>
            <div>
                <h2 className="text-black poppins text-2xl  text-center mb-10 mt-10 font-bold">{"Log your Emotions"}</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{"Record your current mood, emotions, and any relevant notes. You can do at the end of you day once daily"}</p>
            </div>
            <div>
                <h2 className="text-black poppins text-2xl  text-center mb-10 mt-10 font-bold">{"Review Your Mood Trends"}</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{"Watch as your mood data accumulates and begins to form a meaningful picture of your emotional well-being."}</p>
            </div>
            <div>
                <h2 className="text-black poppins text-2xl  text-center mb-10 mt-10 font-bold">{"Set Personal Goals"}</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{"Use"} {"your mood insights to set personal well-being goals and track your progress over time."}</p>
            </div>
            </h2>
    </div>
  )
}

export default MoodTracker