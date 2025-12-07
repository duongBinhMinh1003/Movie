import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Swal from "sweettoast.error2";

export default function Header() {
  let { user } = useSelector((state) => state.userSlice);
  // console.log("user: ", user);
  // let handleLogout = () => {
  //   if (true) {
  //     setTimeout(() => {
  //       Swal.fire({
  //         title: "Good job!",
  //         text: "You clicked the button!",
  //         icon: "success"
  //       });
  //     }, 1200000); // Redirect after 20 minutes (1200000 milliseconds)

  //     window.location.href = "/";
  //     localStorage.removeItem("USER_INFO");
  //   }
  // };
  let handleLogout = () => {
    if (true) {
      Swal.fire({
        title: "Are you sure?",
        text: "You are about to log out.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#fb4226",
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("USER_INFO");
          window.location.href = "/";
        }
      });
    }
  };

  let renderMenu = () => {
    let cssBtn = "rounded px-5 py-2  ";
    if (user) {
      // da dang nhap
      return (
        <>
          <div className="flex justify-center items-center user-show">
            <div className="user-name">
              <NavLink to={"/profile"}>
                <span className=" border-black">{user.hoTen}</span>
              </NavLink>
            </div>
            <button
              onClick={handleLogout}
              className="rounded px-5 py-2 btn-logout"
            >
              <svg
                class="MuiSvgIcon-roott jss12 MuiSvgIcon-fontSizeLarge"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
              </svg>
              Đăng xuất
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div class="jss1003">
            <a
              className="btn-login"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              <svg
                class="MuiSvgIcon-root jss12 MuiSvgIcon-fontSizeLarge avatar-user "
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
              </svg>
              <h3 className="dangnhap">Đăng nhập</h3>
            </a>
          </div>
          <a
            className="btn-login cursor-pointer"
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            <svg
              class="MuiSvgIcon-root jss12 MuiSvgIcon-fontSizeLarge avatar-user  "
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
            </svg>
            <h3 className="dangki">Đăng kí</h3>
          </a>
        </>
      );
    }
  };
  return (
    <div className="h-24 ">
      <div className="shadow-lg shadow-black fixed w-full top-0 left-0 z-50 bg-white ">
        <div className="h-20 flex justify-between items-center ">
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
