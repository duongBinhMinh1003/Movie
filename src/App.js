import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import FormLogin from './pages/LoginPage/FormLogin';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import DetailPage from './pages/HomePage/DetailPage';
import Layout from './layout/Layout';
import Spinner from './component/Spinner/Spinner';
import AdminUserPage from './pages/AdminUserPage/AdminUserPage';
import AdminLayout from './layout/AdminLayout';
import SecureGate from './layout/SecureGate';

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

            <Route path="/detail/:maPhim" element={<DetailPage />} />
          </Route>

          {/* admins */}
          <Route
            path="/admin"
            element={
              <SecureGate>
                <AdminLayout />
              </SecureGate>
            }
          >
            <Route path="users" element={<AdminUserPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
