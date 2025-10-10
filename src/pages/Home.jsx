import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>홈 페이지</h1>
      <br />
      <Link to="/about">소개 페이지로 이동</Link>
      <br />
      <Link to="/auth">인증 페이지로 이동</Link>
      <br />
      <Link to="/posts">게시글 목록 페이지로 이동</Link>
      <br />
      <Link to="/products">상품 목록 페이지로 이동</Link>
    </div>
  );
}
