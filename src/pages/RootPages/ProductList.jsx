// src/pages/Products.jsx
import { Link, useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const sortBy = searchParams.get("sortBy") ?? "id";
    const order = searchParams.get("order") ?? "asc";

    const fetchProducts = async () => {
      setLoading(true);
      const config = {
        params: {
          skip: 0,
          limit: 10,
          sortBy: sortBy,
          order: order,
        },
      };
      const res = await axios(`https://dummyjson.com/products`, config);
      setProducts(res.data.products);
      setLoading(false);
    };

    fetchProducts();
  }, [searchParams]);

  function handleSortChange(sortBy, order) {
    setSearchParams({ sortBy: sortBy, order: order });
  }

  return (
    <div>
      <h1>상품 목록</h1>
      <Link to="/">홈 페이지로 이동</Link>
      <div>
        <button
          onClick={() => {
            handleSortChange("price", "asc");
          }}
        >
          가격 낮은 순
        </button>
        <button
          onClick={() => {
            handleSortChange("price", "desc");
          }}
        >
          가격 높은 순
        </button>
        <button
          onClick={() => {
            handleSortChange("title", "asc");
          }}
        >
          이름 순
        </button>
        <button
          onClick={() => {
            handleSortChange("id", "asc");
          }}
        >
          ID 순
        </button>
      </div>
      {loading ? (
        <div>로딩 중...</div>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              No.{product.id} - {product.title} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
