import React from "react";
import ptuToken from "../assets/ptu-token.png";

export const TableContent = () => {
  return (
    <>
      <tr className="border-l border-r border-b rounded-md hover:cursor-pointer">
        <td className="rounded-2xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src={ptuToken} alt="ptu-token" className="w-8" />
              <span className="font-medium">Pintu Token</span>
            </div>
            <span className="text-zinc-400 ">PTU</span>
          </div>
        </td>
        <td className="font-semibold text-base">Rp 14.966</td>
        <td>
          <div className="text-green-500 flex items-center">
            <span className="text-lg pr-1">▲</span>
            <span className="font-medium">2.25%</span>
          </div>
        </td>
        <td>
          <div className="text-green-500 flex items-center">
            <span className="text-lg pr-1">▲</span>
            <span className="font-medium">7.16%</span>
          </div>
        </td>
        <td>
          <div className="text-green-500 flex items-center">
            <span className="text-lg pr-1">▲</span>
            <span className="font-medium">12.65%</span>
          </div>
        </td>
        <td>
          {" "}
          <div className="text-green-500 flex items-center">
            <span className="text-lg pr-1">▲</span>
            <span className="font-medium">35.88%</span>
          </div>
        </td>
      </tr>
    </>
  );
};
