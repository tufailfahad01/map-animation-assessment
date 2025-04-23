"use client"

import React, { useEffect, useState } from "react";

interface InfoBoxProps {
  timeRange: string;
  provider: string;
  title: React.ReactNode;
  description: React.ReactNode;
  updatedTimeRange: string;
  updatedProvider: string;
  updatedTitle: React.ReactNode;
  finalMessage: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  timeRange,
  provider,
  title,
  description,
  updatedTimeRange,
  updatedProvider,
  updatedTitle,
  finalMessage,
}) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
  
    timers.push(setTimeout(() => setStep(1), 2000));
  
    timers.push(setTimeout(() => setStep(2), 1000 + 1000));
  
    timers.push(setTimeout(() => setStep(3), 2000 + 1000 + 3000));
  
    return () => timers.forEach(clearTimeout);
  }, []);

  const showProgress = step === 0;
  const showUpdatedContent = step >= 2;
  const showFinal = step >= 3;

  return (
    <div className="inline-block 2xl:w-[318px] lg:w-[254px] md:w-[224px] w-[184px] relative">
      <div className="relative overflow-hidden">
        <div
          className="bg-[#2222221A] text-white 2xl:p-[18px] lg:p-3 md:p-2 p-1 rounded-lg w-full border border-[#94949480] transition-all duration-500  2xl:h-[111px] lg:h-[100px] md:h-[94px] h-[72px]"
          style={{ backdropFilter: "blur(15px)" }}
        >
          <div className="text-sm text-green-500 font-semibold flex justify-between mb-3">
            <span>{showUpdatedContent ? updatedTimeRange : timeRange}</span>
            <span>{showUpdatedContent ? updatedProvider : provider}</span>
          </div>
          <div className="2xl:text-xl lg:text-lg md:text-base text-xs text-white font-medium leading-snug transition-opacity duration-700">
            {showUpdatedContent ? updatedTitle : title}
          </div>
        </div>

        {showProgress && (
          <> <div className="bg-[#216710] h-full w-full absolute bottom-0 -right-[100%] z-10 rounded-lg animate-slideLeft-bg"></div>
            <div className="absolute bottom-0 -right-[110%] h-full w-full bg-[#2BD900] rounded-lg z-10 animate-slideLeft" /></>
        )}

      </div>

      <div
        className={`transition-all duration-700 w-full mt-3 rounded-lg border border-[#94949480] 2xl:p-[18px] lg:p-3 md:p-2 p-1 ${showFinal ? "bg-green-600/30 blur-[1px]" : "bg-[#2222221A]"
          }`}
        style={{ backdropFilter: "blur(15px)" }}
      >
        {showFinal ? (
          <div className="2xl:text-xl lg:text-lg md:text-base text-xs font-bold mt-1">
            X
            {finalMessage}
          </div>
        ) : (
          <div className="2xl:text-xl lg:text-lg md:text-base text-xs font-bold mt-1">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoBox;
