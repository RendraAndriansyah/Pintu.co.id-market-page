import React from "react";
import ptu from "../assets/ptu-token.png";
const TopMovers = () => {
  return (
    <div className="w-48 pt-4 hover:bg-slate-200 rounded-lg">
      <div className="p-2 ">
        <div className="flex justify-between">
          <img src={ptu} alt="ptu-token" width={50} />
          <p className="text-xl font-bold"> Pintu Token</p>
        </div>
        <p className="text-zinc-500 py-2">Rp. 10.400</p>
        <div className="text-green-500 text-2xl flex  align-middle">
          <span className="text-lg pr-1">▲</span>
          <span>5.25%</span>
        </div>
      </div>
    </div>
  );
};

export default TopMovers;
