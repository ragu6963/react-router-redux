import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { Link } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {token ? (
        <div>
          <button
            onClick={() => {
              handleLogout();
            }}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <div>
          로그아웃 상태
          <Link to="/auth">로그인 페이지로 이동</Link>
        </div>
      )}
    </div>
  );
}
