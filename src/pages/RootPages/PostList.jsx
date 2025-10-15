// src/pages/Posts.jsx
import { Link, useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const sortBy = searchParams.get("sortBy") ?? "id";
    const order = searchParams.get("order") ?? "asc";

    const fetchPosts = async () => {
      setLoading(true);
      const config = {
        params: {
          skip: 0,
          limit: 10,
          sortBy: sortBy,
          order: order,
        },
      };
      const res = await axios(`https://dummyjson.com/posts`, config);
      setPosts(res.data.posts);
      setLoading(false);
    };

    fetchPosts();
  }, [searchParams]);

  function handleSortChange(sortBy, order) {
    setSearchParams({ sortBy: sortBy, order: order });
  }

  return (
    <div>
      <h1>포스트 목록</h1>
      <Link to="/">홈 페이지로 이동</Link>
      <div>
        <button
          onClick={() => {
            handleSortChange("title", "asc");
          }}
        >
          제목 오름차순
        </button>
        <button
          onClick={() => {
            handleSortChange("title", "desc");
          }}
        >
          제목 내림차순
        </button>
        <button
          onClick={() => {
            handleSortChange("userId", "asc");
          }}
        >
          작성자 오름차순
        </button>
        <button
          onClick={() => {
            handleSortChange("id", "asc");
          }}
        >
          ID 오름차순
        </button>
      </div>
      {loading ? (
        <div>로딩 중...</div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                No.{post.id} - {post.title} - 작성자: {post.userId}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
