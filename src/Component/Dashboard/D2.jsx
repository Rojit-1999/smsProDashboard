import React from "react";
import { FiUsers, FiMessageSquare } from "react-icons/fi";
import { FaUserXmark } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { HiMiniSpeakerWave } from "react-icons/hi2";

export default function D2() {
  return (
    <div>
      <div className="flex justify-between items-center pt-[10px]   ">
        <div>
          <div className="text-text2 border-gray-200 border p-[20px] rounded-[12px]">
            Hey Rojit 👋
            <p>
              Welcome back to your personalized Dashboard. Check out charts,
              resources, and useful Ultimate SMS solutions tailored to your
              account.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[20px] mt-[20px]">
            {data.map((userdata) => (
              <div className="border border-gray-300 rounded-[12px] font-[500] p-[10px] text-text1 ">
                <div className="flex gap-[10px] items-center">
                  <div className="text-[24px] p-[8px] border border-gray-300 rounded-[12px]">
                    {userdata.icon}
                  </div>
                  {userdata.text}
                </div>

                <div className="flex items-center mt-[20px] justify-end gap-[30px] ">
                  <div className="text-[28px]  font-[600]">
                    {userdata.number1}
                  </div>
                  <div className="text-[24px] text-success flex items-center">
                    {userdata.icon2}
                    <div className="text-[16px] ml-[10px]">
                      {userdata.number2}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="w-[450px] h-[410px]  bg-gray-100 text-text2 flex flex-col items-center justify-center gap-[20px] rounded-[12px]">
            <div>
              <HiMiniSpeakerWave className="text-[220px] -rotate-12  bg-gray-300 rounded-full" />
            </div>
            <p className="text-center">
              {" "}
              Sorry, there are no new <br /> announcements yet. Check back later
            </p>
            {/* <img src={Img} alt=""  className="w-[800px]"/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    icon: <FiUsers />,
    icon2: <FaArrowUp />,
    text: "Total Users",
    number1: "100",
    number2: "40%",
  },
  {
    icon: <FiMessageSquare />,
    icon2: <FaArrowUp />,
    text: "Total Sent Message",
    number1: "5,256",
    number2: "40%",
  },
  {
    icon: <FiUsers />,
    icon2: <FaArrowUp />,
    text: "Total Group",
    number1: "50",
    number2: "40%",
  },
  {
    icon: <FaUserXmark />,
    icon2: <FaArrowUp />,
    text: "Total Blocklist",
    number1: "2,563",
    number2: "40%",
  },
];
