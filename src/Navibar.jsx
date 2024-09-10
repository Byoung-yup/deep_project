import { Link } from "react-router-dom";
import Button from "./common/Button";
import useUserStore from "./store/useUserStore";
import { useCallback, useEffect } from "react";
import useAuthStorage from "./hooks/useAuthStorage";
import { useNavigate } from "react-router-dom";
import { getUser } from "./api/auth/authAPI";

const Navibar = () => {
  const { isAuthenticated, login, logout } = useUserStore((state) => ({
    isAuthenticated: state.user.isAuthenticated,
    login: state.login,
    logout: state.logout,
  }));

  const navigate = useNavigate();
  const { getItem, removeItem } = useAuthStorage();

  useEffect(() => {
    const executeAuthService = async () => {
      const token = await getItem("accessToken");
      if (token) {
        const { id, nickname } = await getUser(token);
        login(id, nickname);
      }
    };
    executeAuthService();
  }, []);

  const handleSignOut = useCallback(async () => {
    await removeItem("accessToken");
    logout();
    navigate("/");
  }, []);

  const handleNavigation = useCallback(
    (path) => () => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-md flex justify-center">
      <div className="flex h-full w-5/6 justify-between items-center">
        <div className="flex items-center">
          <ul className="flex flex-row gap-10 list-none">
            <li>
              <Link to="/" className="text-black hover:text-red-500">
                홈
              </Link>
            </li>
            <li>
              <Link to="/result" className="text-black hover:text-red-500">
                결과보기
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Button onClick={handleNavigation("/profile")}>프로필</Button>
              <Button onClick={handleSignOut}>로그아웃</Button>
            </>
          ) : (
            <>
              <Button onClick={handleNavigation("/login")}>로그인</Button>
              <Button onClick={handleNavigation("/register")}>회원가입</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navibar;
