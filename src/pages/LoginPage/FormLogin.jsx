import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { htpps } from "../../service/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
const FormLogin = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const onFinish = (values) => {
    htpps
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        navigate("/");
        message.success("Dang nhap thanh cong!");
        dispatch(setUser(res.data.content));
        // luu data xuong local Storage
        let dataJson = JSON.stringify(res.data.content); // Fix typo here
        localStorage.setItem("USER_INFO", dataJson);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
        message.error("Dang nhap that bai!");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
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
        <Input />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 16,
        }}
      >
        <Button className="bg-orange-400" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormLogin;
