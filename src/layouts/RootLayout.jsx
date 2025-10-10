// src/layouts/RootLayout.jsx

import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>공통 헤더</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
