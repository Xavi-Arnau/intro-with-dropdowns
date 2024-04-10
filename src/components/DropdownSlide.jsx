import React, { useState } from "react";
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

const DropdownSlide = ({ caption, links }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div onClick={handleClick}>
      <div className="flex flex-row items-center gap-1">
        <a className="hover:text-almostBlack">{caption}</a>
        {isVisible ? <AiOutlineUp size={14} /> : <AiOutlineDown size={14} />}
      </div>
      <div
        className={
          isVisible
            ? " bg-white  text-sm ease-in duration-500"
            : " ease-in duration-500 hidden"
        }
      >
        <ul className="flex flex-col gap-4 p-4">
          {links.map((item) => (
            <li key={item.name} className="flex flex-row gap-4 items-center">
              {item.icon ? <img src={item.icon} alt="" /> : null}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownSlide;
