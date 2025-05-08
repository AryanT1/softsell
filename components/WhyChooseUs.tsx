"use client"
import { CheckBadgeIcon, CloudIcon, LifebuoyIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
    useLayoutEffect(()=>{
        gsap.to("#choose", {
            opacity: 1,
            y: 0,
            duration: 2,
            scrollTrigger:{
              trigger: "#choose",
              start: "top 100%",
              toggleActions: "play reverse play reverse",
            }
          });
    },[])

    const features = [
      {
        icon: (
          <CheckBadgeIcon className="h-6 w-6" />
          
        ),
        title: "Highest Payouts",
        description: "We offer competitive rates, typically 10-20% higher than other resellers."
      },
      {
        icon: (
          < LockClosedIcon  className="h-6 w-6"  />
         
        ),
        title: "Secure Transactions",
        description: "Bank-level encryption and escrow services protect every transaction."
      },
      {
        icon: (
          <CloudIcon  className="h-6 w-6"/> 
      
        ),
        title: "Fast Payments",
        description: "Get paid within 24 hours after license verification."
      },
      {
        icon: (
          <LifebuoyIcon  className="h-6 w-6" />
        ),
        title: "Dedicated Support",
        description: "Our experts guide you through every step of the process."
      }
    ];
  
    return (
      <section className="flex  w-screen h-fit justify-center items-center   p-20">
        <div className="max-w-6xl mx-auto">
          <h2 id="choose" className="text-4xl md:text-6xl opacity-0 translate-y-20 font-bold text-center mb-16 text-white">
            Why Choose SoftSell
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg   hover:border-white transition duration-300">
                <div className="text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }