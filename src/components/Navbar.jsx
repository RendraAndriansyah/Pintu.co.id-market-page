import React from "react";
import { AiOutlineProfile, AiOutlineTag } from "react-icons/ai";
import { BsCardImage, BsChat, BsSafe } from "react-icons/bs";
import { FaChartLine, FaHeadset } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi";
import { HiCodeBracket } from "react-icons/hi2";
import { RiLightbulbLine, RiSuitcaseFill } from "react-icons/ri";
import {
  TbBrandDiscord,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTelegram,
  TbBrandTwitter,
  TbBrandYoutube,
} from "react-icons/tb";

import indonesiaFlag from "../assets/indonesia.svg";
import logo from "../assets/logo-pintu.png";
import logoText from "../assets/logo-text.png";
export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-20">
      <div className="flex-none">
        <img src={logoText} alt="logo-text" className="w-36" />
      </div>
      <div className="justify-end navbar flex-initial ">
        <ul className="menu menu-horizontal px-10 space-x-8 z-10  ">
          {/* FITUR */}
          <li tabIndex={0}>
            <p className="hover:bg-inherit hover:text-slate-400">
              Fitur
              <span className="bg-red-500 rounded-lg text-white text-sm py-1 px-2">
                Baru
              </span>
            </p>

            {/* SUB-MENU FITUR */}
            <ul className="p-2 border shadow-sm border-t-0 font-bold bg-white ">
              <li>
                <div className="hover:bg-slate-100">
                  <FaChartLine size={20} />
                  <div>
                    <a className=" text-lg">Harga Cryptocurrency</a>
                    <p className="font-normal text-xs text-slate-500">
                      Pantau harga Bitcoin dan aset Crypto lainnya
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-slate-100">
                  <BsSafe size={20} />
                  <div>
                    <a className=" text-lg">Earn</a>
                    <p className="font-normal text-xs text-slate-500">
                      Simpan aset crypto, dapatkan bunga tiap jam
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-slate-100">
                  <AiOutlineTag size={20} />
                  <div>
                    <a className=" text-lg">Biaya Transaksi</a>
                    <p className="font-normal text-xs text-slate-500 ">
                      Lihat biaya transaksi, tarik rupiah, dan kirim
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-slate-100">
                  <FaHeadset size={20} />
                  <div>
                    <a className=" text-lg">OTC</a>
                    <p className="font-normal text-xs text-slate-500 ">
                      Layanan personal dengan harga khusus untuk transaksi
                      <br /> dengan jumlah besar
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>

          {/* PTU */}
          <li>
            <a className="hover:bg-inherit hover:text-slate-400">PTU</a>
          </li>

          {/* EDUKASI */}
          <li tabIndex={0}>
            <a className="hover:bg-inherit hover:text-slate-400">Edukasi</a>

            {/* SUB-MENU EDUKASI */}
            <ul className="p-2 border shadow-sm border-t-0 font-bold bg-white">
              <li>
                <div className="hover:bg-slate-100">
                  <img src={logo} alt="logo" className="w-6" />
                  <div className=" pr-3">
                    <a className=" text-lg">Tentang</a>
                    <p className="font-normal text-xs text-slate-500">
                      Jelajahi dunia crypto bersama pintu
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-slate-100">
                  <RiLightbulbLine size={25} />
                  <div>
                    <a className=" text-lg">Pintu Academy</a>
                    <p className="font-normal text-xs text-slate-500">
                      Kumpulan artikel untuk bantu kamu memahami
                      <br />
                      crypto dengan lebih gampang
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-slate-100">
                  <BsChat size={20} />
                  <div>
                    <a className=" text-lg">FAQ</a>
                    <p className="font-normal text-xs text-slate-500 ">
                      Informasi seputar crypto dan cara menggunakan
                      <br /> aplikasi pintu
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>

          {/* IKUTI KAMI */}
          <li tabIndex={0}>
            <a className="hover:bg-inherit hover:text-slate-400">Ikuti Kami</a>
            {/* SUB-MENU IKUTI KAMI */}
            <ul className="p-2 border shadow-sm border-t-0 font-bold bg-white">
              <li>
                <div className="hover:bg-slate-100">
                  <TbBrandTelegram size={25} />
                  <div>
                    <a className=" text-lg">Telegram</a>
                    <p className="font-normal text-xs text-slate-500">@pintuindonesia</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-slate-100">
                  <TbBrandTwitter size={25} />
                  <div>
                    <a className=" text-lg">Twitter</a>
                    <p className="font-normal text-xs text-slate-500">@pintuID</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-slate-100">
                  <TbBrandInstagram size={25} />
                  <div>
                    <a className=" text-lg">Instagram</a>
                    <p className="font-normal text-xs text-slate-500">@pintu_id</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-slate-100">
                  <TbBrandYoutube size={25} />
                  <div>
                    <a className=" text-lg">Youtube</a>
                    <p className="font-normal text-xs text-slate-500">
                      Pintu - Aplikasi Jual Beli Cryptocurrency
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-slate-100">
                  <TbBrandFacebook size={25} />
                  <div>
                    <a className=" text-lg">Facebook</a>
                    <p className="font-normal text-xs text-slate-500">pintucypto</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-slate-100">
                  <TbBrandDiscord size={25} />
                  <div>
                    <a className=" text-lg">Discord</a>
                    <p className="font-normal text-xs text-slate-500">pintuindonesia</p>
                  </div>
                </div>
              </li>
            </ul>
          </li>

          {/* BLOG & NEWS */}
          <li tabIndex={0}>
            <a className="hover:bg-inherit hover:text-slate-400">Blog & News</a>

            {/* SUB-MENU BLOG & NEWS */}
            <ul className="p-2 border shadow-sm border-t-0 font-bold bg-white">
              <li>
                <div className="hover:bg-slate-100">
                  <AiOutlineProfile size={25} />
                  <div className=" pr-3">
                    <a className=" text-lg">Pintu Blog</a>
                    <p className="font-normal text-xs text-slate-500">
                      Kumpulan artikel crypto, keuangan, dan informasi <br />
                      terbaru terkait Pintu
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-slate-100">
                  <HiOutlineNewspaper size={25} />
                  <div>
                    <a className=" text-lg">Pintu News</a>
                    <p className="font-normal text-xs text-slate-500">
                      Temukan update berita terkini tentang crypto,
                      <br />
                      Blockchain, hingga NFT
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-slate-100">
                  <BsCardImage size={20} />
                  <div>
                    <a className=" text-lg">Pintu Press Kit</a>
                    <p className="font-normal text-xs text-slate-500 ">
                      Temukan logo resmi, foto, dan kumpulan press release
                      <br /> Pintu untuk materi promosi di sini.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          {/* KARIER */}
          <li tabIndex={0}>
            <p className="hover:bg-inherit hover:text-slate-400">Karier</p>

            {/* SUB-MENU FITUR */}
            <ul className="p-2 border shadow-sm border-t-0 font-bold right-1 bg-white">
              <li>
                <div className="hover:bg-slate-100">
                  <RiSuitcaseFill size={20} />
                  <div>
                    <a className=" text-lg ">
                      karier
                      <span className="ml-2 bg-blue-600 rounded-lg text-white text-sm py-1 px-2">
                        We're hiring
                      </span>
                    </a>
                    <p className="font-normal text-xs text-slate-500">
                      Temukan Pekerjaan impianmu di sini
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="hover:bg-slate-100">
                  <HiCodeBracket size={20} />
                  <div>
                    <a className=" text-lg">
                      Karier Engineering
                      <span className="ml-2 bg-blue-600 rounded-lg text-white text-sm py-1 px-2">
                        We're hiring
                      </span>
                    </a>
                    <p className="font-normal text-xs text-slate-500">
                      Bergabung dengan tim Engineering kami menciptakan
                      <br />
                      platform blockchain yang canggih.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>

          {/* LANGUAGE */}
          <li tabIndex={0}>
            <div className="hover:bg-inherit ">
              <img src={indonesiaFlag} alt="indonesia-flag" className="w-9 shadow-md " />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
