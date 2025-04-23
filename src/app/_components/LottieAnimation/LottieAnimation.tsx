"use client";

import { FC } from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  onComplete?: () => void;
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  className = "w-48 h-48",
  onComplete,
}) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      onComplete={onComplete}
    />
  );
};

export default LottieAnimation;
