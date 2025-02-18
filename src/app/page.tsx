"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import HomeFormSearch from "@/components/common/home/home-form-search";
import MainTemplate from "@/components/common/main-template/main-template";
import SliderHome from "@/components/common/home/slider-home";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { Password } from "primereact/password";

export default function Home() {
  const [modalLogin, setModalLogin] = useState<boolean>(false);
  const [modalRegister, setModalRegister] = useState<boolean>(false);

  return (
    <MainTemplate>
      <div className="bg-[#EFF0F6] w-full h-full px-4 md:px-10 pt-6 overflow-hidden">
        <div className="flex-jsb-c lg:flex-je-c">
          <button className="bg-blue text-white px-3 py-2 rounded-[8px] transition hover:bg-[#1550E6] block lg:hidden">
            <i className="fa-solid fa-grid-2 mr-2 text-white"></i>
            Կատալոգ
          </button>
          {/*<button*/}
          {/*  onClick={() => setModalLogin(true)}*/}
          {/*  className="bg-white border border-gray-300 rounded-[40px] px-4 py-2 hover:border-[blue] transition"*/}
          {/*>*/}
          {/*  <i className="fa-regular fa-plus mr-2"></i>*/}
          {/*  Ավելացնել Հայտարարություն*/}
          {/*</button>*/}

          <div className="flex-je-c gap-2">
            <button
              className="border text-black px-4 py-2 rounded-[8px] transition hover:border-black"
              onClick={() => setModalLogin(true)}
            >
              <i className="fa-light fa-right-to-bracket mr-2"></i>
              Մուտք
            </button>
            <button
              className="bg-blue text-white px-4 py-2 rounded-[8px] transition hover:bg-[#1550E6] "
              onClick={() => setModalRegister(true)}
            >
              <i className="fa-solid fa-user-plus mr-2"></i>
              Գրանցվել
            </button>
          </div>
        </div>

        <div className="w-full h-[calc(100%_-_50px)] flex-jc-c flex-col">
          <Image
            src="img/SELLIX.svg"
            alt="sellix home logo"
            width={230}
            height={54}
            className="w-[180px] sm:w-[230px] h-auto "
          />
          <h1 className="text-center text-[18px] sm:text-[28px] mt-2 ">
            Հայստանում ամեն ինչ կա
          </h1>

          <div className="flex-jc-c gap-2 mt-6 w-full min-[632px]:w-auto">
            <HomeFormSearch />

            <div className="w-[1px] hidden lg:block">
              <button className="bg-blue text-white px-3 py-2 rounded-[8px] transition hover:bg-[#1550E6]">
                <i className="fa-solid fa-grid-2 mr-2 text-white"></i>
                Կատալոգ
              </button>
            </div>
          </div>

          <SliderHome />
        </div>
      </div>

      <Dialog
        header="Մուտք"
        visible={modalLogin}
        onHide={() => setModalLogin(false)}
        className="w-[400px] px-4 py-3 bg-white"
      >
        <form action="#" className="p-2 pt-6">
          <div className="w-full mb-3 h-[44px]">
            <InputMask
              placeholder="Հեռախոսահամար"
              mask="+374 (99) 99-99-99"
              className="border w-full h-full ps-2"
            />
          </div>
          <div className="w-full mb-3 h-[44px]">
            <InputText
              type="password"
              placeholder="Գաղտնաբառ"
              className="border w-full h-full ps-2"
            />
          </div>

          <div className="text-center">
            <Button
              label="Մուտք"
              severity="secondary"
              type="submit"
              className="bg-blue text-white px-4 py-2"
            />
          </div>
        </form>
      </Dialog>

      <Dialog
        header="Գրանցում"
        visible={modalRegister}
        onHide={() => setModalRegister(false)}
        className="w-[400px] px-4 py-3 bg-white"
      >
        <form action="#" className="p-2 pt-6">
          <div className="w-full mb-3 h-[44px]">
            <InputText
              placeholder="Անուն Ազգանուն / Ընկերություն"
              className="border w-full h-full ps-2"
            />
          </div>
          <div className="w-full mb-3 h-[44px]">
            <InputMask
              placeholder="Հեռախոսահամար"
              mask="+374 (99) 99-99-99"
              className="border w-full h-full ps-2"
            />
          </div>
          <div className="w-full mb-3 h-[44px]">
            <Password
              placeholder="Գաղտնաբառ"
              toggleMask
              className="border w-full h-full ps-2"
            />
          </div>

          <div className="text-center">
            <Button
              label="Մուտք"
              severity="secondary"
              type="submit"
              className="bg-blue text-white px-4 py-2"
            />
          </div>
        </form>
      </Dialog>
    </MainTemplate>
  );
}
