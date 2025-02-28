import React from "react";
import { Button } from "@mui/material";

function MyWorks() {
  return (
    <div>
      <h3 className="font-bold mb-4">Իմ աշխատած գումարը</h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="w-full h-[64px] border border-[EFF0F6] bg-[#F9F9F9] rounded-[20px] px-4 flex-jsb-c">
          <h3 className="font-bold">Ընդհանուր</h3>
          <h2 className="text-[22px] text-[#ECA100] font-bold">15 000 ֏</h2>
        </div>
        <div className="w-full h-[64px] border border-[EFF0F6] bg-[#F9F9F9] rounded-[20px] px-4 flex-jsb-c">
          <h3 className="font-bold">Ընդհանուր Դիտումներ</h3>
          <h2 className="text-[22px] text-[#ECA100] font-bold">120 000</h2>
        </div>
      </div>

      <div className="mt-4 mb-4">
        <Button variant="contained">Կանխիկացնել</Button>
      </div>
    </div>
  );
}

export default MyWorks;
