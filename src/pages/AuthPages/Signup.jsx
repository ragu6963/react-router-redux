import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { signup } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error, isSignedUp } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      alert(error.message);
    }
    if (isSignedUp) {
      alert("회원가입 성공");
      navigate("/");
    }
  }, [error, isSignedUp, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password }));
  };

  return (
    <div>
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
          회원가입
        </button>
      </form>
    </div>
  );
}
