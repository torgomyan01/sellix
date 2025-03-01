"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainTemplate from "@/components/common/main-template/main-template";
import React from "react";
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
          <div className="w-full wrapper mt-4 p-4 sm:p-6 md:p-10 mb-10">
            <h1 className="text-[22px] font-bold mb-6">
              📜 Կանոնադրություն և Օգտագործման Պայմաններ
            </h1>
            <h2 className="text-[20px] font-bold mb-4">
              1. Ընդհանուր դրույթներ
            </h2>
            <p className="mb-1">
              1.1. Այս կանոնադրությունը սահմանում է կայքի օգտագործման պայմանները
              և պարտավորությունները:
            </p>
            <p className="mb-1">
              1.2. Կայքը հանդիսանում է հարթակ, որտեղ օգտատերերը կարող են
              հրապարակել հայտարարություններ:
            </p>
            <p className="mb-1">
              1.3. Կայքի սեփականատերը (այսուհետ՝ «Վարչակազմը») չի հանդիսանում
              հրապարակված ապրանքների կամ ծառայությունների վաճառող կամ գնորդ:
            </p>
            <p className="mb-1">
              1.4. Օգտվելով կայքից՝ օգտատերը համաձայնվում է այս կանոնադրությանը:
            </p>

            <hr className="mt-6" />

            <h2 className="text-[20px] font-bold mb-4 mt-6">
              2. Կայքի Պարտավորություններն ու Սահմանափակումները
            </h2>

            <p className="mb-1">
              2.1. Կայքը ապահովում է միայն տեխնիկական միջավայր
              հայտարարությունների տեղադրման համար:
            </p>
            <p className="mb-1">
              2.2. Վարչակազմը պարտավոր չէ ստուգել օգտատերերի հրապարակած
              տեղեկատվության իսկությունը:
            </p>
            <p className="mb-1">
              2.3. Վարչակազմը իրավունք ունի հեռացնել ցանկացած հայտարարություն,
              որը խախտում է կանոնները:
            </p>
            <p className="mb-1">
              2.4. Վարչակազմը իրավունք ունի առանց նախազգուշացման փոփոխել
              կանոնները և օգտատիրոջ պարտականությունները:
            </p>
            <p className="mb-1">
              2.5. Կայքը պատասխանատվություն չի կրում տեխնիկական խափանումների կամ
              համակարգի խնդիրների դեպքում:
            </p>

            <hr className="mt-6" />

            <h2 className="text-[20px] font-bold mb-4 mt-6">
              3. Օգտատերերի Պարտավորություններ
            </h2>
            <p className="mb-2">3.1. Օգտատերը պարտավորվում է.</p>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Տեղադրել միայն օրինական հայտարարություններ:
              </li>
              <li className="mb-2">
                Չօգտագործել կայքը խարդախության կամ ապօրինի գործունեության համար:
              </li>
              <li className="mb-2">
                Չտրամադրել կեղծ, ապակողմնորոշող կամ անհիմն տեղեկություն:
              </li>
              <li className="mb-2">
                Չխախտել երրորդ անձանց իրավունքները, ներառյալ հեղինակային
                իրավունքները:
              </li>
            </ul>
            <p className="mb-2 mt-6">3.1. Օգտատերը պարտավորվում է.</p>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Տեղադրել ապօրինի ապրանքներ կամ ծառայություններ:
              </li>
              <li className="mb-2">Օգտագործել կայքը կեղծ ինքնության ներքո:</li>
              <li className="mb-2">
                Տեղադրել վիրավորական, պոռնոգրաֆիկ, խտրականություն պարունակող
                նյութեր:
              </li>
              <li className="mb-2">
                Գովազդել այլ հարթակներ առանց կայքի թույլտվության:
              </li>
            </ul>

            <hr className="mt-6" />

            <h2 className="text-[20px] font-bold mb-4 mt-6">
              4. Վճարումներ, Պայմանագրեր և Գովազդատուների Պարտականություններ
            </h2>
            <p className="mb-2 mt-6">
              4.1. Կայքը կարող է առաջարկել վճարովի ծառայություններ, ինչպիսիք են՝
            </p>
            <ul className="list-disc pl-6">
              <li className="mb-2">Պրեմիում հայտարարություններ</li>
              <li className="mb-2">Գովազդային հնարավորություններ</li>
              <li className="mb-2">Տեղադրման առաջնահերթություն</li>
            </ul>
            <p className="mb-2 mt-6">Գովազդատուները պարտավոր են.</p>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Տրամադրել իրական և ստույգ տվյալներ իրենց ապրանքների կամ
                ծառայությունների մասին:
              </li>
              <li className="mb-2">
                Հարգել կայքի գովազդային քաղաքականությունը:
              </li>
              <li className="mb-2">
                Չգովազդել խաբուսիկ կամ անօրինական բովանդակություն:
              </li>
            </ul>
            <p className="mb-2 mt-6">
              4.3. Վարչակազմը իրավունք ունի դադարեցնել համագործակցությունը
              ցանկացած գովազդատուի հետ՝ կանոնների խախտման դեպքում:
            </p>

            <hr className="mt-6" />

            <h2 className="text-[20px] font-bold mb-4 mt-6">
              5. Արգելված Գործողություններ
            </h2>
            <p className="mb-2 mt-6">5.1. Կայքում արգելվում է.</p>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Խարդախությունը, կեղծ հայտարարությունների տեղադրումը
              </li>
              <li className="mb-2">
                Թմրամիջոցների, զենքի, կեղծ փաստաթղթերի վաճառքը
              </li>
              <li className="mb-2">
                Սպամ, վիրուսների տարածում կամ DDoS հարձակումներ
              </li>
            </ul>
            <p className="mb-2 mt-6">
              5.2. Վարչակազմը իրավունք ունի արգելափակել օգտատիրոջ հաշիվը կամ IP
              Հասցեն, եթե վերջինս խախտում է կանոնները:
            </p>

            <hr className="mt-6" />

            <h2 className="text-[20px] font-bold mb-4 mt-6">
              6. Իրավական Պատասխանատվություն
            </h2>
            <p className="mb-2">
              6.1. Կայքը պատասխանատվություն չի կրում օգտատերերի հրապարակած
              տեղեկությունների համար:
            </p>
            <p className="mb-2">
              6.2. Վարչակազմը պատասխանատվություն չի կրում օգտատերերի միջև
              առաջացած վեճերի համար:
            </p>
            <p className="mb-2">
              6.3. Կայքը պատասխանատվություն չի կրում վնասների համար, որոնք կարող
              են առաջանալ օգտատերերի գործողությունների արդյունքում:
            </p>

            <hr className="mt-6" />

            <h2 className="text-[20px] font-bold mb-4 mt-6">
              7. Տվյալների Պաշտպանություն և Գաղտնիություն
            </h2>
            <p className="mb-2 mt-6">
              7.1. Վարչակազմը պարտավորվում է պաշտպանել օգտատերերի անձնական
              տվյալները՝ ըստ գործող{" "}
              <Link
                href="https://www.arlis.am/DocumentView.aspx?DocID=164931"
                target="_blank"
                className="underline"
              >
                օրենսդրության:
              </Link>
            </p>
            <p className="mb-2">
              7.2. Օգտատիրոջ տվյալները կարող են տրամադրվել պետական մարմիններին
              օրենքի պահանջով:
            </p>
            <p className="mb-2">
              7.3. Օգտատերը համաձայն է, որ կայքը կարող է օգտագործել նրա
              տվյալները գովազդային կամ վիճակագրական նպատակներով:
            </p>

            <hr className="mt-6" />

            <h2 className="text-[20px] font-bold mb-4 mt-6">
              8. Պայմանների Փոփոխություն
            </h2>
            <p className="mb-2">
              8.1. Վարչակազմը իրավունք ունի ցանկացած պահի փոփոխել
              կանոնադրությունը:
            </p>
            <p className="mb-2">
              8.2. Կայքից օգտվելը համարվում է համաձայնություն նոր պայմանների
              հետ: <br />
              Դուք կստանաք ծանուցում կանոների փոփոխման մասին։
            </p>
            <p className="mb-2 mt-6">
              Կայքի աջակցման թիմի հետ կապ հաստատելու համար կարող եք դիմել
              հետևյալ էլ. հասցեով՝{" "}
              <Link
                className="font-bold"
                href="mailtp:and.torgomyan01@gmail.com"
              >
                and.torgomyan01@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}
