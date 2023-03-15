import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsBank, BsDatabase, BsLayersFill, BsLayersHalf, BsStars } from "react-icons/bs";
import { GrGamepad } from "react-icons/gr";
import { RiGamepadLine, RiScalesFill } from "react-icons/ri";
import { TbArrowsRightLeft, TbReportMoney } from "react-icons/tb";

export const Category = () => {
  return (
    <div className="flex place-content-start gap-5 pt-5 overflow-auto">
      {/* TERBARU */}
      <div className="flex items-center bg-blue-50 rounded-md ">
        <div className="flex text-blue-600 p-2">
          <BsStars size={20} />
          <p className="text-sm font-medium pl-1">Terbaru</p>
        </div>
      </div>
      {/* DeFi */}
      <div className="flex items-center bg-blue-50 rounded-md">
        <div className="flex text-blue-600 p-2 items-center">
          <p>
            <BsBank size={20} />
          </p>
          <p className="text-sm font-medium pl-1">DeFi</p>
        </div>
      </div>
      {/* NFT/Gaming */}
      <div className="flex items-center bg-blue-50 rounded-md">
        <div className="flex text-blue-600 p-2">
          <RiGamepadLine size={20} />
          <p className="text-sm font-medium pl-1">NFT/Gaming</p>
        </div>
      </div>
      {/* CEX */}
      <div className="flex items-center bg-blue-50 rounded-md">
        <div className="flex text-blue-600 p-2">
          <AiOutlineFundProjectionScreen size={20} />
          <p className="text-sm font-medium pl-1">CEX</p>
        </div>
      </div>
      {/* DEX */}
      <div className="flex items-center bg-blue-50 rounded-md">
        <div className="flex text-blue-600 p-2">
          <TbArrowsRightLeft size={20} />
          <p className="text-sm font-medium pl-1">DEX</p>
        </div>
      </div>
      {/* layer-1 */}
      <div className="flex items-center bg-blue-50 rounded-md">
        <div className="flex text-blue-600 p-2">
          <BsLayersHalf size={20} />
          <p className="text-sm font-medium pl-1">Layer-1</p>
        </div>
      </div>
      {/* Infrastructure */}
      <div className="flex items-center bg-blue-50 rounded-md">
        <div className="flex text-blue-600 p-2">
          <BsDatabase size={20} />
          <p className="text-sm font-medium pl-1">Infrastructure</p>
        </div>
      </div>
      {/* Lending */}
      <div className="flex items-center bg-blue-50 rounded-md">
        <div className="flex text-blue-600 p-2">
          <TbReportMoney size={20} />
          <p className="text-sm font-medium pl-1">Lending</p>
        </div>
      </div>
      {/* Layer-2 */}
      <div className="flex items-center bg-blue-50 rounded-md">
        <div className="flex text-blue-600 p-2">
          <BsLayersFill size={20} />
          <p className="text-sm font-medium pl-1">Layer-2</p>
        </div>
      </div>
      {/* Ecosistem Stablecoin */}
      <div className="flex items-center bg-blue-50 w-fit rounded-md">
        <div className="flex text-blue-600 p-2">
          <RiScalesFill size={20} />
          <p className="text-sm font-medium pl-1">Ecosistem Stablecoin </p>
        </div>
      </div>
    </div>
  );
};
