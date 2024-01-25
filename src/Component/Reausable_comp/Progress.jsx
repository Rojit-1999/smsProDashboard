import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function Progress({percentage, text, width}) {
  return (
    <div>
      <div>
        <div className={`p-[20px] border border-gray-300 rounded-[12px] flex gap-[26px] items-center `}>
          <CircularProgressbar
            // value={(remaining / total) * 100}
            // strokeWidth={strokeWidth}
            // text={`${(remaining / total) * 100}%`}
            value={`${percentage}`}
            strokeWidth={`${width}`}
            // text={`${text}%`}
            className="h-[200px] w-[200px] text-[20px] font-[500] text-text2 "
            styles={buildStyles({
              pathColor: "#12B76A",
              textColor: "black",
              trailColor: "#F2F4F7",
              strokeLinecap: "round",
            })}
          />


          <div className="flex flex-col gap-[20px] text-text2">
            <div>
              <p>Total</p>
              <p className="font-[500] text-text1"> 1000</p>
            </div>
            <div>
              <p>Remaining</p>
              <p className="font-[500] text-text1"> 1000</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
