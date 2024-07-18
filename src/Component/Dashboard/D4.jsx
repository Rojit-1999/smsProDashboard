import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Reusabletbl from "../Reausable_comp/Reusabletbl";

function D4() {
  return (
    <div className="py-[50px] ">
      <div className="">
        <div className="flex justify-between font-[500] items-center p-[20px]">
          <h1>Sender ID Requests</h1>
          <button className="flex gap-[14px] items-center border px-[24px] py-[12px] rounded-[14px] ">View all <IoIosArrowForward />  </button>
        </div>
        <Reusabletbl />
      </div>
    </div>
  );
}

export default D4;
