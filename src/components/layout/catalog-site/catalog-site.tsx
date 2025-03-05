"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openClose } from "@/redux/catalog-site";
import { GetAllCategoryHome } from "@/utils/api";
import CatalogDesktop from "@/components/layout/catalog-site/components/desktop";
import MobileCatalog from "@/components/layout/catalog-site/components/mobile-catalog";

interface ICatalog {
  catalogSite: {
    status: boolean;
  };
}

function CatalogSite() {
  const dispatch = useDispatch();
  const status = useSelector((state: ICatalog) => state.catalogSite.status);

  const [allCat, setAllCat] = useState<ICategory[]>([]);

  const closeModal = () => dispatch(openClose(false));

  useEffect(() => {
    GetAllCategoryHome().then(({ data }) => {
      setAllCat(data.data);
    });
  }, []);

  return (
    <div
      className={`${status ? "block" : "hidden"} w-full h-[100dvh] fixed top-0 left-0 bg-white py-6 px-4 sm:p-6 z-50 flex flex-col`}
    >
      <div className="flex-je-c">
        <i
          className="fa-solid fa-xmark-large cursor-pointer"
          onClick={closeModal}
        ></i>
      </div>

      <CatalogDesktop allCat={allCat} />
      <MobileCatalog allCat={allCat} />
    </div>
  );
}

export default CatalogSite;
