// src/pages/PostList.jsx
import { Link } from "react-router-dom";

export default function PostList() {
  return (
    <div>
      <h1>게시글 목록</h1>
      <Link to="/posts/1">1번 게시글 상세 페이지</Link>
      <br />
      <Link to="/posts/2">2번 게시글 상세 페이지</Link>
      <br />
      <Link to="/posts/3">3번 게시글 상세 페이지</Link>
      <br />
      <Link to="/">홈 페이지로 이동</Link>
    </div>
  );
}
