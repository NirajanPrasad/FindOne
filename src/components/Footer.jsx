import React from "react";
import { FooterLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <div className="m-auto xl:w-[1260px] mt-[4.8rem] lg:w-[1120px] md:px-[2.4rem]">
      <div className="grid grid-cols-4 grid-rows-auto4 mb-[2.4rem] ">
        {FooterLinks.map((link, index) => (
          <div key={index} className={`${link.CssClass} pl-[7rem] vsm:pl-0`}>
            <h6 className="font-poppins text-[1.6rem] font-semibold mb-[1.6rem] text-greySecondary">
              {link.title}
            </h6>
            <ul className="grid gap-[0.8rem]">
              {link.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="/"
                    className="font-poppins text-greyTertiary transition-all duration-[0.2s] ease-linear text-[1.6rem] hover:text-onHover active:text-onHover hover:pl-[0.5rem] active:pl-[0.5rem]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full h-[1px] bg-borderLight mt-[3.2rem] mb-[2.4rem] col-start-1 -col-end-1"></div>

      <div className="flex justify-between mx-[2.4rem] vsm:flex-col-reverse">
        <div className="flex items-center gap-[0.8rem] col-start-1 col-end-3 text-[2.4rem]">
          <p className="font-poppins text-onHover text-[1.4rem] mb-[2.4rem]">
            &copy; 2022 - FindOne Ltd. All rights reserved
          </p>
        </div>

        <ul className="flex items-center gap-[1.6rem] text-onHover text-[1.4rem] mb-[2.4rem]">
          {socialMedia.map((data, index) => (
            <li key={data.id}>
              <a
                href={data.link}
                className={`${data.iconCss} transition-colors duartion-[0.3s] ease-linear hover:text-greyTertiary`}
              ></a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="fa-solid fa-globe fa-xl text-onHover hover:text-greyTertiary transition-colors duartion-[0.3s] ease-linear"
            ></a>
          </li>
          <p className="font-poppins font-medium text-onHover text-[1.4rem]">
            English
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
