"use client";
import {
  ChartBarIcon,
  CloudArrowUpIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function HowItWorks() {
  useLayoutEffect(() => {
    gsap.to("#work", {
      opacity: 1,
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#work",
        start: "top 100%",
        toggleActions: "play none none none",
      },
    });
  }, []);
  const steps = [
    {
      icon: <CloudArrowUpIcon className="h-12 w-12" />,
      title: "Upload License Details",
      description:
        "Provide information about your software licenses through our secure portal.",
    },
    {
      icon: <ChartBarIcon className="h-12 w-12" />,
      title: "Get Instant Valuation",
      description:
        "Our system analyzes current market prices and provides a fair offer.",
    },
    {
      icon: <CurrencyDollarIcon className="h-12 w-12" />,
      title: "Get Paid Securely",
      description:
        "Receive payment via your preferred method once the licenses are verified.",
    },
  ];

  return (
    <section className="flex w-screen h-fit md:h-scrren justify-center items-center p-20 ">
      <div className="max-w-6xl mx-auto">
        <h2
          id="work"
          className="text-4xl translate-y-20 opacity-0 md:text-6xl font-bold text-center mb-16 text-ehite"
        >
          How SoftSell Works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className=" p-8 rounded-lg  text-center  "
            >
              <div className="text-white mb-6 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {step.title}
              </h3>
              <p className="text-white">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
