"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openClose } from "@/redux/catalog-site";
import { serOpenCloseModalLogin } from "@/redux/modals";
import { useRouter } from "next/navigation";
import { SITE_URL } from "@/utils/consts";

function BottomMenu() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: IUserState) => state.user.userInfo);

  function openCatalogModal() {
    dispatch(openClose(true));
  }

  function OpenUserProfile() {
    if (user) {
      router.push(SITE_URL.DASHBOARD);
    } else {
      dispatch(serOpenCloseModalLogin(true));
    }
  }

  return (
    <div className="w-full h-[64px] fixed bottom-0 left-0 bg-white flex-jsb-c border-top shadow px-2 sm:px-[20%] flex lg:hidden">
      <div className="flex-jc-c flex-col">
        <i className="fa-regular fa-house text-blue"></i>
        <span className="text-[14px] text-blue">Գլխաոր</span>
      </div>
      <div className="w-[1px] h-[40px] bg-gray-200 mx-2"></div>
      <div className="flex-jc-c flex-col" onClick={openCatalogModal}>
        <i className="fa-regular fa-grid-2"></i>
        <span className="text-[14px]">Կատալոգ</span>
      </div>
      <div className="w-[1px] h-[40px] bg-gray-200 mx-2"></div>
      <div className="flex-jc-c flex-col">
        <i className="fa-light fa-heart"></i>
        <span className="text-[14px]">Հավանած</span>
      </div>
      <div className="w-[1px] h-[40px] bg-gray-200 mx-2"></div>
      <div className="flex-jc-c flex-col" onClick={OpenUserProfile}>
        <i className="fa-light fa-user"></i>
        <span className="text-[14px] text-nowrap">Իմ պռոֆիլը</span>
      </div>
    </div>
  );
}

export default BottomMenu;
