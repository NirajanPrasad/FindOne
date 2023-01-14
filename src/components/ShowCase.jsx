import React from "react";

const ShowCase = (props) => {
  return (
    <>
      <span className="uppercase font-poppins text-primary text-[1.6rem] font-bold">
        {props.slogan}
      </span>
      <h1
        className={`mt-[1.6rem] text-[5.2rem] md:text-[] font-poppins font-bold text-greyPrimary tracking-heroSpacing leading-1.1 `}
      >
        {props.titleText1}
        <span className="text-secondary"> {props.highlightText}</span>
        {props.titleText2}
      </h1>
      <p className="font-poppins mt-[2.4rem] text-[2rem] leading-normal font-normal text-greyLight w-[45rem] ssm:mx-auto ssm:px-[1.6rem] md:w-full">
        {props.description}
      </p>
    </>
  );
};

export default ShowCase;
