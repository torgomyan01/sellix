import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React, { FormEvent, useState } from "react";
import { CreateCategory } from "@/utils/api";
import { toast } from "react-toastify";

interface IProps {
  open: {
    status: boolean;
    title: string;
    selectedCategory: ICategory | null;
    type: IUpdateCategoryType | null;
  };
  handleClose: () => void;
}

function ModalCrateSubcategory({ open, handleClose }: IProps) {
  const [loading, setLoading] = useState<boolean>(false);

  function addSubCategory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;

    if (open.selectedCategory) {
      const formData: ICreateCategory = {
        name: form["nameCategory"].value,
        parent_id: open.selectedCategory.id,
        icon_name: "",
        icon_code: "",
      };

      setLoading(true);

      CreateCategory(formData)
        .then(({ data }) => {
          if (data?.data) {
            setLoading(false);
            toast.success("Կատեգորիան հաջողությամբ ավելացվել է");
            handleClose();
          }
        })
        .catch(() => {
          toast.error("Տեղի է ունեցել խնդիր խնդրում ենք ստուգեք քոնսոլը");
          setLoading(false);
        });
    }
  }

  return (
    <Dialog open={open.status} onClose={handleClose}>
      <DialogTitle>
        <div className="flex-je-c">
          <i
            className="fa-regular fa-xmark-large text-[15px] cursor-pointer"
            onClick={handleClose}
          ></i>
        </div>
      </DialogTitle>
      <DialogContent className="w-full sm:w-[400px]">
        <p className="text-[16px] mb-4">
          <b>Ավելացնել</b>: <br /> {open.title}
        </p>
        <form action="#" className="pt-2" onSubmit={addSubCategory}>
          <div className="w-full mb-8">
            <TextField
              label="Անվանում"
              className="w-full"
              name="nameCategory"
              variant="outlined"
            />
          </div>

          <div className="flex-jc-c">
            <Button variant="contained" type="submit" loading={loading}>
              Ավելացնել
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalCrateSubcategory;
