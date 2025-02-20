"use client";

import "swiper/css";
import "swiper/css/autoplay";
import React from "react";
import { AppProvider, Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { SITE_URL } from "@/utils/consts";
import { ToastContainer, toast } from "react-toastify";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Կատեգորիաներ",
  },
  {
    segment: SITE_URL.ADMIN_CATEGORY,
    title: "Կատեգորիաներ",
    icon: <i className="fa-regular fa-layer-group"></i>,
  },
  {
    segment: SITE_URL.ADMIN_CATEGORY_ADD,
    title: "Ավելացնել Կատեգորիա",
    icon: <i className="fa-regular fa-plus"></i>,
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

export default function MainTemplateAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: "",
        title: "SELLIX Admin",
        homeUrl: "/admin",
      }}
    >
      <ToastContainer />
      <DashboardLayout>
        <PageContainer>{children}</PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
