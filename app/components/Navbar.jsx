import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="background color"
          className="w-full"
        />
      </div>

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top">
          <Image
            alt="logo"
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
        bg-white shadow-sm bg-opacity-50"
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="moon icon" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden font-Ovo lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact{" "}
            <Image alt="arrow_icon" src={assets.arrow_icon} className="w-3" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
