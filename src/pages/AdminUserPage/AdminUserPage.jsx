import React, { useEffect, useState } from "react";
import { htpps } from "../../service/api";
import { message, Space, Table, Tag } from "antd";
export default function AdminUserPage() {
  const [listUser, setListUser] = useState([]);
  let fetchUserList = () => {
    htpps
      .get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00")
      .then((res) => {
        console.log(res);
        setListUser(res.data.content); // table antd
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchUserList();
  }, []);
  const columns = [
    {
      title: "Account",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Name",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Aciton",
      key: "action",
      render: (_, record) => {
        return (
          <button
            onClick={() => {
              handleDelete(record.taiKhoan);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </button>
        );
        // hero icon
      },
    },
  ];
  let handleDelete = (id) => {
    htpps
      .delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`)
      .then((res) => {
        console.log(res);
        fetchUserList();
        message.success("success");
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };
  return (
    <div>
      <Table columns={columns} dataSource={listUser} />
    </div>
  );
}
