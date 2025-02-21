import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { Cover } from "./ui/cover";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MeteorCard from "./MeteorCard";

const HeroSection = () => {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden" id="home">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="w-[85%]">
        {/* Container Cover */}
        <div>
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Build amazing websites <br /> at <Cover>warp speed</Cover>
          </h1>
        </div>

        {/* Text Generate Effect */}
        <TextGenerateEffect words={words} />

        {/* Meteors Cards */}
        <div className="flex items-center justify-between w-full">
          <MeteorCard
            subtitle="Social media Audience Engagement"
            left={true}
            count={200}
          />
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer mt-12">
            Learn More
          </button>
          <MeteorCard
            subtitle="Total Global network of our Clients"
            left={false}
            count={115}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
