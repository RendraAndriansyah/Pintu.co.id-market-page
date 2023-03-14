import React from "react";
import ptu from "../assets/ptu-token.png";
const TopMovers = ({ price, movers, name, logo }) => {
  const handleLatestPrice = () => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
      .format(price)
      .slice(0, -3);
  };

  return (
    <div className="min-w-fit pt-4  hover:bg-slate-200 rounded-lg ">
      <div className="p-2 ">
        <div className="flex items-center">
          <img src={logo} alt="ptu-token" width={40} />
          <p className="text-2xl font-bold text-center pl-2">{name}</p>
        </div>
        <p className="text-zinc-400 py-2">{handleLatestPrice()}</p>
        <div className="text-green-500 text-2xl flex align-middle">
          <span className="text-lg pr-1">▲</span>
          <span className="font-medium">{`${movers}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default TopMovers;
