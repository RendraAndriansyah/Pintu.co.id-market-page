import React, { useState } from "react";
import { AiOutlineProfile, AiOutlineTag } from "react-icons/ai";
import { BsCardImage, BsChat, BsSafe, BsSafe2Fill } from "react-icons/bs";
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
  const [showMenu, setShowMenu] = useState(false);
  const [isFiturExpanded, setIsFiturExpanded] = useState(false);
  const [isEdukasiExpanded, setIsEdukasiExpanded] = useState(false);
  const [isIkutiKamiExpanded, setisIkutiKamiExpanded] = useState(false);
  const [isBlogNewsExpanded, setisBlogNewsExpanded] = useState(false);
  const [isKarierExpanded, setisKarierExpanded] = useState(false);
  return (
    <div className="flex bg-base-100 justify-between lg:px-20">
      {/* LOGO */}
      <div className="flex-none">
        <img src={logoText} alt="logo-text" className="w-[8em] lg:w-[10em] " />
      </div>

      {/* MENU */}
      <div className="navbar lg:justify-end">
        <ul className="menu menu-horizontal px-10 space-x-4 z-10  hidden lg:flex ">
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
                        We&apos;re hiring
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
                        We&apos;re hiring
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

      {/* MOBILE */}
      <div className="flex items-center lg:hidden">
        <div className="dropdown dropdown-end">
          <label className="btn btn-square bg-transparent hover:bg-inherit border-0 swap swap-rotate">
            <input type="checkbox" onClick={() => setShowMenu(!showMenu)} />

            <svg
              className="swap-off "
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on "
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <div hidden={!showMenu}>
            <ul
              tabIndex={0}
              className="menu w-screen dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
            >
              {/* FITUR */}
              <li tabIndex={0}>
                <button
                  className="justify-between"
                  onClick={() => setIsFiturExpanded(!isFiturExpanded)}
                >
                  <span className="flex items-center">
                    Fitur
                    <span className="badge bg-red-500 border-none text-white rounded-md ml-2">
                      Baru
                    </span>
                  </span>
                  <svg className="ml-2" width="18" height="10" viewBox="0 0 18 10">
                    <path
                      d="M1 1l7.633 8L17 1"
                      stroke="#0A57FF"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              {isFiturExpanded && (
                <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
                  <li>
                    <span>
                      <FaChartLine size={20} className="fill-black" />
                      <a className="font-bold text-lg">
                        Harga Cryptocurrency
                        <p className="font-thin text-xs py-1">
                          Pantau harga Bitcoin dan aset Crypto lainnya
                        </p>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <BsSafe2Fill size={20} className="fill-black" />
                      <a className="font-bold text-lg">
                        Earn
                        <span className="badge bg-red-400 border-none text-white rounded-md mx-1">
                          Baru
                        </span>
                        <p className="font-thin text-xs py-1">
                          Simpan aset Crypto, dapatkan bunga tiap jam
                        </p>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <AiOutlineTag size={20} className="fill-black" />
                      <a className="font-bold text-lg">
                        Biaya Transaksi
                        <p className="font-thin text-xs py-1">
                          Lihat biaya trading, tarik Rupiah, dan kirim aset crypto
                        </p>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <FaHeadset size={20} className="fill-black" />
                      <a className="font-bold text-lg">
                        OTC
                        <p className="font-thin text-xs py-1">
                          Layanan personal dengan harga khusus untuk transaksi dengan
                          jumlah besar
                        </p>
                      </a>
                    </span>
                  </li>
                </ul>
              )}

              {/* PTU */}
              <li tabIndex={0}>
                <a>PTU</a>
              </li>

              {/* EDUKASI */}
              <li tabIndex={0}>
                <button
                  className="justify-between"
                  onClick={() => setIsEdukasiExpanded(!isEdukasiExpanded)}
                >
                  <span className="flex items-center">Edukasi</span>
                  <svg className="ml-2" width="18" height="10" viewBox="0 0 18 10">
                    <path
                      d="M1 1l7.633 8L17 1"
                      stroke="#0A57FF"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              {isEdukasiExpanded && (
                <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
                  <li>
                    <span>
                      <img src={logo} alt="logo" className="w-6" />
                      <a className="font-bold text-lg">
                        Tentang
                        <p className="font-thin text-xs py-1">
                          Jelajahi dunia crypto bersama Pintu
                        </p>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <RiLightbulbLine size={20} />
                      <a className="font-bold text-lg">
                        Pintu Academy
                        <p className="font-thin text-xs py-1">
                          Kumpulan artikel untuk bantu kamu memahami crypto dengan lebih
                          gampang
                        </p>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <BsChat size={20} className="fill-black" />
                      <a className="font-bold text-lg">
                        FAQ
                        <p className="font-thin text-xs py-1">
                          Informasi seputar crypto dan cara menggunakan aplikasi Pintu
                        </p>
                      </a>
                    </span>
                  </li>
                </ul>
              )}

              {/* ikuti kami */}
              <li tabIndex={0}>
                <button
                  className="justify-between"
                  onClick={() => setisIkutiKamiExpanded(!isIkutiKamiExpanded)}
                >
                  <span className="flex items-center">Ikuti Kami</span>
                  <svg className="ml-2" width="18" height="10" viewBox="0 0 18 10">
                    <path
                      d="M1 1l7.633 8L17 1"
                      stroke="#0A57FF"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              {isIkutiKamiExpanded && (
                <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
                  <li>
                    <span>
                      <TbBrandTelegram size={20} />
                      <a className="font-bold text-lg">
                        Telegram
                        <p className="font-thin text-xs py-1">@pintuindonesia</p>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <TbBrandTwitter size={20} />
                      <a className="font-bold text-lg">
                        Twitter
                        <p className="font-thin text-xs py-1">@pintuID</p>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <TbBrandInstagram size={20} />
                      <a className="font-bold text-lg">
                        Instagram
                        <p className="font-thin text-xs py-1">@pintu_id</p>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <TbBrandYoutube size={20} />
                      <a className="font-bold text-lg">
                        Youtube
                        <p className="font-thin text-xs py-1">
                          Pintu - Aplikasi jual beli cryptocurrency
                        </p>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <TbBrandFacebook size={20} />
                      <a className="font-bold text-lg">
                        Facebook
                        <p className="font-thin text-xs py-1">pintucrypto</p>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <TbBrandDiscord size={20} />
                      <a className="font-bold text-lg">
                        Discord
                        <p className="font-thin text-xs py-1">pintuindonesia</p>
                      </a>
                    </span>
                  </li>
                </ul>
              )}

              {/* blog & news */}
              <li tabIndex={0}>
                <button
                  className="justify-between"
                  onClick={() => setisBlogNewsExpanded(!isBlogNewsExpanded)}
                >
                  <span className="flex items-center">Blog & News</span>
                  <svg className="ml-2" width="18" height="10" viewBox="0 0 18 10">
                    <path
                      d="M1 1l7.633 8L17 1"
                      stroke="#0A57FF"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              {isBlogNewsExpanded && (
                <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
                  <li>
                    <span>
                      <AiOutlineProfile size={20} />
                      <a className="font-bold text-lg">
                        Pintu Blog
                        <p className="font-thin text-xs py-1">
                          Kumpulan artikel crypto, keuangan, dan informasi terbaru terkait
                          pintu
                        </p>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <HiOutlineNewspaper size={20} />
                      <a className="font-bold text-lg">
                        Pintu News
                        <p className="font-thin text-xs py-1">
                          Temukan berita update terkini tentang Crypto, blockchain, hingga
                          NFT!
                        </p>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <BsCardImage size={20} className="fill-black" />
                      <a className="font-bold text-lg">
                        Pintu Press Kit
                        <p className="font-thin text-xs py-1">
                          Temukan logo resmi, foto, dan kumpulan press release <br />
                          Pintu untuk materi promosi disini
                        </p>
                      </a>
                    </span>
                  </li>
                </ul>
              )}

              {/* Karier */}
              <li tabIndex={0}>
                <button
                  className="justify-between"
                  onClick={() => setisKarierExpanded(!isKarierExpanded)}
                >
                  <span className="flex items-center">Karier</span>
                  <svg className="ml-2" width="18" height="10" viewBox="0 0 18 10">
                    <path
                      d="M1 1l7.633 8L17 1"
                      stroke="#0A57FF"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              {isKarierExpanded && (
                <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
                  <li>
                    <span>
                      <RiSuitcaseFill size={20} className="fill-black" />
                      <a className="font-bold text-lg">
                        Karier
                        <span className="badge bg-blue-700 border-none text-white rounded-md mx-1">
                          We&apos;re Hiring!
                        </span>
                        <p className="font-thin text-xs py-1">
                          Temukan pekerjaan impianmu disini
                        </p>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <HiCodeBracket size={20} className="fill-black" />
                      <a className="font-bold text-lg">
                        Karier Engineering
                        <span className="badge bg-blue-700 border-none text-white rounded-md mx-1">
                          We&apos;re Hiring!
                        </span>
                        <p className="font-thin text-xs py-1">
                          Bergabung dengan tim engineering kami menciptakan <br />
                          platform blockchain yang canggih
                        </p>
                      </a>
                    </span>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
