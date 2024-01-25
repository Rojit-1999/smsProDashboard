import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloudDownloadOutline, IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Reusabletbl from "../Reausable_comp/Reusabletbl";

function D5() {
  return (
    <div>
      <div className="">
        <div className="flex justify-between font-[500] items-center p-[20px]">
          <button className="flex items-center border px-[20px] py-[10px] gap-[10px] rounded-[12px] font-[400]">
            <IoSearch  className="text-text2 text-[20px]"/>
            <input type="text" placeholder="Search" className="outline-none " />
          </button>
          <div className="flex items-center gap-[20px]">
            <button className="flex gap-[14px] items-center bg-primary text-white px-[24px] py-[12px] rounded-[14px] ">
              <FaPlus />
              Create Ticket
            </button>
            <button className="flex gap-[14px] items-center border px-[24px] py-[12px] rounded-[14px] ">
              <IoCloudDownloadOutline />
              Export
            </button>
          </div>
        </div>
          <Reusabletbl />
      </div>
    </div>
  );
}

export default D5;
