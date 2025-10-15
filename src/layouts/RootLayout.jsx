// src/layouts/RootLayout.jsx

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <div className="flex border-2 border-gray-300 gap-2 p-4">
        <Link to="/">홈</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
        <Link to="/profile">프로필</Link>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
