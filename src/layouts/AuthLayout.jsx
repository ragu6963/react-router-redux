// src/layouts/AuthLayout.jsx

import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <header>인증 헤더</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
