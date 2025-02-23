"use client";

import { printStyleHtml, RandomKey } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openClose } from "@/redux/catalog-site";
import { GetAllCategoryHome } from "@/utils/api";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface ICatalog {
  catalogSite: {
    status: boolean;
  };
}

function CatalogSite() {
  const dispatch = useDispatch();
  const status = useSelector((state: ICatalog) => state.catalogSite.status);

  const [allCategories, setAllCategories] = useState<ICategory[]>([]);
  const [selectedCat, setSelectedCat] = useState<ICategory | null>(null);
  const [selectedSubCat, setSelectedSubCat] = useState<ICategory | null>(null);

  const [type, setType] = useState<number>(0);

  const closeModal = () => dispatch(openClose(false));

  useEffect(() => {
    GetAllCategoryHome().then(({ data }) => {
      setAllCategories(data.data);
    });
  }, []);

  function selectCat(category: ICategory) {
    setSelectedCat(category);
    setSelectedSubCat(null);
  }

  return (
    <div
      className={`${status ? "block" : "hidden"} w-full h-[100dvh] fixed top-0 left-0 bg-white p-6 z-50 flex flex-col`}
    >
      <div className="flex-je-c">
        <i
          className="fa-solid fa-xmark-large cursor-pointer"
          onClick={closeModal}
        ></i>
      </div>

      <div className="flex-js-s w-full flex-grow overflow-hidden">
        <div className="w-[330px] min-w-[330px] pr-1 border-r h-full">
          <div className="w-full h-full overflow-y-auto flex flex-col gap-2 pr-2 no-right-scroll">
            {allCategories
              .filter((_cat: ICategory) => _cat.parent_id === 0)
              .map((category: ICategory, index: number) => (
                <React.Fragment key={RandomKey()}>
                  <div onMouseEnter={() => selectCat(category)}>
                    <style>
                      {printStyleHtml(category.icon_name, category.icon_code)}
                    </style>
                    <div
                      className={`w-fill  min-h-[44px] group flex-jsb-c px-2 rounded-[8px] hover:bg-blue/30 hover:text-blue cursor-pointer ${selectedCat?.id === category.id ? "bg-blue/30 text-blue active" : ""}`}
                    >
                      <div className="flex-js-c">
                        <i
                          className={`fa-solid ${category.icon_name} mr-2`}
                        ></i>
                        {category.name}
                      </div>
                      <i className="fa-light fa-arrow-right opacity-0 group-hover:opacity-100 group-[.active]:opacity-100"></i>
                    </div>
                  </div>
                  {index === 2 && (
                    <div className="w-full h-[1px] min-h-[1px]  bg-gray-200"></div>
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>

        <div>
          <Tabs
            value={type}
            aria-label="basic tabs example"
            className="border-b pl-6 mb-6"
            onChange={(e, value) => setType(value)}
          >
            <Tab label="Առք վաճառք" />
            <Tab label="Վարձակալություն" />
            <Tab label="Ծառայության մատուցում" />
          </Tabs>
          <div className="flex-js-s w-full flex-grow overflow-hidden">
            <div className="px-6 pl-10 w-[350px] min-w-[330px] h-full overflow-y-auto flex flex-col gap-2 pr-4">
              <h2 className="text-[22px] font-bold mb-6">
                <i className={`fa-solid ${selectedCat?.icon_name} mr-2`}></i>
                {selectedCat?.name}
              </h2>
              <div className="flex-js-s flex-wrap w-full">
                {allCategories
                  .filter(
                    (_cat: ICategory) => _cat.parent_id == selectedCat?.id,
                  )
                  .map((item) => (
                    <React.Fragment key={RandomKey()}>
                      <div
                        onMouseEnter={() => setSelectedSubCat(item)}
                        className={`w-full min-h-[44px] group flex-jsb-c p-2 rounded-[8px] hover:bg-blue/30 hover:text-blue cursor-pointer ${selectedSubCat?.id === item.id ? "bg-blue/30 text-blue active" : ""}`}
                      >
                        <div className="flex-js-c">
                          <i className={`fa-solid ${item.icon_name} mr-2`}></i>
                          {item.name}
                        </div>
                        <i className="fa-light fa-arrow-right opacity-0 group-hover:opacity-100 group-[.active]:opacity-100"></i>
                      </div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
            <div className="px-6 w-[400px] min-w-[330px] h-full overflow-y-auto flex flex-col gap-2 pr-4">
              <h2 className="text-[22px] font-bold mb-6">
                <i className={`fa-solid ${selectedSubCat?.icon_name} mr-2`}></i>
                {selectedSubCat?.name}
              </h2>
              <div className="flex-js-s flex-wrap w-full">
                {allCategories
                  .filter(
                    (_cat: ICategory) => _cat.parent_id == selectedSubCat?.id,
                  )
                  .map((item) => (
                    <React.Fragment key={RandomKey()}>
                      <div className="w-full min-h-[44px] group flex-jsb-c p-2 rounded-[8px] hover:bg-blue/30 hover:text-blue cursor-pointer">
                        <div className="flex-js-c">
                          <i className={`fa-solid ${item.icon_name} mr-2`}></i>
                          {item.name}
                        </div>
                        <i className="fa-light fa-arrow-right opacity-0 group-hover:opacity-100"></i>
                      </div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogSite;
