"use client";

import Image from "next/image";
import HomeFormSearch from "@/components/common/home/home-form-search";
import MainTemplate from "@/components/common/main-template/main-template";
import SliderHome from "@/components/common/home/slider-home";
import React from "react";
import CatalogSite from "@/components/common/home/catalog-btn/catalog-btn";
import Navbar from "@/components/layout/navbar/navbar";

export default function Home() {
  return (
    <MainTemplate>
      <div className="bg-[#EFF0F6] w-full h-full px-4 md:px-10 pt-6 overflow-hidden">
        <Navbar />

        <div className="w-full h-[calc(100%_-_50px)] pt-10 sm:pt-0 flex-js-c sm:flex-jc-c flex-col">
          <Image
            src="img/SELLIX.svg"
            alt="sellix home logo"
            width={230}
            height={54}
            className="w-[180px] sm:w-[230px] h-auto hidden sm:block"
          />
          <h1 className="text-center text-[18px] sm:text-[28px] mt-2 ">
            Հայաստանում ամեն ինչ կա
          </h1>

          <div className="flex-jc-c gap-2 mt-4 sm:mt-6 w-full min-[632px]:w-auto">
            <HomeFormSearch />

            <CatalogSite />
          </div>

          <SliderHome />
        </div>
      </div>
    </MainTemplate>
  );
}
