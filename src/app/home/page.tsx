import Image from 'next/image'
import React from 'react'
import MapBg from "../_assets/Animation-Bkgrd-Map.jpg"
import LaunchCard from '../_components/LaunchCard/LaunchCard'

const HomePage = () => {
  return (
    <div>
      <div className="h-screen w-screen relative">
        <div
          className="h-full w-full flex justify-center items-center"
          style={{
            backgroundImage: `url(${MapBg.src})`,
            backgroundPosition: "5% 30%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "150%",
          }}
        >
          <div className="w-[80%]">
            <div className="inline-block">
            <LaunchCard />
            <div className="bg-[#14141440] text-white rounded-xl border-[1px] border-[#94949480] p-6  shadow-md mt-11">
              <div className="text-5xl font-semibold mb-2">120 minutes</div>
              <div className="text-[18px] text-">
                Time you lose traveling on airlines{" "}
                <span className="text-[#999999]">per round trip</span>
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage
