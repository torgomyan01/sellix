"use client";

import "swiper/css";
import "swiper/css/autoplay";
import React from "react";
import { AppProvider, Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Կատեգորիաներ",
  },
  {
    segment: "admin/category",
    title: "Կատեգորիաներ",
    icon: <i className="fa-regular fa-layer-group"></i>,
  },
  {
    segment: "admin/category/add",
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
      <DashboardLayout>
        <PageContainer>{children}</PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
