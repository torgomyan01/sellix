"use client";

import MainTemplateDashboard from "@/app/dashboard/main-template-dashboard";
import { RandomKey } from "@/utils/helpers";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import ActivePosts from "@/components/common/dashboard/working/active-posts/active-posts";
import CreateNew from "@/components/common/dashboard/working/create-new/create-new";
import MyWorks from "@/components/common/dashboard/working/my-works/my-works";

const tabItems = [
  <ActivePosts key={RandomKey()} />,
  <CreateNew key={RandomKey()} />,
  <MyWorks key={RandomKey()} />,
];

export default function Posts() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <MainTemplateDashboard>
      <div className="w-full wrapper mt-4">
        <div className="mb-4 border-b mt-1 sticky top-0 bg-white z-20 rounded-[20px_20px_0_0]">
          <Tabs value={activeTab} onChange={(e, value) => setActiveTab(value)}>
            <Tab label="Առկա" />
            <Tab label="Ընտրել նորը" />
            <Tab label="Իմ Վաստակածը" />
          </Tabs>
        </div>
        <div className="p-4">{tabItems[activeTab]}</div>
      </div>
    </MainTemplateDashboard>
  );
}
