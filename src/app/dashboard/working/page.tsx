"use client";

import MainTemplateDashboard from "@/app/dashboard/main-template-dashboard";
import { RandomKey } from "@/utils/helpers";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import ActivePosts from "@/components/common/dashboard/working/active-posts/active-posts";
import CreateNew from "@/components/common/dashboard/working/create-new/create-new";
import MyWorks from "@/components/common/dashboard/working/my-works/my-works";
import CashoutRequests from "@/components/common/dashboard/working/cashout-requests/cashout-requests";
import { SITE_URL } from "@/utils/consts";

const tabItems = [
  <ActivePosts key={RandomKey()} />,
  <CreateNew key={RandomKey()} />,
  <MyWorks key={RandomKey()} />,
  <CashoutRequests key={RandomKey()} />,
];

export default function Posts() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <MainTemplateDashboard pathname={`/${SITE_URL.DASHBOARD_WORK}`}>
      <div className="w-full wrapper mt-4">
        <div className="mb-4 border-b mt-1 sticky top-0 bg-white z-20 rounded-[20px_20px_0_0]">
          <Tabs value={activeTab} onChange={(e, value) => setActiveTab(value)}>
            <Tab label="Առկա" />
            <Tab label="Ընտրել նորը" />
            <Tab label="Իմ Նվաճածը" />
            <Tab label="Կանխիկացման հարցումներ" />
          </Tabs>
        </div>
        <div className="p-4">{tabItems[activeTab]}</div>
      </div>
    </MainTemplateDashboard>
  );
}
