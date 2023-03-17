import React, { useState } from "react";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTelegram,
  TbBrandTwitter,
  TbBrandYoutube,
} from "react-icons/tb";
import logoText from "../assets/logo-text.png";
import licence from "../assets/license-bappebti.png";
import iso from "../assets/iso.png";

export const Footer = () => {
  // ~> handle expand responsive mobile
  const [showAddress, setShowAddress] = useState(true);
  const [showProduct, setShowProduct] = useState(true);
  const [showCompany, setshowCompany] = useState(true);

  return (
    <footer className="footer  pt-10  text-base-content">
      <div className="grid gap-y-5 lg:grid-cols-4">
        {/* SOCIAL MEDIA */}
        <div>
          <div>
            <img src={logoText} alt="logo-text" className="inline w-36     " />
          </div>
          <div className="flex space-x-4">
            <TbBrandInstagram size={25} />
            <TbBrandFacebook size={25} />
            <TbBrandTwitter size={25} />
            <TbBrandTelegram size={25} />
            <TbBrandYoutube size={25} />
          </div>
          <p className="font-semibold pt-20 text-base">Terdaftar dan diawasi</p>
          <div className="space-y-4">
            <img src={licence} alt="bappepti" className="w-52" />
            <div className="flex space-x-2">
              <img src={iso} alt="iso" className="w-10" />
              <img src={iso} alt="iso" className="w-10" />
            </div>
          </div>
        </div>

        {/* ALAMAT PERUSAHAAN */}
        <div className="space-y-6">
          <p
            className="font-semibold text-base text-slate-900 lg:pb-5"
            onClick={() => setShowAddress(!showAddress)}
          >
            Alamat perusahaan
          </p>
          <div className={`space-y-4 lg:inline `} hidden={showAddress}>
            <div className="">
              <h1 className="font-medium text-base text-slate-900">Kantor pusat</h1>
              <p className="text-slate-600 pr-20 text-sm">
                The City Tower Lantai 27 Jalan M.H Thamrin No.81, Jakarta Pusat, DKI
                Jakarta 10310 Indonesia
              </p>
            </div>

            <div>
              <h1 className="font-medium text-base text-slate-900">
                Operasional & Costumer Support
              </h1>
              <p className="text-slate-600 pr-20 text-sm">
                Rukan Permata Senayan Blok H1-H2 Jalan Tentara Pelajar, Jakarta Selatan
                DKI Jakarta 12210 Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* PRODUK */}
        <div>
          <div className="space-y-6">
            <p
              className="font-semibold text-base text-slate-900 lg:pb-5"
              onClick={() => setShowProduct(!showProduct)}
            >
              produk
            </p>
            <div
              className="text-base font-light text-slate-900 space-y-5 lg:inline "
              hidden={showProduct}
            >
              <a href="#" className="block">
                Produk
              </a>
              <a href="#" className="block">
                harga Crypto
              </a>
              <a href="#" className="block">
                Biaya Transaksi
              </a>
              <a href="#" className="block">
                OTC
              </a>
              <a href="#" className="block">
                FAQ
              </a>
              <a href="#" className="block">
                Blog
              </a>
            </div>
          </div>
        </div>

        {/* PERUSAHAAN */}
        <div>
          <div className="space-y-6">
            <p
              className="font-semibold text-base text-slate-900 lg:pb-5"
              onClick={() => setshowCompany(!showCompany)}
            >
              Perusahaan
            </p>
            <div
              className="text-base font-light text-slate-900 space-y-5 lg:inline "
              hidden={showCompany}
            >
              <a href="#" className="block">
                Tentang
              </a>
              <a href="#" className="block">
                Hubungi kami
              </a>
              <a href="#" className="block">
                Karier
                <span className="bg-blue-500 text-white font-medium ml-2 px-3 py-1 rounded-md">
                  We're hiring!
                </span>
              </a>
              <a href="#" className="block">
                Karier Engineering{" "}
                <span className="bg-blue-500 text-white font-medium ml-2 px-3 py-1 rounded-md">
                  We're hiring!
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-full w-full pt-10 space-y-2 text-xs lg:text-sm">
          <hr className="w-full" />
          <p className="font-semibold text-gray-400">
            © 2023 PT. Pintu Kemana Saja. All Rights Reserved.
          </p>
          <p className="text-gray-400">
            Perdagangan aset crypto merupakan aktivitas beresiko tinggi. Kinerja pada masa
            lalu tidak mencerminkan kinerja di masa depan. Kinerja historikal, expected
            return dan proyeksi probabilitas disediakan untuk tujuan informasi dan
            illustrasi. Semua keputusan perdagangan aset crypto merupakan keputusan
            independen oleh pengguna.
          </p>
          <div className="space-x-4 text-xs">
            <span href="#" className="underline text-gray-400">
              Syarat dan ketentuan
            </span>
            <span href="#" className="underline text-gray-400">
              Kebijakan Privasi
            </span>
            <span href="#" className="underline text-gray-400">
              Kebijakan Sistem Manajemen Keamanan Informasi dan Layanan Cloud
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
