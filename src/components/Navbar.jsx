import { React, useState } from "react";
import { logo, menu, close } from "../assets";
import { NavLinks, NavProfile } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center justify-between ssm:px-[1.2rem]">
      <img src={logo} alt="findone" className="w-[18.7rem] h-[7.5rem]" />
      <ul className="sm:flex hidden w-[540px] md:w-[350px] justify-between">
        {NavLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins text-[1.6rem]`}>
            <a
              className="hover:text-primary text-greyTertiary font-medium tracking-[0.15px]"
              href={`${nav.id}`}
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:flex hidden w-[240px] md:w-[220px] items-center justify-between">
        <a className="font-poppins text-[1.6rem] cursor-pointer hover:text-primary text-greyTertiary font-medium tracking-[0.15px]">
          {NavProfile.title1}
        </a>
        <button
          className={`font-poppins text-[1.6rem] tracking-[0.15px] ${styles.btn}`}
        >
          {NavProfile.title2}
        </button>
      </div>

      <div className="sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[35px] cursor-pointer h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 px-[2.4rem] bg-secondary absolute top-[7rem] right-0 mx-4 rounded-xl `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1  gap-[2.4rem]">
            {NavLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px]  text-white hover:text-dimWhite`}
              >
                <a href="/">{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
