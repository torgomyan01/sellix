"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import HomeFormSearch from "@/components/common/home/home-form-search";
import MainTemplate from "@/components/common/main-template/main-template";
import SliderHome from "@/components/common/home/slider-home";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";
import CatalogSite from "@/components/common/home/catalog-btn/catalog-btn";

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

      <Dialog open={modalLogin} onClose={closeModalLogin}>
        <DialogTitle>
          <div className="flex-jsb-c">
            <span>Մուտք</span>
            <i
              className="fa-regular fa-xmark-large text-[15px] cursor-pointer"
              onClick={closeModalLogin}
            ></i>
          </div>
        </DialogTitle>
        <DialogContent className="w-full sm:w-[400px]">
          <div className="pt-2">
            <div className="w-full mb-8">
              <TextField
                label="Հեռախոսահամար"
                className="w-full"
                variant="outlined"
              />
            </div>
            <div className="w-full mb-4">
              <TextField
                label="Գաղտնաբառ"
                className="w-full"
                variant="outlined"
                type="password"
              />
            </div>

            <div className="flex-jc-c">
              <Button variant="contained">Մուտք</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={modalRegister} onClose={closeModalRegister}>
        <DialogTitle>
          <div className="flex-jsb-c">
            <span>Գրանցում</span>
            <i
              className="fa-regular fa-xmark-large text-[15px] cursor-pointer"
              onClick={closeModalRegister}
            ></i>
          </div>
        </DialogTitle>
        <DialogContent className="w-full sm:w-[400px]">
          <div className="pt-2">
            <div className="w-full mb-8">
              <TextField
                label="Անուն Ազգանուն / Ընկերություն"
                name="name"
                className="w-full"
                variant="outlined"
              />
            </div>
            <div className="w-full mb-8">
              <TextField
                label="Հեռախոսահամար"
                name="phone"
                className="w-full"
                variant="outlined"
              />
            </div>
            <div className="w-full mb-4">
              <TextField
                label="Գաղտնաբառ"
                name="password"
                className="w-full"
                variant="outlined"
                type="password"
              />
            </div>

            <div className="flex-jc-c">
              <Button variant="contained">Գրանցվել</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </MainTemplate>
  );
}
