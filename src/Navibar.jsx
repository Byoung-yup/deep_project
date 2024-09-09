import { Link } from "react-router-dom";
import Button from "./common/Button";
import useUserStore from "./store/useUserStore";
import { useCallback, useEffect } from "react";
import useAuthStorage from "./hooks/useAuthStorage";
import { useNavigate } from "react-router-dom";
import { getUser } from "./api/auth/authAPI";

const Navibar = () => {
  const { isAuthenticated } = useUserStore((state) => state.user);
  const { login, logout } = useUserStore((state) => ({
    login: state.login,
    logout: state.logout,
  }));
  const navigate = useNavigate();
  const { getItem, removeItem } = useAuthStorage();

  const executeAuthService = async () => {
    const token = await getItem("accessToken");

    token &&
      (async () => {
        const { id, nickname } = await getUser(token);
        login({ id, nickname });
      })();
  };

  const handleSignOut = async () => {
    await removeItem("accessToken");
    logout();
  };

  useEffect(() => {
    executeAuthService();
  }, []);

  const navigateToSignup = useCallback(() => {
    navigate("/register");
  }, []);

  const navigateToSignIn = useCallback(() => {
    navigate("/login");
  }, []);

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
            {isAuthenticated && (
              <>
                <li>
                  <Link to="/test" className="text-black hover:text-red-500">
                    테스트
                  </Link>
                </li>
                <li>
                  <Link to="/result" className="text-black hover:text-red-500">
                    결과보기
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <Button onClick={handleSignOut}>로그아웃</Button>
          ) : (
            <>
              <Button onClick={navigateToSignIn}>로그인</Button>
              <Button onClick={navigateToSignup}>회원가입</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navibar;
