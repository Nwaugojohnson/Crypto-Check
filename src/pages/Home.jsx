import React from "react";
import { useNavigate } from "react-router-dom";
import img2 from "../assets/Secure-coins.png";
import { ArrowBigLeftDash } from "lucide-react";
import PromoBanner from "../components/PromoBanner";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className=" overflow-x-hidden max-auto bg-gradient-to-r from-blue-950 to-blue-700 h-[105vh] mt-[1rem]">
        <div className="flex flex-col items-center lg:flex-row py-5 px-[10%] gap-19">
          {/* Hero text */}
          <div className="flex-1 mb-[2rem]">
            {/* batch text */}
            <div className="bg-white/10 mb-6 rounded-full py-[-1] max-w-[895px] lg:w-[72%] w-[115%] flex items-center justify-center ml-[-1.5rem] px-[-2px] lg:px-0 lg:mr-0 lg:ml-0">
              <PromoBanner />
            </div>
            {/* tittle */}
            <h1 className="text-[32px] lg:text-[64px] font-bold leading-tight mb-10 text-white">
              Secure, Smart, and Easy Crypto Checking.
            </h1>
            <p className="max-w-[440px] leading-relaxed mb-12 text-white">
              Stay in control of your digital assests with our powerful crypto
              checking platform. Get real-time Upadates, track your porfolio,
              and verify transactions with ease.
            </p>

            <button
              onClick={() => navigate("/dashboard", { replace: true })}
              className="text-center px-10 py-5 font-medium text-gray-900 bg-white rounded-full hover:bg-orange-400 hover:text-white cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Hero image */}
          <div className="flex-1 mb-[4rem]">
            <img
              src={img2}
              alt=""
              className=" scale-160 lg:scale-130 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
