
import StatCountUp from "../../components/component/StatCountUp"
import Testimonial from "../../components/component/Testimonial"
import Homezsection from "../../components/component/Homezsection"



import Image from "next/image";
import Hero from "../../public/images/hero.png";
export default function Homepage() {
  return (
    <>
      <div>
        <h2 className="text-blue-600 poppins text-5xl  text-center mb-10 mt-20 font-bold">
          Your Mental Wellness Journey Begins Here
        </h2>
        <h3 className="text-black dark:text-white poppins lg:text-2xl sm:text-1xl text-center mb-10 font-light">
          Discover a World of Self-Care and Support
        </h3>
        <div className="flex flex-row justify-center content-center">
          <Image src={Hero} w-max height={742} />
        </div>
        <p className="flex flex-row justify-center content-center text-black dark:text-blue-400 font-poppins text-2xl  text-center mb-10 mt-20 font-medium  sm:mx-10 lg:px-20  ">
          Mental health is not something new or unknown, we just aren’t used to
          making it a part of our daily life. If we look carefully at different
          aspects of our life from thinking, making decisions, maintaining
          relationships, and our attitude towards stressors are determined by
          our mental health condition.
        </p>
        <div className="my-20 text-5xl text-blue-900 tracking-tight font-bold text-center text-gray-900 dark:text-white">
          Why choose us ?
        </div>
        <Homezsection />
        <StatCountUp />
        <Testimonial />
      </div>
    </>
  );
}
