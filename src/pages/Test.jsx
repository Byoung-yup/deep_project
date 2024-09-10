import React from "react";
import TestForm from "../TestForm";
import { calculateMBTI } from "../utils/mbtiCalculater";
import { createTestResult } from "../api/mbti/mbtiAPI";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";

const Test = () => {
  const { userId, nickname } = useUserStore((state) => state.user);
  const navigate = useNavigate();

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      email: userId,
      nickname: nickname,
      result,
      date: new Date().toISOString(),
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/testresult", { state: resultData });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default Test;
