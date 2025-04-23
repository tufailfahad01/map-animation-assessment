import Image from 'next/image';
import React from 'react';
import MapBg from "../_assets/Animation-Bkgrd-Map.jpg";
import LaunchCard from '../_components/LaunchCard/LaunchCard';
import InfoBox from '../_components/FlightInfoCard/FlightInfoCard';

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 rotate-180 sm:rotate-0 bg-no-repeat bg-[length:150%] bg-[position:5%_30%]"
        style={{ backgroundImage: `url(${MapBg.src})` }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4 sm:px-6 md:px-12 py-8">
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row gap-10 lg:gap-16 items-center md:items-start">

          {/* Left Column - Launch Info */}
          <div className="w-full sm:w-1  md:w-6/10 flex flex-col items-center md:items-start gap-6">
            <LaunchCard />

            <div className="bg-[#14141440] text-white rounded-xl border border-[#94949480] p-4 sm:p-6 shadow-md w-full max-w-[500px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
                120 minutes
              </div>
              <div className="text-sm sm:text-base md:text-lg">
                Time you lose traveling on airlines{" "}
                <span className="text-[#999999]">per round trip</span>
              </div>
            </div>
          </div>

          {/* Right Column - InfoBoxes */}
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <div className="flex flex-col gap-8 w-full">
              <InfoBox
                timeRange="105–75 minutes"
                provider="Airlines"
                title={
                  <>
                    Congested terminals{" "}
                    <span className="text-[#999999]">and</span> drawn-out
                    security lines
                  </>
                }
                description={
                  <>
                    Time consuming{" "}
                    <span className="text-[#999999]">boarding</span>
                  </>
                }
                updatedTimeRange="15 minutes"
                updatedProvider="BLACK JET"
                updatedTitle="Private terminal boarding"
                finalMessage="Skip the queue"
              />

              <div className="flex justify-end w-full">
                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%]">
                  <InfoBox
                    timeRange="30-15 minutes"
                    provider="Airlines"
                    title={
                      <>
                        Prolonged disembarking{" "}
                        <span className="text-[#999999]">
                          from the airplane
                        </span>
                      </>
                    }
                    description={
                      <>
                        Time consuming{" "}
                        <span className="text-[#999999]">boarding</span>
                      </>
                    }
                    updatedTimeRange="15 minutes"
                    updatedProvider="BLACK JET"
                    updatedTitle="Private terminal boarding"
                    finalMessage="Skip the queue"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
