"use client";

import MainTemplateAdmin from "@/app/admin/main-template-admin";
import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Button } from "@mui/material";
import { GetAllCategory, GetSubCategory, RemoveCategory } from "@/utils/api";
import { printStyleHtml } from "@/utils/helpers";
import { toast } from "react-toastify";
import ModalCrateSubcategory from "@/components/common/admin/modal-crate-subcategory/modal-crate-subcategory";

function AddCategory() {
  const [categoriesResult, setCategoriesResult] = useState<ICategory[]>();
  const [subCatResult, setSubCatResult] = useState<ICategory[] | null>(null);
  const [subSubCatResult, setSubSubCatResult] = useState<ICategory[] | null>(
    null,
  );

  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null,
  );
  const [selectedSubCat, setSelectedSubCat] = useState<ICategory | null>(null);
  const [selectedSubSubCat, setSelectedSubSubCat] = useState<ICategory | null>(
    null,
  );

  const [modalCreateSubCat, setModalCreateSubCat] = useState<{
    status: boolean;
    title: string;
    selectedCategory: ICategory | null;
    type: IUpdateCategoryType | null;
  }>({
    status: false,
    title: "",
    selectedCategory: null,
    type: null,
  });

  const [loadingRemove, setLoadingRemove] = useState<{
    status: boolean;
    type: IUpdateCategoryType;
  }>({
    status: false,
    type: "category",
  });

  useEffect(() => updateCategory("category"), []);

  useEffect(() => {
    if (selectedCategory?.id) {
      GetSubCategory(selectedCategory?.id).then(({ data }) => {
        setSubCatResult(data.data);
      });
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedSubCat?.id) {
      GetSubCategory(selectedSubCat?.id).then(({ data }) => {
        setSubSubCatResult(data.data);
      });
    }
  }, [selectedSubCat]);

  function updateCategory(type: IUpdateCategoryType) {
    if (type === "category") {
      setCategoriesResult([]);
      GetAllCategory().then(({ data }) => {
        setCategoriesResult(data.data);
        setSelectedCategory(null);
      });
    } else if (type === "subcategory") {
      if (selectedCategory) {
        GetSubCategory(selectedCategory?.id).then(({ data }) => {
          setSubCatResult(data.data);
          setSelectedSubCat(null);
        });
      }
    } else if (type === "subsubcategory") {
      if (selectedSubCat) {
        GetSubCategory(selectedSubCat?.id).then(({ data }) => {
          setSubSubCatResult(data.data);
          setSelectedSubSubCat(null);
        });
      }
    }
  }

  function removeCategory(
    category: ICategory | null,
    type: IUpdateCategoryType,
  ) {
    if (category) {
      setLoadingRemove({
        status: true,
        type,
      });
      RemoveCategory(category.id).then(() => {
        toast.success("Կատեգորիան հաջողությամբ ջնջվել է");
        setLoadingRemove({
          status: false,
          type,
        });
      });

      updateCategory(type);
    }
  }

  function openModalForCrateSubCategory(
    title: string,
    selectedCategory: ICategory | null,
    type: IUpdateCategoryType,
  ) {
    setModalCreateSubCat({
      status: true,
      selectedCategory,
      title,
      type,
    });
  }

  function closeModalAddCategory(type: IUpdateCategoryType | null) {
    setModalCreateSubCat({
      status: false,
      selectedCategory: null,
      title: "",
      type: null,
    });

    if (type) {
      updateCategory(type);
    }
  }

  return (
    <MainTemplateAdmin>
      <style>
        {categoriesResult
          ?.map((category: ICategory) =>
            printStyleHtml(category.icon_name, category.icon_code),
          )
          .join("")}
      </style>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4">
        <div>
          {categoriesResult?.length ? (
            <Autocomplete
              options={categoriesResult}
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
                loading={
                  loadingRemove.status && loadingRemove.type === "category"
                }
                onClick={() => removeCategory(selectedCategory, "category")}
              >
                Ջնջել
              </Button>
            </div>
          )}
        </div>
        <div>
          {subCatResult?.length ? (
            <Autocomplete
              options={subCatResult}
              value={selectedSubCat}
              className="w-full"
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                  <Box key={key} component="li" {...optionProps}>
                    {option.name}
                  </Box>
                );
              }}
              onChange={(e, value) => setSelectedSubCat(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={`Ենթակատեգորիաներ -> ${selectedCategory?.name}`}
                />
              )}
            />
          ) : (
            <p>Առյժմ չկա</p>
          )}

          {selectedSubCat && (
            <div className="w-full mt-4 flex-js-c gap-2">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "var(--toastify-color-progress-error)",
                }}
                loading={
                  loadingRemove.status && loadingRemove.type === "subcategory"
                }
                onClick={() => removeCategory(selectedSubCat, "subcategory")}
              >
                Ջնջել
              </Button>
            </div>
          )}

          {selectedCategory && (
            <div className="mt-2">
              <Button
                variant="contained"
                onClick={() =>
                  openModalForCrateSubCategory(
                    `${selectedCategory?.name} - ում բաժին`,
                    selectedCategory,
                    "subcategory",
                  )
                }
              >
                Ավելացնել
              </Button>
            </div>
          )}
        </div>
        <div>
          {subSubCatResult?.length ? (
            <Autocomplete
              options={subSubCatResult}
              value={selectedSubSubCat}
              className="w-full"
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                  <Box key={key} component="li" {...optionProps}>
                    {option.name}
                  </Box>
                );
              }}
              onChange={(e, value) => setSelectedSubSubCat(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={`Ենթակատեգորիաներ -> ${selectedCategory?.name} -> ${selectedSubCat?.name}`}
                />
              )}
            />
          ) : (
            <p>Առյժմ չկա</p>
          )}

          {selectedSubSubCat && (
            <div className="w-full mt-4 flex-js-c gap-2">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "var(--toastify-color-progress-error)",
                }}
                loading={
                  loadingRemove.status &&
                  loadingRemove.type === "subsubcategory"
                }
                onClick={() =>
                  removeCategory(selectedSubSubCat, "subsubcategory")
                }
              >
                Ջնջել
              </Button>
            </div>
          )}

          {selectedSubCat && (
            <div className="mt-2">
              <Button
                variant="contained"
                onClick={() =>
                  openModalForCrateSubCategory(
                    `${selectedCategory?.name} / ${selectedSubCat?.name} - ում բաժին`,
                    selectedSubCat,
                    "subsubcategory",
                  )
                }
              >
                Ավելացնել
              </Button>
            </div>
          )}
        </div>
      </div>

      <ModalCrateSubcategory
        open={modalCreateSubCat}
        handleClose={closeModalAddCategory}
      />
    </MainTemplateAdmin>
  );
}

export default AddCategory;
