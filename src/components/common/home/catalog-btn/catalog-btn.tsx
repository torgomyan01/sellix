"use client";

import { openClose } from "@/redux/catalog-site";
import React from "react";
import { useDispatch } from "react-redux";

function CatalogSite() {
  const dispatch = useDispatch();
  function openCatalogModal() {
    dispatch(openClose(true));
  }

  return (
    <div className="w-[1px] hidden lg:block">
      <button
        className="bg-blue text-white px-3 py-2 rounded-[8px] transition hover:bg-[#1550E6]"
        onClick={openCatalogModal}
      >
        <i className="fa-solid fa-grid-2 mr-2 text-white"></i>
        Կատալոգ
      </button>
    </div>
  );
}

export default CatalogSite;
