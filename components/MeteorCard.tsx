"use client";
import React from "react";
import { Meteors } from "./ui/meteors";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const MeteorCard = ({
  subtitle,
  left,
  count,
}: {
  subtitle: string;
  left?: boolean;
  count?: number;
}) => {
  return (
    <motion.div 
      className="w-60"
      initial={{ 
        opacity: 0,
        x: left ? -100 : 100 // Start position off-screen based on left prop
      }}
      animate={{ 
        opacity: 1,
        x: 0 // End position
      }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      <div className="w-full relative max-w-xs">
        <motion.div 
          className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
            delay: 1.5 // Start after sliding animation completes
          }}
        />
        <div className="relative shadow-xl bg-black border border-white/35 p-5 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="flex items-end gap-1">
            {!left && (
              <FaArrowRight size={52} className="text-white -rotate-[135deg]" />
            )}
            <motion.h1 
              className="font-bold text-6xl text-white relative z-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4 // Start during sliding animation
              }}
            >
              {count}
            </motion.h1>
            {left && (
              <FaArrowRight size={52} className="text-white -rotate-45" />
            )}
          </div>
          <motion.p 
            className="font-normal text-base text-slate-500 relative z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6 // Start after number animation
            }}
          >
            {subtitle}
          </motion.p>
          <Meteors number={50} />
        </div>
      </div>
    </motion.div>
  );
};

export default MeteorCard;