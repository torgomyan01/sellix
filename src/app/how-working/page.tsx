"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainTemplate from "@/components/common/main-template/main-template";
import React from "react";
import HowWorking from "@/components/common/how-working/how-working";
import Link from "next/link";
import { SITE_URL } from "@/utils/consts";
import Image from "next/image";
import HomeFormSearch from "@/components/common/home/home-form-search";
import CatalogSite from "@/components/common/home/catalog-btn/catalog-btn";

export default function Product() {
  return (
    <MainTemplate>
      <div className="bg-[#EFF0F6] w-full h-full px-4 xl:px-10 pt-6 overflow-y-auto pb-10">
        <div className="container">
          <div className="flex-jsb-c">
            <Link href={SITE_URL.HOME}>
              <Image
                src="img/SELLIX.svg"
                alt="sellix home logo"
                width={230}
                height={54}
                className="w-[110px] h-auto block"
              />
            </Link>

            <div className="flex-je-c gap-2">
              <button className="border text-black px-4 py-2 rounded-[8px] text-[14px] sm:text-[16px] transition hover:border-black hidden sm:block">
                <i className="fa-light fa-right-to-bracket mr-2"></i>
                Մուտք
              </button>
              <button className="bg-blue text-white px-4 py-2 rounded-[8px] text-[14px] sm:text-[16px] transition hover:bg-[#1550E6] ">
                <i className="fa-solid fa-user-plus mr-2"></i>
                Գրանցվել
              </button>
            </div>
          </div>

          <div className="flex-jc-c gap-2 mt-4 sm:mt-6 w-full min-[632px]:w-auto mb-6">
            <HomeFormSearch />

            <CatalogSite />
          </div>
          <HowWorking className="w-full wrapper mt-4 p-6 mb-10" />
        </div>
      </div>
    </MainTemplate>
  );
}
