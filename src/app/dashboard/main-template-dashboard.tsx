"use client";

import React from "react";
import { AppProvider, Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { SITE_URL } from "@/utils/consts";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Հայտարարություներ",
  },
  {
    segment: SITE_URL.DASHBOARD_POSTS,
    title: "Բոլորը",
    icon: <i className="fa-solid fa-megaphone"></i>,
  },
  {
    segment: SITE_URL.ADMIN_CATEGORY_ADD,
    title: "Ավելացնել",
    icon: <i className="fa-regular fa-plus "></i>,
  },
  {
    kind: "divider",
  },
  // {
  //   kind: "header",
  //   title: "Աշխատել գումար",
  // },
  {
    segment: SITE_URL.DASHBOARD_WORK,
    title: "Աշխատել գումար",
    icon: <i className="fa-solid fa-circle-dollar text-green-500"></i>,
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
  const router = useRouter();

  function changeUrl(string: string | URL) {
    if (typeof string === "string") {
      router.push(string);
    }
  }

  const routerObj = {
    pathname: location.pathname,
    searchParams: new URLSearchParams(),
    navigate: (path: string | URL) => changeUrl(path),
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={routerObj}
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
