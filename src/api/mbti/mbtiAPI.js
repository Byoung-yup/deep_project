import axiosMBTIInstance from "./axiosMBTIInstance";

export const createTestResult = async (result) => {
  await axiosMBTIInstance.post("/mbti", result);
};
