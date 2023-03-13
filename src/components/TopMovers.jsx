import React from "react";
import ptu from "../assets/ptu-token.png";
const TopMovers = () => {
  return (
    <div className="min-w-fit pt-4  hover:bg-slate-200 rounded-lg ">
      <div className="p-2 ">
        <div className="flex items-center">
          <img src={ptu} alt="ptu-token" width={40} />
          <p className="text-2xl font-bold text-center pl-2"> Pintu Token</p>
        </div>
        <p className="text-zinc-400 py-2">Rp. 10.400</p>
        <div className="text-green-500 text-2xl flex align-middle">
          <span className="text-lg pr-1">▲</span>
          <span className="font-medium">5.25%</span>
        </div>
      </div>
    </div>
  );
};

export default TopMovers;
