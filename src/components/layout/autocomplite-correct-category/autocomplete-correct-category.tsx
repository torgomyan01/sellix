import { printStyleHtml } from "@/utils/helpers";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, CircularProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { GetAllCategoryHome } from "@/utils/api";

interface IProps {
  onChange: (res: {
    cat: ICategory | null;
    subCat: ICategory | null;
    subSubCat: ICategory | null;
  }) => void;
}

function AutocompleteCorrectCategory({ onChange }: IProps) {
  const [categoriesResult, setCategoriesResult] = useState<ICategory[]>();

  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null,
  );
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<ICategory | null>(null);

  const [selectedSubSubCategory, setSelectedSubSubCategory] =
    useState<ICategory | null>(null);

  useEffect(() => {
    onChange({
      cat: selectedCategory,
      subCat: selectedSubCategory,
      subSubCat: selectedSubSubCategory,
    });
  }, [selectedCategory, selectedSubCategory, selectedSubSubCategory]);

  useEffect(() => {
    GetAllCategoryHome().then(({ data }) => {
      setCategoriesResult(data.data);
    });
  }, []);

  function selectCategory(e: React.SyntheticEvent, value: ICategory | null) {
    setSelectedCategory(value);
    setSelectedSubCategory(null);
    setSelectedSubSubCategory(null);
  }

  function selectSubCategory(e: React.SyntheticEvent, value: ICategory | null) {
    setSelectedSubCategory(value);
    setSelectedSubSubCategory(null);
  }

  return (
    <div className="w-full flex-je-c gap-2">
      {!categoriesResult && (
        <div className="w-full flex-jc-c my-6">
          <CircularProgress />
        </div>
      )}

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
          options={categoriesResult.filter((option) => option.parent_id === 0)}
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
          onChange={selectCategory}
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
          value={selectedSubCategory}
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
          onChange={selectSubCategory}
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
          value={selectedSubSubCategory}
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
          onChange={(e, value) => setSelectedSubSubCategory(value)}
          renderInput={(params) => (
            <TextField {...params} label="Կատեգորիաներ" />
          )}
        />
      )}
    </div>
  );
}

export default AutocompleteCorrectCategory;
