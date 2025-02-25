"use client";

import React from "react";
import { AppProvider, Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { SITE_URL } from "@/utils/consts";
import { ToastContainer } from "react-toastify";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Կատեգորիաներ",
  },
  {
    segment: SITE_URL.DASHBOARD_POSTS,
    title: "Հայտարարություններ",
    icon: <i className="fa-regular fa-layer-group"></i>,
  },
  {
    segment: SITE_URL.ADMIN_CATEGORY_ADD,
    title: "Ավելացնել",
    icon: <i className="fa-regular fa-plus"></i>,
  },
  {
    segment: SITE_URL.ADMIN_CATEGORY_FORM,
    title: "Աշխատել գումար",
    icon: <i className="fa-light fa-input-numeric"></i>,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: "",
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: "",
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: "",
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: "",
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: "",
  },
];

export default function MainTemplateDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: "",
        title: "SELLIX",
        homeUrl: SITE_URL.DASHBOARD,
      }}
    >
      <ToastContainer />
      <DashboardLayout>
        <PageContainer>{children}</PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
