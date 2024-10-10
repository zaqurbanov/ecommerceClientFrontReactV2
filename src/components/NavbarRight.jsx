import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MyCartNav from "./MyCartNav";
import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { button } from "@material-tailwind/react";
import { logOutUser } from "../ReduxSlicers/userSlice";

const NavbarRight = ({ setIsMobile }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHovered = () => {
    setIsHovered((prev) => (prev = !prev));
  };

  const isActiveUser = useSelector((state) => state.user.isActive);
  const dispatch = useDispatch();
const handleLogoutUser = ()=>{
  setIsHovered(false)
  dispatch(logOutUser())
}
  return (
    <div className="flex justify-center items-center gap-3 ">
      <div className="relative ">
        <CgProfile
          className="cursor-pointer transition-all"
          onClick={() => handleHovered()}
        />

        {isHovered && (
          <div className="absolute z-40 right-[100%] top-[120%] rounded-xl bg-white p-6 text-black  transition-all  animate-fa ">
            {isActiveUser && (
              <div className="flex flex-col gap-5">
                <button
                  onClick={() => handleLogoutUser()  }
                  className="p-2 text-nowrap bg-orange-600 text-white rounded-lg"
                >
                  Log out
                </button>
                <NavLink
                  to={"/profile"}
                  
                  className={
                    "text-sm text-nowrap p-2 rounded-lg bg-blue-500 text-white"
                  }
                  onClick={()=>setIsHovered(false)}
                >
                  My Profile
                </NavLink>
              </div>
            )}
            {!isActiveUser && (
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/login"
                  className="p-2 text-nowrap bg-orange-600 text-white rounded-lg"
                  onClick={()=>setIsHovered(false)}
                >
                  {" "}
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={
                    "text-sm text-nowrap p-2 rounded-lg bg-blue-500 text-white"
                  }
                  onClick={()=>setIsHovered(false)}
                >
                  {" "}
                  Register
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>
      <MyCartNav />
      <GiHamburgerMenu
        className="hidden mr-4  max-md:block cursor-pointer"
        onClick={() => {
          setIsMobile(true);
        }}
      />
    </div>
  );
};

export default NavbarRight;
