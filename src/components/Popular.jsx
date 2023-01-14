import React from "react";
import { PopularServicesList, PopularSection } from "../constants";
import ShowCase from "./ShowCase";
import styles from "../style";

const Popular = () => {
  return (
    <section className="pt-[9.6rem]">
      <h2 className="font-poppins font-bold text-[7.3rem] text-greyPrimary text-center ssm:text-[5.2rem]">
        Popular <span className="text-secondary">Services</span>
      </h2>
      <div className="grid grid-cols-2 ssm:flex ssm:flex-col ssm:text-center md:grid-cols-auto2 md:gap-[4.8rem] mt-[8rem] items-center">
        <div className="grid gap-[4.8rem] ssm:gap-[2.4rem] ss:gap-[6.4rem]">
          {PopularServicesList.map((list, index) => (
            <div
              key={index}
              className="h-[12.5rem] vsm:w-[35rem] vsm:h-[8rem] w-[50rem] relative overflow-hidden rounded-xl"
            >
              <img
                src={list.image}
                className="absolute duration-[0.3s]  ease-linear transition-scale hover:scale-[1.05]"
              />
              <p className="text-[2.4rem] absolute top-1/2 left-1/2 -translate-y-1/2 w-full text-center -translate-x-1/2 text-dimWhite ">
                {list.service}
              </p>
            </div>
          ))}
        </div>
        <div>
          <ShowCase
            slogan={PopularSection.slogan}
            description={PopularSection.description}
            highlightText={`brand's${" "}`}
            titleText1={`Our logo design is a snap for your${" "}`}
            titleText2="image."
          />
          <button className={`${styles.btn} mt-[3rem]`}>
            {PopularSection.button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Popular;
