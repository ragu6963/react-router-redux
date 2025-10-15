import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { login } from "../../store/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { token, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (error) {
      alert(error.message);
    }
    if (token) {
      alert("로그인 성공");
      navigate("/");
    }
  }, [error, token, navigate]);

  return (
    <div>
      {token ? (
        <div>
          로그인 상태
          <Link to="/auth/profile">프로필 페이지로 이동</Link>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col gap-2 items-center"
        >
          <input
            className="border-2 border-gray-300 p-2 rounded-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-2 border-gray-300 p-2 rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
            type="submit"
          >
            로그인
          </button>
        </form>
      )}
    </div>
  );
}
