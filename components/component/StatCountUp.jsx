"use client"

import React from "react";

import CountUp from 'react-countup';

const StatCountUp = () => {
  return (
    <>
    <div className='m-10 text-5xl text-blue-900 tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>{"Our Numbers"}</div>
  <div className="flex flex-col md:flex-row justify-around  light:bg-gray-500">
    <div className="flex flex-col items-center  rounded my-8 p-6 md:p-10 w-full md:w-auto">
      <span className="text-black font-poppins font-semibold text-blue-600  text-4xl mb-2">{"Customers"}</span>
      <div className="flex flex-row items-center text-blue-700 p-2 md:p-3">
        <CountUp start={0} end={10000} delay={0}>
          {({ countUpRef }) => (
            <div className="text-2xl md:text-4xl font-bold" ref={countUpRef} />
          )}
        </CountUp>
      </div>
    </div>

    <div className="flex flex-col items-center  rounded my-8 p-6 md:p-10 w-full md:w-auto">
      <span className="text-black font-poppins font-semibold text-blue-600 text-4xl mb-2">{"Cities"}</span>
      <div className="flex flex-row items-center text-blue-700 p-2 md:p-3">
        <CountUp start={0} end={70} delay={0}>
          {({ countUpRef }) => (
            <div className="text-2xl md:text-4xl font-bold" ref={countUpRef} />
          )}
        </CountUp>
      </div>
    </div>

    <div className="flex flex-col items-center  rounded my-8 p-6 md:p-10 w-full md:w-auto">
      <span className="text-black  mb-2 text-4xl font-poppins font-semibold text-blue-600">{"Products"}</span>
      <div className="flex flex-row items-center text-blue-700 p-2 md:p-3">
        <CountUp start={0} end={10} delay={0}>
          {({ countUpRef }) => (
            <div className="text-2xl md:text-4xl font-bold" ref={countUpRef} />
          )}
        </CountUp>
      </div>
    </div>
</div>
</> 
 )
};

export default StatCountUp;
