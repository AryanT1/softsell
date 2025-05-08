"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
gsap.registerPlugin(ScrollTrigger);
export default function Testimonials() {
    useLayoutEffect(()=>{
        gsap.to("#test", {
            opacity: 1,
            y: 0,
            duration: 2,
            scrollTrigger:{
              trigger: "#test",
              start: "top 100%",
              toggleActions: "play reverse play reverse",
            }
          });
    },[])
    const testimonials = [
      {
        quote: "SoftSell helped us recover over $50,000 in unused Microsoft licenses. The process was seamless and their team was extremely professional.",
        name: "Sarah Johnson",
        role: "IT Director",
        company: "TechForward Inc."
      },
      {
        quote: "As a small business, every dollar counts. SoftSell provided a fair valuation and quick payment for our surplus Adobe licenses. Highly recommended!",
        name: "Michael Chen",
        role: "CFO",
        company: "Creative Solutions LLC"
      }
    ];
  
    return (
      <section className="flex items-center w-screen h-fit p-20 justify-center ">
        <div className="max-w-6xl mx-auto">
          <h2 id="test" className="text-4xl translate-y-20 opacity-0 md:text-6xl font-bold text-center mb-16 text-white">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className=" p-8  rounded-lg ">
                <RiDoubleQuotesL className="h-8 w-8  text-white mb-4" >
                  
                </RiDoubleQuotesL>
                <p className="text-white mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-white">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }