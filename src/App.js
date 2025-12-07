import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import FormLogin from "./pages/LoginPage/FormLogin";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import DetailPage from "./pages/HomePage/DetailPage";
import Layout from "./layout/Layout";
import Spinner from "./component/Spinner/Spinner";
import AdminUserPage from "./pages/AdminUserPage/AdminUserPage";
import AdminLayout from "./layout/AdminLayout";
import SecureGate from "./layout/SecureGate";
import HookPage from "./pages/HookPage/HookPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BookTicket from "./pages/BookTicket/BookTicket";
import DetailLayout from "./layout/DetailLayout";
import SecureGateBooking from "./layout/SecureGateBooking";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
      <Spinner></Spinner>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          {/* users */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/" element={<DetailLayout></DetailLayout>}>
            <Route path="/detail/:maPhim" element={<DetailPage />} />
            <Route
              path="/profile"
              element={<ProfilePage></ProfilePage>}
            ></Route>
          </Route>

          {/* admins */}
          <Route
            path="/admin"
            element={
              // seguregate ow= day
              <AdminLayout />
            }
          >
            <Route path="users" element={<AdminUserPage />} />
          </Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="chitietphongve/:maLichChieu"
            element={
              <SecureGateBooking>
                <BookTicket />
              </SecureGateBooking>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
