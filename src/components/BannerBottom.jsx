import React from "react";
import BrandAmbassador from "../assets/brand-ambassador.png";

export const BannerBottom = () => {
  return (
    <div className="bg-blue-500 w-full h-56 rounded-t-3xl mt-48 flex justify-between p-5 text-white relative ">
      <div className="justify-self-center p-5 space-y-4">
        <h1 className="text-3xl font-semibold">Mulai Investasi Sekarang</h1>
        <p>Daftar dalam hitungan menit, langsung mulai investasi</p>
        <button className="rounded-lg bg-white text-blue-500 text-md font-medium px-10 py-2">
          Download Sekarang
        </button>
      </div>
      <div>
        <img
          src={BrandAmbassador}
          alt="brand-ambassador"
          className="h-96 absolute bottom-0 right-24 "
        />
      </div>
    </div>
  );
};
