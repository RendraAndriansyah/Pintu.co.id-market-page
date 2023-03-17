import React from "react";
import BrandAmbassador from "../assets/brand-ambassador.png";
import BrandAmbassadorMobile from "../assets/brand-ambassador-mobile.png";

export const BannerBottom = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between bg-blue-500 w-full  h-auto lg:h-56 rounded-t-3xl mt-48  text-white ">
      <div className="  text-center lg:text-start rounded-t-3xl  w-full p-8 lg:p-10 space-y-2 ">
        <h1 className="text-3xl font-semibold">Mulai Investasi Sekarang</h1>
        <p>Daftar dalam hitungan menit, langsung mulai investasi</p>
        <button className="rounded-lg bg-white text-blue-500 text-md font-medium px-20 lg:px-12 py-2">
          Download Sekarang
        </button>
      </div>
      <div className="w-full relative flex justify-center">
        <div>
          <img
            src={BrandAmbassador}
            alt="brand-ambassador"
            className="h-96 absolute bottom-0 right-10 hidden lg:inline  "
          />
        </div>
        <img
          src={BrandAmbassadorMobile}
          alt="brand-ambassador"
          className="h-64  lg:hidden -mt-5 "
        />
      </div>
    </div>
  );
};
