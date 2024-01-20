import { MemoryIcon, ReactionIcon, VerbalIcon, VisualIcon } from "@/public";
import React from "react";

const Summary = () => {
  return (
    <div className="flex sm:flex-col bg-white rounded-3xl shadow-lg">
      {/* Container 1 (left side) */}
      <div className="w-[320px] sm:w-[375px] h-[450px] sm:h-[350px] p-10 sm:p-5 sm:pb-8 bg-gradient-to-t from-[#2e2be9] to-[#7857ff] rounded-3xl flex flex-col items-center gap-y-6">
        <div className="text-lg font-semibold text-[#c8c7ff]">Your Result</div>
        {/* Circles */}
        <div className="w-[170px] h-[170px] sm:h-[140px] sm:w-[140px] rounded-full bg-gradient-to-t from[#4e21ca] to-[#2d2a2e] flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl text-white font-bold">76</div>
            <div className="text-md font-bold text-[#c8c7ff] text-opacity-40 ">
              of 100
            </div>
          </div>
        </div>
        {/* description */}
        <div className="flex flex-col justify-center items-center gap-y-3 sm:gap-y-1.5">
          <div className="text-2xl font-semibold text-white">Great</div>
          <div className="sm:text-sm sm:w-[250px] text-center text-[#c8c7ff] text-opacity-90">
            You scored higher than 65% of
            <br className="sm:hidden" /> of the people who have taken
            <br className="sm:hidden" /> these tests.
          </div>
        </div>
      </div>
      {/* Container 2 (right side) */}
      <div className="w-[320px] h-[450px] p-10 rounded-3xl bg-white flex flex-col items-start gap-y-5">
        <div className="text-xl font-bold text-[#303b5a]">Summary</div>
        {/* Summary component */}
        <div className="flex flex-col items-start gap-y-4">
          {" "}
          <div className="w-[250px] sm:w-[300px] h-12 px-3 rounded-lg bg-[#ff5757] bg-opacity-15 flex items-center justify-between">
            <div className="flex gap-x-2 items-center">
              {" "}
              <ReactionIcon />
              <div className="text-md text-[#ff5757] font-bold">Reaction</div>
            </div>

            <div className="text-[#303b5a] font-extrabold text-md">
              80 / <span className="text-[#303b5a] text-opacity-50">100</span>
            </div>
          </div>
          <div className="w-[250px] sm:w-[300px] h-12 px-3 rounded-lg bg-[#ffb01f] bg-opacity-15 flex items-center justify-between">
            <div className="flex gap-x-2 items-center">
              {" "}
              <MemoryIcon />
              <div className="text-md text-[#ffb01f] font-bold">Memory</div>
            </div>
            <div className="text-[#303b5a] font-extrabold text-md">
              80 / <span className="text-[#303b5a] text-opacity-50">100</span>
            </div>
          </div>
          <div className="w-[250px] sm:w-[300px] h-12 px-3 rounded-lg bg-[#00bd91] bg-opacity-15 flex items-center justify-between">
            <div className="flex gap-x-2 items-center">
              {" "}
              <VerbalIcon />
              <div className="text-md text-[#00bd91] font-bold">Verbal</div>
            </div>
            <div className="text-[#303b5a] font-extrabold text-md">
              80 / <span className="text-[#303b5a] text-opacity-50">100</span>
            </div>
          </div>
          <div className="w-[250px] sm:w-[300px] h-12 px-3 rounded-lg bg-[#1125d4] bg-opacity-15 flex items-center justify-between">
            <div className="flex gap-x-2 items-center">
              {" "}
              <VisualIcon />
              <div className="text-md text-[#1125d4] font-bold">Visual</div>
            </div>
            <div className="text-[#303b5a] font-extrabold text-md">
              80 / <span className="text-[#303b5a] text-opacity-50">100</span>
            </div>
          </div>
        </div>
        <button className="w-[250px] sm:w-[300px] h-12 mt-3 rounded-3xl bg-[#303b5a] focus:bg-gradient-to-t from-[#2e2be9] to-[#7857ff] text-white font-semibold">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Summary;
