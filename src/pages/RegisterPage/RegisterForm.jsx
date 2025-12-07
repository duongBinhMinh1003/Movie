import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { https } from "../../service/api";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../component/header/Header";
import Swal from "sweettoast.error2";

const RegisterForm = () => {
  const onFinish = (values) => {
    if (values.matKhau !== values.rematKhau) {
      message.error("Passwords do not match");
      return;
    }

    https
      .post("/api/QuanLyNguoiDung/DangKy", values)
      .then((res) => {
        Swal.fire({
          title: "Đăng kí thành công!",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        message.error("Tài khoản đã tồn tại");
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Header></Header>
      <div className="jss14">
        <div className="MuiContainer-root jss19 MuiContainer-maxWidthXs">
          <div className="jss15">
            <div className="MuiAvatar-root MuiAvatar-circle jss16 MuiAvatar-colorDefault">
              <svg
                class="MuiSvgIcon-root MuiAvatar-fallback"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
            </div>
            <h1 class="MuiTypography-root MuiTypography-h1">Đăng Kí</h1>
            <Form
              className="jss17"
              name="basic"
              layout="vertical"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth">
                <Form.Item
                  label="Tài khoản"
                  name="taiKhoan"
                  rules={[
                    {
                      required: true,
                      message: "Đây là trường bắt buộc!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Mật khẩu"
                  name="matKhau"
                  rules={[
                    {
                      required: true,
                      message: "Đây là trường bắt buộc!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="Nhập lại  mật khẩu"
                  name="rematKhau"
                  rules={[
                    {
                      required: true,
                      message: "Đây là trường bắt buộc!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Đây là trường bắt buộc!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Số điện thoai"
                  name="soDt"
                  rules={[
                    {
                      required: true,
                      message: "Đây là trường bắt buộc!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Họ tên"
                  name="hoTen"
                  rules={[
                    {
                      required: true,
                      message: "Đây là trường bắt buộc!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 0,
                    span: 16,
                  }}
                >
                  <Button className="bg-orange-400" htmlType="submit">
                    ĐĂNG KÍ
                  </Button>
                </Form.Item>
              </div>
              <div class="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-flex-end justify-end">
                <div class="MuiGrid-root MuiGrid-item justify-end">
                  <NavLink to={"/login"}>
                    <h3 class="MuiTypography-root MuiTypography-h3 float-right">
                      Bạn đã có tài khoản? Đăng nhập
                    </h3>
                  </NavLink>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterForm;
