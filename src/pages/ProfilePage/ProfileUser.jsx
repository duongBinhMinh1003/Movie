import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { https } from "../../service/api";
import Swal from "sweettoast.error2";
export default function ProfileUser() {
  let user = JSON.parse(localStorage.getItem("USER_INFO"));
  console.log("user: ", user);
  const initialValues = {
    taiKhoan: user.taiKhoan,
    matKhau: user.matKhau,
    hoTen: user.hoTen,
    email: user.email,
    soDt: user.soDT,
    maLoaiNguoiDung: user.maLoaiNguoiDung,
  };

  const onFinish = (values) => {
    const obj = { ...values, maNhom: user.maNhom };
    https
      .put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", obj)
      .then((res) => {
        console.log("thanh cong", res);
        Swal.fire({
          title: "Cập nhật thành công!",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="setting-profile">
        <h1>Cài đặt tài khoản chung</h1>
        <h2>Thông tin có thể thay đổi</h2>
      </div>
      <hr className="MuiDivider-root"></hr>
      <div>
        {/* form */}
        <Form
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 960,
          }}
          initialValues={initialValues}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="flex justify-between input-profile ">
            <Form.Item
              label="Tài khoản"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input value />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="matkhau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>
          {/*  */}
          <div className="flex  justify-between input-profile">
            <Form.Item
              label="Họ tên"
              name="hoTen"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input value />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          {/*  */}
          <div className="flex justify-between input-profile">
            <Form.Item
              label="Số điện thoại"
              name="soDt"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input value />
            </Form.Item>

            <Form.Item
              label="Loại người dùng"
              name="maLoaiNguoiDung"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Select>
                <Select.Option value="khachHang">Khách hàng</Select.Option>
                <Select.Option value="quanTri">Quản Trị</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <hr className="MuiDivider-root"></hr>
          <div className="btn-update-profile">
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button className="btn-updated" htmlType="submit">
                CẬP NHẬT
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
