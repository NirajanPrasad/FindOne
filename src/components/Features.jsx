import React from "react";
import { FeatureSection } from "../constants";
import { featuresImg } from "../assets";

const Features = () => {
  return (
    <section className="pt-[12rem]">
      <div className="sm:grid ssm:px-[1.4rem] grid-cols-2 items-center">
        <div className="grid gap-[2.4rem]">
          <h3 className="text-[2.8rem] leading-[1.3] font-poppins font-semibold text-greyPrimary">
            Platform that helps freelancers and businesses to find, connect, and
            transact with one another
          </h3>

          {FeatureSection.map((data, index) => (
            <div key={index}>
              <div className="flex items-center gap-[1.2rem] mb-[1.2rem]">
                <i className="fa-regular fa-circle-check fa-xl text-greySecondary"></i>
                <h4 className="font-poppins text-[1.6rem] font-medium text-greySecondary">
                  {data.heading}
                </h4>
              </div>
              <p className="text-[1.6rem] font-poppins leading-[1.5] text-greyTertiary">
                {data.description}
              </p>
            </div>
          ))}
        </div>

        <div className="ssm:hidden">
          <img src={featuresImg} alt="working person" className=" ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default Features;
