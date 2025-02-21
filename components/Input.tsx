"use client";

import { AnimateOnView } from "./AnimateOnView";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function Input() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col justify-center  items-center px-4 z-30">
      <AnimateOnView
        slide="right"
        className="mb-10 sm:mb-10 text-xl text-center sm:text-5xl dark:text-white text-black"
      >
        Subscribe Us Now
      </AnimateOnView>
      <AnimateOnView slide="left">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </AnimateOnView>
    </div>
  );
}
