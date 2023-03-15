import React from "react";
const TopMovers = ({ price, movers, name, logo, keys }) => {
  return (
    <div className=" pt-4  hover:bg-slate-200 rounded-lg" key={keys}>
      <div className="p-2 ">
        <div className="flex items-center">
          <img src={logo} alt="ptu-token" className="inline w-12" />
          <p className="text-xl font-bold text-center pl-2">{name}</p>
        </div>
        <p className="text-zinc-400 py-2">{price}</p>
        <div
          className={`${
            movers >= 0 ? "text-green-500" : "text-red-500"
          } text-2xl flex align-middle`}
        >
          <span className="text-lg pr-1">▲</span>
          <span className="font-medium">{`${movers}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default TopMovers;
