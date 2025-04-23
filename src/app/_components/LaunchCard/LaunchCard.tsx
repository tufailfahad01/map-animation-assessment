import React from "react";
const LaunchCard = () => {
  return (
    <div className="w-full max-w-[342px] sm:max-w-[358px] md:max-w-[440px] lg:max-w-[532px] bg-[#949494]/[0.02] backdrop-blur-lg text-white p-4 sm:p-6 md:p-8 shadow-lg border-[1px] border-[#94949480] rounded-xl ">
      <h1 className="text-2xl xs:text-[16px] font-extrabold mb-4 text-center">
        BLACK JET
      </h1>
      <h2 className="font-hauora font-semibold text-[16px] sm:text-[24px] md:text-[32px] lg:text-[36px] leading-[110%] sm:leading-[105%] md:leading-[100%] tracking-normal text-gray-300 mb-2 text-left">
        Launch Route
      </h2>
      <p className="font-hauora font-normal text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[100%] tracking-normal text-[#999999] text-left mb-6">
        Early 2027
      </p>
      <p className="mb-4 text-left text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px]  font-bold font-hauora leading-tight">
        <span>
          Do you value your time
          <span className=" text-[#999999]"> and </span>
          convenience?
        </span>
      </p>
      <p className="mb-3 text-left text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-normal font-hauora leading-tight">
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
      <p className="mb-4 text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium font-hauora leading-tight ">
        Regular flights between
      </p>
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex items-center gap-1">
          <div className="text-white text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px]  font-semibold font-hauora leading-tight py-2 px-0.5 sm:px-2 border border-[#7A7A7A] rounded-[3px]">
            Sydney
            <span className="text-[#999999] text-[12px] md:text-[16px] lg:text-[18px]">(Bankstown)</span>
          </div>

          <span className="text-[#999999] text-[20px]">↔</span>

          <div className="text-white text-xs sm:text-base font-semibold font-hauora leading-tight py-2 px-0.5 sm:px-2 border border-[#7A7A7A] rounded-[3px]">
            Melbourne
            <span className="text-[#999999] text-[12px] md:text-[16px] lg:text-[18px]">(Essendon)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LaunchCard;