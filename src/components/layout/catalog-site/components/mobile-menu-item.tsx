import React from "react";

interface IProps {
  category: ICategory;
  onClick?: () => void;
  icon?: boolean;
}

function MobileMenuItem({ category, onClick, icon = false }: IProps) {
  return (
    <div
      onClick={onClick}
      className="w-full min-h-[44px] group flex-jsb-c px-2 py-2 border-b hover:bg-blue/30 hover:text-blue cursor-pointer"
    >
      <div className="flex-js-c">
        {icon && <i className={`fa-solid ${category.icon_name} mr-2`}></i>}

        {category.name}
      </div>
      <i className="fa-light fa-arrow-right opacity-0 group-hover:opacity-100 group-[.active]:opacity-100"></i>
    </div>
  );
}

export default MobileMenuItem;
