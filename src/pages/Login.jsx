import Button from "../common/Button";
import Input from "../common/Input";
import { signIn } from "../api/auth/authAPI";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthStorage from "../hooks/useAuthStorage";
import useUserStore from "../store/useUserStore";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setItem } = useAuthStorage();
  const login = useUserStore((state) => state.login);

  const handleInputChange = (key, value) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSignIn = async () => {
    const data = await signIn(userInfo);

    const { userId, nickname, accessToken } = data;

    await setItem("accessToken", accessToken);

    if (data.success) {
      login({ userId, nickname });
      alert("로그인을 성공하였습니다.");
      navigate("/");
    } else {
      alert("로그인 오류입니다.");
    }
  };

  return (
    <div className="flex w-full justify-center items-center mt-6">
      <div className="flex flex-col justify-evenly items-center w-1/2 gap-7 py-5 border-[1px] border-red-500">
        <Input
          type="text"
          placeholder="이메일"
          onChange={(value) => handleInputChange("email", value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          onChange={(value) => handleInputChange("password", value)}
        />
        <Button width="50%" height="36px" onClick={handleSignIn}>
          로그인
        </Button>
      </div>
    </div>
  );
};

export default Login;
