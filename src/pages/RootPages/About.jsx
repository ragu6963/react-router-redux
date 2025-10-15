import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>소개 페이지</h1>
      <Link to="/">홈 페이지로 이동</Link>
      <Link to="/auth">인증 페이지로 이동</Link>
    </div>
  );
}
