import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import { TimeLineSection } from "./TimeLineSection";

const LetUsShowYouSection = () => {
  return (
    <div className="bg-black" id="let-us-show">
      {/* Macbook scroll */}
      <div className="overflow-hidden bg-black w-full">
        <MacbookScroll
          title={
            <span>
              This Macbook is built with Tailwindcss. <br /> No kidding.
            </span>
          }
          src={`/linear.webp`}
          showGradient={false}
        />
      </div>

      <div>
        <TimeLineSection />
      </div>
    </div>
  );
};

export default LetUsShowYouSection;
