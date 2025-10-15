// src/pages/Recipes.jsx
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // URL에서 검색어 가져오기 (상태 동기화)

  // URL 파라미터 변경 시 검색 실행
  useEffect(() => {
    const searchQuery = searchParams.get("q") ?? "";

    const performSearch = async (query) => {
      if (!query.trim()) {
        setRecipes([]);
        return;
      }

      try {
        const response = await axios.get(
          `https://dummyjson.com/recipes/search?q=${encodeURIComponent(query)}`
        );
        setRecipes(response.data.recipes || []);
      } catch (err) {
        console.error("Search error:", err);
        setRecipes([]);
      }
    };

    performSearch(searchQuery);
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("searchQuery")?.trim() || "";

    if (query) {
      setSearchParams({ q: query });
    }
  };

  return (
    <div>
      <h1>레시피 검색</h1>
      <Link to="/">홈 페이지로 이동</Link>
      <button onClick={() => setSearchParams({})}>초기화</button>

      <form onSubmit={handleSearch}>
        <div>
          <input
            type="text"
            name="searchQuery"
            defaultValue={searchParams.get("q") ?? ""}
            placeholder="레시피를 검색해보세요 (예: pasta, chicken, dessert)"
            required
          />
          <button type="submit">검색</button>
        </div>
      </form>

      <div>
        <h2>검색 결과 ({recipes.length}개)</h2>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
