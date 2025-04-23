"use client"

import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic"
import MapBg from "../_assets/Animation-Bkgrd-Map.jpg"
import LaunchCard from '../_components/LaunchCard/LaunchCard'
import InfoBox from '../_components/FlightInfoCard/FlightInfoCard'
import GreenDotAnimation from "../_assets/green-dot-animation.json"
import RedDotAnimation from "../_assets/red-dot-animation.json"

const LottieAnimation = dynamic(() => import('../_components/LottieAnimation/LottieAnimation'), {
  ssr: false
})

const HomePage = () => {
  const [firstComplete, setFirstComplete] = useState(false);
  const [secondComplete, setSecondComplete] = useState(false);
  const [shouldSecondAnimate, setShouldSecondAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldSecondAnimate(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen md:h-screen relative">
      <div
        className="h-full w-full flex justify-center items-center md:!bg-[length:150%] overflow-y-auto md:overflow-y-hidden pt-36 md:pt-0 bg-[position:50%_19%] md:bg-[position:5%_30%]"
        style={{
          backgroundImage: `url(${MapBg.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[90%] md:w-[80%] flex flex-col justify-center md:flex-row mb-[200px] md:mb-0">

          <div className="md:inline-block mt-44 md:mt-0 flex justify-center">
            <div
              className={!secondComplete ? "translate-y-[-200%]" : "translate-y-0"}
              style={{ transition: "translate 2s ease-in-out" }}
            >
              <LaunchCard />
            </div>

            <div className="bg-[#2222221A] text-white rounded-xl border-[1px] border-[#94949480] p-6 shadow-md mt-11 hidden md:block">
              {secondComplete ? (
                <>
                  <div className="2xl:text-5xl lg:text-4xl md:text-xl text-2xl font-semibold mb-2">120 minutes</div>
                  <div className="lg:text-lg md:text-sm">
                    Time you lose traveling on airlines{" "}
                    <span className="text-[#999999]">per round trip</span>
                  </div>
                </>
              ) : (
                <div className="2xl:text-[56px] lg:text-[42px] md:text-[32px] font-semibold text-center text-[#D82222]">
                  Airlines
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 mt-44 md:mt-0">
            <div className="md:w-[80%] h-full mx-auto flex flex-col justify-between">

              <div className="flex justify-end md:justify-start relative">
                <InfoBox
                  timeRange="105–75 minutes"
                  provider="Airlines"
                  title={
                    <>
                      Congested terminals <span className="text-[#999999]">and</span> drawn-out security lines
                    </>
                  }
                  description={
                    <>
                      Time consuming <span className="text-[#999999]">boarding</span>
                    </>
                  }
                  updatedTimeRange="15 minutes"
                  updatedProvider="BLACK JET"
                  updatedTitle="Private terminal boarding"
                  finalMessage="Skip the queue"
                  startAnimation={!firstComplete}
                  onComplete={() => setFirstComplete(true)}
                />
                <div className="absolute right-0 2xl:right-44 -bottom-44 md:-bottom-16 2xl:bottom-28 lg:-bottom-20">
                  <LottieAnimation animationData={GreenDotAnimation} className='2xl:w-[85px] lg:w-[57px] w-[39px]' />
                </div>
              </div>

              {shouldSecondAnimate && (
                <div className="flex md:justify-end mt-52 md:mt-0 relative">
                  <InfoBox
                    timeRange="30-15 minutes"
                    provider="Airlines"
                    title={
                      <>
                        Prolonged disembarking <span className="text-[#999999]">from the airplane</span>
                      </>
                    }
                    description={
                      <>
                        Long walks <span className="text-[#999999]">to the airport exit</span>
                      </>
                    }
                    updatedTimeRange="9 minutes"
                    updatedProvider="BLACK JET"
                    updatedTitle={<>
                      Swift exist <span className="text-[#999999]">via private terminal</span>
                    </>}
                    finalMessage="Avoid the chaos"
                    startAnimation={secondComplete ? false : firstComplete}
                    onComplete={() => setSecondComplete(true)}
                  />
                  <div className="absolute left-0 2xl:left-60 md:-top-28 top-44">
                    <LottieAnimation animationData={RedDotAnimation} className='2xl:w-[85px] lg:w-[57px] w-[39px]' />
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage;
