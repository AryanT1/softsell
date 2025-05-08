"use client"
import gsap from 'gsap';
import Link from 'next/link';
import { useLayoutEffect } from 'react';



export default function HeroSection() {
    useLayoutEffect(()=>{
        gsap.to("#Hero", {
            y:-40,
            opacity:1,
            duration:2,
             ease:"sine.in"
        });
        gsap.to("#logo", {
            y:20,
            opacity:1,
            duration:2,
             ease:"sine.in"
        })
    },[])
  return (
    <section className="relative w-full h-fit  text-white flex flex-col justify-center items-center ">
      <button className="absolute  flex justify-center items-center top-7 md:top-7 md:left-40 md:z-60">
      <span id='logo' className='pl-2 opacity-0 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animated-gradient  text-3xl font-bold'>SoftSell</span>
      </button>
      
      <div id='Hero' className="max-w-6xl pt-80 cursor-default opacity-0 mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
          Turn Unused Software Into Cash
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          SoftSell helps businesses monetize their unused software licenses quickly and securely.
        </p>
        <Link
          href="#contact"
          className="bg-white text-black mb-40 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300 inline-block hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
        >
          Sell My Licenses
        </Link>
      </div>
    </section>
  );
} 