import React from "react";
import { BsChatSquareDots } from "react-icons/bs";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className="flex justify-between px-4 py-2">
      <div className="flex items-center">
        <BsChatSquareDots
          size={30}
          className="text-[var(--primary-dark)] mr-1"
        />
        <h1 className=" uppercase text-[1rem] font-bold text-gray-700">
          Weekaway
        </h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-2">
          <AiOutlineClockCircle
            size={20}
            className="text-[var(--primary-dark)] mr-1"
          />
          <p className="text-sm text-gray-700">9AM - 5PM</p>
        </div>

        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="text-[var(--primary-dark)] mr-1" />
          <p className="text-sm text-gray-700">+91 9876543210</p>
        </div>
        <button className="text-sm">Get a Free Quote</button>
      </div>
    </div>
  );
};

export default TopBar;
