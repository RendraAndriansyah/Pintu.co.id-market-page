import React from "react";
const TopMovers = ({ price, movers, name, logo, keys }) => {
  return (
    <div className=" pt-4  hover:bg-slate-200 rounded-lg  w-32 lg:w-auto " key={keys}>
      <div className="p-2 ">
        <div className="flex items-center ">
          <img src={logo} alt="ptu-token" className="flex-none w-10 lg:w-10" />
          <p className="text-sm lg:text-lg font-bold text-center pl-2 text-inherit">
            {name}
          </p>
        </div>
        <p className="text-zinc-400 py-2">{price}</p>
        <div
          className={`${
            movers >= 0 ? "text-green-500" : "text-red-500"
          } text-xl lg:text-2xl flex align-middle`}
        >
          <span className="text-lg pr-1">▲</span>
          <span className="font-medium">{`${movers}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default TopMovers;
