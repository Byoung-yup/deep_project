import { useState } from "react";
import useAuthStorage from "../hooks/useAuthStorage";
import useUserStore from "../store/useUserStore";
import Input from "../common/Input";
import Button from "../common/Button";
import { updateUser } from "../api/auth/authAPI";

const Profile = () => {
  const [newNickname, setNewNickname] = useState("");
  const { getItem } = useAuthStorage();
  const update = useUserStore((state) => state.update);

  const handleInputChange = (value) => {
    setNewNickname(value);
  };

  const handleUpdateUser = async () => {
    const token = await getItem("accessToken");

    const formData = new FormData();
    formData.append("nickname", newNickname);

    const data = await updateUser(formData, token);

    if (data.success) {
      update(newNickname);
      alert("성공적으로 프로필을 변경하였습니다.");
    } else {
      alert("프로필 변경하는데 오류가 발생하였스빈다.");
    }
  };

  return (
    <div className="flex w-full justify-center items-center mt-6">
      <div className="flex flex-col justify-evenly items-center w-1/2 gap-7 py-5 border-[1px] border-red-500">
        <Input
          type="text"
          placeholder="변경할 닉네임"
          onChange={handleInputChange}
        />
        <Button width="50%" height="36px" onClick={handleUpdateUser}>
          프로필 변경하기
        </Button>
      </div>
    </div>
  );
};

export default Profile;
