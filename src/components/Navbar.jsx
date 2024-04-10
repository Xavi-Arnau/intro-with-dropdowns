import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Dropdown from "./Dropdown";
import todoIcon from "../assets/icon-todo.svg";
import calendarIcon from "../assets/icon-calendar.svg";
import remindersIcon from "../assets/icon-reminders.svg";
import planningIcon from "../assets/icon-planning.svg";
import DropdownSlide from "./DropdownSlide";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const links1 = [
    { name: "Todo List", icon: todoIcon },
    { name: "Calendar", icon: calendarIcon },
    { name: "Reminders", icon: remindersIcon },
    { name: "Planning", icon: planningIcon },
  ];
  const links2 = [{ name: "History" }, { name: "Our Team" }, { name: "Blog" }];
  return (
    <div className="w-full flex flex-row justify-between items-center p-4 md:p-8">
      <div className="w-1/2 flex flex-row gap-10">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-6 text-mediumGray">
            <li>
              <Dropdown caption={"Features"} links={links1} />
            </li>
            <li>
              <Dropdown caption={"Features"} links={links2} />
            </li>
            <li className="hover:text-almostBlack cursor-pointer">
              <a>Careers</a>
            </li>
            <li className="hover:text-almostBlack cursor-pointer">
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex  flex-row gap-6">
        <button className="w-32 py-2 px-6 text-mediumGray hover:text-almostBlack">
          Login
        </button>

        <button className="w-32 border-2 border-mediumGray py-2 px-6 rounded-xl text-mediumGray hover:text-almostBlack hover:border-almostBlack">
          Register
        </button>
      </div>
      <div onClick={handleNav} className="block md:hidden z-30">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={
          nav
            ? "md:hidden w-2/3 bg-white z-20 fixed h-full top-[0px] right-[0px] ease-in duration-500"
            : "md:hidden w-2/3 bg-white z-20 fixed h-full top-[0px] right-[-100%] ease-in duration-500"
        }
      >
        <div className="p-10 flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            <li>
              <DropdownSlide caption={"Features"} links={links1} />
            </li>
            <li>
              <DropdownSlide caption={"Company"} links={links2} />
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
          <div className="p-4 w-full flex flex-col gap-4 items-center">
            <button className="w-48 py-2 px-6 text-mediumGray hover:text-almostBlack">
              Login
            </button>

            <button className="w-48 border-2 border-mediumGray py-2 px-6 rounded-xl text-mediumGray hover:text-almostBlack hover:border-almostBlack">
              Register
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden w-full inset-0 bg-black bg-opacity-70 z-10 fixed h-full ease-in-out duration-500"
            : "md:hidden w-full inset-0 bg-black bg-opacity-0 z-10 fixed h-full ease-in-out duration-500"
        }
      ></div>
    </div>
  );
};

export default Navbar;
