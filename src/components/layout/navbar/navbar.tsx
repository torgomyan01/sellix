import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalLogin from "@/components/layout/modal-login/modal-login";
import ModalRegister from "@/components/layout/modal-register/modal-register";
import { CircularProgress } from "@mui/material";
import { localStorageKeys } from "@/utils/consts";
import { setUserInfo } from "@/redux/user";
import NavbarAuthBlock from "@/components/layout/navbar/navbar-auth-block";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state: IUserState) => state.user.userInfo);
  const [modalLogin, setModalLogin] = useState<boolean>(false);
  const [modalRegister, setModalRegister] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const closeModalLogin = () => setModalLogin(false);
  const closeModalRegister = () => setModalRegister(false);

  useEffect(() => {
    const checkUserLogin = JSON.parse(
      localStorage.getItem(localStorageKeys.userInfo) as string,
    );

    dispatch(setUserInfo(checkUserLogin));
    setLoading(false);
  }, []);

  return (
    <>
      <div className="flex-jsb-c sm:flex-je-c">
        <Image
          src="img/SELLIX.svg"
          alt="sellix home logo"
          width={230}
          height={54}
          className="w-[110px] sm:w-[230px] h-auto block sm:hidden"
        />

        {loading ? (
          <CircularProgress size={30} />
        ) : user ? (
          <NavbarAuthBlock user={user} />
        ) : (
          <div className="flex-je-c gap-2">
            <button
              className="border text-black px-4 py-2 rounded-[8px] text-[14px] sm:text-[16px] transition hover:border-black hidden sm:block"
              onClick={() => setModalLogin(true)}
            >
              <i className="fa-light fa-right-to-bracket mr-2"></i>
              Մուտք
            </button>
            <button
              className="bg-blue text-white px-4 py-2 rounded-[8px] text-[14px] sm:text-[16px] transition hover:bg-[#1550E6] "
              onClick={() => setModalRegister(true)}
            >
              <i className="fa-solid fa-user-plus mr-2"></i>
              Գրանցվել
            </button>
          </div>
        )}
      </div>

      <ModalLogin status={modalLogin} onClose={closeModalLogin} />

      <ModalRegister status={modalRegister} onClose={closeModalRegister} />
    </>
  );
}

export default Navbar;
