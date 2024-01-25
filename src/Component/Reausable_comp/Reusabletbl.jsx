import React from "react";
import { TiTick } from "react-icons/ti";
import { FaArrowDown } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

export default function Reusabletbl() {
  return (
    <div className=" mx-auto h-full max-h-[calc(100vh-359px)] w-full overflow-auto rounded-lg  border border-t border-gray-200">
      <table className="w-full whitespace-nowrap">
        <thead className="border-b border-gray-200 ">
          <tr className="sticky top-0 z-10 rounded-lg bg-gray-50 text-xs font-medium  text-gray-500">
            <th className="px-6 py-3.5 text-start flex gap-[10px] items-center">
              <input type="checkbox" className="h-[28px] w-28px]" />
              Sender ID Name <FaArrowDown />
            </th>
            <th className="px-6 py-3.5 text-start">Email</th>
            <th className="px-6 py-3.5 text-start">Assign</th>
            <th className="px-6 py-3.5 text-start">Date</th>
            <th className="px-6 py-3.5 text-start">Status</th>
            <th className="px-6 py-3.5 text-start"></th>
          </tr>
        </thead>
        {data.map((some) => (
          <tr className="border-b border-gray-200 text-sm font-normal leading-5">
            <td className="px-6 py-4 items-center flex gap-[10px]">
              {some.check}
              {some.name}
            </td>
            <td className="px-6 py-4">{some.email}</td>
            <td className="px-6 py-4 ">
              <div className={some.aclass}>{some.assign}</div>
            </td>
            <td className="px-6 py-4">{some.date}</td>
            <td className="px-6 py-4">
              <div className={some.sclass}>{some.status}</div>
            </td>
            <td className="px-6 py-4 flex items-center gap-[8px]">
              {some.icon1} {some.icon2}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

const data = [
  {
    name: "Rojit Dhakal",
    email: "rojitdhakal@gmail.com",
    assign: "Reseller",
    aclass: "w-fit bg-[#FDF2FA] text-[#C11574] px-[16px] py-[8px] rounded-full",
    date: "2.35/02/20",
    status: "Pending",
    sclass: "w-fit bg-[#FFFAEB] text-[#B54708] px-[16px] py-[8px] rounded-full",
    icon1: <TiTick />,
    icon2: <RxCrossCircled />,
    check: <input type="checkbox" className="h-[20px] w-20px]" />,
  },
  {
    name: "Rojit Dhakal",
    email: "rojitdhakal@gmail.com",
    assign: "Reseller",
    aclass: "w-fit bg-[#ECFDF3] text-[#027A48] px-[16px] py-[8px] rounded-full",
    date: "2.35/02/20",
    status: "Pending",
    sclass: "w-fit bg-[#FFFAEB] text-[#B54708] px-[16px] py-[8px] rounded-full",
    icon1: <TiTick />,
    icon2: <RxCrossCircled />,
    check: <input type="checkbox" className="h-[20px] w-20px]" />,
  },
  {
    name: "Rojit Dhakal",
    email: "rojitdhakal@gmail.com",
    assign: "Reseller",
    aclass: "w-fit bg-[#ECFDF3] text-[#027A48] px-[16px] py-[8px] rounded-full",
    date: "2.35/02/20",
    status: "Pending",
    sclass: "w-fit bg-[#FFFAEB] text-[#B54708] px-[16px] py-[8px] rounded-full",
    icon1: <TiTick />,
    icon2: <RxCrossCircled />,
    check: <input type="checkbox" className="h-[20px] w-20px]" />,
  },
];
