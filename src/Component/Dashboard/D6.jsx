import React from "react";
import Linegraph from "../Reausable_comp/Dgraph/Linegraph";

function D6() {
  return (
    <div className="py-[20px]">
      <div className="font-medium">
        Outgoing SMS History of current month
        <div className="w-full mt-[20px] rounded-[12px] border-[2px]">
          <Linegraph />
        </div>
      </div>
    </div>
  );
}

export default D6;
