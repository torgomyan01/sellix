"use client";

import MainTemplateAdmin from "@/app/admin/main-template-admin";
import React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { allCategories } from "@/utils/consts";
import { Box } from "@mui/material";

function AddCategory() {
  return (
    <MainTemplateAdmin>
      <Autocomplete
        options={allCategories}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <Box key={key} component="li" {...optionProps}>
              <i className={`fa-solid ${option.icon} mr-2`}></i>
              {option.name}
            </Box>
          );
        }}
        renderInput={(params) => <TextField {...params} label="Կատեգորիաներ" />}
      />
    </MainTemplateAdmin>
  );
}

export default AddCategory;
