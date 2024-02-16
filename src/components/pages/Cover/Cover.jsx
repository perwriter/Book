import React from "react";

const Cover = ({ coverImg, title }) => {
  const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh", // Set the height to full viewport height
  };

  return (
    <div className="relative overflow-hidden" style={coverImgStyle}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-outline-2">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cover;
