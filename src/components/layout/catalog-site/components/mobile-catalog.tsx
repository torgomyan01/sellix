import React, { useState } from "react";
import { GetAllServices, printStyleHtml, RandomKey } from "@/utils/helpers";
import MobileMenuItem from "@/components/layout/catalog-site/components/mobile-menu-item";

interface IAllCat {
  allCat: ICategory[];
}

function MobileCatalog({ allCat = [] }: IAllCat) {
  const Rental = GetAllServices(allCat, "ui");

  const [steps, setSteps] = useState<number>(0);
  const [categories, setCategories] = useState<ICategory[]>([]);

  function selectRental(cat: ICategory) {
    setSteps(steps + 1);
    setCategories((oldArray) => [...oldArray, cat]);
  }

  function backStep() {
    setSteps(steps - 1);
    const _cats = categories;
    _cats.pop();

    setCategories(_cats);
  }

  return (
    <div className="mt-4 block lg:hidden h-[calc(100%_-_70px)]">
      {steps > 0 && (
        <div
          onClick={backStep}
          className="mt-[-35px] mb-[35px] w-[30px] h-[30px] border flex-jc-c rounded-full text-black/60 shadow active:text-black"
        >
          <i className="fa-solid fa-left"></i>
        </div>
      )}
      <div className="h-full overflow-y-auto flex-js-s flex-col pb-6 pr-2">
        {steps === 0 && (
          <React.Fragment>
            {Rental.map((val) => (
              <div
                key={RandomKey()}
                onClick={() => selectRental(val)}
                className="w-full group flex-jsb-c p-2 hover:bg-blue/30 hover:text-blue cursor-pointer border-b"
              >
                <style>{printStyleHtml(val.icon_name, val.icon_code)}</style>
                <div className="flex-js-c">
                  <i className={`fa-solid ${val.icon_name} mr-2`}></i>
                  {val.name}
                </div>
                <i className="fa-light fa-arrow-right opacity-0 group-hover:opacity-100 group-[.active]:opacity-100"></i>
              </div>
            ))}
          </React.Fragment>
        )}

        {steps === 1 && (
          <React.Fragment>
            {allCat
              .filter((_cat: ICategory) => _cat.parent_id === 0)
              .map((category: ICategory) => (
                <div key={RandomKey()} className="w-full">
                  <style>
                    {printStyleHtml(category.icon_name, category.icon_code)}
                  </style>

                  <MobileMenuItem
                    category={category}
                    icon
                    onClick={() => selectRental(category)}
                  />
                </div>
              ))}
          </React.Fragment>
        )}

        {steps === 2 &&
          allCat
            .filter((_cat: ICategory) => _cat.parent_id == categories[1].id)
            .map((item) => (
              <MobileMenuItem
                key={RandomKey()}
                category={item}
                onClick={() => selectRental(item)}
              />
            ))}

        {steps === 3 &&
          allCat
            .filter((_cat: ICategory) => _cat.parent_id == categories[2].id)
            .map((item) => (
              <MobileMenuItem key={RandomKey()} category={item} />
            ))}
      </div>
    </div>
  );
}

export default MobileCatalog;
