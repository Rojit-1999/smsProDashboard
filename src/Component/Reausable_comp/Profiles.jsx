import React from 'react'
import { GoDotFill } from "react-icons/go";
import Hero from "../../Assets/Image/girl.jpeg";


function Profiles({icon, className}) {
  return (
    <div>
      <div className= {`flex items-center justify-between ${className} pb-[10px]`}>
            <div className="flex items-center gap-4">
              <img
                src={Hero}
                alt=""
                className="w-[40px] rounded-full object-cover h-[40px]"
              />
              <div>
                <p>Barsa Rahut</p>
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
             {icon}
            </div>
          </div>
    </div>
  )
}

export default Profiles
