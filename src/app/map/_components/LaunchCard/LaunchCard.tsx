import React from 'react';

const LaunchCard = () => {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-lg mx-auto bg-black text-white p-4 sm:p-6 md:p-8 shadow-lg border border-gray-700 mt-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center">BLACK JET</h1>
      
      <h2 className="font-hauora font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-[110%] sm:leading-[105%] md:leading-[100%] tracking-normal text-gray-300 mb-4 text-left">
  Launch Route
</h2>

<p className="font-hauora font-normal text-[16px] sm:text-[18px] leading-[100%] tracking-normal text-gray-400 text-left mb-6">
  Early 2027
</p>




<p className="mb-4 text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold font-hauora leading-tight">
  <span>Do you value your time and convenience?</span>
</p>



      
<p className="mb-3 text-left text-sm sm:text-base md:text-lg font-normal font-hauora] leading-tight">
  Book your flight in seconds and <span className="text-white font-semibold">arrive 15 minutes before departure</span>.<br />
  In and out of the airport in <span className="text-white font-semibold">minutes, not hours</span>
</p>

      

<p className="mb-3 text-left text-sm sm:text-base md:text-lg font-normal font-hauora] leading-tight">
        Fly from private terminal lounges. <span className="text-white font-semibold">No security lines</span> and
        no drawn out boarding procedures
      </p>

      <p className="mb-3 text-center text-sm sm:text-base md:text-lg font-normal font-['Hauora'] leading-tight">
  Book your flight in seconds and <span className="text-white font-semibold">arrive 15 minutes before departure</span>.<br />
  In and out of the airport in <span className="text-white font-semibold">minutes, not hours</span>
</p>

<p className="mb-3 text-center text-sm sm:text-base md:text-lg font-normal font-hauora leading-tight">
  Book your flight in seconds and <span className="text-white font-semibold">arrive 15 minutes before departure</span>.<br />
  In and out of the airport in <span className="text-white font-semibold">minutes, not hours</span>
</p>



      <div className="flex justify-center items-center gap-2 flex-wrap">
        <div className="bg-gray-800 text-white text-sm sm:text-base py-1 px-3 rounded-full">
          Sydney <span className="text-gray-400">(Bankstown)</span>
        </div>
        <span className="text-gray-500">↔</span>
        <div className="bg-gray-800 text-white text-sm sm:text-base py-1 px-3 rounded-full">
          Melbourne <span className="text-gray-400">(Essendon)</span>
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;
