"use client";

import React from "react";
import MainTemplateDashboard from "@/app/dashboard/main-template-dashboard";
import { SITE_URL } from "@/utils/consts";

export default function Home() {
  return (
    <MainTemplateDashboard pathname={`/${SITE_URL.DASHBOARD}`}>
      Ողջունում եմ քեզ կայքի ստղծման հարցում դու հաջողելու ես․
    </MainTemplateDashboard>
  );
}
