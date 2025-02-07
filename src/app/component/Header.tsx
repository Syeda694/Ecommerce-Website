"use client";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import { LanguageData } from "@/data/main/language";
import { CurrencyData } from "@/data/main/currency";
import { FiMenu } from "react-icons/fi";
export default function header() {
  const [open, setOpen] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
  return (
    <div>
      <div>
        <div className="w-full h-[44px] sm:h-auto gap-0 bg-[#7E33E0] flex text-[#F1F1F1] text-sm font-light ">
          <div className="hidden md:ml-[250px]  md:flex space-x-2">
            <img
              src="/uil_envelope-alt.png"
              alt="envelope"
              className="md:w-[17px] h-[13px] mt-4 gap-0"
            ></img>
            <div className="md:w-[171px] h-[16px] mt-3 gap-0">
              mhhasanul@gmail.com
            </div>
          </div>
          <div className=" hidden md:flex space-x-2">
            <img
              src="/phone-call-icon.png"
              alt="Phonecall Icon"
              className="mt-3 w-[15px] h-[15px] ml-8"
            ></img>
            <div className="w-[97px] h-[16px] mt-3 gap-0">(12345)67890</div>
          </div>

          <div
            className="relative cursor-pointer"
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
          >
            <div className="flex items-center ml-4  md:ml-[350px] mt-3 ">
              English
              <IoIosArrowDown />
            </div>
            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-36 rounded-lg text-black bg-white">
                <div className="box_shadow bg-zinc-50 p-7 h-[300px] sm:h-auto overflow-y-auto">
                  <h1 className="text-black font-bold text-left text-lg">
                    Languages
                  </h1>
                  {LanguageData.map((val) => (
                    <Link href={`/language/${val.id}`} key={val.id}>
                      <div className="py-1 px-1 text-sm text-black hover:text-gray-400 ">
                        {val.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative cursor-pointer"
            onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
          >
            <div className="flex items-center ml-3 mt-3 ">
              USD
              <IoIosArrowDown />
            </div>
            {showCurrencyMenu && (
              <div className="absolute right-0 mt-2 w-32 rounded-lg text-black bg-white">
                <div className="box_shadow bg-zinc-50 p-7 h-[300px] sm:h-auto overflow-y-auto">
                  <h1 className="text-black font-bold text-left text-lg">
                    Currency
                  </h1>
                  {CurrencyData.map((val) => (
                    <Link href={`/currency/${val.id}`} key={val.id}>
                      <div className="py-1 px-1 text-sm text-black hover:text-gray-400 ">
                        {val.text}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex">
            <h4 className="w-[43px] h-[16px] mt-3 ml-3">Login</h4>
            <img
              src="/carbon_user.png"
              alt="loginicon"
              className="h-[16px] w-[16px] mt-3"
            ></img>
          </div>
          <div className="flex">
            <h5 className="w-[58px] h-[16px] mt-3 ml-3 ">Wishlist</h5>
            <img
              src="/uil_heart-alt (2).png"
              alt="white heart"
              className="w-[16px] h-[16px] mt-4"
            ></img>
            <img
              src="/fluent_cart-24-regular (1).png"
              alt="shopping cart"
              className="w-[24px] h-[24px] mt-3 ml-28 md:ml-10"
            ></img>
          </div>
          <div className="block sm:hidden mt-3 ml-4">
            <FiMenu size={24} onClick={() => setOpen(true)} />
          </div>
        </div>
      </div>
      <nav>
        <div className="ml-5 w-full h-[12px] mt-7 md:ml-[250px] gap-0 bg-white mb-12 flex ">
          <div className="text-[#0D0E43] text-5xl font-semibold md:text-3xl">
            Hekto
          </div>
          <ul className="ml-[78px] flex space-x-5 mt-2 ">
            <div className="hidden md:flex">
              <Link
                href="/"
                className="w-[43px] [h-20px] gap-0 font-light text-sm text-[#FB2E86] hover:text-gray-600"
              >
                Home
              </Link>
              <img
                src="/akar-icons_chevron-down (1).png"
                alt="pink vector icon"
                className="h-[12px] w-[12px] mt-1"
              ></img>
            </div>
            <li className="hidden md:block w-41px h-20px gap-0 text-sm font-light text-[#0D0E43] hover:text-slate-500 ">
              <Link href="/About">About</Link>
            </li>
            <li className="hidden md:block w-[64px] h-[20px] gap-0 text-sm font-light text-[#0D0E43]  hover:text-slate-500">
              <Link href="/Products">Products</Link>
            </li>
            <li className="hidden md:block w-[32px] h-[20px] gap-0 text-sm font-light text-[#0D0E43]  hover:text-slate-500">
              <Link href="/Blog">Blog </Link>
            </li>
            <li className="hidden  md:block w-[36px] h-[20px] gap-0 text-sm font-light text-[#0D0E43]  hover:text-slate-500">
              <Link href="/Shop">Shop</Link>
            </li>
            <li className="hidden md:block w-[57px] h-[20px] gap-0 text-sm font-light text-[#0D0E43]  hover:text-slate-500">
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
          <div className="flex md:ml-[150px] h-[30px]">
            <input
              type="text"
              placeholder="Search..."
              className=" w-45 md:w-80 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
