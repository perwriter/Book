import React from "react";
import personImg from "../../../assets/peter.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow p-4 md:p-10">
        <div className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-center">
          {/* image-container */}
          <div className="text-center md:mr-10">
            <img src={personImg} alt="" className="w-[200px] mx-auto md:w-[300px]" />
          </div>
          {/* text-container */}
          <div className="text-center md:text-left md:w-1/2">
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                I'm Peter
              </p>
              <p className="text-black/75">Front End Developer</p>
              <p className="text-black/75">
              I am a dedicated freelancer from Nairobi, Kenya, passionate about my work. I take great pride in my commitment and enthusiasm for every project I undertake.
              </p>
              <a
                className="inline-block primary-btn"
                href="perwriters@gmail.com"
              >
                {" "}
                Hire me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
