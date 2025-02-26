"use client";

import MainTemplateDashboard from "@/app/dashboard/main-template-dashboard";
import { RandomKey } from "@/utils/helpers";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export default function Posts() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <MainTemplateDashboard>
      <h1 className="text-[18px] font-bold">Իմ Հայտարարություները</h1>

      <div className="mt-6 pl-6 bg-white relative mb-[-20px] border-b w-full overflow-x-auto">
        <Tabs value={activeTab} onChange={(e, value) => setActiveTab(value)}>
          <Tab label="Ակտիվ" />
          <Tab label="Սեվագրեր" />
          <Tab label="Ծանուցված" />
          <Tab label="Մոդերացիայի" />
          <Tab label="Մերժված" />
        </Tabs>
      </div>
      <div className="w-full wrapper p-4 pt-10">
        {Array.from(Array(10).keys()).map((_, i) => (
          <div
            key={RandomKey()}
            className="w-full border rounded-[20px] flex-js-s gap-4 flex-col sm:flex-row p-4 relative hover:border-gray-400 cursor-pointer mb-4"
          >
            <img
              src="/img/product/img_1.png"
              alt="Product image"
              width={120}
              height={120}
              className="w-[120px] h-[120px] object-cover object-center rounded-[5px]"
            />

            <div className="h-full">
              <h2 className="font-semibold text-[18px]">
                Ավտո շիթերի և այլ Պլաստմասե խանութ վաճառք
              </h2>
              <p className="text-[14px] text-gray-500 mt-1">
                Ստեղծվել է 15,02,2025 - Ավարտվում է 25,02,2025
              </p>
            </div>

            <div className="absolute right-[16px] bottom-[12px] text-gray-300">
              <i className="fa-solid fa-eye mr-2"></i>
              17{i}
            </div>
          </div>
        ))}
      </div>
    </MainTemplateDashboard>
  );
}
