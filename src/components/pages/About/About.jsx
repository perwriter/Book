import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="I Can Work Wonders with My Skills"
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-900">
        <p>
        Welcome to my world of freelance expertise! With a background in virtual assistance, transcription, and web development, </p>{" "}
        <br />
        <p>
        I’m a freelancer, Crafting seamless user experiences and delivering impeccable work is my forte. Whether it’s converting designs into dynamic websites, transcribing with precision, or offering top-notch virtual support, I’ve got you covered. Let’s turn your ideas into digital reality.
        
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <MdFacebook className="social-btn" />
          <AiFillInstagram className="social-btn" />
          <AiFillGithub className="social-btn" />
          <AiFillLinkedin className="social-btn" />
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="https://perwriters.com/wp-content/uploads/2023/12/Peter-Macharia-Cv.pdf" className="primary-btn">
            Download Resume
          </a>
          <a href="Perwriter@gmail.com" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
