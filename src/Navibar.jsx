import { Link } from "react-router-dom";
import Button from "./common/Button";
import useUserStore from "./store/useUserStore";
import { useCallback, useEffect } from "react";
import useAuthStorage from "./hooks/useAuthStorage";
import { useNavigate } from "react-router-dom";

const Navibar = () => {
  const isAuthenticated = useUserStore((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const { getItem } = useAuthStorage();

  //   useEffect(() => {
  //     const token = getItem("accessToken");
  //   }, []);

  const navigateToSignup = useCallback(() => {
    navigate("/register");
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
            <Button>로그아웃</Button>
          ) : (
            <>
              <Button>로그인</Button>
              <Button onClick={navigateToSignup}>회원가입</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navibar;
