import Button from "../common/Button";
import Input from "../common/Input";
import { register } from "../api/auth/authAPI";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    nickname: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (key, value) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSignUp = async () => {
    const data = await register(userInfo);

    if (data.success) {
      alert("가입을 축하드립니다.");
      navigate("/login");
    } else {
      alert("회원가입 오류입니다.");
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
        <Input
          type="text"
          placeholder="닉네임"
          onChange={(value) => handleInputChange("nickname", value)}
        />
        <Button width="50%" height="36px" onClick={handleSignUp}>
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default Register;
