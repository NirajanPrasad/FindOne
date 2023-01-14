import { data } from "autoprefixer";
import React from "react";
import { CTASection } from "../constants";
import styles from "../style";

const CTA = () => {
  return (
    <section className="pt-[12rem] ssm:px-[2.4rem]">
      <div className="relative rounded-md grid bg-ctaBg h-[30.5rem] w-full  items-center sm:grid-cols-2 md:px-[1.2rem]">
        <div className="sm:pl-[4.8rem]">
          <h3 className="font-poppins text-[3.2rem] font-semibold text-greyPrimary leading-1.1">
            {CTASection.heading}
          </h3>
          <p className="font-poppins text-greyTertiary font-medium mt-[1.6rem] text-[1.6rem] leading-[1.5]">
            {CTASection.paragraph}
          </p>
          <button className={`${styles.btn} mt-[1.6rem]`}>
            {CTASection.button}
          </button>
        </div>

        <div className="justify-self-center ssm:hidden">
          <img src={CTASection.image} />
        </div>
      </div>
    </section>
  );
};

export default CTA;
