import React from "react";
import D1 from "./D1";
import Dnav from "../Reausable_comp/Dnav";
import D2 from "./D2";
import D3 from "./D3";
import D4 from "./D4";
import D5 from "./D5";
import D6  from "./D6";

function Dashboard() {
  return (
    <div>
      <Dnav />
      <div className="px-[50px] bg-white">
        <D1 />
        <D2 />
        <D3 />
        <D4 />
        <D5 />
        <D6 />
       
      </div>
    </div>
  );
}

export default Dashboard;
