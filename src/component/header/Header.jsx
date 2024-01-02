import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  let { user } = useSelector((state) => state.userSlice);
  console.log("user: ", user);
  let handleLogout = () => {
    localStorage.removeItem("USER_INFO");
    window.location.reload();
  };
  let renderMenu = () => {
    let cssBtn = "rounded px-5 py-2 border-2 border-black";
    if (user) {
      // da dang nhap
      return (
        <>
          <span>{user.hoTen}</span>
          <button onClick={handleLogout} className={cssBtn}>
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Đăng nhập
          </button>
          <button>Đăng kí</button>
        </>
      );
    }
  };
  return (
    <div className="h-24">
    <div className="shadow-lg shadow-black fixed w-full top-0 left-0 z-50 bg-white">
      <div className="h-20 flex justify-between items-center">
        <NavLink to={`/`}>
          {" "}
          <span className="text-2xl text-red-500 font-medium">CyberFlix</span>
        </NavLink>
        <div className="space-x-5">{renderMenu()}</div>
      </div>
    </div>
    </div>
  );
}
