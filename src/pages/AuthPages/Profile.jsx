import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Profile() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const decodedToken = jwtDecode(token);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-2 items-center mt-2">
      <div>{decodedToken.email}</div>
      {token ? (
        <button
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          onClick={() => {
            handleLogout();
          }}
        >
          로그아웃
        </button>
      ) : (
        <Link to="/login">로그인 페이지로 이동</Link>
      )}
    </div>
  );
}
