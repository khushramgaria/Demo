import React from "react";
import { Timeline } from "@/components/ui/timeline";
import TimeLineContent1 from "./TimeLineContent1";
import TimeLineContent2 from "./TimeLineContent2";
import TimeLineContent3 from "./TimeLineContent3";
import TimeLineContent4 from "./TimeLineContent4";

export function TimeLineSection() {
  const data = [
    {
      title: "DISCOVERY & STRATEGY",
      content: <TimeLineContent1 />,
    },
    {
      title: "STRATEGIC ACTION",
      content: <TimeLineContent2 />,
    },
    {
      title: "PERFORMANCE BOOST",
      content: <TimeLineContent3 />,
    },
    {
      title: "INSIGHT ANALYSIS",
      content: <TimeLineContent4 />,
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
