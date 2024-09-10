import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import useUserStore from "../store/useUserStore";

const Home = () => {
  const isAuthenticated = useUserStore((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  const handleClickTestButton = () => {
    return isAuthenticated
      ? navigate("/test")
      : alert("로그인 후 이용이 가능합니다.");
  };

  return (
    <div className="flex w-full justify-center items-center mt-6">
      <Button height="60px" onClick={handleClickTestButton}>
        테스트 하러가기
      </Button>
    </div>
  );
};

export default Home;
