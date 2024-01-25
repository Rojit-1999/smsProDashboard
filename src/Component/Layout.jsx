import React from "react";
import smspro from "../Assets/Image/Logo.png";
import { MdCode } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdHomeFilled, MdLogout } from "react-icons/md";
import { FiPlus} from "react-icons/fi";
import { LuUsers, LuUser } from "react-icons/lu";
import { HiChip, HiChartPie } from "react-icons/hi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { FaCode } from "react-icons/fa6";
import { RiSettings5Line } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { Link } from "react-router-dom";
import Profiles from "./Reausable_comp/Profiles";
function Layout() {
  return (
    <div className="w-[320px] bg-primary text-white flex flex-col  ">
      <div className="flex justify-between mx-[20px] items-center py-[20px]">
        <div className="flex items-center gap-4">
          <img src={smspro} alt="" className="h-[44px] w-[68px]" />
          <div>
            <h1>SMSPro</h1>
            <h1>www.SMSPro.com</h1>
          </div>
        </div>
        <MdCode className="w-[30px] h-[30px] rounded-full text-white bg-secondary p-[6px]" />
      </div>
      <div className="flex flex-col items-center justify-center pt-[30px] pb-[20px]">
        <button className="flex items-center border bg-secondary outline-none border-none py-[5px] mx-[20px] pl-[5px] rounded-[8px]">
          <IoSearch className="text-[25px]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-secondary focus:outline-none placeholder:text-white placeholder:text-[20px] pl-[5px] pr-[40px]"
          />
        </button>
      </div>
      <div className="pb-[20px] h-[500px]  ">
        {data.map((item) => (
          <Link to={item.link}>
          <div className="flex justify-between items-center mx-[35px] mt-[15px]">
            <div className="flex items-center gap-4 text-[16px]">
              <div className="text-[22px]">{item.icon1}</div>
              <div>{item.text}</div>
            </div>
            <div className="text-[20px]">{item.icon2}</div>
          </div>
          </Link>
        ))}
      </div>
      <div className="bg-secondary rounded-tl-[20px] px-[20px]  w-full ">
        <div>
          {data1.map((item) => (
            <div className="flex items-center gap-4 mx-[15px] pt-[20px]">
              <div className="text-[22px]">{item.icon}</div>
              <div className="text-[16px]">{item.text}</div>
            </div>
          ))}
          <div className="border border-x-0 border-t-0 my-[12px]"></div>
     
          {/* <div className="flex items-center justify-between pb-[10px]">
            <div className="flex items-center gap-4">
              <img
                src={Hero}
                alt=""
                className="w-[40px] rounded-full object-cover h-[40px]"
              />
              <div>
                <p>Prince Acharya</p>
                <div className="flex items-center text-[12px]">
                  <p>Client</p>
                  <span>
                    <GoDotFill className="text-[10px]" />
                  </span>
                  <p> Availbale</p>
                </div>
              </div>
            </div>
            <div>
              <MdLogout className="text-[25px] text-gray-300" />
            </div>
          </div> */}
          <Profiles 
          icon={<MdLogout className="text-[25px] text-gray-300" />}/>
          <div className=" pb-[20px] text-[12px] font-[300]">
            <p>Copyright @ - 2023 SMSPro</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
const data = [
  {
    icon1: <MdHomeFilled />,
    text: "Dashboard",
    link:'/dashboard'
  },
  {
    icon1: <LuUser />,
    text: "Users",
    icon2: <FiPlus />,
    link:'/users'
  },

  {
    icon1: <HiChip />,
    text: "Messaging ",
  },
  {
    icon1: <LuUsers />,
    text: "Automation",
    icon2: <FiPlus />,
  },
  {
    icon1: <HiOutlineSpeakerWave />,
    text: "Announcement",
  },
  {
    icon1: <HiChartPie />,
    text: "Report",
    icon2: <FiPlus />,
  },
  {
    icon1: <FaCode />,
    text: "Developer API",
  },
];
const data1 = [
  {
    icon: <RiSettings5Line />,
    text: "Settings",
  },
  {
    icon: <FaRegQuestionCircle />,
    text: "Support Center",
  },
  {
    icon: <BsStack />,
    text: "Logs",
  },
];