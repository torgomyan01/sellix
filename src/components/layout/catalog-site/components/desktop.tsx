import React, { useState } from "react";
import {
  GetAllServices,
  GetAllServicesTypes,
  printStyleHtml,
  RandomKey,
} from "@/utils/helpers";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface IAllCat {
  allCat: ICategory[];
}

function CatalogDesktop({ allCat = [] }: IAllCat) {
  const [selectedCat, setSelectedCat] = useState<ICategory | null>(null);
  const [selectedSubCat, setSelectedSubCat] = useState<ICategory | null>(null);

  const [type, setType] = useState<number>(0);
  const [typeRental, setTypeRental] = useState<number>(0);

  function selectCat(category: ICategory) {
    setSelectedCat(category);
    setSelectedSubCat(null);
  }

  const Rental = GetAllServices(allCat, "ui");

  return (
    <div className="flex-js-s w-full h-full flex-grow overflow-hidden hidden lg:flex">
      <div className="w-[330px] min-w-[330px] pr-1 border-r h-full">
        <div className="w-full h-full overflow-y-auto flex flex-col gap-2 pr-2 no-right-scroll">
          {allCat
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
                      <i className={`fa-solid ${category.icon_name} mr-2`}></i>
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
          className="border-b pl-6"
          onChange={(e, value) => setType(value)}
        >
          {Rental.map((val) => (
            <Tab key={RandomKey()} label={val.name} />
          ))}
        </Tabs>
        {type === 1 && (
          <Tabs
            value={typeRental}
            onChange={(e, value) => setTypeRental(value)}
            className="border-b pl-6"
          >
            {GetAllServicesTypes(allCat).map((val) => (
              <Tab key={RandomKey()} label={val.name} />
            ))}
          </Tabs>
        )}

        <div className="flex-js-s w-full flex-grow overflow-hidden mt-6">
          <div className="px-6 pl-10 w-[350px] min-w-[330px] flex flex-col gap-2 pr-4">
            <h2 className="text-[22px] font-bold mb-6">
              <i className={`fa-solid ${selectedCat?.icon_name} mr-2`}></i>
              {selectedCat?.name}
            </h2>
            <div className="flex-js-s flex-col w-full h-[calc(100vh_-_200px)] overflow-y-auto pr-2 ">
              {allCat
                .filter((_cat: ICategory) => _cat.parent_id == selectedCat?.id)
                .map((item) => (
                  <React.Fragment key={RandomKey()}>
                    <div
                      onMouseEnter={() => setSelectedSubCat(item)}
                      className={`w-full group flex-jsb-c p-2 rounded-[8px] hover:bg-blue/30 hover:text-blue cursor-pointer ${selectedSubCat?.id === item.id ? "bg-blue/30 text-blue active" : ""}`}
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
          <div className="px-6 w-[400px] min-w-[330px] h-full flex flex-col gap-2 pr-4">
            <h2 className="text-[22px] font-bold mb-6">
              <i className={`fa-solid ${selectedSubCat?.icon_name} mr-2`}></i>
              {selectedSubCat?.name}
            </h2>
            <div className="flex-js-s flex-col w-full h-[calc(100vh_-_200px)] overflow-y-auto pr-2">
              {allCat
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
  );
}

export default CatalogDesktop;
