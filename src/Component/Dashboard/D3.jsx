import { Circle, Line } from "rc-progress";
import React from "react";
import { FaCircle } from "react-icons/fa";
import Progress from "../Reausable_comp/Progress";

function D3() {
  return (
    <div className=" flex justify-between flex-wrap items-center  mt-[25px] ">
      <Progress 
      percentage={70}
      text={70}
      width={20}/>
      <Progress 
      percentage={60}
      width={10}
      text={60}/>
      <Progress 
      percentage={90}
      width={10}
      text={90}/>
      
    </div>
  );
}

export default D3;

// const items = [
//   {
//     heading: "SMS Reports",
//     bar: (
//       <Circle
//         strokeColor={"#D92D20"}
//         percent={20}
//         strokeLinecap="round"
//         strokeWidth={20}
//         trailWidth={20}
//         className="h-[170px] w-[170px]"
//       />
//     ),
//     icon: <FaCircle />,
//     text: "Failed",
//     icon1: <FaCircle />,
//     text2: "Deliverd",
//   },
//   {
//     heading1: "Contact Groups",
//     bar1: (
//       <Circle
//         strokeColor={"#D92D20"}
//         percent={50}
//         strokeLinecap="round"
//         strokeWidth={10}
//         trailWidth={20}
//         className="h-[170px] w-[170px]"
//       />
//     ),
//     textt: "Total",
//     numberr: "10,000",
//     textt2: "Remaining",
//     number2: "10,000",
//   },
//   {
//     heading1: "Max Groups",
//     bar1: (
//       <Circle
//         strokeColor={"#D92D20"}
//         percent={50}
//         strokeLinecap="round"
//         strokeWidth={10}
//         trailWidth={20}
//         className="h-[170px] w-[170px]"
//       />
//     ),
//     textt: "Total",
//     numberr: "10,000",
//     textt2: "Remaining",
//     number2: "10,000",
//   },
// ];
