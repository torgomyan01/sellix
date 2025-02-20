import MainTemplateAdmin from "@/app/admin/main-template-admin";
import React from "react";
import { Button, TextField } from "@mui/material";

function AddCategory() {
  return (
    <MainTemplateAdmin>
      <form action="#">
        <div className="mb-3">
          <TextField label="Անվանում" className="w-[400]" variant="outlined" />
        </div>
        <Button variant="contained">Ավելացնել</Button>
      </form>
    </MainTemplateAdmin>
  );
}

export default AddCategory;
