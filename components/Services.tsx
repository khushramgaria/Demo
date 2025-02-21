"use client";
import React from "react";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { PinContainer } from "./ui/3d-pin";

const Services = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div id="services">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-3 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-white md:text-7xl"
        >
          <div>
            <span className="font-extralight text-5xl">service'S</span>
            <TypewriterEffectSmooth words={words} />
          </div>
        </motion.h1>
      </LampContainer>
      <div className="h-60 bg-black relative">
        <motion.div
          className="w-full flex flex-wrap items-center justify-center absolute -top-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} // Animation triggers once when coming into view
        >
          {[1, 2, 3].map((_, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: "0px 0px -200px 0px", // Adjust this value to control when animation triggers
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: idx * 0.2, // Maintain the staggered effect
              }}
            >
              <PinContainer
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    Aceternity UI
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      Customizable Tailwind CSS and Framer Motion Components.
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
