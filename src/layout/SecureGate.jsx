import React from 'react'

export default function SecureGate({children}) {
// kiem tra user da dang nhap hay chua
let user =JSON.parse(localStorage.getItem("USER_INFO"))
console.log('user: ', user);

// if (!user || user.maLoaiNguoiDung != "QuanTri") {
//     window.location.href = "/login";
//   }
  if (!user ) {
    window.location.href = "/login";
  }
  return children
}
