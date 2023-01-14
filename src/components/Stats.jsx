import React from "react";
import { StatsData } from "../constants";

const Stats = () => {
  return (
    <section className="relative mt-[4.8rem] h-[10.5rem] border-t border-borderLight sm:px-[8rem] ssm:px-[0.8rem] flex ssm:text-center justify-between items-center md:mt-[6.4rem]">
      {StatsData.map((stat, index) => (
        <div key={index}>
          <h2 className="ssm:text-[2.4rem] font-poppins font-semibold text-center text-[3.2rem] mb-[-0.8rem] text-greySecondary">
            {stat.data}
          </h2>
          <p className="font-poppins ssm:text-[1.6rem] text-[2rem] text-greyLight">
            {stat.service}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
