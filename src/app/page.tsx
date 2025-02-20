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
import Link from "next/link";
import { allCategories, subCategories } from "@/utils/consts";
import { RandomKey } from "@/utils/helpers";

export default function Home() {
  const [modalLogin, setModalLogin] = useState<boolean>(false);
  const [modalRegister, setModalRegister] = useState<boolean>(false);

  const [openCategoryModal, setOpenCategoryModal] = useState<boolean>(false);

  const closeModalLogin = () => setModalLogin(false);
  const closeModalRegister = () => setModalRegister(false);

  return (
    <MainTemplate>
      <div className="bg-[#EFF0F6] w-full h-full px-4 md:px-10 pt-6 overflow-hidden">
        <div className="flex-jsb-c sm:flex-je-c">
          {/*<button*/}
          {/*  onClick={() => setModalLogin(true)}*/}
          {/*  className="bg-white border border-gray-300 rounded-[40px] px-4 py-2 hover:border-[blue] transition"*/}
          {/*>*/}
          {/*  <i className="fa-regular fa-plus mr-2"></i>*/}
          {/*  Ավելացնել Հայտարարություն*/}
          {/*</button>*/}

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

            <div className="w-[1px] hidden lg:block">
              <button
                className="bg-blue text-white px-3 py-2 rounded-[8px] transition hover:bg-[#1550E6]"
                onClick={() => setOpenCategoryModal(true)}
              >
                <i className="fa-solid fa-grid-2 mr-2 text-white"></i>
                Կատալոգ
              </button>
            </div>
          </div>

          <SliderHome />
        </div>
      </div>

      <div
        className={`${openCategoryModal ? "block" : "hidden"} w-full h-[100dvh] fixed top-0 left-0 bg-white p-6 z-50 flex flex-col`}
      >
        <div className="flex-je-c">
          <i
            className="fa-solid fa-xmark-large cursor-pointer"
            onClick={() => setOpenCategoryModal(false)}
          ></i>
        </div>

        <div className="flex-js-s w-full flex-grow overflow-hidden">
          <div className="w-[400px] h-full overflow-y-auto flex flex-col gap-2 pr-4">
            {allCategories.map((category, index) => (
              <>
                <div
                  key={RandomKey()}
                  className="w-fill h-[44px] min-h-[44px] group flex-jsb-c px-2 rounded-[8px] hover:bg-blue/30 hover:text-blue cursor-pointer"
                >
                  <div className="flex-js-c">
                    <i className={`fa-solid ${category.icon} mr-2`}></i>
                    {category.name}
                  </div>
                  <i className="fa-light fa-arrow-right opacity-0 group-hover:opacity-100"></i>
                </div>
                {index === 1 && (
                  <div className="w-full h-[1px] min-h-[1px] bg-gray-200"></div>
                )}
              </>
            ))}
          </div>
          <div className="px-6 pl-10">
            <h2 className="text-[22px] font-bold mb-6">Էլեկտրոնիկա</h2>
            <div className="flex-js-s gap-10 flex-wrap">
              {subCategories.map((item) => (
                <div key={RandomKey()}>
                  <h3 className="font-bold mb-4 text-[18px]">{item.name}</h3>

                  <ul>
                    {item.subcategories.map((sub) => (
                      <li
                        key={RandomKey()}
                        className="mb-2 text-gray-500 hover:text-blue"
                      >
                        <Link href="#">{sub}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[64px] fixed bottom-0 left-0 bg-white flex-jsb-c border-top shadow px-2 sm:px-4 flex sm:hidden">
        <div className="flex-jc-c flex-col">
          <i className="fa-regular fa-house text-blue"></i>
          <span className="text-[14px] text-blue">Գլխաոր</span>
        </div>
        <div className="w-[1px] h-[40px] bg-gray-200 mx-2"></div>
        <div
          className="flex-jc-c flex-col"
          onClick={() => setOpenCategoryModal(true)}
        >
          <i className="fa-regular fa-grid-2"></i>
          <span className="text-[14px]">Կատալոգ</span>
        </div>
        <div className="w-[1px] h-[40px] bg-gray-200 mx-2"></div>
        <div className="flex-jc-c flex-col">
          <i className="fa-light fa-heart"></i>
          <span className="text-[14px]">Հավանած</span>
        </div>
        <div className="w-[1px] h-[40px] bg-gray-200 mx-2"></div>
        <div className="flex-jc-c flex-col" onClick={() => setModalLogin(true)}>
          <i className="fa-light fa-user"></i>
          <span className="text-[14px] text-nowrap">Իմ պռոֆիլը</span>
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
