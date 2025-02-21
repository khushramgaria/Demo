"use client";
import React from "react";
import { motion } from "motion/react";
import { WorldMap } from "@/components/ui/world-map";
import { Earth } from "@/components/Earth";
import { TextRevealCardPreview } from "@/components/TextRevealCardPreview";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="bg-black">
      <div className="py-10 bg-black w-full">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold text-xl md:text-4xl text-white">
            Contact{" "}
            <span className="text-neutral-400">
              {"Us".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
            Break free from traditional boundaries. Work from anywhere, at the
            comfort of your own studio apartment. Perfect for Nomads and
            Travellers.
          </p>
        </div>
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </div>
      <div className="w-full max-w-[95%] mx-auto flex items-center justify-center mb-8">
        <div className="w-1/2">
          <Earth />
        </div>
        <div className="w-1/2">
          <TextRevealCardPreview revealText="company@gmail.com" />
          <div className="h-10"></div>
          <TextRevealCardPreview revealText="+1 123 456 789" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
