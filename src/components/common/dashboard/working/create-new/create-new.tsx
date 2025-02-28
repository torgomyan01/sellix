import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useEffect, useState } from "react";
import { GetAllCategoryHome } from "@/utils/api";
import { printStyleHtml, RandomKey } from "@/utils/helpers";

function CreateNew() {
  const [categoriesResult, setCategoriesResult] = useState<ICategory[]>();
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null,
  );
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<ICategory | null>(null);

  useEffect(() => {
    GetAllCategoryHome().then(({ data }) => {
      setCategoriesResult(data.data);
    });
  }, []);

  return (
    <>
      <div className="w-full flex-je-c gap-2">
        <style>
          {categoriesResult
            ?.filter((option) => option.parent_id === 0)
            .map((category: ICategory) =>
              printStyleHtml(category.icon_name, category.icon_code),
            )
            .join("")}
        </style>
        {categoriesResult?.length && (
          <Autocomplete
            options={categoriesResult.filter(
              (option) => option.parent_id === 0,
            )}
            value={selectedCategory}
            className="w-full"
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <Box key={key} component="li" {...optionProps}>
                  <i className={`fa-solid ${option.icon_name} mr-2`}></i>
                  {option.name}
                </Box>
              );
            }}
            onChange={(e, value) => setSelectedCategory(value)}
            renderInput={(params) => (
              <TextField {...params} label="Կատեգորիաներ" />
            )}
          />
        )}

        {categoriesResult && selectedCategory && (
          <Autocomplete
            options={categoriesResult.filter(
              (option) => option.parent_id === selectedCategory.id,
            )}
            value={selectedCategory}
            className="w-full"
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <Box key={key} component="li" {...optionProps}>
                  <i className={`fa-solid ${option.icon_name} mr-2`}></i>
                  {option.name}
                </Box>
              );
            }}
            onChange={(e, value) => setSelectedSubCategory(value)}
            renderInput={(params) => (
              <TextField {...params} label="Կատեգորիաներ" />
            )}
          />
        )}

        {categoriesResult && selectedCategory && selectedSubCategory && (
          <Autocomplete
            options={categoriesResult.filter(
              (option) => option.parent_id === selectedSubCategory.id,
            )}
            value={selectedCategory}
            className="w-full"
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <Box key={key} component="li" {...optionProps}>
                  <i className={`fa-solid ${option.icon_name} mr-2`}></i>
                  {option.name}
                </Box>
              );
            }}
            onChange={(e, value) => setSelectedSubCategory(value)}
            renderInput={(params) => (
              <TextField {...params} label="Կատեգորիաներ" />
            )}
          />
        )}
      </div>

      {categoriesResult && selectedCategory && selectedSubCategory && (
        <div>
          <h3 className="font-bold mb-4 mt-4">
            Ակտիվացրած հայտարարությունները
          </h3>

          {Array.from(Array(10).keys()).map((_, i) => (
            <div
              key={RandomKey()}
              className="w-full border rounded-[20px] flex-js-s gap-4 flex-col sm:flex-row p-4 relative hover:border-gray-400 cursor-pointer mb-4"
            >
              <img
                src="/img/product/img_1.png"
                alt="Product image"
                width={120}
                height={120}
                className="w-[120px] h-[120px] object-cover object-center rounded-[5px]"
              />

              <div className="min-h-[120px] flex-jsb-s flex-col">
                <div>
                  <h2 className="font-semibold text-[18px]">
                    Ավտո շիթերի և այլ Պլաստմասե խանութ վաճառք
                  </h2>
                  <p className="text-[14px] text-gray-500 mt-1">
                    Ստեղծվել է 15,02,2025 - Ավարտվում է 25,02,2025
                  </p>
                </div>

                <div className="flex-js-c gap-2">
                  <Button variant="contained">Ստանալ հղում</Button>
                </div>
              </div>

              <div className="absolute right-[16px] bottom-[12px] text-gray-300">
                <i className="fa-solid fa-eye mr-2"></i>
                17{i}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default CreateNew;
