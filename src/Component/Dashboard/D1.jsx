import React from "react";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function D1() {
  return (
    <div>
      <div className="bg-white flex  justify-between py-[20px]">
        <div>
          <h1 className="font-[600] text-text1 text-[30px]">Dashboard</h1>
          <p className="text-text2 text-[18px] font-[400]">
            Here’s the summary of all your activities{" "}
          </p>
        </div>
        <div className="flex gap-[30px] items-center">
          <div className="text-text2 bg-gray-100 rounded-[14px] flex items-center justify-center p-[6px]">
            <HiOutlineCircleStack />
            <p>
              Available Credits{" "}
              <span className="font-[500] text-text1">500pts</span>
            </p>
          </div>
          <div className="border-[2px] border-gray-300 rounded-[14px] p-[6px] px-[10px]">
            <p className="flex items-center justify-center gap-[14px] font-[500] text-text1">
              Top up <MdKeyboardArrowRight />
            </p>
          </div>
        </div>

      </div>
      <div className="bg-gray-300 h-[2px] w-full rounded-full my-[10px]">

      </div>
    </div>
  );
}
