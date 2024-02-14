import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import Profiles from "./Profiles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Dnav() {
  return (
    <div className= {`w-ful bg-[#F7F7F7] p-[16px] rounded-tl-[14px]`}>
      <div className="w-ful bg-[#F7F7F7] flex gap-[30px] justify-end items-center mr-[50px] ">
        <div className="relative">
          <IoIosNotificationsOutline className="text-[28px]" />
          <div className="bg-red-500 h-[5px] w-[5px] absolute top-0 right-[0px] rounded-full"></div>
        </div>
        <div>
          <Profiles
            className={`gap-[20px]`}
            icon={<MdOutlineKeyboardArrowDown />}
          />
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
