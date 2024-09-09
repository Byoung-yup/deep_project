import { Link } from "react-router-dom";
import Button from "./common/Button";

const Navibar = () => {
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
              <Link to="/test" className="text-black hover:text-red-500">
                테스트
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
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navibar;
