"use client";

import "swiper/css";
import "swiper/css/autoplay";
import MainTemplate from "@/components/common/main-template/main-template";
import React, { useRef } from "react";
import Image from "next/image";
import HomeFormSearch from "@/components/common/home/home-form-search";
import CatalogSite from "@/components/common/home/catalog-btn/catalog-btn";
import Link from "next/link";
import { Breadcrumbs, Rating, styled, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper"; // Ներմուծել SwiperCore տիպը
import { RandomKey } from "@/utils/helpers";

const sliderItems = [
  "/img/product/img.png",
  "/img/product/img_1.png",
  "/img/product/img_2.png",
  "/img/product/img_3.png",
  "/img/product/img_4.png",
  "/img/product/img_5.png",
];
const breadcrumbs = [
  <Link key="1" color="inherit" href="/">
    Գլխաոր էջ
  </Link>,
  <Link key="2" color="inherit" href="#">
    Տրանսպորտ
  </Link>,
  <Link key="2" color="inherit" href="#">
    Ավտոմեքենաներ
  </Link>,
  <Typography key="3" sx={{ color: "text.primary" }}>
    BMW
  </Typography>,
];

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default function Home() {
  const swiperRef = useRef<SwiperCore | null>(null);

  function PrevSlider() {
    if (swiperRef.current) {
      swiperRef.current?.slidePrev();
    }
  }

  function NextSlider() {
    if (swiperRef.current) {
      swiperRef.current?.slideNext();
    }
  }

  return (
    <MainTemplate>
      <div className="bg-[#EFF0F6] w-full h-full px-4 md:px-10 pt-6 overflow-hidden">
        <div className="container">
          <div className="flex-jsb-c">
            <Image
              src="img/SELLIX.svg"
              alt="sellix home logo"
              width={230}
              height={54}
              className="w-[110px] h-auto block"
            />

            <div className="flex-jc-c gap-2">
              <HomeFormSearch />
              <CatalogSite />
            </div>

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
          <div className="mt-10">
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </div>
          <div className="wrapper px-4 py-6 mt-4">
            <div className="w-full grid grid-cols-2 gap-6">
              <div className="w-full rounded-[20px] border p-4">
                <div className="w-full h-[316px] rounded-[12px] overflow-hidden relative">
                  <i
                    onClick={PrevSlider}
                    className="fa-light fa-chevron-left absolute left-4 top-[50%] transform translate-y-[-50%] z-20 text-white text-[30px] cursor-pointer"
                  ></i>
                  <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={50}
                    slidesPerView={1}
                    allowSlideNext={true}
                  >
                    {sliderItems.map((item) => (
                      <SwiperSlide key={RandomKey()}>
                        <Image
                          src={item}
                          alt="product"
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <i
                    onClick={NextSlider}
                    className="fa-light fa-chevron-right absolute right-4 top-[50%] transform translate-y-[-50%] z-20 text-white text-[30px] cursor-pointer"
                  ></i>
                </div>

                <div className="w-full flex-jsb-c mt-1">
                  <h3 className="text-[35px] font-bold text-black">$5000</h3>

                  <StyledRating
                    name="customized-color"
                    defaultValue={2}
                    max={1}
                    precision={1}
                    icon={<i className="fa-solid fa-heart text-[25px]"></i>}
                    emptyIcon={
                      <i className="fa-light fa-heart text-[25px]"></i>
                    }
                  />
                </div>

                <h1 className="text-[18px] font-[600] text-black">
                  ՊԱՀԵՍՏԱՄԱՍԵՐ BMW E90 2006-2011թ ՄԱՍԵՐ ներմուծված Ճապոնիայից,
                  Ռասկուլաչիտ
                </h1>
                <h2 className="text-[16px] mt-2 text-[#4D4D4D]">
                  Կապոտ չեխոլ կռիլո ֆառ քսենեն բլոկ ստոպ սայլասկա դուռ հայլի
                  պադյոմնիկ զամոկ լոք շուշա դիֆուզոռ տումանիկ աբլիցոֆկա
                  պատկապոտնիկ բալկա ռադիատր պատրուպկա վինտիլիատր բենզանասոս
                  ռաշիրիտելնի
                </h2>
                <div className="flex-js-s mt-2">
                  <span className="flex-js-c gap-2 text-blue">
                    Կարդալ ամբողջը
                    <i className="fa-light fa-chevron-down"></i>
                  </span>
                </div>

                <div className="flex-jsb-c mt-10">
                  <button className="px-4 py-2 bg-[#EFF0F6] rounded-[8px] flex-jc-c gap-1 text-[14px]">
                    <i className="fa-solid fa-circle-dollar text-[#6CDE07] text-[16px]"></i>
                    Աշխատիր գումար
                  </button>

                  <div className="flex-je-c gap-2">
                    <button className="bg-blue text-white px-3 py-2 rounded-[8px] transition hover:bg-[#1550E6]">
                      <i className="fa-solid fa-envelope mr-2"></i>
                      Կապ վաճ․ հետ
                    </button>
                    <button className="bg-[#099F63] hover:bg-[#058350] text-white px-3 py-2 rounded-[8px] transition ">
                      <i className="fa-solid fa-phone mr-2"></i>
                      Զանգահարել
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="w-full flex-jsb-s">
                  <div className="w-[60%]">
                    <h3 className="text-[16px] font-bold mb-2">Նկարներ</h3>
                    <div className="w-full flex-js-s flex-wrap">
                      {sliderItems.map((item) => (
                        <Image
                          key={RandomKey()}
                          src={item}
                          alt="product"
                          width={120}
                          height={80}
                          className="w-[calc(100%_/_3)] h-[80px] rounded-[8px] border-[4px] object-cover cursor-pointer transition hover:border-gray-300"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-[1px] min-w-[1px] bg-gray-200 mx-4 h-[198px]"></div>
                  <div className="w-[40%]">
                    <h3 className="text-[16px] font-bold mb-2">Դիտեք Նաեվ</h3>
                    <div className="w-full flex-js-s flex-wrap">
                      {Array.from({ length: 4 }).map(() => (
                        <div
                          key={RandomKey()}
                          className="w-[calc(100%_/_2)] h-[80px] rounded-[8px] group border-[4px] object-cover cursor-pointer overflow-hidden transition hover:border-gray-300 relative"
                        >
                          <Image
                            src="/img/product/img.png"
                            alt="product"
                            width={120}
                            height={80}
                            className="rounded-[5px]"
                          />
                          <div className="w-full h-[24px] bg-[#e7e9ee] rounded-[8px_8px_0_0] absolute left-0 bottom-0 flex-js-c px-2 text-[14px] font-bold group-hover:bg-gray-300 ">
                            3,000 ֏
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}
