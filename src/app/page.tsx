"use client";

import Image from "next/image";
import HomeFormSearch from "@/components/common/home/home-form-search";
import MainTemplate from "@/components/common/main-template/main-template";
import SliderHome from "@/components/common/home/slider-home";
import React, { useState } from "react";
import CatalogSite from "@/components/common/home/catalog-btn/catalog-btn";
import ModalRegister from "@/components/layout/modal-register/modal-register";
import ModalLogin from "@/components/layout/modal-login/modal-login";

export default function Home() {
  const [modalLogin, setModalLogin] = useState<boolean>(false);
  const [modalRegister, setModalRegister] = useState<boolean>(false);

  const closeModalLogin = () => setModalLogin(false);
  const closeModalRegister = () => setModalRegister(false);

  return (
    <MainTemplate>
      <div className="bg-[#EFF0F6] w-full h-full px-4 md:px-10 pt-6 overflow-hidden">
        <div className="flex-jsb-c sm:flex-je-c">
          <Image
            src="img/SELLIX.svg"
            alt="sellix home logo"
            width={230}
            height={54}
            className="w-[110px] sm:w-[230px] h-auto block sm:hidden"
          />

          <div className="flex-je-c gap-2">
            <button
              className="border text-black px-4 py-2 rounded-[8px] text-[14px] sm:text-[16px] transition hover:border-black hidden sm:block"
              onClick={() => setModalLogin(true)}
            >
              <i className="fa-light fa-right-to-bracket mr-2"></i>
              Մուտք
            </button>
            <button
              className="bg-blue text-white px-4 py-2 rounded-[8px] text-[14px] sm:text-[16px] transition hover:bg-[#1550E6] "
              onClick={() => setModalRegister(true)}
            >
              <i className="fa-solid fa-user-plus mr-2"></i>
              Գրանցվել
            </button>
          </div>
        </div>

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



      <ModalLogin status={modalLogin} onClose={closeModalLogin} />

      <ModalRegister status={modalRegister} onClose={closeModalRegister} />
    </MainTemplate>
  );
}
