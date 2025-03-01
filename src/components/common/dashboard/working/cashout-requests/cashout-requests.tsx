import React from "react";
import { Button, Chip } from "@mui/material";

function CashoutRequests() {
  return (
    <div>
      <h3 className="font-bold mb-4">Կանխիկացման հարցումներ</h3>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="w-full h-[64px] border border-[EFF0F6] bg-[#F9F9F9] rounded-[20px] px-4 flex-jsb-c">
          <h2 className="text-[22px] text-[#ECA100] font-bold">1000 ֏</h2>
          <Chip label="Հաստատված" color="success" variant="outlined" />
        </div>
        <div className="w-full h-[64px] flex-js-c">
          <Button variant="contained">Դիտել Մանրամասն</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="w-full h-[64px] border border-[EFF0F6] bg-[#F9F9F9] rounded-[20px] px-4 flex-jsb-c">
          <h2 className="text-[22px] text-[#ECA100] font-bold">2500 ֏</h2>
          <Chip label="Անհամապատասխան" color="warning" variant="outlined" />
        </div>
        <div className="w-full h-[64px] flex-js-c">
          <Button variant="contained">Դիտել Մանրամասն</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="w-full h-[64px] border border-[EFF0F6] bg-[#F9F9F9] rounded-[20px] px-4 flex-jsb-c">
          <h2 className="text-[22px] text-[#ECA100] font-bold">2500 ֏</h2>
          <Chip label="Սխալ" color="error" variant="outlined" />
        </div>
        <div className="w-full h-[64px] flex-js-c">
          <Button variant="contained">Դիտել Մանրամասն</Button>
        </div>
      </div>
    </div>
  );
}

export default CashoutRequests;
