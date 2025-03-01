import React from "react";

function Page() {
  return (
    <div>
      <h3 className="font-bold mb-4">Իմ նվաճածները</h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="w-full h-[64px] border border-[EFF0F6] bg-[#F9F9F9] rounded-[20px] px-4 flex-jsb-c">
          <h3 className="font-bold">Ընդհանուր</h3>
          <h2 className="text-[22px] text-[#ECA100] font-bold">15 000 ֏</h2>
        </div>
        <div className="w-full h-[64px] border border-[EFF0F6] bg-[#F9F9F9] rounded-[20px] px-4 flex-jsb-c">
          <h3 className="font-bold">Մեկ դիտման համար</h3>
          <h2 className="text-[22px] text-[#ECA100] font-bold">1 ֏</h2>
        </div>
        <div className="w-full h-[64px] border border-[EFF0F6] bg-[#F9F9F9] rounded-[20px] px-4 flex-jsb-c">
          <h3 className="font-bold">Ընդհանուր Դիտումներ</h3>
          <h2 className="text-[22px] text-[#ECA100] font-bold">100</h2>
        </div>
        <div className="w-full h-[64px] border border-[EFF0F6] bg-[#F9F9F9] rounded-[20px] px-4 flex-jsb-c">
          <h3 className="font-bold">
            <i className="fa-solid fa-circle-dollar text-green-500 mr-2"></i>
            Մեկ դիտման համար 1000 - ից հետո
          </h3>
          <div className="flex-je-c">
            <i className="fa-light fa-chart-line-up mr-2 text-orange-500"></i>
            <h2 className="text-[22px] text-[#ECA100] font-bold">2 ֏</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
