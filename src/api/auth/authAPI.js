import axiosAuthInstance from "./axiosAuthInstance";

export const getUser = async (token) => {
  try {
    const response = await axiosAuthInstance.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log("getUser Error", error);
  }
};

export const register = async (userInfo) => {
  const { email, password, nickname } = userInfo;
  console.log(userInfo);
  try {
    const response = await axiosAuthInstance.post("/register", {
      id: email,
      password,
      nickname,
    });

    return response.data;
  } catch (error) {
    console.log("register Error", error);
  }
};
