import React from "react";

export const TableContent = ({
  name,
  currencyGroup,
  logo,
  latestPrice,
  dailyPrice,
  weeklyPrice,
  monthlyPrice,
  yearlyPrice,
}) => {
  return (
    <>
      <td className="flex items-center justify-between">
        <div className="flex items-center space-x-2 justify-between">
          <img src={logo} alt="ptu-token" className="w-8 " />
          <div className="">
            <p className="font-medium">{name}</p>
            <p className="text-zinc-400 lg:hidden ">{currencyGroup}</p>
          </div>
        </div>
        <p className="text-zinc-400  hidden lg:inline ">{currencyGroup}</p>
      </td>
      <td className="font-semibold text-base hidden lg:table-cell  ">{latestPrice}</td>
      <td>
        <div className={dailyPrice <= 0 ? "text-red-500" : "text-green-500"}>
          <div className="text-end lg:text-center">
            <p className="font-semibold text-base text-slate-900 lg:hidden">
              {latestPrice}
            </p>
            <span className="text-lg pr-1">{dailyPrice <= 0 ? "▼" : "▲"}</span>
            <span className="font-medium">{`${dailyPrice}%`}</span>
          </div>
        </div>
      </td>
      <td className="hidden lg:table-cell">
        <div className={weeklyPrice <= 0 ? "text-red-500" : "text-green-500"}>
          <span className="text-lg pr-1">{weeklyPrice <= 0 ? "▼" : "▲"}</span>
          <span className="font-medium">{`${weeklyPrice}%`}</span>
        </div>
      </td>
      <td className="hidden lg:table-cell">
        <div className={monthlyPrice <= 0 ? "text-red-500" : "text-green-500"}>
          <span className="text-lg pr-1">{monthlyPrice <= 0 ? "▼" : "▲"}</span>
          <span className="font-medium">{`${monthlyPrice}%`}</span>
        </div>
      </td>
      <td className="hidden lg:table-cell">
        <div className={yearlyPrice <= 0 ? "text-red-500" : "text-green-500"}>
          <span className="text-lg pr-1 font-bold">{yearlyPrice <= 0 ? "▼" : "▲"}</span>
          <span className="font-medium">{`${yearlyPrice}%`}</span>
        </div>
      </td>
    </>
  );
};
