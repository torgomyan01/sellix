"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainTemplate from "@/components/common/main-template/main-template";
import React, { useRef, useState } from "react";
import Image from "next/image";
import HomeFormSearch from "@/components/common/home/home-form-search";
import CatalogSite from "@/components/common/home/catalog-btn/catalog-btn";
import Link from "next/link";
import { Breadcrumbs, Rating, styled, Typography } from "@mui/material";
import { RandomKey } from "@/utils/helpers";
import Slider from "react-slick";
import { SITE_URL } from "@/utils/consts";

const sliderItems = [
  "/img/product/img.png",
  "/img/product/img_1.png",
  "/img/product/img_2.png",
  "/img/product/img_3.png",
  "/img/product/img_4.png",
  "/img/product/img_5.png",
];
const breadcrumbs = [
  <Link key="1" className="text-[14px] sm:text-[16px]" color="inherit" href="/">
    Գլխաոր էջ
  </Link>,
  <Link key="2" className="text-[14px] sm:text-[16px]" color="inherit" href="#">
    Տրանսպորտ
  </Link>,
  <Link key="2" className="text-[14px] sm:text-[16px]" color="inherit" href="#">
    Ավտոմեքենաներ
  </Link>,
  <Typography
    key="3"
    className="!text-[14px] sm:text-[16px]"
    sx={{ color: "text.primary" }}
  >
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

export default function Product() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [activeSlider, setActiveSlider] = useState<number>(0);

  function PrevSlider() {
    if (sliderRef) {
      sliderRef.current?.slickGoTo(activeSlider - 1);
    }
  }
  //
  function NextSlider() {
    if (sliderRef) {
      sliderRef.current?.slickGoTo(activeSlider + 1);
    }
  }

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

          <div className="flex-jc-c gap-2 mt-4 sm:mt-6 w-full min-[632px]:w-auto">
            <HomeFormSearch />

            <CatalogSite />
          </div>

          <div className="mt-10">
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </div>
          <div className="wrapper px-4 py-4 sm:py-6 mt-4 pb-20">
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="w-full rounded-[20px] sm:border sm:p-4">
                <div className="w-full h-[250px] sm:h-[316px] rounded-[12px] overflow-hidden relative">
                  <i
                    onClick={PrevSlider}
                    className="fa-light fa-chevron-left absolute left-4 top-[50%] transform translate-y-[-50%] z-20 text-white text-[30px] cursor-pointer"
                  ></i>
                  <Slider
                    ref={sliderRef}
                    {...settings}
                    className="h-[250px] sm:h-[316px]"
                    afterChange={(e) => setActiveSlider(e)}
                  >
                    {sliderItems.map((item) => (
                      <Image
                        key={RandomKey()}
                        src={item}
                        alt="product"
                        width={300}
                        height={300}
                        className="w-full h-[250px] sm:h-[316px] object-cover"
                      />
                    ))}
                  </Slider>
                  <i
                    onClick={NextSlider}
                    className="fa-light fa-chevron-right absolute right-4 top-[50%] transform translate-y-[-50%] z-20 text-white text-[30px] cursor-pointer"
                  ></i>
                </div>

                <div className="w-full md:w-[60%] mb-6 md:md-0 mt-4 block sm:hidden">
                  <div className="w-full flex-js-s flex-wrap">
                    {sliderItems.map((item, index) => (
                      <Image
                        key={RandomKey()}
                        src={item}
                        alt="product"
                        onClick={() => sliderRef.current?.slickGoTo(index)}
                        width={120}
                        height={80}
                        className={`w-[calc(100%_/_3)] h-[80px] rounded-[8px] border-[4px] active:border-[#dadada] ${activeSlider === index ? "border-blue" : ""} object-cover cursor-pointer transition `}
                      />
                    ))}
                  </div>
                </div>

                <div className="w-full flex-jsb-c mt-1">
                  <h3 className="text-[35px] font-bold text-black">$5000</h3>

                  <StyledRating
                    name="customized-color"
                    defaultValue={0}
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

                <div className="flex-jsb-c mt-10 gap-2">
                  <button className="px-4 py-2 bg-[#EFF0F6] rounded-[8px] flex-jc-c gap-1 text-[14px]">
                    <i className="fa-solid fa-circle-dollar text-[#6CDE07] text-[16px]"></i>
                    Աշխատիր գումար
                  </button>

                  <div className="flex-js-s sm:flex-je-c gap-2">
                    <button className="bg-blue text-white px-3 py-2 rounded-[8px] transition hover:bg-[#1550E6]">
                      <i className="fa-solid fa-envelope min-[1152px]:mr-2"></i>
                      <span className="hidden min-[1152px]:inline">
                        Կապ վաճ․ հետ
                      </span>
                    </button>
                    <button className="bg-[#099F63] hover:bg-[#058350] text-white px-3 py-2 rounded-[8px] transition ">
                      <i className="fa-solid fa-phone min-[1152px]:mr-2"></i>
                      <span className="hidden min-[1152px]:inline">
                        Զանգահարել
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="w-full flex-jsb-s flex-col md:flex-row">
                  <div className="w-full md:w-[60%] mb-6 md:md-0 hidden sm:block">
                    <h3 className="text-[16px] font-bold mb-2">Նկարներ</h3>
                    <div className="w-full flex-js-s flex-wrap">
                      {sliderItems.map((item, index) => (
                        <Image
                          key={RandomKey()}
                          src={item}
                          alt="product"
                          onClick={() => sliderRef.current?.slickGoTo(index)}
                          width={120}
                          height={80}
                          className={`w-[calc(100%_/_3)] h-[80px] rounded-[8px] border-[4px] ${activeSlider === index ? "border-blue" : ""} object-cover cursor-pointer transition `}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-[1px] min-w-[1px] bg-gray-200 mx-4 h-[198px] hidden md:block"></div>
                  <div className="w-full md:w-[40%]">
                    <h3 className="text-[16px] font-bold mb-2">Դիտեք Նաեվ</h3>
                    <div className="w-full flex-js-s flex-wrap gap-2 md:gap-0">
                      {Array.from({ length: 4 }).map(() => (
                        <div
                          key={RandomKey()}
                          className="w-[calc((100%_/_2)_-_4px)] md:w-[calc(100%_/_2)] h-[80px] rounded-[8px] group border-[4px] object-cover cursor-pointer overflow-hidden transition hover:border-gray-300 relative"
                        >
                          <Image
                            src="/img/product/img.png"
                            alt="product"
                            width={120}
                            height={80}
                            className="rounded-[5px] w-full object-cover"
                          />
                          <div className="w-full h-[24px] bg-[#e7e9ee] rounded-[8px_8px_0_0] absolute left-0 bottom-0 flex-js-c px-2 text-[14px] font-bold group-hover:bg-gray-300 ">
                            3,000 ֏
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full flex-jsb-s mt-6 gap-6 flex-col sm:flex-row">
                  <div className="w-full sm:w-[60%]">
                    <div className="w-full flex-jsb-c">
                      <h3 className="text-[16px] font-bold mb-2">
                        Թողնել կարծիք
                      </h3>
                      <Rating
                        name="half-rating"
                        defaultValue={4}
                        precision={1}
                      />
                    </div>

                    <div className="w-full mt-2 h-[176px] rounded-[8px] border border-[#D9D9D9] bg-[#EFF0F6] p-4">
                      <p className="text-[16px] text-[#4D4D4D]">Գնել եմ․․․</p>
                      <div className="w-full flex-js-s flex-wrap mt-2 gap-2">
                        <span className="bg-white hover:bg-[#fdfdfd] rounded-[4px] px-[12px] py-1 cursor-pointer text-[14px]">
                          Գոհ եմ
                        </span>
                        <span className="bg-white hover:bg-[#fdfdfd] rounded-[4px] px-[12px] py-1 cursor-pointer text-[14px]">
                          Գոհ չեմ
                        </span>
                        <span className="bg-white hover:bg-[#fdfdfd] rounded-[4px] px-[12px] py-1 cursor-pointer text-[14px]">
                          Շնորհակալ եմ վաճառողից
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-[40%]">
                    <h3 className="text-[16px] font-bold mb-2 mt-1">Արժեքը</h3>

                    <div className="w-full mt-[14px] rounded-[20px] border p-3 h-[176px] flex-jsb-s flex-col">
                      <div className="w-full flex-jsb-c border-b py-1">
                        <h5 className="text-[18px] font-bold">5000</h5>
                        <div className="flex-je-c text-[18px] gap-1 font-bold">
                          <Image
                            src="/img/icons/flag-usa.png"
                            alt="flag icon"
                            width={14}
                            height={14}
                          />
                          $
                        </div>
                      </div>
                      <div className="w-full flex-jsb-c border-b py-1">
                        <h5 className="text-[18px] font-bold">1 982 800,00</h5>
                        <div className="flex-je-c text-[18px] gap-1 font-bold">
                          <Image
                            src="/img/icons/flag-am.png"
                            alt="flag icon"
                            width={14}
                            height={14}
                          />
                          ֏
                        </div>
                      </div>
                      <div className="w-full flex-jsb-c border-b py-1">
                        <h5 className="text-[18px] font-bold">4 841,16</h5>
                        <div className="flex-je-c text-[18px] gap-1 font-bold">
                          <Image
                            src="/img/icons/flag-eu.png"
                            alt="flag icon"
                            width={14}
                            height={14}
                          />
                          €
                        </div>
                      </div>
                      <div className="w-full flex-jsb-c py-1">
                        <h5 className="text-[18px] font-bold">469 691,29</h5>
                        <div className="flex-je-c text-[18px] gap-1 font-bold">
                          <Image
                            src="/img/icons/flag-ru.png"
                            alt="flag icon"
                            width={14}
                            height={14}
                          />
                          ₽
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-4 border rounded-[20px] p-4">
                  <div className="w-full flex-js-c gap-2">
                    <Image
                      src="/img/product/user.png"
                      alt="Owner this product"
                      width={64}
                      height={64}
                      className="object-cover object-center rounded-full"
                    />
                    <div>
                      <h3 className="text-[18px]">Andranik Torgomyan</h3>
                      <div>
                        <Rating
                          name="half-rating"
                          defaultValue={5}
                          precision={1}
                        />
                      </div>
                    </div>
                  </div>

                  <ul className="mt-6">
                    <li className="text-[14px] md:text-[18px] text-gray-500 mb-1 sm:mb-3">
                      Ընդհանուր կարծիքներ։ 105
                    </li>
                    <li className="text-[14px] md:text-[18px] text-gray-500 mb-1 sm:mb-3">
                      Հայտարարությունների Քանակը։ 35
                    </li>
                    <li className="text-[14px] md:text-[18px] text-gray-500">
                      Կպատասխանի Ձեզ 3 ժամվա ընթացքում
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="mt-16 text-[24px] font-bold mb-4">Դիտեք նաև</h3>

            <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={RandomKey()}
                  className="border rounded-[12px] p-3 hover:border-gray-400"
                >
                  <Image
                    src={`/img/product/product-${i + 1}.png`}
                    alt="product-1.png"
                    width={250}
                    height={172}
                    className="w-full h-[172px] object-cover object-center rounded-[7px]"
                  />
                  <h3 className="text-[22px] font-bold mt-2">$5000</h3>
                  <p className="text-[16px]">
                    3 սենյականոց բնակարան նորակառույց շենքում Մոնթե Մելքոնյան
                    փողոցում, 93 քմ, նախավերջին հարկ
                  </p>

                  <div className="w-full flex-je-c mt-6 cursor-pointer text-blue">
                    Դիտել
                    <i className="fa-solid fa-chevron-right ml-2"></i>
                  </div>
                </div>
              ))}
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={RandomKey()}
                  className="border rounded-[12px] p-3 hover:border-gray-400 "
                >
                  <Image
                    src={`/img/product/product-${i + 1}.png`}
                    alt="product-1.png"
                    width={250}
                    height={172}
                    className="w-full h-[172px] object-cover object-center rounded-[7px]"
                  />
                  <h3 className="text-[22px] font-bold mt-2">$5000</h3>
                  <p className="text-[16px]">
                    3 սենյականոց բնակարան նորակառույց շենքում Մոնթե Մելքոնյան
                    փողոցում, 93 քմ, նախավերջին հարկ
                  </p>

                  <div className="w-full flex-je-c mt-6 cursor-pointer text-blue">
                    Դիտել
                    <i className="fa-solid fa-chevron-right ml-2"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}
