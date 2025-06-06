import React, { useState, useEffect } from "react";

const PromoBanner = () => {
  const messages = [
    {
      badge: "75% SAVE",
      text: "For the Black Friday weekend",
    },
    {
      badge: "Limited Time!",
      text: "Subscribe today and save more",
    },
    {
      badge: "🔥 Hot Deal",
      text: "Don’t miss our summer discount!",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setIsAnimating(false);
      }, 600); // match with animation duration
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-12 w-full max-w-[600px] mx-auto">
      <div className="flex justify-center items-center w-full text-sm lg:text-center transition-all duration-500 mt-6">
        {/* Sliding Badge */}
        <div
          className={`absolute left-0 transition-transform duration-500 ease-in-out transform ${
            isAnimating
              ? "translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          } bg-white text-blue-950 rounded-full font-medium py-3 px-3 items-center`}
        >
          {messages[index].badge}
        </div>

        {/* Sliding Text */}
        <div
          className={`absolute right-0 transition-transform duration-500 ease-in-out transform ${
            isAnimating
              ? "-translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          } text-white p-[-7] lg:py-[3] px-[9] font-medium`}
        >
          {messages[index].text}
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
