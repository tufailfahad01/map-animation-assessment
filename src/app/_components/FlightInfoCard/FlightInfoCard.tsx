"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import checkIcon from "../../_assets/Checkmark.png";

interface InfoBoxProps {
  timeRange: string;
  provider: string;
  title: React.ReactNode;
  description: React.ReactNode;
  updatedTimeRange: string;
  updatedProvider: string;
  updatedTitle: React.ReactNode;
  finalMessage: React.ReactNode;
  startAnimation?: boolean;
  onComplete?: () => void;
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
  startAnimation,
  onComplete,
}) => {
  const [step, setStep] = useState(-1);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setStep(0), 5000));
    timers.push(setTimeout(() => setStep(2), 5500));
    timers.push(setTimeout(() => {
      setStep(3);
      if (onComplete) onComplete();
    }, 6000));

    return () => timers.forEach(clearTimeout);
  }, [startAnimation, onComplete]);

  const showProgress = step === 0;
  const showUpdatedContent = step >= 2;
  const showFinal = step >= 3;

  return (
    <div className="inline-block 2xl:w-[318px] lg:w-[254px] md:w-[224px] w-[184px] relative">
      <div className="relative overflow-hidden">
        <div
          className="bg-[#2222221A] text-white 2xl:p-[18px] lg:p-3 md:p-3 p-2 rounded-lg w-full border border-[#94949480] transition-all duration-500 2xl:h-[111px] lg:h-[100px] md:h-[94px] h-auto"
          style={{
            backdropFilter: "blur(15px)",
            opacity: shouldAnimate ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
        >
          <div className="text-sm text-green-500 font-semibold flex justify-between mb-3" style={{
            color: !showUpdatedContent ?"#FF0000":"#2BD900"
          }}>
            <span>{showUpdatedContent ? updatedTimeRange : timeRange}</span>
            <span className={`${showUpdatedContent && "text-white"}`}>{showUpdatedContent ? updatedProvider : provider}</span>
          </div>
          <div className="2xl:text-xl lg:text-lg md:text-base text-xs text-white font-medium leading-snug transition-opacity duration-700">
            {showUpdatedContent ? updatedTitle : title}
          </div>
        </div>

        {showProgress && (
          <>
            <div className="bg-[#216710] h-full w-full absolute bottom-0 -right-[100%] z-10 rounded-lg animate-slideLeft-bg"></div>
            <div className="absolute bottom-0 -right-[110%] h-full w-full bg-[#2BD900] rounded-lg z-10 animate-slideLeft" />
          </>
        )}
      </div>

      <div
        className={`transition-all duration-700 w-full mt-3 rounded-lg border border-[#94949480] 2xl:p-[18px] lg:py-5 md:py-4 p-1 relative bg-[#2222221A]`}
        style={{
          backdropFilter: "blur(15px)",
          opacity: shouldAnimate ? 1 : 0,
          transition: "opacity 5s ease-in-out",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          {showFinal && (
            <div className="2xl:text-xl lg:text-lg md:text-base text-xs font-bold h-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#12810066] flex md:flex-col items-center justify-center before:rounded-lg before:z-[-1] gap-[2px] md:gap-0">
              <Image
                src={checkIcon}
                alt="check"
                className="2xl:w-10 lg:w-9 md:w-8 w-4 my-[3px] mr-1.5 md:mr-0"
              />
              {finalMessage}
            </div>
          )}
        </div>
        <div
          className={`2xl:text-xl lg:text-base md:text-base text-xs font-bold mt-1 ${showFinal && "blur-[10px]"}`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
