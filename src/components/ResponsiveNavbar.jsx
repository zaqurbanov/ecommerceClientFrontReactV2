import { motion } from "framer-motion";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ResponsiveNavbar = ({ isMobile, setIsMobile }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isMobile ? "0" : "100%" }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      exit={{x:'100%'}}
      className={` md:hidden absolute top-0 h-screen bg-slate-100 w-full z-20`}
    >
      <div className="h-10 bg-blue-400  p-3 flex justify-start items-center">
        <IoCloseOutline
          className="size-8 font-extrabold cursor-pointer"
          onClick={() => setIsMobile(false)}
        />
      </div>
      <nav className="flex flex-col p-4 gap-4 text-[#838383]">
        <Link to="/" className="" onClick={() => setIsMobile(false)}>
          Home
        </Link>
        <Link to="/product" onClick={() => setIsMobile(false)}>
          Product
        </Link>
        <Link to="/contact" onClick={() => setIsMobile(false)}>
          Contact
        </Link>
        <Link to="/faq" onClick={() => setIsMobile(false)}>
          Faq
        </Link>
      </nav>
    </motion.div>
  );
};

export default ResponsiveNavbar;
