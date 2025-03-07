"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import CatalogSite from "@/components/layout/catalog-site/catalog-site";
import React from "react";
import BottomMenu from "@/components/layout/bottom-menu/bottom-menu";
import { ToastContainer } from "react-toastify";

interface IMainTemplate {
  children: React.ReactNode;
}

function MainTemplate({ children }: IMainTemplate) {
  return (
    <Provider store={store}>
      <main className="h-full">
        {children}
        <CatalogSite />
        <BottomMenu />
        <ToastContainer />
      </main>
    </Provider>
  );
}

export default MainTemplate;
