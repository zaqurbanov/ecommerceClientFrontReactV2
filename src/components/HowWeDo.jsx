import React from "react";

import img1 from "../assets/howwedo1.webp";
import img2 from "../assets/how we do2.webp";
import SectionName from "./SectionName";
import { FcApproval } from "react-icons/fc";

const HowWeDo = () => {
  return (
    <div className="p-16 max-md:p-2 bg-black flex flex-wrap max-md:flex-col max-md:gap-6">
      <div className="flex-grow flex-shrink basis-1/2 flex gap-5 ">
        <img
          src={img1}
          alt=""
          className="max-w-52 max-h-52 max-md:w-full max-md:min-w-full object-cover w-full h-full rounded-lg max-md:h-80 max-md:min-h-80 "
        />
        <img
          src={img2}
          alt=""
          className="max-w-52 max-h-52 max-md:hidden relative translate-y-[-50px] rounded-lg"
        />
      </div>

      <div className="flex-grow flex-shrink basis-[45%] flex flex-col text-white gap-5 max-md:text-sm ">
        <SectionName name={"How We Do"} />

        <h1 className="font-semibold text-4xl max-md:text-2xl">
          From Pixels To Play: Sharing Our Story
        </h1>

        <p className="">
          With hardware, tools are what enable a person to install, remove, or
          perform other actions on the components within their computer.
        </p>
        <ul className="flex flex-col gap-4">
          <li className="flex items-start gap-2">
            {" "}
            <FcApproval className="w-6 h-6" />
            our gaming offerings cater to your every desire
          </li>
          <li className="flex items-start gap-2">
            {" "}
            <FcApproval className="w-6 h-6" />
            forge lasting friendships with like-minded gamers who share your
            passion and enthusiasm
          </li>
          <li className="flex items-start gap-2">
            {" "}
            <FcApproval className="w-6 h-6" />
            Join us in fostering a vibrant and inclusive gaming culture that
            celebrates diversity and empowers players to connect, compete, and
            grow
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowWeDo;
