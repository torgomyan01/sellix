"use client";

import MainTemplateAdmin from "@/app/admin/main-template-admin";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { CreateCategory } from "@/utils/api";

function AddCategory() {
  const [loading, setLoading] = useState<boolean>(false);
  const [iconName, setIconName] = useState<string>("");
  const [iconCode, setIconCode] = useState<string>("");

  function startCreateCategory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;

    const formData: ICreateCategory = {
      name: form["nameCategory"].value,
      parent_id: 0,
      icon_name: form["icon_name"].value,
      icon_code: form["icon_code"].value,
    };

    setLoading(true);

    CreateCategory(formData)
      .then(({ data }) => {
        if (data?.data) {
          setLoading(false);
          toast.success("Կատեգորիան հաջողությամբ ավելացվել է");
        }
      })
      .catch(() => {
        toast.error("Տեղի է ունեցել խնդիր խնդրում ենք ստուգեք քոնսոլը");
        setLoading(false);
      });
  }

  return (
    <MainTemplateAdmin>
      <style>
        {`
          .${iconName}:before {
              content: "\\${iconCode}";
          }
        `}
      </style>

      <form
        action="#"
        onSubmit={startCreateCategory}
        className="flex-js-s flex-col"
      >
        <div className="mb-3">
          <TextField
            label="Անվանում"
            name="nameCategory"
            className="w-[400]"
            variant="outlined"
            required
          />
        </div>
        <div className="mb-3">
          <TextField
            label="Իկոնկի անունը"
            name="icon_name"
            className="w-[400]"
            variant="outlined"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIconName(e.target.value)
            }
            required
          />
        </div>
        <div className="mb-3 relative">
          <TextField
            label="Իկոնկի կոդը"
            name="icon_code"
            className="w-[400]"
            variant="outlined"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIconCode(e.target.value)
            }
            required
          />
          <i
            className={`fa-regular ${iconName} absolute top-[50%] transform translate-y-[-50%] right-3`}
          ></i>
        </div>
        <Button variant="contained" type="submit" loading={loading}>
          Ավելացնել
        </Button>
      </form>
    </MainTemplateAdmin>
  );
}

export default AddCategory;
