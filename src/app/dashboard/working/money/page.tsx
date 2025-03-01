import React from "react";
import { SITE_URL } from "@/utils/consts";
import MainTemplateDashboard from "@/app/dashboard/main-template-dashboard";
import HowWorking from "@/components/common/how-working/how-working";

function Page() {
  return (
    <MainTemplateDashboard pathname={`/${SITE_URL.DASHBOARD_WORK_MONEY}`}>
      <HowWorking className="w-full wrapper mt-4 p-6 mb-10" />
    </MainTemplateDashboard>
  );
}

export default Page;
