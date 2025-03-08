import { CircularProgress } from "@mui/material";
import React from "react";

interface IProps {
  status: boolean;
  children?: React.ReactNode;
}

function LoadingBlock({ status, children }: IProps) {
  return (
    <div className="relative inline-block w-auto">
      <div className={`${status ? "opacity-50" : ""}`}>{children}</div>
      {status && (
        <div className="w-full h-full absolute top-0 left-0 bg-white/50 z-20 flex-jc-c backdrop-blur-[1px]">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default LoadingBlock;
