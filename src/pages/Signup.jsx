import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { signup } from "../store/authSlice";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password }));
  };

  return (
    <div>
      <h1>회원가입 페이지</h1>
      <Link to="/">홈 페이지로 이동</Link>
      <Link to="/auth">로그인 페이지로 이동</Link>

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
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
