import React from "react";
import { TestimonialDes, TestimonialSection } from "../constants";
import ShowCase from "./ShowCase";
import styles from "../style";

const Testimonial = () => {
  return (
    <section className="pt-[12rem]">
      <div className="grid items-center grid-cols-custom_2 md:grid-rows-hero2 md:grid-cols-1 phone:gap-[2.4rem] md:justify-center">
        <div className="desSt:pr-[4.8rem] md:w-fit  md:text-center">
          <ShowCase
            description={TestimonialDes.description}
            titleText1={TestimonialDes.heading}
          />
          <button className={`${styles.btn} mt-[2.4rem]`}>
            {TestimonialDes.button}
          </button>
        </div>

        <div className="grid gap-[1.6rem]  phone:gap-[1.6rem] grid-cols-2 grid-rows-custom_testimonial vsm:flex vsm:flex-col vsm:items-center">
          {TestimonialSection.map((data, index) => (
            <div
              key={index}
              className={`w-[32.6rem] px-[1.9rem] bg-testiColor rounded-lg shadow-p4 ${
                data.positionCss
              } ${index % 2 === 0 ? "vsm:hidden" : ""}`}
            >
              <p className="font-poppins text-greyTertiary pt-[2.4rem] mb-[1.6rem] max-w-[30.8rem] leading-[1.5] text-[1.4rem] font-medium">
                {data.feedback}
              </p>
              <div className="flex items-center pb-[2.4rem] gap-[2.4rem]">
                <img
                  src={data.image}
                  className="rounded-full border-2 border-solid border-white"
                />
                <div>
                  <h6 className="font-poppins text-[1.6rem] font-medium text-greySecondary">
                    {data.name}
                  </h6>
                  <p className="font-poppins text-[1.4rem] mt-[0.4rem]font-normal text-greyTertiary">
                    {data.profession}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
