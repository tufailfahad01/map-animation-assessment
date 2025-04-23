import React from 'react';

interface AirlineDelayCardProps {
  timeRange: string;
  category: string;
  title: string;
  subtitle: string;
}

const AirlineDelayCard: React.FC<AirlineDelayCardProps> = ({
  timeRange,
  category,
  title,
  subtitle,
}) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[254px] h-auto bg-[#949494]/[0.02] backdrop-blur-lg border border-[#94949480] rounded-md p-3 sm:p-4 flex flex-col justify-between text-white relative font-hauora">
      <div>
        <div className="flex justify-between text-xs sm:text-sm mb-2">
          <span className="text-[#FF0000] font-bold text-base sm:text-lg">{timeRange}</span>
          <span className="text-[#D82222] font-extrabold text-lg sm:text-xl">{category}</span>
        </div>
        <div className="text-base sm:text-lg font-medium">{title}
        <span className="text-[#B3B3B3] text-base sm:text-lg font-[500]"> {subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default AirlineDelayCard;
