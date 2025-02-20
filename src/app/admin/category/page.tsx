"use client";

import MainTemplateAdmin from "@/app/admin/main-template-admin";
import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Button } from "@mui/material";
import { GetAllCategory, RemoveCategory } from "@/utils/api";
import { printStyleHtml } from "@/utils/helpers";
import { toast } from "react-toastify";

function AddCategory() {
  const [categoriesResult, setCategoriesResult] = useState<ICategory[]>();
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null,
  );
  const [loadingRemove, setLoadingRemove] = useState<boolean>(false);

  useEffect(updateCategory, []);

  function updateCategory() {
    setCategoriesResult([]);
    GetAllCategory().then(({ data }) => {
      setCategoriesResult(data.data);
    });
  }

  function removeCategory() {
    if (selectedCategory) {
      setLoadingRemove(true);
      RemoveCategory(selectedCategory.id).then(() => {
        toast.success("Կատեգորիան հաջողությամբ ջնջվել է");
        setLoadingRemove(false);
        updateCategory();
      });
    }
  }

  return (
    <MainTemplateAdmin>
      <style>
        {categoriesResult
          ?.map((category: ICategory) =>
            printStyleHtml(category.icon_name, category.icon_code),
          )
          .join("\n")}
      </style>

      <div className="grid grid-cols-3">
        <div>
          {categoriesResult?.length ? (
            <Autocomplete
              options={categoriesResult}
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
          ) : (
            <h1 className="text-center text-[25px]">Loading...</h1>
          )}

          {selectedCategory && (
            <div className="w-full mt-4 flex-js-c gap-2">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "var(--toastify-color-progress-error)",
                }}
                loading={loadingRemove}
                onClick={removeCategory}
              >
                Ջնջել
              </Button>

              <Button
                variant="contained"
                style={{
                  backgroundColor: "var(--mui-palette-success-light)",
                }}
              >
                Ավելացնել ենթկատեգորիա
              </Button>
            </div>
          )}
        </div>
      </div>
    </MainTemplateAdmin>
  );
}

export default AddCategory;
