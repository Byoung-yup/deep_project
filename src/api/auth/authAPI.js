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
