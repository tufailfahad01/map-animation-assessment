import React from "react";

const LaunchCard = () => {
  return (
<div className="w-full max-w-xs sm:max-w-md md:max-w-md lg:max-w-lg mx-auto bg-[#949494]/[0.02] backdrop-blur-lg text-white p-4 sm:p-6 md:p-8 shadow-lg border border-gray-700 rounded-xl mt-10">


      <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center">
        BLACK JET
      </h1>

      <h2 className="font-hauora font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-[110%] sm:leading-[105%] md:leading-[100%] tracking-normal text-gray-300 mb-2 text-left">
        Launch Route
      </h2>

      <p className="font-hauora font-normal text-[16px] sm:text-[18px] leading-[100%] tracking-normal text-gray-400 text-left mb-6">
        Early 2027
      </p>

      <p className="mb-4 text-left text-sm sm:text-lg  font-bold font-hauora leading-tight">
        <span>
          Do you value your time
          <span className=" text-[#999999]"> and </span>
          convenience?
        </span>
      </p>

      <p className="mb-3 text-left text-sm sm:text-lg font-normal font-hauora leading-tight">
        <span className="text-[#999999]">
          {" "}
          Book your flight in seconds and{" "}
        </span>
        <span className="text-white font-normal">
          arrive 15 minutes before departure. In and out
        </span>
       <span className="text-[#999999]"> of the airport in{" "}</span> 
        <span className="text-white font-normal">minutes, not hours</span>
      </p>

      <p className="mb-8 text-left text-sm sm:text-lg font-normal font-hauora leading-tight">
     <span className="text-[#999999]">   Fly from private terminal lounges.{" "} </span>
        <span className="text-white font-semibold">No security lines</span> and
        no drawn out boarding procedures
      </p>

      <p className="mb-4 text-left text-sm sm:text-xl font-medium font-hauora leading-tight ">
        Regular flights between
      </p>

      <div className="flex justify-center items-center gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="text-white text-xs sm:text-base font-semibold font-hauora leading-tight py-2 px-0.5 sm:px-2 border border-white">
            Sydney
            <span className="text-[#999999]">(Bankstown)</span>
          </div>

          <span className="text-[#999999] text-[20px]">↔</span>

          <div className="text-white text-xs sm:text-base font-semibold font-hauora leading-tight py-2 px-0.5 sm:px-2 border border-white">
            Melbourne
            <span className="text-[#999999]">(Essendon)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;
