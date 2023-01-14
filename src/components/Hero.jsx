import React from "react";
import { HeroSection } from "../constants";
import styles from "../style";
import { heroImg } from "../assets";
import ShowCase from "./ShowCase";

const Hero = () => {
  return (
    <section className="mt-[4.8rem] sm:grid grid-cols-2 ssm:text-center ">
      <div className="m-auto ">
        <ShowCase
          slogan={HeroSection.slogan}
          description={HeroSection.description}
          highlightText={`business${" "}`}
          titleText1={`Hire the most skilled one for${" "}`}
          titleText2="growth"
        />
      </div>
      <div className=" col-start-1 ">
        <div className="flex gap-[2rem] mt-[3rem] items-center ssm:flex-col-reverse">
          <button className={`${styles.btn}`}>{HeroSection.button}</button>
          <form className="bg-[#eef8ff] rounded-xl h-[4.8rem] w-[35rem] relative">
            <input
              className="bg-transparent w-full h-full text-greySecondary font-poppins rounded-xl text-[16px] outline-0 block px-[2.4rem]"
              placeholder="search freelance work"
              type="text"
            />
            <button
              className="bg-transparent flex items-center justify-center absolute top-1/2 right-[1.6rem] h-[25px] w-[25px] border-none cursor-pointer text-tertiary -translate-y-1/2"
              type="submit"
            >
              <i className=" fa-solid fa-magnifying-glass fa-xl" />
            </button>
          </form>
        </div>

        <div className="mt-[2.4rem] flex flex-row gap-[1.6rem] ssm:justify-center">
          <span
            className={`${styles.heroTag} flex items-center bg-tagBg1 text-tagColor1`}
          >
            Developer
          </span>
          <span
            className={`${styles.heroTag} flex items-center bg-tagBg2 text-tagColor2`}
          >
            Editor
          </span>
          <span
            className={`${styles.heroTag} flex items-center bg-tagBg3 text-tagColor3`}
          >
            Designer
          </span>
        </div>
      </div>

      <div className="ssm:absolute ssm:opacity-0 row-start-1 col-start-2 row-end-3 md:mt-auto md:ml-auto">
        <img
          src={heroImg}
          alt="A person illustration showing his freelancing skills"
        />
      </div>
    </section>
  );
};

export default Hero;
