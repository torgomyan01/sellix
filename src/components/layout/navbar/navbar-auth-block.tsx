import { Avatar, Menu, MenuItem } from "@mui/material";
import React from "react";
import { localStorageKeys, SITE_URL } from "@/utils/consts";
import { setUserInfo } from "@/redux/user";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { RandomKey } from "@/utils/helpers";

interface IProps {
  user: IUserInfo;
}

const menuData = [
  {
    url: SITE_URL.DASHBOARD,
    name: "Կառավարման վահանակ",
    icon: <i className="fa-regular fa-toolbox mr-1"></i>,
  },
  {
    url: SITE_URL.DASHBOARD_POSTS_CREATE,
    name: "Ավելացնել Հայտարարություն",
    icon: <i className="fa-regular fa-plus mr-1"></i>,
  },
  {
    url: SITE_URL.DASHBOARD_FAVORITE,
    name: "Իմ նախընտրածները",
    icon: <i className="fa-regular fa-heart mr-1 "></i>,
  },
  {
    url: SITE_URL.DASHBOARD_WORK,
    name: "Աշխատել գումար",
    icon: <i className="fa-solid fa-circle-dollar text-green-500 mr-1"></i>,
  },
  {
    url: SITE_URL.DASHBOARD_SETTINGS,
    name: "Կարգաորումներ",
    icon: <i className="fa-regular fa-gear mr-1"></i>,
  },
];

function NavbarAuthBlock({ user }: IProps) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function logout() {
    localStorage.removeItem(localStorageKeys.userInfo);
    localStorage.removeItem(localStorageKeys.token);

    dispatch(setUserInfo(null));
    handleClose();
  }

  return (
    <div className="relative">
      <div
        className="flex-js-c gap-2 border border-white pl-1 pr-1 sm:pr-4 py-1 rounded-full bg-white cursor-pointer text-gray-700"
        onClick={handleClick}
      >
        <Avatar sx={{ width: 30, height: 30 }}>{user.name[0]}</Avatar>
        <span className="hidden sm:block">{user.name}</span>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="mt-1"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {menuData.map((item) => (
          <MenuItem
            key={RandomKey()}
            href={item.url}
            component={Link}
            onClick={handleClose}
          >
            {item.icon}
            {item.name}
          </MenuItem>
        ))}

        <MenuItem onClick={logout}>
          <i className="fa-regular fa-right-from-bracket mr-1"></i>
          Ելք
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarAuthBlock;
