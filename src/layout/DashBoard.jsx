import React, { useContext, useEffect, useState } from "react";
import MainDash from "../pages/MainDash";
import { Outlet } from "react-router-dom";
import bgimg from "../assets/bgimage.jpg";
import { CoinContext } from "../Context/CoinContext";
import PromoBanner from "../components/PromoBanner";

const DashBoard = () => {
  const { allCoin, currency } = useContext(CoinContext);

  const [displayCoin, setDisplayCoin] = useState([]);

  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLocaleLowerCase());
    });
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="pb-[3rem]">
  {/* Hero Section */}
  <div
    className="relative lg:h-[110vh] h-[100vh] w-full bg-cover bg-center bg-no-repeat lg:rounded-b-[150px] flex items-center justify-center"
    style={{ backgroundImage: `url(${bgimg})` }}
  >

    {/* Transparent gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-transparent lg:rounded-b-[150px]"></div>

    {/* Hero content */}
    <div className="relative z-10 max-w-[2000px] w-full flex flex-col items-center justify-center text-center gap-6 px-4 lg:ml-[-47rem] mb-5 lg:mb-30">
      <h1 className="lg:text-[4rem] text-[3.1rem] text-center lg:text-left font-bold leading-tight text-white mt-[2rem] ">
        Largest Crypto
        <br />
        Marketplace
      </h1>

      <p className="max-w-[440px] leading-relaxed text-white lg:text-left text-center lg:ml-[-2.5rem]">
        Stay in control of your digital assets with our powerful crypto
        checking platform. Get real-time updates, track your portfolio, and
        verify transactions with ease.
      </p>

      <form
        onSubmit={searchHandler}
        className="relative z-10 flex items-center w-full max-w-[400px] bg-white rounded-md p-2 text-[16px] gap-3 mt-[1rem] ml-auto lg:ml-[-5rem]"
      >
        <input
          onChange={inputHandler}
          value={input}
          type="text"
          placeholder="Search crypto"
          className="flex-1 text-[16px] outline-none border-none pl-2 text-black w-30  "
        />
        <button
          type="submit"
          className="bg-blue-950 text-white text-[13px] px-6 py-2 rounded-md cursor-pointer"
        >
          Search
        </button>
      </form>

      <Outlet />
    </div>
  </div>

      {/* Coin Table */}
      <div className="max-w-[1000px] mx-auto relative mt-[3rem] text-white">
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1.5fr] `lg:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1.5fr]` p-4 items-center border-b border-white">
          <p>Rank</p>
          <p>Coins</p>
          <p>Symbol</p>
          <p>Current Price</p>
          <p className="text-center">Price Change</p>
          <p className="text-right">Market Cap</p>
        </div>

        {displayCoin.slice(0, 12).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1.5fr] `lg:grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1.5fr]` p-4 items-center border-b border-white last:border-none"
          >
            <p>{item.market_cap_rank}</p>
            <div className="flex items-center gap-3">
              <img src={item.image} alt="" className="w-[35px]" />
              <p>{item.name}</p>
            </div>
            <p>{item.symbol}</p>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={`${
                item.price_change_percentage_24h === -1.0
                  ? "text-[#ff4646]" // Red for -1.0%
                  : item.price_change_percentage_24h === 2.0
                  ? "text-green-500" // Green for 2.0%
                  : item.price_change_percentage_24h > 0
                  ? "text-[#0dc422]"
                  : "text-[#ff4646]"
              } text-center`}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100} %
            </p>

            <p className="text-right">
              {currency.symbol} {item.market_cap}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
