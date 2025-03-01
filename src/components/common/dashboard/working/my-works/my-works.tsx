import React, { useState } from "react";
import { Button, DialogActions, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

function MyWorks() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h3 className="font-bold mb-4">Իմ նվաճածները</h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="w-full h-[64px] border border-[EFF0F6] bg-[#F9F9F9] rounded-[20px] px-4 flex-jsb-c">
          <h3 className="font-bold">Ընդհանուր</h3>
          <h2 className="text-[22px] text-[#ECA100] font-bold">15 000 ֏</h2>
        </div>
        <div className="w-full h-[64px] border border-[EFF0F6] bg-[#F9F9F9] rounded-[20px] px-4 flex-jsb-c">
          <h3 className="font-bold">Մեկ դիտման համար</h3>
          <h2 className="text-[22px] text-[#ECA100] font-bold">1 ֏</h2>
        </div>
        <div className="w-full h-[64px] border border-[EFF0F6] bg-[#F9F9F9] rounded-[20px] px-4 flex-jsb-c">
          <h3 className="font-bold">Ընդհանուր Դիտումներ</h3>
          <h2 className="text-[22px] text-[#ECA100] font-bold">100</h2>
        </div>
        <div className="w-full h-[64px] border border-[EFF0F6] bg-[#F9F9F9] rounded-[20px] px-4 flex-jsb-c">
          <h3 className="font-bold">
            <i className="fa-solid fa-circle-dollar text-green-500 mr-2"></i>
            Մեկ դիտման համար 1000 - ից հետո
          </h3>
          <div className="flex-je-c">
            <i className="fa-light fa-chart-line-up mr-2 text-orange-500"></i>
            <h2 className="text-[22px] text-[#ECA100] font-bold">2 ֏</h2>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-4">
        <Button variant="contained" onClick={handleClickOpen}>
          Կանխիկացնել
        </Button>
      </div>

      {open && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="alert-dialog-title">Կանխիկացցում</DialogTitle>
          <DialogContent className="w-[400px]">
            <div className="mt-2">
              <TextField
                label="Մուտքագրեք արժեքը"
                variant="outlined"
                className="w-full"
                name="price"
              />
            </div>
            <div className="mt-4">
              <TextField
                label="Idram ID"
                variant="outlined"
                className="w-full"
                name="price"
              />
            </div>

            <div className="mt-4 flex-jc-c">
              <Button variant="contained" onClick={handleClickOpen}>
                Կանխիկացնել
              </Button>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Փակել
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}

export default MyWorks;
