import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../store/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <Link to="/">홈 페이지로 이동</Link>
      <Link to="/auth/signup">회원가입 페이지로 이동</Link>
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
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">로그인</button>
        </form>
      )}
    </div>
  );
}
