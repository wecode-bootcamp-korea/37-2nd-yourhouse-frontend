import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import MyPage from './pages/MyPage/MyPage';
import Upload from './pages/Upload/Upload';
import Footer from './components/Footer/Footer';
import UserAuth from './pages/Login/UserAuth';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/user/auth" element={<UserAuth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
