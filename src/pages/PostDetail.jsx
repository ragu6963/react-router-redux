// src/pages/PostDetail.jsx
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios(`https://dummyjson.com/posts/${postId}`);
      setPost(res.data);
      setLoading(false);
    };
    fetchPost();
  }, [postId]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <Link to="/posts">게시글 목록 페이지로 이동</Link>
      <h1>게시글 상세 페이지</h1>
      <div>
        <p>게시글 ID: {postId}</p>
        <p>게시글 제목: {post.title}</p>
        <p>게시글 내용: {post.body}</p>
      </div>
    </div>
  );
}
